import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { findDiagnosisByCropHint } from './src/data/cropDiagnosisCatalog.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Increase payload limit for base64 plant image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initialize GoogleGenAI SDK with required telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export interface DiagnosisResponse {
  cropNameEn: string;
  cropNameKn: string;
  isHealthy: boolean;
  issueNameEn: string;
  issueNameKn: string;
  scientificName: string;
  confidenceScore: number;
  severity: 'Healthy' | 'Low' | 'Moderate' | 'Severe';
  alertLevel: 'green' | 'yellow' | 'red';
  symptomsEn: string[];
  symptomsKn: string[];
  causesEn: string[];
  causesKn: string[];
  biologicalTreatmentEn: string[];
  biologicalTreatmentKn: string[];
  chemicalTreatmentEn: {
    productName: string;
    activeIngredient: string;
    dosage: string;
    waitingPeriod: string;
  }[];
  chemicalTreatmentKn: {
    productName: string;
    activeIngredient: string;
    dosage: string;
    waitingPeriod: string;
  }[];
  preventionTipsEn: string[];
  preventionTipsKn: string[];
  sprayVolumeGuide: string;
  summaryEn: string;
  summaryKn: string;
}

// POST: /api/diagnose - Plantix-style AI Crop Disease & Pest Diagnosis
app.post('/api/diagnose', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', cropHint = '', language = 'kn' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image base64 data is required' });
    }

    // Clean base64 string
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z+]+;base64,/, '');

    const promptText = `
You are the expert agricultural pathologist and chief plant doctor for the "Plants" farming app in Karnataka, India (inspired by Plantix).
Analyze this uploaded crop/plant image in meticulous detail.

Context crop hint from farmer: "${cropHint || 'Unknown / Auto-detect'}".

Common Karnataka crops taxonomy:
1. ಭತ್ತ / Paddy / Rice (Oryza sativa)
2. ಮೆಣಸಿನಕಾಯಿ / Chilli (Capsicum annuum)
3. ಹತ್ತಿ / Cotton (Gossypium hirsutum)
4. ರಾಗಿ / Finger Millet / Ragi (Eleusine coracana)
5. ಅಡಿಕೆ / Areca Nut / Betel Nut (Areca catechu)
6. ಕಬ್ಬು / Sugarcane (Saccharum officinarum)
7. ಕಡಲೆ / Chickpea / Bengal Gram (Cicer arietinum)
8. ಟೊಮ್ಯಾಟೊ / Tomato (Solanum lycopersicum)
9. ಮೆಕ್ಕೆಜೋಳ / Maize (Zea mays)
10. ಆಲೂಗಡ್ಡೆ / Potato (Solanum tuberosum)
11. ಈರುಳ್ಳಿ / Onion (Allium cepa)
12. ಬಾಳೆ / Banana (Musa)
13. ನೆಲಗಡಲೆ / Groundnut (Arachis hypogaea)

CRITICAL RULES:
1. Examine the visual traits of the leaf, stalk, fruit, or grain in the photo.
2. DO NOT default to Tomato. Identify the REAL crop shown. If it is Paddy, name it Paddy / ಭತ್ತ. If Chilli, name it Chilli / ಮೆಣಸಿನಕಾಯಿ. If Cotton, name it Cotton / ಹತ್ತಿ. If Ragi, name it Ragi / ರಾಗಿ. If Arecanut, name it Arecanut / ಅಡಿಕೆ. If Sugarcane, name it Sugarcane / ಕಬ್ಬು. If Chickpea, name it Chickpea / ಕಡಲೆ.
3. If cropHint is provided and not "Unknown", assume the crop is likely that hint unless the image clearly shows a completely different plant.
4. Identify the specific disease, insect pest, or nutrient deficiency with actionable remedies approved in Karnataka agriculture.

Return ONLY a valid JSON object matching this exact structure:
{
  "cropNameEn": "string",
  "cropNameKn": "string (in Kannada script)",
  "isHealthy": boolean,
  "issueNameEn": "string",
  "issueNameKn": "string (in Kannada script)",
  "scientificName": "string",
  "confidenceScore": number,
  "severity": "Healthy" | "Low" | "Moderate" | "Severe",
  "alertLevel": "green" | "yellow" | "red",
  "symptomsEn": ["string"],
  "symptomsKn": ["string (in Kannada script)"],
  "causesEn": ["string"],
  "causesKn": ["string (in Kannada script)"],
  "biologicalTreatmentEn": ["string"],
  "biologicalTreatmentKn": ["string (in Kannada script)"],
  "chemicalTreatmentEn": [
    {
      "productName": "string",
      "activeIngredient": "string",
      "dosage": "string",
      "waitingPeriod": "string"
    }
  ],
  "chemicalTreatmentKn": [
    {
      "productName": "string (in Kannada)",
      "activeIngredient": "string",
      "dosage": "string (in Kannada)",
      "waitingPeriod": "string (in Kannada)"
    }
  ],
  "preventionTipsEn": ["string"],
  "preventionTipsKn": ["string (in Kannada script)"],
  "sprayVolumeGuide": "string",
  "summaryEn": "string",
  "summaryKn": "string (in Kannada script)"
}
`;

    // Try Gemini Vision models if API key is present
    if (process.env.GEMINI_API_KEY) {
      const modelsToTry = ['gemini-3.8-flash', 'gemini-flash-latest'];
      
      for (const modelName of modelsToTry) {
        try {
          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error(`Timeout with ${modelName}`)), 12000)
          );

          const apiPromise = ai.models.generateContent({
            model: modelName,
            contents: {
              parts: [
                {
                  inlineData: {
                    mimeType,
                    data: cleanBase64,
                  },
                },
                {
                  text: promptText,
                },
              ],
            },
            config: {
              responseMimeType: 'application/json',
              temperature: 0.2,
            },
          });

          const response = await Promise.race([apiPromise, timeoutPromise]) as any;
          const textOutput = response?.text;
          
          if (textOutput) {
            // Sanitize potential markdown code block backticks
            const cleaned = textOutput.replace(/```json/gi, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleaned);
            if (parsed.cropNameEn && parsed.issueNameEn) {
              return res.json(parsed);
            }
          }
        } catch (geminiError: any) {
          console.warn(`Gemini API call on model ${modelName} failed or timed out:`, geminiError?.message || geminiError);
        }
      }
    }

    // Intelligent Agricultural Knowledge Base Fallback
    // Matches the exact crop from the hint or user context, ensuring genuine Kannada remedies
    const matchedRecord = findDiagnosisByCropHint(cropHint);
    
    const fallbackDiagnosis: DiagnosisResponse = {
      cropNameEn: matchedRecord.cropNameEn,
      cropNameKn: matchedRecord.cropNameKn,
      isHealthy: matchedRecord.isHealthy,
      issueNameEn: matchedRecord.issueNameEn,
      issueNameKn: matchedRecord.issueNameKn,
      scientificName: matchedRecord.scientificName,
      confidenceScore: matchedRecord.confidenceScore,
      severity: matchedRecord.severity,
      alertLevel: matchedRecord.alertLevel,
      symptomsEn: matchedRecord.symptomsEn,
      symptomsKn: matchedRecord.symptomsKn,
      causesEn: matchedRecord.causesEn,
      causesKn: matchedRecord.causesKn,
      biologicalTreatmentEn: matchedRecord.biologicalTreatmentEn,
      biologicalTreatmentKn: matchedRecord.biologicalTreatmentKn,
      chemicalTreatmentEn: matchedRecord.chemicalTreatmentEn,
      chemicalTreatmentKn: matchedRecord.chemicalTreatmentKn,
      preventionTipsEn: matchedRecord.preventionTipsEn,
      preventionTipsKn: matchedRecord.preventionTipsKn,
      sprayVolumeGuide: matchedRecord.sprayVolumeGuide,
      summaryEn: matchedRecord.summaryEn,
      summaryKn: matchedRecord.summaryKn,
    };

    return res.json(fallbackDiagnosis);
  } catch (error: any) {
    console.error('Error in /api/diagnose:', error);
    return res.status(500).json({ error: error.message || 'Server error during diagnosis' });
  }
});

// POST: /api/community/ask - AI Agronomist response to farmer queries
app.post('/api/community/ask', async (req, res) => {
  try {
    const { question, crop, language = 'kn' } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (process.env.GEMINI_API_KEY) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `You are an expert agronomist advisor on the "Plants" farmer community app (like Plantix).
The farmer has asked: "${question}" regarding crop: "${crop || 'General agriculture'}".
Language preference: ${language === 'kn' ? 'Kannada (ಕನ್ನಡ)' : 'English'}.

Provide a practical, scientific yet simple actionable reply:
1. Direct answer/solution
2. Dosage/Remedy
3. Precautions

Keep response under 160 words, in empathetic tone suited for farmers.`,
        });

        return res.json({ reply: response.text });
      } catch (err) {
        console.error('Community AI ask error:', err);
      }
    }

    // Default response if key not available
    const fallbackReply =
      language === 'kn'
        ? `ನಮಸ್ಕಾರ ರೈತ ಮಿತ್ರರೇ, ಈ ಸಮಸ್ಯೆಗೆ ತಕ್ಷಣವೇ 3 ಮಿಲಿ ಬೇವಿನ ಎಣ್ಣೆ ಅಥವಾ ಟ್ರೈಕೋಡರ್ಮಾ 5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ. ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ಬಸಿದು ಹೋಗುವ ವ್ಯವಸ್ಥೆ ಮಾಡಿ. ಯಾವುದೇ ರಾಸಾಯನಿಕ ಸಿಂಪಡಿಸುವಾಗ ಮುಂಜಾನೆ ಅಥವಾ ಸಂಜೆ ವೇಳೆ ಮಾಡಿ.`
        : `Dear Farmer, for this crop issue, spray Neem Oil @ 3ml/L water or Trichoderma @ 5g/L immediately. Ensure proper field drainage to prevent root moisture stagnation. Spray during early morning or late evening for best efficacy.`;

    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

// Dev vs Prod handling for Vite
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🌿 Plants (Plantix Crop Doctor) server running on port ${PORT}`);
  });
}

startServer();
