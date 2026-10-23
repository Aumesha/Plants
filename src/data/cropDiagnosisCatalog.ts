export interface DiagnosisRecord {
  cropId: string;
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

export const CROP_DIAGNOSIS_CATALOG: Record<string, DiagnosisRecord> = {
  // 1. ಭತ್ತ (Paddy / Rice)
  paddy: {
    cropId: 'paddy',
    cropNameEn: 'Paddy / Rice (Oryza sativa)',
    cropNameKn: '1. ಭತ್ತ (Paddy / Rice)',
    isHealthy: false,
    issueNameEn: 'Rice Blast (Magnaporthe oryzae / Pyricularia)',
    issueNameKn: 'ಭತ್ತದ ಬೆಂಕಿ ರೋಗ (Rice Blast)',
    scientificName: 'Magnaporthe oryzae',
    confidenceScore: 96,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Eye-shaped or spindle-shaped lesions with ashy gray centers and dark brown margins on leaves',
      'Dark brown necrosis at the panicle neck node leading to complete neck breakage (Neck Blast)',
      'Partial or total grain chaffiness, grains turn chalky white and empty',
      'Rapid spread during cool nights (20-22°C) with dew and high relative humidity (>90%)',
    ],
    symptomsKn: [
      'ಎಲೆಗಳ ಮೇಲೆ ಕಣ್ಣಿನಾಕಾರದ (ಹೃದಿಯಾಕಾರದ) ಕಂದು ಬಣ್ಣದ ಚುಕ್ಕೆಗಳು, ಮಧ್ಯದಲ್ಲಿ ಬೂದಿ ಬಣ್ಣದ ಕಲೆ',
      'ತೆನೆಯ ಕುತ್ತಿಗೆಯ ಭಾಗ ಕಪ್ಪಾಗಿ ಕೊಳೆತು ಮುರಿದು ಬೀಳುವುದು (Neck Blast)',
      'ತೆನೆಗಳಲ್ಲಿ ಕಾಳು ಕಟ್ಟದೆ ಜಳ್ಳಾಗುವುದು (ಹಾಲು ತುಂಬುವ ಮೊದಲೇ ಒಣಗುವುದು)',
      'ಮಂಜು ಮುಸುಕಿದ ತಂಪು ವಾತಾವರಣ ಮತ್ತು ಅತಿಯಾದ ತೇವಾಂಶದಲ್ಲಿ ತೀವ್ರವಾಗಿ ಹರಡುತ್ತದೆ',
    ],
    causesEn: [
      'Fungal airborne spores of Magnaporthe oryzae',
      'Excessive chemical nitrogen (Urea) application without sufficient Potash',
      'Dense planting limiting sunlight penetration and continuous standing water stress',
    ],
    causesKn: [
      'ಮಣ್ಣು ಮತ್ತು ಗಾಳಿಯ ಮೂಲಕ ಹರಡುವ ಶಿಲೀಂಧ್ರ (Magnaporthe oryzae)',
      'ಅತಿಯಾದ ಯೂರಿಯಾ (ಸಾರಜನಕ) ಗೊಬ್ಬರದ ಬಳಕೆ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಕೊರತೆ',
      'ಹೊಲದಲ್ಲಿ ಗಾಳಿಯಾಡದಿರುವುದು ಮತ್ತು ನಿರಂತರ ಮೋಡ ಕವಿದ ವಾತಾವರಣ',
    ],
    biologicalTreatmentEn: [
      'Foliar spray of Pseudomonas fluorescens @ 10g per Liter water early morning',
      'Spray Neem seed kernel extract (NSKE 5%) or Neem oil 3 ml/L water',
      'Avoid excess urea application; apply Potassium (MOP) to strengthen plant cell walls',
      'Maintain field drainage to prevent stagnant humid microclimates',
    ],
    biologicalTreatmentKn: [
      'ಸ್ಯೂಡೋಮೊನಾಸ್ ಫ್ಲೋರೊಸೆನ್ಸ್ (Pseudomonas fluorescens) 10 ಗ್ರಾಂ/ಲೀ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಬೇವಿನ ಎಣ್ಣೆ 3 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಸಾರಜನಕ (ಯೂರಿಯಾ) ಗೊಬ್ಬರ ಹಾಕುವುದು ನಿಲ್ಲಿಸಿ, ಪೊಟ್ಯಾಷ್ ಗೊಬ್ಬರ ನೀಡಿ ಗಿಡದ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಿ',
      'ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ಬಸಿದು ಹೋಗುವಂತೆ ಮಾಡಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Tricyclazole 75% WP (Baan / Beam)',
        activeIngredient: 'Tricyclazole 75% WP',
        dosage: '0.6 g per Liter of water (120 g / acre)',
        waitingPeriod: '21 days before harvest',
      },
      {
        productName: 'Contaf 5% EC (Hexaconazole)',
        activeIngredient: 'Hexaconazole 5% EC',
        dosage: '2.0 ml per Liter of water (400 ml / acre)',
        waitingPeriod: '15 days before harvest',
      },
      {
        productName: 'Kasugamycin 3% SL (Kasu-B)',
        activeIngredient: 'Kasugamycin 3% SL',
        dosage: '2.0 - 2.5 ml per Liter of water',
        waitingPeriod: '14 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಬಾನ್ / ಬೀಮ್ 75% WP (Tricyclazole)',
        activeIngredient: 'Tricyclazole 75% WP',
        dosage: '0.6 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (120 ಗ್ರಾಂ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 21 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಕಾಂಟಾಫ್ 5% EC (Hexaconazole)',
        activeIngredient: 'Hexaconazole 5% EC',
        dosage: '2.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (400 ಮಿಲಿ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಕಸು-ಬಿ 3% SL (Kasugamycin)',
        activeIngredient: 'Kasugamycin 3% SL',
        dosage: '2.0 - 2.5 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 14 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Treat seeds with Tricyclazole (2g/kg seed) or Carbendazim prior to nursery sowing',
      'Use certified blast-resistant cultivars (e.g. IR-64, Jaya, BPT-5204 treated)',
      'Follow balanced N:P:K fertilization (100:50:50 kg/ha) with split nitrogen',
    ],
    preventionTipsKn: [
      'ಬಿತ್ತನೆಗೆ ಮುನ್ನ ಬೀಜಕ್ಕೆ ಟ್ರೈಸೈಕ್ಲೋಜೋಲ್ 2 ಗ್ರಾಂ/ಕೆಜಿ ಬೆರೆಸಿ ಬೀಜೋಪಚಾರ ಮಾಡಿ',
      'ರೋಗನಿರೋಧಕ ತಳಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಿ',
      'ಸಾರಜನಕವನ್ನು ಒಮ್ಮೆಲೆ ಹಾಕದೆ 3 ಹಂತಗಳಲ್ಲಿ ವಿಭಜಿಸಿ ಕೊಡಿ',
    ],
    sprayVolumeGuide: '200 Liters of water per acre using knapsack hollow-cone nozzle in cool hours.',
    summaryEn: 'Severe Rice Blast identified. Spray Tricyclazole 75% WP @ 0.6g/L immediately to safeguard tillers and panicle neck.',
    summaryKn: 'ಭತ್ತದ ಬೆಳೆಯಲ್ಲಿ ಬೆಂಕಿ ರೋಗ (Rice Blast) 96% ಖಚಿತವಾಗಿ ಪತ್ತೆಯಾಗಿದೆ. ತಕ್ಷಣವೇ ಬಾನ್ ಅಥವಾ ಬೀಮ್ (Tricyclazole) 0.6 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ.',
  },

  // 2. ಮೆಣಸಿನಕಾಯಿ (Chilli / Pepper)
  chilli: {
    cropId: 'chilli',
    cropNameEn: 'Chilli / Pepper (Capsicum annuum)',
    cropNameKn: '2. ಮೆಣಸಿನಕಾಯಿ (Chilli)',
    isHealthy: false,
    issueNameEn: 'Chilli Leaf Curl & Thrips (Murutu Roga)',
    issueNameKn: 'ಮೆಣಸಿನಕಾಯಿ ಎಲೆ ಮುರುಟು ರೋಗ (Leaf Curl & Thrips)',
    scientificName: 'Scirtothrips dorsalis / Chilli Leaf Curl Virus',
    confidenceScore: 95,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Upward curling of leaf margins resembling inverted boat/cup shape caused by thrips feeding',
      'Downward leaf curling when affected by yellow mites',
      'Thickened, brittle crinkled leaves with shortened internodes (stunted bushy appearance)',
      'Premature blossom drop and deformed, undersized chilli fruits',
    ],
    symptomsKn: [
      'ಥ್ರಿಪ್ಸ್ (ಹೇನು) ಬಾಧೆಯಿಂದ ಎಲೆಗಳ ಅಂಚು ಮೇಲ್ಮುಖವಾಗಿ ದೋಣಿಯ ಆಕಾರದಲ್ಲಿ ಮುದುಡಿಕೊಳ್ಳುವುದು',
      'ನುಸಿ ಬಾಧೆಯಿಂದ ಎಲೆಗಳು ಕೆಳಮುಖವಾಗಿ ಮುದುಡುವುದು',
      'ಎಲೆಗಳು ದಪ್ಪಗಾಗಿ, ಸುಕ್ಕುಗಟ್ಟಿ ಗಿಡದ ಬೆಳವಣಿಗೆ ಕುಂಠಿತವಾಗಿ ಗಿಡ್ಡವಾಗುವುದು',
      'ಹೂವುಗಳು ಉದುರಿ ಕಾಯಿ ಕಟ್ಟುವುದು ಕಡಿಮೆಯಾಗುವುದು',
    ],
    causesEn: [
      'Vector transmission by Thrips (Scirtothrips dorsalis) and Whiteflies (Bemisia tabaci)',
      'Dry, warm weather encouraging rapid sap-sucking pest multiplication',
      'Continuous monoculture of chilli, tomato, or brinjal in adjoining plots',
    ],
    causesKn: [
      'ರಸ ಹೀರುವ ಕೀಟಗಳಾದ ಥ್ರಿಪ್ಸ್ (ನುಸಿ/ಹೇನು) ಮತ್ತು ಬಿಳಿ ನೊಣಗಳಿಂದ ವೈರಸ್ ಹರಡುತ್ತದೆ',
      'ಒಣ ಮತ್ತು ಬಿಸಿ ವಾತಾವರಣ ಕೀಟಗಳ ಸಂತಾನೋತ್ಪತ್ತಿಗೆ ಅನುಕೂಲಕರವಾಗಿದೆ',
      'ಹಿಂದಿನ ಬೆಳೆಯ ಉಳಿಕೆಗಳು ಮತ್ತು ಪಕ್ಕದ ಹೊಲಗಳಲ್ಲಿ ಕೀಟಗಳ ಉಪಸ್ಥಿತಿ',
    ],
    biologicalTreatmentEn: [
      'Spray Neem seed kernel extract (NSKE 5%) or pure Neem oil @ 3-5 ml/L water every 7 days',
      'Install 15-20 blue sticky traps for thrips and yellow traps for whiteflies per acre',
      'Foliar spray of Verticillium lecanii bio-insecticide @ 5g per Liter water in evening',
      'Rogue out and bury severely virus-infected, stunted plants immediately',
    ],
    biologicalTreatmentKn: [
      'ಬೇವಿನ ಎಣ್ಣೆ (Neem Oil) 3-5 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ 7 ದಿನಗಳಿಗೊಮ್ಮೆ ಸಿಂಪಡಿಸಿ',
      'ಪ್ರತಿ ಎಕರೆಗೆ 15-20 ನೀಲಿ (ಥ್ರಿಪ್ಸ್‌ಗಾಗಿ) ಮತ್ತು ಹಳದಿ (ಬಿಳಿ ನೊಣಕ್ಕಾಗಿ) ಅಂಟು ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ',
      'ವರ್ಟಿಸಿಲಿಯಂ ಲೆಕಾನಿ (Verticillium lecanii) ಜೈವಿಕ ಕೀಟನಾಶಕ 5 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ',
      'ತೀವ್ರವಾಗಿ ಮುರುಟಿದ ಗಿಡಗಳನ್ನು ಕಿತ್ತು ನಾಶಮಾಡಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Pegasus 50% WP (Diafenthiuron)',
        activeIngredient: 'Diafenthiuron 50% WP',
        dosage: '1.25 g per Liter of water (250 g / acre)',
        waitingPeriod: '7 days before harvest',
      },
      {
        productName: 'Regent 5% SC (Fipronil)',
        activeIngredient: 'Fipronil 5% SC',
        dosage: '1.5 - 2.0 ml per Liter of water (350 ml / acre)',
        waitingPeriod: '10 days before harvest',
      },
      {
        productName: 'Delegate 11.7% SC (Spinetoram)',
        activeIngredient: 'Spinetoram 11.7% SC',
        dosage: '0.9 ml per Liter of water',
        waitingPeriod: '5 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಪೆಗಾಸಸ್ 50% WP (Diafenthiuron)',
        activeIngredient: 'Diafenthiuron 50% WP',
        dosage: '1.25 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (250 ಗ್ರಾಂ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 7 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ರೀಜೆಂಟ್ 5% SC (Fipronil)',
        activeIngredient: 'Fipronil 5% SC',
        dosage: '1.5 - 2.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 10 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಡೆಲಿಗೇಟ್ 11.7% SC (Spinetoram)',
        activeIngredient: 'Spinetoram 11.7% SC',
        dosage: '0.9 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 5 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Grow barrier crops of maize or sorghum (3 rows) around chilli plot to block insect vectors',
      'Seedling dip in Imidacloprid (0.5 ml/L) for 15 minutes before field transplanting',
      'Avoid excessive chemical nitrogen which produces lush soft foliage attractive to thrips',
    ],
    preventionTipsKn: [
      'ಹೊಲದ ಸುತ್ತಲೂ 3 ಸಾಲು ಜೋಳ ಅಥವಾ ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆದು ಕೀಟಗಳು ಒಳಬಾರದಂತೆ ತಡೆಗೋಡೆ ನಿರ್ಮಿಸಿ',
      'ನಾಟಿಗೆ ಮುನ್ನ ಸಸಿಗಳ ಬೇರನ್ನು ಇಮಿಡಾಕ್ಲೋಪ್ರಿಡ್ ದ್ರಾವಣದಲ್ಲಿ 15 ನಿಮಿಷ ನೆನೆಸಿ',
      'ಸಾರಜನಕ ಗೊಬ್ಬರವನ್ನು ಮಿತವಾಗಿ ಬಳಸಿ',
    ],
    sprayVolumeGuide: '180 Liters of water per acre; ensure complete coverage under the leaf surface.',
    summaryEn: 'Chilli Thrips & Leaf Curl detected. Install blue sticky traps immediately and spray Pegasus (1.25g/L) or Fipronil.',
    summaryKn: 'ಮೆಣಸಿನಕಾಯಿಯಲ್ಲಿ ಎಲೆ ಮುರುಟು ರೋಗ (ಥ್ರಿಪ್ಸ್) 95% ಖಚಿತವಾಗಿ ಪತ್ತೆಯಾಗಿದೆ. ನೀಲಿ ಅಂಟು ಬಲೆ ಹಾಕಿ ಪೆಗಾಸಸ್ ಅಥವಾ ರೀಜೆಂಟ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 3. ಹತ್ತಿ (Cotton)
  cotton: {
    cropId: 'cotton',
    cropNameEn: 'Cotton (Gossypium hirsutum)',
    cropNameKn: '3. ಹತ್ತಿ (Cotton)',
    isHealthy: false,
    issueNameEn: 'Cotton Pink Bollworm & Alternaria Leaf Spot',
    issueNameKn: 'ಹತ್ತಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು & ಎಲೆ ಚುಕ್ಕೆ ರೋಗ',
    scientificName: 'Pectinophora gossypiella / Alternaria macrospora',
    confidenceScore: 94,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Rosetted flowers that fail to open normally ("rosette bloom" symptom)',
      'Tiny entry holes on 15-20 day old developing bolls plugged with larval excreta',
      'Internal staining of cotton lint and seed hollowed out by pink caterpillars',
      'Circular brown leaf spots with concentric target-board margins on foliage',
    ],
    symptomsKn: [
      'ಹೂವುಗಳು ಸರಿಯಾಗಿ ಅರಳದೆ ಮುದುಡಿಕೊಳ್ಳುವುದು (Rosetted blooms)',
      'ಎಳೆಯ ಕಾಯಿಗಳಿಗೆ ಸಣ್ಣ ರಂಧ್ರ ಕೊರೆದು ಒಳಗಿನ ಹತ್ತಿ ಬೀಜವನ್ನು ತಿನ್ನುತ್ತದೆ',
      'ಹತ್ತಿ ಕಾಯಿ ಕೊಳೆತು ಹತ್ತಿಯ ಗುಣಮಟ್ಟ ಹಾಳಾಗುವುದು',
      'ಎಲೆಗಳ ಮೇಲೆ ಕಂದು ಬಣ್ಣದ ವೃತ್ತಾಕಾರದ ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವುದು',
    ],
    causesEn: [
      'Larvae of Pink Bollworm (Pectinophora gossypiella) surviving in leftover cotton stalks',
      'Alternaria fungal spores triggered by late-season rains and warm humid spells',
      'Lack of pheromone monitoring allowing pest population explosion unnoticed',
    ],
    causesKn: [
      'ಹಿಂದಿನ ಬೆಳೆಯ ಕಡ್ಡಿಗಳಲ್ಲಿ ಉಳಿದುಕೊಂಡ ಗುಲಾಬಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳುಗಳು',
      'ಮಳೆ ಮತ್ತು ಬಿಸಿಲಿನ ಆರ್ದ್ರತೆಯಿಂದ ಶಿಲೀಂಧ್ರ ಹರಡುವುದು',
      'ಮೋಹಕ ಬಲೆಗಳಿಲ್ಲದೆ ಹುಳುವಿನ ಸಂಖ್ಯೆ ಹೆಚ್ಚಾಗುವುದು',
    ],
    biologicalTreatmentEn: [
      'Install Pheromone traps @ 8 per acre with gossyplure septa to trap adult moths',
      'Release Trichogramma bactrae egg parasitoid @ 60,000 per acre at 10-day intervals',
      'Spray Neem seed kernel extract (NSKE 5%) or Neem oil 4 ml/L water',
      'Destroy rosetted flowers and dropped infested bolls manually',
    ],
    biologicalTreatmentKn: [
      'ಪ್ರತಿ ಎಕರೆಗೆ 8 ಮೋಹಕ ಬಲೆಗಳನ್ನು (Pheromone Traps) ಅಳವಡಿಸಿ ಗಂಡು ಪತಂಗಗಳನ್ನು ನಾಶಮಾಡಿ',
      'ಟ್ರೈಕೋಗ್ರಾಮಾ ಪರಾವಲಂಬಿ ಕಾರ್ಡ್‌ಗಳನ್ನು (Trichogramma) ಎಕರೆಗೆ ಬಿಡುಗಡೆ ಮಾಡಿ',
      'ಬೇವಿನ ಕಷಾಯ (NSKE 5%) ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆ 4 ಮಿಲಿ/ಲೀ ಸಿಂಪಡಿಸಿ',
      'ಉದುರಿದ ರೋಗಪೀಡಿತ ಕಾಯಿಗಳನ್ನು ಆರಿಸಿ ಸುಟ್ಟುಹಾಕಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Coragen 18.5% SC (Chlorantraniliprole)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ml per Liter of water (60 ml / acre)',
        waitingPeriod: '15 days before harvest',
      },
      {
        productName: 'Proclaim 5% SG (Emamectin Benzoate)',
        activeIngredient: 'Emamectin Benzoate 5% SG',
        dosage: '0.5 g per Liter of water (100 g / acre)',
        waitingPeriod: '10 days before harvest',
      },
      {
        productName: 'Amistar Top (Azoxystrobin + Difenoconazole)',
        activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
        dosage: '1.0 ml per Liter of water (for leaf spot)',
        waitingPeriod: '14 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಕೋರಾಜನ್ 18.5% SC (Coragen)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (60 ಮಿಲಿ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಪ್ರೋಕ್ಲೈಮ್ 5% SG (Emamectin Benzoate)',
        activeIngredient: 'Emamectin Benzoate 5% SG',
        dosage: '0.5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (100 ಗ್ರಾಂ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 10 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ (Amistar Top)',
        activeIngredient: 'Azoxystrobin + Difenoconazole',
        dosage: '1.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (ಎಲೆ ಚುಕ್ಕೆ ರೋಗಕ್ಕೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 14 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Terminate cotton crop by January to break the pink bollworm life cycle',
      'Deep summer ploughing to expose hibernating pupae to heat and predatory birds',
      'Grow non-Bt refuge crops around boundary as per scientific recommendations',
    ],
    preventionTipsKn: [
      'ಜನವರಿ ಅಂತ್ಯದೊಳಗೆ ಹತ್ತಿ ಬೆಳೆ ಮುಗಿಸಿ ಕಡ್ಡಿಗಳನ್ನು ಬೇರು ಸಮೇತ ಕಿತ್ತು ಹಾಕಿ',
      'ಬೇಸಿಗೆಯಲ್ಲಿ ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ ಕೋಶಾವಸ್ಥೆಯಲ್ಲಿರುವ ಹುಳುಗಳನ್ನು ಬಿಸಿಲಿಗೆ ಒಡ್ಡಿ',
      'ಹೊಲದ ಸುತ್ತಲೂ ತಡೆ ಸಾಲುಗಳನ್ನು ಬೆಳೆಯಿರಿ',
    ],
    sprayVolumeGuide: '200 Liters of water per acre; direct spray onto flower buds and square branches.',
    summaryEn: 'Cotton Pink Bollworm & Leaf Spot diagnosed. Set up pheromone traps immediately and spray Coragen @ 0.4ml/L.',
    summaryKn: 'ಹತ್ತಿ ಬೆಳೆಯಲ್ಲಿ ಗುಲಾಬಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು ಬಾಧೆ ದೃಢಪಟ್ಟಿದೆ. ಮೋಹಕ ಬಲೆ ಹಾಕಿ ಕೋರಾಜನ್ ಅಥವಾ ಪ್ರೋಕ್ಲೈಮ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 4. ರಾಗಿ (Finger Millet / Ragi)
  ragi: {
    cropId: 'ragi',
    cropNameEn: 'Finger Millet / Ragi (Eleusine coracana)',
    cropNameKn: '4. ರಾಗಿ (Finger Millet / Ragi)',
    isHealthy: false,
    issueNameEn: 'Ragi Blast (Pyricularia grisea - Leaf & Neck Blast)',
    issueNameKn: 'ರಾಗಿ ಬೆಂಕಿ ರೋಗ / ಕುತ್ತಿಗೆ ಬೆಂಕಿ (Ragi Blast)',
    scientificName: 'Pyricularia grisea',
    confidenceScore: 95,
    severity: 'Moderate',
    alertLevel: 'yellow',
    symptomsEn: [
      'Spindle-shaped brown lesions with grayish centers appearing on leaf blades',
      'Blackish-brown rotting at the base of the earhead fingers (Neck Blast / Finger Blast)',
      'Failure of grain filling resulting in chaffy, lightweight fingers that snap off easily',
      'Most devastating during cloudy, drizzling conditions at head emergence stage',
    ],
    symptomsKn: [
      'ಎಲೆಗಳ ಮೇಲೆ ಕಣ್ಣಿನಾಕಾರದ ಕಂದು ಬಣ್ಣದ ಚುಕ್ಕೆಗಳು, ಒಣಗಿದ ಬೂದಿ ಬಣ್ಣದ ಕಲೆಗಳು',
      'ರಾಗಿ ತೆನೆಯ ಕುತ್ತಿಗೆಯ ಭಾಗ ಕಪ್ಪಾಗಿ ಕೊಳೆತು ಮುರಿದು ಬೀಳುವುದು (ಕುತ್ತಿಗೆ ಬೆಂಕಿ)',
      'ರಾಗಿ ತೆನೆಗಳಲ್ಲಿ ಕಾಳು ಕಟ್ಟದೆ ಜಳ್ಳಾಗುವುದು',
      'ಮೋಡ ಕವಿದ ತುಂತುರು ಮಳೆ ವಾತಾವರಣದಲ್ಲಿ ರೋಗ ಶೀಘ್ರವಾಗಿ ಹರಡುತ್ತದೆ',
    ],
    causesEn: [
      'Seed-borne and airborne fungal spores of Pyricularia grisea',
      'High humidity, continuous drizzle, and night temperatures around 20-24°C',
      'Overcrowded nursery or field stands with excess vegetative canopy',
    ],
    causesKn: [
      'ಬೀಜ ಮತ್ತು ಗಾಳಿಯ ಮೂಲಕ ಹರಡುವ ಶಿಲೀಂಧ್ರ (Pyricularia grisea)',
      'ಅತಿಯಾದ ತೇವಾಂಶ ಮತ್ತು ಮೋಡ ಮುಸುಕಿದ ತಂಪು ವಾತಾವರಣ',
      'ಅತಿಯಾದ ಸಾರಜನಕ ಬಳಕೆ ಮತ್ತು ಗಿಡಗಳ ನಡುವೆ ಅಂತರದ ಕೊರತೆ',
    ],
    biologicalTreatmentEn: [
      'Foliar spray of Trichoderma harzianum @ 5g per Liter of water',
      'Foliar application of Pseudomonas fluorescens @ 10g per Liter water',
      'Spray Neem seed extract (NSKE 5%) at early vegetative spotting',
      'Apply wood ash (boodi) mixed with cow dung slurry at field corners',
    ],
    biologicalTreatmentKn: [
      'ಟ್ರೈಕೋಡರ್ಮಾ ಹಾರ್ಜಿಯಾನಂ 5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಸ್ಯೂಡೋಮೊನಾಸ್ ಫ್ಲೋರೊಸೆನ್ಸ್ 10 ಗ್ರಾಂ/ಲೀ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಬೇವಿನ ಕಷಾಯ (NSKE 5%) ಮೊದಲ ಹಂತದಲ್ಲೇ ಸಿಂಪಡಿಸಿ',
      'ಬೂದಿಯನ್ನು ಬೆಳಗ್ಗೆ ಮಂಜು ಇರುವಾಗ ಎಲೆಗಳ ಮೇಲೆ ಧೂಳೀಕರಿಸಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Saaf 75% WP (Carbendazim 12% + Mancozeb 63%)',
        activeIngredient: 'Carbendazim 12% + Mancozeb 63% WP',
        dosage: '2.0 g per Liter of water (400 g / acre)',
        waitingPeriod: '14 days before harvest',
      },
      {
        productName: 'Kitazin 48% EC (IBP)',
        activeIngredient: 'Kitazin (IBP) 48% EC',
        dosage: '2.0 ml per Liter of water',
        waitingPeriod: '15 days before harvest',
      },
      {
        productName: 'Tricyclazole 75% WP (Baan)',
        activeIngredient: 'Tricyclazole 75% WP',
        dosage: '0.6 g per Liter of water',
        waitingPeriod: '20 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಸಾಫ್ 75% WP (Saaf - Carbendazim + Mancozeb)',
        activeIngredient: 'Carbendazim 12% + Mancozeb 63% WP',
        dosage: '2.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (400 ಗ್ರಾಂ/ಎಕರೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 14 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಕಿಟಾಜಿನ್ 48% EC (Kitazin)',
        activeIngredient: 'Kitazin 48% EC',
        dosage: '2.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಬಾನ್ 75% WP (Tricyclazole)',
        activeIngredient: 'Tricyclazole 75% WP',
        dosage: '0.6 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 20 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Seed treatment with Carbendazim (2g/kg) or Trichoderma (10g/kg) is essential',
      'Grow blast-tolerant ragi varieties such as GPU-28, GPU-48, or ML-365',
      'Transplant seedlings at optimal 25 x 10 cm spacing instead of broadcasting',
    ],
    preventionTipsKn: [
      'ಬಿತ್ತನೆಗೆ ಮುನ್ನ ಬೀಜಕ್ಕೆ ಸಾಫ್ (2 ಗ್ರಾಂ/ಕೆಜಿ) ಅಥವಾ ಟ್ರೈಕೋಡರ್ಮಾ (10 ಗ್ರಾಂ/ಕೆಜಿ) ಬೀಜೋಪಚಾರ ಮಾಡಿ',
      'ರೋಗ ನಿರೋಧಕ ತಳಿಗಳಾದ GPU-28, GPU-48 ಅಥವಾ ML-365 ತಳಿಗಳನ್ನು ಬೆಳೆಯಿರಿ',
      'ಸಾಲಿನಿಂದ ಸಾಲಿಗೆ 25 ಸೆಂ.ಮೀ ಮತ್ತು ಗಿಡದಿಂದ ಗಿಡಕ್ಕೆ 10 ಸೆಂ.ಮೀ ಅಂತರ ಕಾಪಾಡಿ',
    ],
    sprayVolumeGuide: '160 Liters of water per acre; spray immediately prior to earhead emergence.',
    summaryEn: 'Ragi Blast detected at 95% confidence. Spray Saaf WP @ 2g/L or Kitazin to prevent neck breakage and grain loss.',
    summaryKn: 'ರಾಗಿ ಬೆಳೆಯಲ್ಲಿ ಬೆಂಕಿ ರೋಗ (Ragi Blast) 95% ಖಚಿತವಾಗಿ ಪತ್ತೆಯಾಗಿದೆ. ತೆನೆ ಮುರಿಯುವ ಮುನ್ನ ಸಾಫ್ (Saaf) 2 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ.',
  },

  // 5. ಅಡಿಕೆ (Areca Nut)
  arecanut: {
    cropId: 'arecanut',
    cropNameEn: 'Areca Nut / Betel Nut (Areca catechu)',
    cropNameKn: '5. ಅಡಿಕೆ (Areca Nut)',
    isHealthy: false,
    issueNameEn: 'Arecanut Koleroga / Fruit Rot / Mahali (Phytophthora meadii)',
    issueNameKn: 'ಅಡಿಕೆ ಕೊಳೆ ರೋಗ / ಮಹಾಳಿ (Koleroga / Fruit Rot)',
    scientificName: 'Phytophthora meadii',
    confidenceScore: 97,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Water-soaked dark lesions appearing at the calyx / stalk junction of green nuts',
      'Massive premature shedding of developing green nuts from bunches onto the garden floor',
      'White felty fungal mycelium covers the fallen decaying nuts with foul smell',
      'In advanced stages, crown rot and top wilting occurs, leading to palm death',
    ],
    symptomsKn: [
      'ಹಸಿ ಅಡಿಕೆ ಕಾಯಿಗಳ ತೊಟ್ಟಿನ ಹತ್ತಿರ ಕಡು ಹಸಿರು ಅಥವಾ ಕಂದು ನೀರಿನ ಕಲೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವುದು',
      'ಗೊನೆಯಿಂದ ಹಸಿ ಅಡಿಕೆ ಕಾಯಿಗಳು ಭಾರೀ ಪ್ರಮಾಣದಲ್ಲಿ ಕೊಳೆತು ಉದುರುವುದು (ಮಹಾಳಿ ರೋಗ)',
      'ಉದುರಿದ ಕಾಯಿಗಳ ಮೇಲೆ ಬಿಳಿ ಬಣ್ಣದ ಶಿಲೀಂಧ್ರ ಬೆಳೆಯುವುದು ಮತ್ತು ವಾಸನೆ ಬರುವುದು',
      'ತೀವ್ರ ಹಂತದಲ್ಲಿ ಗಿಡದ ಸುಳಿ ಕೊಳೆತು (Crown rot) ಮರವೇ ಸತ್ತುಹೋಗಬಹುದು',
    ],
    causesEn: [
      'Phytophthora meadii water-mold fungus thriving in Southwest Monsoon heavy rainfall',
      'High relative humidity (>95%), mist, and continuous dripping water on bunches',
      'Uncollected rotting nuts on garden floor acting as persistent inoculum reservoirs',
    ],
    causesKn: [
      'ಮುಂಗಾರು ಮಳೆಯ ಅತಿಯಾದ ಆರ್ದ್ರತೆ ಮತ್ತು ಶಿಲೀಂಧ್ರ (Phytophthora meadii)',
      'ಗೊನೆಗಳ ಮೇಲೆ ನಿರಂತರವಾಗಿ ನೀರು ನಿಲ್ಲುವುದು ಮತ್ತು ಗಾಳಿಯಾಡದಿರುವುದು',
      'ತೋಟದಲ್ಲಿ ಬಿದ್ದ ಕೊಳೆತ ಕಾಯಿಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸದೆ ಬಿಡುವುದು',
    ],
    biologicalTreatmentEn: [
      'Cover developing bunches with breathable polythene sleeves (plastic covers) before heavy monsoon',
      'Apply enriched Trichoderma harzianum compost (2 kg per palm) in basin soil',
      'Ensure deep drainage channels (2 feet deep) between palm rows to remove standing water',
      'Collect and burn all fallen rotting nuts from the garden floor regularly',
    ],
    biologicalTreatmentKn: [
      'ಮಳೆಗಾಲ ಆರಂಭವಾಗುವ ಮುನ್ನವೇ ಅಡಿಕೆ ಗೊನೆಗಳಿಗೆ ಪಾಲಿಥೀನ್ ಹೊದಿಕೆ (ಪ್ಲಾಸ್ಟಿಕ್ ಕವರ್) ಕಟ್ಟುವುದು ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ',
      'ಪ್ರತಿ ಮರದ ಬುಡಕ್ಕೆ 2 ಕೆಜಿ ಟ್ರೈಕೋಡರ್ಮಾ ಮಿಶ್ರಿತ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರವನ್ನು ಹಾಕಿ',
      'ತೋಟದಲ್ಲಿ ಮಳೆ ನೀರು ನಿಲ್ಲದಂತೆ ಆಳವಾದ ಬಸಿಗಾಲುವೆಗಳನ್ನು (ಚರಂಡಿ) ನಿರ್ಮಿಸಿ',
      'ಉದುರಿದ ಎಲ್ಲಾ ಕೊಳೆತ ಕಾಯಿಗಳನ್ನು ಆರಿಸಿ ತೋಟದಿಂದ ಹೊರಗೆ ಸುಟ್ಟುಹಾಕಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: '1% Bordeaux Mixture (Freshly prepared)',
        activeIngredient: '1kg Copper Sulphate + 1kg Lime in 100L water',
        dosage: 'Drench all bunches thoroughly before monsoon and repeat mid-monsoon',
        waitingPeriod: '30 days before harvest',
      },
      {
        productName: 'Ridomil Gold (Metalaxyl-M 4% + Mancozeb 64% WP)',
        activeIngredient: 'Metalaxyl-M 4% + Mancozeb 64% WP',
        dosage: '2.5 g per Liter of water',
        waitingPeriod: '21 days before harvest',
      },
      {
        productName: 'Copper Oxychloride 50% WP (Blitox)',
        activeIngredient: 'Copper Oxychloride 50% WP',
        dosage: '3.0 g per Liter of water',
        waitingPeriod: '20 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: '1% ಬೋರ್ಡೋ ದ್ರಾವಣ (Bordeaux Mixture 1%)',
        activeIngredient: '1 ಕೆಜಿ ಮೈಲುತುತ್ತ (Copper Sulphate) + 1 ಕೆಜಿ ಸುಣ್ಣ (Quicklime) 100 ಲೀ ನೀರಿಗೆ',
        dosage: 'ಅಡಿಕೆ ಗೊನೆಗಳು ಪೂರ್ಣ ನೆನೆಯುವಂತೆ ಸಿಂಪಡಿಸಿ (ಮಳೆಗೆ ಮುನ್ನ ಮೊದಲ ಸ್ಪ್ರೇ & ಮಳೆ ಬಿಡುವಿನಲ್ಲಿ 2ನೇ ಸ್ಪ್ರೇ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 30 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ರಿಡೋಮಿಲ್ ಗೋಲ್ಡ್ (Ridomil Gold)',
        activeIngredient: 'Metalaxyl-M 4% + Mancozeb 64% WP',
        dosage: '2.5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 21 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಬ್ಲೈಟಾಕ್ಸ್ 50% WP (Copper Oxychloride)',
        activeIngredient: 'Copper Oxychloride 50% WP',
        dosage: '3.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 20 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Prophylactic 1% Bordeaux mixture spraying must be completed before monsoon breaks (May end)',
      'Tie polythene bags of 150-200 gauge thickness on bunches during July-August',
      'Apply Potassium and Magnesium Sulphate annually to increase nut attachment strength',
    ],
    preventionTipsKn: [
      'ಮೇ ತಿಂಗಳ ಕೊನೆಯಲ್ಲೇ ಮಳೆ ಆರಂಭಕ್ಕೂ ಮುನ್ನ ಮೊದಲ ಬೋರ್ಡೋ ಸಿಂಪಡಣೆ ಕಡ್ಡಾಯವಾಗಿ ಮುಗಿಸಿ',
      'ಅಡಿಕೆ ಗೊನೆಗಳಿಗೆ ಪ್ಲಾಸ್ಟಿಕ್ ಕವರ್ ಕಟ್ಟುವುದು ಮಹಾಳಿ ರೋಗಕ್ಕೆ ರಾಮಬಾಣ',
      'ಪ್ರತಿ ಮರಕ್ಕೆ ಪೊಟ್ಯಾಷ್ ಮತ್ತು ಮೆಗ್ನೀಸಿಯಮ್ ಗೊಬ್ಬರವನ್ನು ತಪ್ಪದೇ ನೀಡಿ',
    ],
    sprayVolumeGuide: 'High-pressure rocker sprayer directed to cover each bunch thoroughly with Bordeaux mist.',
    summaryEn: 'Arecanut Koleroga (Fruit Rot) detected with 97% confidence. Spray freshly prepared 1% Bordeaux Mixture onto bunches immediately.',
    summaryKn: 'ಅಡಿಕೆಯಲ್ಲಿ ಕೊಳೆ ರೋಗ / ಮಹಾಳಿ (Koleroga) 97% ಖಚಿತವಾಗಿ ಪತ್ತೆಯಾಗಿದೆ. ತಕ್ಷಣವೇ ತಾಜಾ 1% ಬೋರ್ಡೋ ದ್ರಾವಣ ಅಥವಾ ರಿಡೋಮಿಲ್ ಗೋಲ್ಡ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 6. ಕಬ್ಬು (Sugarcane)
  sugarcane: {
    cropId: 'sugarcane',
    cropNameEn: 'Sugarcane (Saccharum officinarum)',
    cropNameKn: '6. ಕಬ್ಬು (Sugarcane)',
    isHealthy: false,
    issueNameEn: 'Sugarcane Red Rot & Early Shoot Borer',
    issueNameKn: 'ಕಬ್ಬಿನ ಕೆಂಪು ಕೊಳೆ ರೋಗ & ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು',
    scientificName: 'Colletotrichum falcatum / Chilo infuscatellus',
    confidenceScore: 96,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Third and fourth leaves of the spindle crown show yellowing, withering, and drooping',
      'Internal split cane stalk reveals blood-red discoloration interspersed with white cross-patches',
      'Characteristic sour, fermented alcohol odor emanating when affected cane is split',
      'Formation of dead hearts in young tillers caused by early shoot borer larvae',
    ],
    symptomsKn: [
      'ಕಬ್ಬಿನ ತುದಿಯ 3ನೇ ಮತ್ತು 4ನೇ ಎಲೆಗಳು ಹಳದಿಯಾಗಿ ಬಾಡಿ ಒಣಗಲಾರಂಭಿಸುವುದು',
      'ಕಬ್ಬನ್ನು ಉದ್ದವಾಗಿ ಸೀಳಿದಾಗ ಒಳಭಾಗ ರಕ್ತದಂತೆ ಕೆಂಪಾಗಿ ಬಿಳಿ ಮಚ್ಚೆಗಳು (White patches) ಕಾಣುವುದು',
      'ಕಬ್ಬಿನಿಂದ ಹುಳಿ ಅಥವಾ ಆಲ್ಕೋಹಾಲ್ ವಾಸನೆ ಬರುವುದು',
      'ಎಳೆಯ ಕಬ್ಬಿನಲ್ಲಿ ಸುಳಿ ಸತ್ತು (Dead heart) ಸುಲಭವಾಗಿ ಎಳೆಯಲು ಬರುವುದು (ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು)',
    ],
    causesEn: [
      'Fungal infection by Colletotrichum falcatum spreading via infected seed setts and water',
      'Waterlogged, poorly drained soil combined with high temperature and humidity',
      'Continuous ratoon cropping without sett chemical treatment',
    ],
    causesKn: [
      'ರೋಗಪೀಡಿತ ಕಬ್ಬಿನ ತುಂಡುಗಳು (Setts) ಮತ್ತು ನೀರಿನ ಮೂಲಕ ಶಿಲೀಂಧ್ರ ಹರಡುವುದು',
      'ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲುವುದು ಮತ್ತು ಕಬ್ಬಿನ ಕೂಳೆ ಬೆಳೆಯುವುದು',
      'ಬೀಜೋಪಚಾರ ಮಾಡದೆ ನಾಟಿ ಮಾಡುವುದು',
    ],
    biologicalTreatmentEn: [
      'Treat seed setts with Trichoderma viride @ 10g/L water for 30 minutes before planting',
      'Apply 10 kg/acre Trichoderma compost enriched with FYM at final land preparation',
      'Release Trichogramma chilonis egg parasitoid cards @ 20,000 per acre every 10 days for borer',
      'Uproot and burn diseased clumps immediately; never take ratoon crop from infected fields',
    ],
    biologicalTreatmentKn: [
      'ಕಬ್ಬಿನ ತುಂಡುಗಳನ್ನು (Setts) ನಾಟಿಗೆ ಮುನ್ನ ಟ್ರೈಕೋಡರ್ಮಾ ದ್ರಾವಣದಲ್ಲಿ 30 ನಿಮಿಷ ನೆನೆಸಿ',
      'ಪ್ರತಿ ಎಕರೆಗೆ 10 ಕೆಜಿ ಟ್ರೈಕೋಡರ್ಮಾ ಮಿಶ್ರಿತ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರವನ್ನು ಮಣ್ಣಿಗೆ ಹಾಕಿ',
      'ಕಾಂಡ ಕೊರೆಯುವ ಹುಳುವಿಗೆ ಟ್ರೈಕೋಗ್ರಾಮಾ ಪರಾವಲಂಬಿ ಮೊಟ್ಟೆ ಕಾರ್ಡ್‌ಗಳನ್ನು (20,000/ಎಕರೆ) ಅಳವಡಿಸಿ',
      'ರೋಗಪೀಡಿತ ಕಬ್ಬನ್ನು ಬೇರು ಸಮೇತ ಕಿತ್ತು ಸುಟ್ಟುಹಾಕಿ, ಆ ಜಮೀನಿನಲ್ಲಿ ಕೂಳೆ ಬೆಳೆ ಇಡಬೇಡಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Bavistin 50% WP (Carbendazim) Sett Dip',
        activeIngredient: 'Carbendazim 50% WP',
        dosage: '1.0 g per Liter of water (dip setts for 15 minutes before furrow placement)',
        waitingPeriod: 'Pre-planting treatment',
      },
      {
        productName: 'Coragen 18.5% SC (Chlorantraniliprole)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ml per Liter of water / soil drenching (150 ml / acre for shoot borer)',
        waitingPeriod: '20 days before harvest',
      },
      {
        productName: 'Fipronil 0.3% GR (Regent Ultra)',
        activeIngredient: 'Fipronil 0.3% Granules',
        dosage: '10 kg per acre applied in furrows at planting',
        waitingPeriod: 'At planting',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಬಾವಿಸ್ಟಿನ್ 50% WP (Carbendazim - ಬೀಜೋಪಚಾರ)',
        activeIngredient: 'Carbendazim 50% WP',
        dosage: '1.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಕಬ್ಬಿನ ತುಂಡುಗಳನ್ನು 15 ನಿಮಿಷ ನೆನೆಸಿ ನಾಟಿ ಮಾಡಿ',
        waitingPeriod: 'ಬಿತ್ತನೆ ಉಪಚಾರ',
      },
      {
        productName: 'ಕೋರಾಜನ್ 18.5% SC (Coragen)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು ನಿಯಂತ್ರಣಕ್ಕೆ ಸಾಲಿನಲ್ಲಿ ಸುರಿಯಿರಿ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 20 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ರೀಜೆಂಟ್ ಅಲ್ಟ್ರಾ 0.3% GR (Fipronil)',
        activeIngredient: 'Fipronil 0.3% GR',
        dosage: '10 ಕೆಜಿ ಪ್ರತಿ ಎಕರೆಗೆ ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಮುಚ್ಚಿ',
        waitingPeriod: 'ನಾಟಿ ವೇಳೆ',
      },
    ],
    preventionTipsEn: [
      'Use certified red-rot resistant varieties such as Co 86032, Co 0212, or CoM 0265',
      'Follow 2-year crop rotation with green manure or paddy before replanting sugarcane',
      'Ensure earthing-up at 45 and 90 days after planting to prevent root exposure and lodging',
    ],
    preventionTipsKn: [
      'ಕೆಂಪು ಕೊಳೆ ರೋಗ ನಿರೋಧಕ ತಳಿಗಳಾದ Co-86032, Co-0212 ಗಳನ್ನು ಮಾತ್ರ ನಾಟಿ ಮಾಡಿ',
      'ಕಬ್ಬಿನ ನಂತರ ಸೆಣಬು, ಡಯಾಂಚಾ ಅಥವಾ ಭತ್ತ ಬೆಳೆದು ಬೆಳೆ ಪರಿವರ್ತನೆ ಮಾಡಿ',
      'ನಾಟಿ ಮಾಡಿದ 45 ಮತ್ತು 90 ದಿನಗಳಿಗೆ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ',
    ],
    sprayVolumeGuide: '250 Liters of water per acre; direct drenching along the base cane furrows.',
    summaryEn: 'Sugarcane Red Rot and Shoot Borer diagnosed. Uproot infected clumps, drench furrows with Carbendazim & Coragen.',
    summaryKn: 'ಕಬ್ಬಿನಲ್ಲಿ ಕೆಂಪು ಕೊಳೆ ರೋಗ (Red Rot) ಮತ್ತು ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು ಪತ್ತೆಯಾಗಿದೆ. ಬಾವಿಸ್ಟಿನ್ ಮತ್ತು ಕೋರಾಜನ್ ಬಳಸಿ.',
  },

  // 7. ಕಡಲೆ (Chickpea / Bengal Gram)
  chickpea: {
    cropId: 'chickpea',
    cropNameEn: 'Chickpea / Bengal Gram (Cicer arietinum)',
    cropNameKn: '7. ಕಡಲೆ (Chickpea / Bengal Gram)',
    isHealthy: false,
    issueNameEn: 'Chickpea Fusarium Wilt & Gram Pod Borer',
    issueNameKn: 'ಕಡಲೆ ಸೊರಗು ರೋಗ & ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು',
    scientificName: 'Fusarium oxysporum f. sp. ciceris / Helicoverpa armigera',
    confidenceScore: 96,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Sudden drooping, dull discoloration, and drying of foliage starting in circular patches across the plot',
      'Dark brown internal vascular xylem discoloration when lower stem and taproot are split',
      'Caterpillars chewing circular holes into developing pods and consuming green gram seeds',
      'Defoliation and severed flower buds during flowering and early podding stages',
    ],
    symptomsKn: [
      'ಹೊಲದಲ್ಲಿ ಸಾಲು ಸಾಲಾಗಿ ಕಡಲೆ ಗಿಡಗಳು ಒಮ್ಮೆಲೇ ಸೊರಗಿ ಒಣಗಿ ಹೋಗುವುದು (ಸೊರಗು ರೋಗ)',
      'ಗಿಡದ ಬುಡ ಅಥವಾ ಬೇರನ್ನು ಸೀಳಿದಾಗ ಒಳಗೆ ಕಂದು ಬಣ್ಣದ ಗೆರೆಗಳು (Vascular browning) ಕಾಣುವುದು',
      'ಕಾಯಿ ಕೊರೆಯುವ ಹಸಿರು ಹುಳುಗಳು ಕಾಯಿಗೆ ದುಂಡಗಿನ ರಂಧ್ರ ಕೊರೆದು ಒಳಗಿನ ಕಾಳು ತಿನ್ನುವುದು',
      'ಹೂವು ಮತ್ತು ಮೊಗ್ಗುಗಳನ್ನು ಕತ್ತರಿಸಿ ಹಾಳುಮಾಡುವುದು',
    ],
    causesEn: [
      'Soil-borne Fusarium oxysporum chlamydospores persisting in dry soil for up to 6 years',
      'Helicoverpa armigera moth migration following winter rains during podding',
      'Sowing in fields with previous wilt history without seed inoculation',
    ],
    causesKn: [
      'ಮಣ್ಣಿನಲ್ಲಿ ವಾಸಿಸುವ ಸೊರಗು ರೋಗದ ಶಿಲೀಂಧ್ರ (Fusarium oxysporum)',
      'ಕಡಲೆ ಕಾಯಿ ಕಟ್ಟುವ ಸಮಯದಲ್ಲಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳುವಿನ ಪತಂಗಗಳ ದಾಳಿ',
      'ಬೀಜೋಪಚಾರ ಮಾಡದೆ ಬಿತ್ತನೆ ಮಾಡುವುದು ಮತ್ತು ಸತತವಾಗಿ ಕಡಲೆ ಬೆಳೆಯುವುದು',
    ],
    biologicalTreatmentEn: [
      'Seed treatment with Trichoderma harzianum @ 10g/kg seed before sowing is mandatory',
      'Install 5-8 Helicoverpa pheromone traps per acre for early moth monitoring and mass trapping',
      'Foliar spray of HaNPV (Nuclear Polyhedrosis Virus) @ 250 LE/acre or NSKE 5% at early larval instar',
      'Erect bird perches (T-shaped bamboo sticks @ 20/acre) to encourage predatory insect-eating birds',
    ],
    biologicalTreatmentKn: [
      'ಬಿತ್ತನೆಗೆ ಮುನ್ನ ಬೀಜಕ್ಕೆ ಟ್ರೈಕೋಡರ್ಮಾ ಹಾರ್ಜಿಯಾನಂ (10 ಗ್ರಾಂ/ಕೆಜಿ) ಬೀಜೋಪಚಾರ ಮಾಡುವುದು ಕಡ್ಡಾಯ',
      'ಪ್ರತಿ ಎಕರೆಗೆ 5-8 ಹೆಲಿಕೋವರ್ಪಾ ಮೋಹಕ ಬಲೆಗಳನ್ನು (Pheromone Traps) ಅಳವಡಿಸಿ',
      'ಹೊಲದಲ್ಲಿ ಎಕರೆಗೆ 20 ಇಂಗ್ಲಿಷ್ ‘T’ ಆಕಾರದ ಪಕ್ಷಿ ಆಸನಗಳನ್ನು ನಿಲ್ಲಿಸಿ ಪಕ್ಷಿಗಳು ಹುಳು ತಿನ್ನುವಂತೆ ಮಾಡಿ',
      'ಬೇವಿನ ಬೀಜದ ಕಷಾಯ (NSKE 5%) ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆ 3 ಮಿಲಿ/ಲೀ ಸಿಂಪಡಿಸಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Coragen 18.5% SC (Chlorantraniliprole)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ml per Liter of water (60 ml / acre for pod borer)',
        waitingPeriod: '15 days before harvest',
      },
      {
        productName: 'Saaf WP (Carbendazim 12% + Mancozeb 63%) Soil Drench',
        activeIngredient: 'Carbendazim + Mancozeb',
        dosage: '2.0 g per Liter of water drenching at plant base',
        waitingPeriod: '7 days before harvest',
      },
      {
        productName: 'Proclaim 5% SG (Emamectin Benzoate)',
        activeIngredient: 'Emamectin Benzoate 5% SG',
        dosage: '0.5 g per Liter of water (100 g / acre)',
        waitingPeriod: '10 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಕೋರಾಜನ್ 18.5% SC (Coragen)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು ನಿಯಂತ್ರಣಕ್ಕೆ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಸಾಫ್ 75% WP (Saaf - ಬುಡಕ್ಕೆ ಸುರಿಯಿರಿ)',
        activeIngredient: 'Carbendazim + Mancozeb',
        dosage: '2.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸೊರಗಿದ ಗಿಡದ ಬುಡಕ್ಕೆ ಸುರಿಯಿರಿ (Drenching)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 7 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಪ್ರೋಕ್ಲೈಮ್ 5% SG (Emamectin Benzoate)',
        activeIngredient: 'Emamectin Benzoate 5% SG',
        dosage: '0.5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 10 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Grow wilt-resistant chickpea varieties like JG-11, JAKI-9218, or BGD-103',
      'Deep summer ploughing to expose dormant fungal spores to intense solar heat',
      'Follow 3-year crop rotation with non-host cereals like sorghum or pearl millet',
    ],
    preventionTipsKn: [
      'ಸೊರಗು ರೋಗ ನಿರೋಧಕ ತಳಿಗಳಾದ JG-11, JAKI-9218 ಅಥವಾ ಅನ್ನಿಗೇರಿ-1 ತಳಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
      'ಬೇಸಿಗೆಯಲ್ಲಿ ಆಳವಾದ ಉಳುಮೆ ಮಾಡಿ ಮಣ್ಣನ್ನು ಬಿಸಿಲಿಗೆ ಒಡ್ಡಬೇಕು',
      'ಕಡಲೆ ನಂತರ ಜೋಳ ಅಥವಾ ಸಜ್ಜೆ ಬೆಳೆದು ಬೆಳೆ ಪರಿವರ್ತನೆ ಮಾಡಿ',
    ],
    sprayVolumeGuide: '180 Liters of water per acre; spray during morning or late afternoon when larvae feed.',
    summaryEn: 'Chickpea Wilt and Pod Borer risk identified. Drench base with Saaf/Trichoderma and spray Coragen for pod borer protection.',
    summaryKn: 'ಕಡಲೆಯಲ್ಲಿ ಸೊರಗು ರೋಗ ಮತ್ತು ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು ಬಾಧೆ ಪತ್ತೆಯಾಗಿದೆ. ಬುಡಕ್ಕೆ ಸಾಫ್ ದ್ರಾವಣ ಹಾಕಿ, ಕಾಯಿಗೆ ಕೋರಾಜನ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 8. ಟೊಮ್ಯಾಟೊ (Tomato)
  tomato: {
    cropId: 'tomato',
    cropNameEn: 'Tomato (Solanum lycopersicum)',
    cropNameKn: 'ಟೊಮ್ಯಾಟೊ (Tomato)',
    isHealthy: false,
    issueNameEn: 'Early Blight (Alternaria solani)',
    issueNameKn: 'ಆರಂಭಿಕ ಅಂಗಮಾರಿ ರೋಗ (Early Blight)',
    scientificName: 'Alternaria solani',
    confidenceScore: 94,
    severity: 'Moderate',
    alertLevel: 'yellow',
    symptomsEn: [
      'Concentric brown to black circular spots ("target board" pattern) on older leaves',
      'Yellow chlorotic halos surrounding necrotic leaf lesions',
      'Premature defoliation starting from bottom leaves upward',
      'Stem lesions and dark sunken spots at calyx end of fruit',
    ],
    symptomsKn: [
      'ಹಳೆಯ ಎಲೆಗಳ ಮೇಲೆ ವೃತ್ತಾಕಾರದ ಕಂದು ಬಣ್ಣದ ಚುಕ್ಕೆಗಳು (ಗುರಿ ಹಲಗೆಯಂತಹ ಚಿಹ್ನೆ)',
      'ಚುಕ್ಕೆಗಳ ಸುತ್ತಲೂ ಹಳದಿ ಬಣ್ಣದ ವಲಯ',
      'ಗಿಡದ ಕೆಳಗಿನ ಎಲೆಗಳು ಉದುರುವುದು',
      'ಕಾಂಡ ಮತ್ತು ಹಣ್ಣುಗಳ ತೊಟ್ಟಿನ ಮೇಲೆ ಕಪ್ಪು ಗುಂಡಿಗಳು',
    ],
    causesEn: [
      'Fungal pathogen Alternaria solani surviving in soil debris',
      'Warm temperatures (24-29°C) combined with high humidity and rain splashes',
      'Dense planting limiting air circulation',
    ],
    causesKn: [
      'ಮಣ್ಣಿನಲ್ಲಿ ಉಳಿದಿರುವ ಶಿಲೀಂಧ್ರ (Alternaria solani)',
      'ಹೆಚ್ಚು ತೇವಾಂಶ ಮತ್ತು ಬಿಸಿಲಿನ ವಾತಾವರಣ',
      'ಗಿಡಗಳ ನಡುವೆ ಅಂತರದ ಕೊರತೆ ಮತ್ತು ಗಾಳಿಯಾಡದಿರುವುದು',
    ],
    biologicalTreatmentEn: [
      'Spray Neem seed kernel extract (NSKE 5%) or Neem oil (3 ml/Liter water) early morning',
      'Foliar spray of Trichoderma harzianum @ 5g/Liter water',
      'Prune and destroy infected lower leaves immediately to stop spore transmission',
      'Apply mulching with organic straw to prevent soil-splash onto lower canopy',
    ],
    biologicalTreatmentKn: [
      'ಬೇವಿನ ಎಣ್ಣೆ (Neem Oil) 3 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಟ್ರೈಕೋಡರ್ಮಾ ಹಾರ್ಜಿಯಾನಂ (Trichoderma) 5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಸಿಂಪಡಿಸಿ',
      'ರೋಗಪೀಡಿತ ಕೆಳಗಿನ ಎಲೆಗಳನ್ನು ಕಿತ್ತು ನಾಶಮಾಡಿ',
      'ಮಣ್ಣಿನಿಂದ ಶಿಲೀಂಧ್ರ ಹರಡದಂತೆ ಮಲ್ಚಿಂಗ್ (ಹೊದಿಕೆ) ಮಾಡಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Mancozeb 75% WP (Dithane M-45)',
        activeIngredient: 'Mancozeb',
        dosage: '2.0 - 2.5 g per Liter of water',
        waitingPeriod: '7 days before harvest',
      },
      {
        productName: 'Amistar Top (Azoxystrobin + Difenoconazole)',
        activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
        dosage: '1.0 ml per Liter of water',
        waitingPeriod: '3 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಮ್ಯಾಂಕೋಜೆಬ್ 75% WP (Dithane M-45)',
        activeIngredient: 'Mancozeb',
        dosage: '2.0 - 2.5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 7 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ (Amistar Top)',
        activeIngredient: 'Azoxystrobin + Difenoconazole',
        dosage: '1.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 3 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Follow crop rotation of at least 3 years away from solanaceous crops',
      'Ensure proper plant spacing (60 x 45 cm) for adequate air circulation',
      'Switch to drip irrigation to keep leaf canopy dry',
    ],
    preventionTipsKn: [
      'ಟೊಮ್ಯಾಟೊ ನಂತರ ಆಲೂಗಡ್ಡೆ ಅಥವಾ ಬದನೆ ಬೆಳೆಯದೆ ಬೆಳೆ ಪರಿವರ್ತನೆ ಮಾಡಿ',
      'ಗಿಡಗಳ ನಡುವೆ ಸರಿಯಾದ ಅಂತರ (60x45 ಸೆಂ.ಮೀ) ಕಾಪಾಡಿಕೊಳ್ಳಿ',
      'ಹನಿ ನೀರಾವರಿ ಪದ್ಧತಿ ಬಳಸಿ ಎಲೆಗಳು ಒದ್ದೆಯಾಗುವುದನ್ನು ತಪ್ಪಿಸಿ',
    ],
    sprayVolumeGuide: '160 Liters of water per acre; direct spray to lower canopy leaves.',
    summaryEn: 'Early Blight detected. Start with biological sprays or Mancozeb fungicide and remove infected lower leaves immediately.',
    summaryKn: 'ಟೊಮ್ಯಾಟೊ ಬೆಳೆಯಲ್ಲಿ ಆರಂಭಿಕ ಅಂಗಮಾರಿ ರೋಗ 94% ನಿಖರತೆಯೊಂದಿಗೆ ದೃಢಪಟ್ಟಿದೆ. ಕೆಳಗಿನ ರೋಗಪೀಡಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದು ಮ್ಯಾಂಕೋಜೆಬ್ ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ.',
  },

  // 9. ಮೆಕ್ಕೆಜೋಳ (Maize)
  maize: {
    cropId: 'maize',
    cropNameEn: 'Corn / Maize (Zea mays)',
    cropNameKn: 'ಮೆಕ್ಕೆಜೋಳ (Maize)',
    isHealthy: false,
    issueNameEn: 'Fall Armyworm & Maydis Leaf Blight',
    issueNameKn: 'ಮೆಕ್ಕೆಜೋಳದ ಲದ್ದಿ ಹುಳು (Fall Armyworm) & ಎಲೆ ಅಂಗಮಾರಿ',
    scientificName: 'Spodoptera frugiperda',
    confidenceScore: 95,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Pinholes and ragged windows chewed into leaves inside whorls',
      'Massive accumulation of sawdust-like fecal frass in the central funnel whorl',
      'Inverted "Y" shape marking visible on caterpillar head',
      'Elongated diamond-shaped necrotic lesions on leaves',
    ],
    symptomsKn: [
      'ಸುಳಿ ಎಲೆಗಳಲ್ಲಿ ಕಿರು ರಂಧ್ರಗಳು ಮತ್ತು ಜರಡಿಯಂತಹ ರಂಧ್ರಗಳು ಕಾಣುವುದು',
      'ಸುಳಿಯ ಒಳಗೆ ಮರದ ಪುಡಿಯಂತಹ ಕೀಟದ ಹಿಕ್ಕೆ (ಲದ್ದಿ) ತುಂಬಿರುವುದು',
      'ಹುಳುವಿನ ತಲೆಯ ಮೇಲೆ ತಿರುಗುಮುರುಗು "Y" ಆಕಾರದ ಬಿಳಿ ಗುರುತು',
      'ಎಲೆಗಳ ಮೇಲೆ ಉದ್ದನೆಯ ಕಂದು ಬಣ್ಣದ ಒಣಗಿದ ಪಟ್ಟೆಗಳು',
    ],
    causesEn: [
      'Voracious nocturnal larvae of Spodoptera frugiperda',
      'Late-sown crops exposed to overlapping pest generations',
    ],
    causesKn: [
      'ವಲಸೆ ಬರುವ ಲದ್ದಿ ಹುಳು (Fall Armyworm) ಸುಳಿಯಲ್ಲಿ ಕುಳಿತು ತೀವ್ರವಾಗಿ ತಿನ್ನುತ್ತದೆ',
      'ತಡವಾಗಿ ಬಿತ್ತನೆ ಮಾಡುವುದು ಮತ್ತು ಸತತವಾಗಿ ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆಯುವುದು',
    ],
    biologicalTreatmentEn: [
      'Apply fine sand mixed with wood ash (9:1 ratio) directly into central whorls to suffocate larvae',
      'Spray Bacillus thuringiensis (Bt) @ 2g/L or Beauveria bassiana @ 5g/L',
      'Install 5 pheromone traps per acre',
    ],
    biologicalTreatmentKn: [
      'ಸುಳಿಯೊಳಗೆ ಮರಳು ಮತ್ತು ಬೂದಿಯ ಮಿಶ್ರಣವನ್ನು (9:1) ಕೈಯಾರೆ ಹಾಕಿ ಹುಳುವನ್ನು ಕೊಲ್ಲುವುದು',
      'ಬ್ಯೂವೇರಿಯಾ ಬ್ಯಾಸಿಯಾನಾ (Beauveria bassiana) 5 ಗ್ರಾಂ/ಲೀ ಸುಳಿಗೆ ಬೀಳುವಂತೆ ಸಿಂಪಡಿಸಿ',
      'ಮೋಹಕ ಬಲೆಗಳನ್ನು (5/ಎಕರೆ) ಅಳವಡಿಸಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Coragen 18.5% SC (Chlorantraniliprole)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ml per Liter of water directed into whorl',
        waitingPeriod: '21 days before harvest',
      },
      {
        productName: 'Delegate 11.7% SC (Spinetoram)',
        activeIngredient: 'Spinetoram 11.7% SC',
        dosage: '0.5 ml per Liter of water',
        waitingPeriod: '15 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಕೋರಾಜನ್ 18.5% SC (Coragen)',
        activeIngredient: 'Chlorantraniliprole 18.5% SC',
        dosage: '0.4 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ (ನೇರವಾಗಿ ಸುಳಿಗೆ ಬೀಳುವಂತೆ ಸಿಂಪಡಿಸಿ)',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 21 ದಿನಗಳ ಮೊದಲು',
      },
      {
        productName: 'ಡೆಲಿಗೇಟ್ 11.7% SC (Spinetoram)',
        activeIngredient: 'Spinetoram 11.7% SC',
        dosage: '0.5 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: [
      'Simultaneous community sowing across the village within 15 days',
      'Seed treatment with Fortenza Duo (Cyantraniliprole + Thiamethoxam)',
    ],
    preventionTipsKn: [
      'ಊರಿನ ಎಲ್ಲಾ ರೈತರು 15 ದಿನಗಳ ಅಂತರದಲ್ಲಿ ಒಟ್ಟಿಗೆ ಬಿತ್ತನೆ ಮುಗಿಸುವುದು',
      'ಬಿತ್ತನೆಗೆ ಮುನ್ನ ಬೀಜೋಪಚಾರ ಮಾಡುವುದು',
    ],
    sprayVolumeGuide: '200 Liters of water per acre; direct nozzle into central plant whorl.',
    summaryEn: 'Fall Armyworm identified. Apply sand-ash mix or spray Coragen directed into whorls.',
    summaryKn: 'ಮೆಕ್ಕೆಜೋಳದಲ್ಲಿ ಲದ್ದಿ ಹುಳು (Fall Armyworm) 95% ಖಚಿತವಾಗಿದೆ. ಸುಳಿಗೆ ಮರಳು-ಬೂದಿ ಹಾಕಿ ಅಥವಾ ಕೋರಾಜನ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 10. ಈರುಳ್ಳಿ (Onion)
  onion: {
    cropId: 'onion',
    cropNameEn: 'Onion (Allium cepa)',
    cropNameKn: 'ಈರುಳ್ಳಿ (Onion)',
    isHealthy: false,
    issueNameEn: 'Purple Blotch & Thrips',
    issueNameKn: 'ಈರುಳ್ಳಿ ನೇರಳೆ ಮಚ್ಚೆ ರೋಗ & ನುಸಿ ರೋಗ',
    scientificName: 'Alternaria porri / Thrips tabaci',
    confidenceScore: 95,
    severity: 'Moderate',
    alertLevel: 'yellow',
    symptomsEn: [
      'Small sunken whitish spots on leaves that turn purplish with a yellow border',
      'Leaves turn yellow from tips downward and topple over prematurely',
      'Silvering streaks on leaf sheaths caused by onion thrips feeding',
    ],
    symptomsKn: [
      'ಎಲೆಗಳ ಮೇಲೆ ಸಣ್ಣ ನೀರಿನ ಚುಕ್ಕೆಗಳು ಬಿದ್ದು ನಂತರ ನೇರಳೆ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವುದು (ನೇರಳೆ ಮಚ್ಚೆ)',
      'ಎಲೆಯ ತುದಿಯಿಂದ ಹಳದಿಯಾಗಿ ಒಣಗಲಾರಂಭಿಸುವುದು',
      'ಹೇನುಗಳಿಂದ ಎಲೆಗಳ ಮೇಲೆ ಬೆಳ್ಳಿಯಂತಹ ಗೆರೆಗಳು ಕಾಣುವುದು',
    ],
    causesEn: [
      'Fungus Alternaria porri favored by warm, humid rainy spells (80-90% RH)',
    ],
    causesKn: [
      'ಹೆಚ್ಚು ಆರ್ದ್ರತೆ ಮತ್ತು ಮಳೆಯ ನಂತರ ಬರುವ ಶಿಲೀಂಧ್ರ',
    ],
    biologicalTreatmentEn: [
      'Spray Pseudomonas fluorescens @ 10g/L + Neem oil 3ml/L',
      'Install yellow and blue sticky traps',
    ],
    biologicalTreatmentKn: [
      'ಸ್ಯೂಡೋಮೊನಾಸ್ 10 ಗ್ರಾಂ/ಲೀ ಜೊತೆಗೆ ಬೇವಿನ ಎಣ್ಣೆ 3 ಮಿಲಿ/ಲೀ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
      'ಹಳದಿ ಮತ್ತು ನೀಲಿ ಅಂಟು ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ',
    ],
    chemicalTreatmentEn: [
      {
        productName: 'Mancozeb 75% WP + Difenoconazole',
        activeIngredient: 'Mancozeb 2g/L + Score 1ml/L',
        dosage: 'Mancozeb 2.5g + Score 1ml with sticker/spreader',
        waitingPeriod: '10 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಮ್ಯಾಂಕೋಜೆಬ್ + ಸ್ಕೋರ್ (Score 25% EC)',
        activeIngredient: 'Difenoconazole + Mancozeb',
        dosage: 'ಮ್ಯಾಂಕೋಜೆಬ್ 2.5 ಗ್ರಾಂ + ಸ್ಕೋರ್ 1 ಮಿಲಿ ಜೊತೆಗೆ ಗಮ್ (ಅಂಟು) ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 10 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: ['Always use sticker/spreader (Sandovit) due to waxy onion foliage', 'Good field drainage'],
    preventionTipsKn: ['ಈರುಳ್ಳಿ ಎಲೆಗಳು ಜಾರುವುದರಿಂದ ಕಡ್ಡಾಯವಾಗಿ ಗಮ್ (ಅಂಟು/ಸ್ಪ್ರೆಡರ್) ಬೆರೆಸಬೇಕು', 'ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ'],
    sprayVolumeGuide: '150 Liters of water per acre with agricultural wetting agent.',
    summaryEn: 'Onion Purple Blotch detected. Spray Mancozeb + Score with spreader.',
    summaryKn: 'ಈರುಳ್ಳಿಯಲ್ಲಿ ನೇರಳೆ ಮಚ್ಚೆ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ಮ್ಯಾಂಕೋಜೆಬ್ ಮತ್ತು ಸ್ಕೋರ್ ಜೊತೆಗೆ ಅಂಟು ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
  },

  // 11. ಆಲೂಗಡ್ಡೆ (Potato)
  potato: {
    cropId: 'potato',
    cropNameEn: 'Potato (Solanum tuberosum)',
    cropNameKn: 'ಆಲೂಗಡ್ಡೆ (Potato)',
    isHealthy: false,
    issueNameEn: 'Late Blight of Potato',
    issueNameKn: 'ಆಲೂಗಡ್ಡೆ ತಡವಾದ ಅಂಗಮಾರಿ ರೋಗ (Late Blight)',
    scientificName: 'Phytophthora infestans',
    confidenceScore: 96,
    severity: 'Severe',
    alertLevel: 'red',
    symptomsEn: [
      'Water-soaked dark brown spots appearing rapidly at leaf margins',
      'White cottony fungal growth on underside of leaves in morning humidity',
      'Foul rot smell and blackened tuber breakdown',
    ],
    symptomsKn: [
      'ಎಲೆಗಳ ಅಂಚಿನಲ್ಲಿ ನೀರು ಕುಡಿದಂತಹ ಕಪ್ಪು ಕಂದು ಮಚ್ಚೆಗಳು ತೀವ್ರವಾಗಿ ಹರಡುವುದು',
      'ಎಲೆಯ ಹಿಂಭಾಗದಲ್ಲಿ ಮುಂಜಾನೆ ವೇಳೆ ಬಿಳಿ ಶಿಲೀಂಧ್ರ ಕಾಣುವುದು',
      'ಗೆಡ್ಡೆಗಳು ಕೊಳೆತು ದುರ್ವಾಸನೆ ಬೀರುವುದು',
    ],
    causesEn: ['Phytophthora infestans spore explosion during cool (15-20°C) foggy wet weather'],
    causesKn: ['ತಂಪು ವಾತಾವರಣ, ಮಂಜು ಮತ್ತು ಅತಿಯಾದ ತೇವಾಂಶದಲ್ಲಿ ಹರಡುವ ಶಿಲೀಂಧ್ರ'],
    biologicalTreatmentEn: ['Trichoderma spray @ 5g/L', 'Prune infected vines before tuber digging'],
    biologicalTreatmentKn: ['ಟ್ರೈಕೋಡರ್ಮಾ 5 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ', 'ಗೆಡ್ಡೆ ತೆಗೆಯುವ ಮುನ್ನ ರೋಗಪೀಡಿತ ಗಿಡಗಳನ್ನು ಕತ್ತರಿಸಿ ಸುಟ್ಟುಹಾಕಿ'],
    chemicalTreatmentEn: [
      {
        productName: 'Sectin (Fenamidone 10% + Mancozeb 50% WG)',
        activeIngredient: 'Fenamidone + Mancozeb',
        dosage: '3.0 g per Liter of water',
        waitingPeriod: '7 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಸೆಕ್ಟಿನ್ (Sectin 60% WG)',
        activeIngredient: 'Fenamidone + Mancozeb',
        dosage: '3.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 7 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: ['Use certified disease-free seed tubers', 'High earthing-up to bury tubers away from surface spores'],
    preventionTipsKn: ['ಪ್ರಮಾಣೀಕೃತ ಬೀಜದ ಗೆಡ್ಡೆಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ', 'ಗೆಡ್ಡೆಗಳು ಮಣ್ಣಿನೊಳಗೆ ಆಳವಾಗಿರುವಂತೆ ಚೆನ್ನಾಗಿ ಮಣ್ಣು ಏರಿಸಿ'],
    sprayVolumeGuide: '200 Liters of water per acre.',
    summaryEn: 'Potato Late Blight detected. Spray Sectin or Ridomil Gold immediately.',
    summaryKn: 'ಆಲೂಗಡ್ಡೆಯಲ್ಲಿ ತಡವಾದ ಅಂಗಮಾರಿ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ತಕ್ಷಣವೇ ಸೆಕ್ಟಿನ್ ಅಥವಾ ರಿಡೋಮಿಲ್ ಗೋಲ್ಡ್ ಸಿಂಪಡಿಸಿ.',
  },

  // 12. ಬಾಳೆ (Banana)
  banana: {
    cropId: 'banana',
    cropNameEn: 'Banana (Musa acuminata)',
    cropNameKn: 'ಬಾಳೆ (Banana)',
    isHealthy: false,
    issueNameEn: 'Sigatoka Leaf Spot',
    issueNameKn: 'ಬಾಳೆ ಸಿಗಾಟೋಕಾ ಎಲೆ ಚುಕ್ಕೆ ರೋಗ',
    scientificName: 'Mycosphaerella musicola',
    confidenceScore: 94,
    severity: 'Moderate',
    alertLevel: 'yellow',
    symptomsEn: [
      'Yellowish-green streaks on 3rd or 4th leaf turning into rusty brown spots with gray centers',
      'Leaves dry up prematurely, reducing bunch size and premature ripening',
    ],
    symptomsKn: [
      '3ನೇ ಅಥವಾ 4ನೇ ಎಲೆಗಳ ಮೇಲೆ ಹಳದಿ-ಹಸಿರು ಗೆರೆಗಳು ಕಾಣಿಸಿ ನಂತರ ಒಣಗಿ ಕಂದು ಕಲೆಯಾಗುವುದು',
      'ಎಲೆಗಳು ಬೇಗನೆ ಒಣಗಿ ಬಾಳೆ ಗೊನೆಯ ಗಾತ್ರ ಕುಗ್ಗುವುದು ಮತ್ತು ಕಾಯಿಗಳು ಬೇಗ ಮಾಗುವುದು',
    ],
    causesEn: ['Airborne spores favored by warm, rainy, humid monsoon season'],
    causesKn: ['ಮಳೆಗಾಲದ ತೇವಾಂಶ ಮತ್ತು ಗಾಳಿಯ ಮೂಲಕ ಹರಡುವ ಶಿಲೀಂಧ್ರ'],
    biologicalTreatmentEn: ['Cut and burn dried spotted leaves', 'Spray mineral oil / petroleum oil 10ml/L'],
    biologicalTreatmentKn: ['ರೋಗಪೀಡಿತ ಒಣಗಿದ ಎಲೆಗಳನ್ನು ಕತ್ತರಿಸಿ ತೋಟದಿಂದ ಹೊರಹಾಕಿ', 'ಖನಿಜ ತೈಲ (Mineral oil) 10 ಮಿಲಿ/ಲೀ ಸಿಂಪಡಿಸಿ'],
    chemicalTreatmentEn: [
      {
        productName: 'Tilt (Propiconazole 25% EC)',
        activeIngredient: 'Propiconazole 25% EC',
        dosage: '1.0 ml per Liter of water with mineral oil',
        waitingPeriod: '20 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಟಿಲ್ಟ್ (Propiconazole 25% EC)',
        activeIngredient: 'Propiconazole 25% EC',
        dosage: '1.0 ಮಿಲಿ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಎಲೆಗಳ ಮೇಲೆ ಸಿಂಪಡಿಸಿ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 20 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: ['Maintain 1.8 x 1.8 m planting distance', 'Good drainage and desuckering regularly'],
    preventionTipsKn: ['ಸರಿಯಾದ ಅಂತರ ಕಾಪಾಡಿ, ಸಕಾಲದಲ್ಲಿ ಪಕ್ಕದ ಕಂದುಗಳನ್ನು (Desuckering) ತೆಗೆಯಿರಿ'],
    sprayVolumeGuide: '250 Liters of water per acre.',
    summaryEn: 'Banana Sigatoka Leaf Spot detected. Prune dry leaves and spray Propiconazole.',
    summaryKn: 'ಬಾಳೆಯಲ್ಲಿ ಸಿಗಾಟೋಕಾ ಎಲೆ ಚುಕ್ಕೆ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ಒಣ ಎಲೆ ಕತ್ತರಿಸಿ ಟಿಲ್ಟ್ (Propiconazole) ಸಿಂಪಡಿಸಿ.',
  },

  // 13. ನೆಲಗಡಲೆ (Groundnut)
  groundnut: {
    cropId: 'groundnut',
    cropNameEn: 'Groundnut / Peanut (Arachis hypogaea)',
    cropNameKn: 'ನೆಲಗಡಲೆ / ಶೇಂಗಾ (Groundnut)',
    isHealthy: false,
    issueNameEn: 'Tikka Disease (Cercospora Leaf Spot)',
    issueNameKn: 'ನೆಲಗಡಲೆ ಟಿಕ್ಕಾ ರೋಗ (ಎಲೆ ಚುಕ್ಕೆ ರೋಗ)',
    scientificName: 'Cercospora personata / Cercospora arachidicola',
    confidenceScore: 95,
    severity: 'Moderate',
    alertLevel: 'yellow',
    symptomsEn: [
      'Circular reddish-brown to black spots surrounded by a bright yellow halo on leaf surface',
      'Massive defoliation causing bare stems with only top young leaves remaining',
      'Poor pod development and reduced kernel weight',
    ],
    symptomsKn: [
      'ಎಲೆಗಳ ಮೇಲೆ ದುಂಡನೆಯ ಕಡು ಕಂದು ಅಥವಾ ಕಪ್ಪು ಚುಕ್ಕೆಗಳು, ಸುತ್ತಲೂ ಹಳದಿ ವಲಯ (ಟಿಕ್ಕಾ ರೋಗ)',
      'ಎಲೆಗಳು ಭಾರೀ ಪ್ರಮಾಣದಲ್ಲಿ ಉದುರಿ ಕೇವಲ ಕಾಂಡಗಳು ಮಾತ್ರ ಉಳಿಯುವುದು',
      'ಕಾಯಿಗಳಲ್ಲಿ ಕಾಳು ಸರಿಯಾಗಿ ತುಂಬದಿರುವುದು',
    ],
    causesEn: ['Fungal pathogen surviving on crop debris in soil during humid weather'],
    causesKn: ['ಮಣ್ಣಿನಲ್ಲಿರುವ ಶಿಲೀಂಧ್ರ ಮತ್ತು ಆರ್ದ್ರತೆಯ ವಾತಾವರಣ'],
    biologicalTreatmentEn: ['Spray Trichoderma @ 5g/L', 'Foliar spray of NSKE 5% early in season'],
    biologicalTreatmentKn: ['ಟ್ರೈಕೋಡರ್ಮಾ 5 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ', 'ಬೇವಿನ ಬೀಜದ ಕಷಾಯ (NSKE 5%) ಸಿಂಪಡಿಸಿ'],
    chemicalTreatmentEn: [
      {
        productName: 'Saaf 75% WP (Carbendazim 12% + Mancozeb 63%)',
        activeIngredient: 'Carbendazim + Mancozeb',
        dosage: '2.0 g per Liter of water',
        waitingPeriod: '15 days before harvest',
      },
    ],
    chemicalTreatmentKn: [
      {
        productName: 'ಸಾಫ್ 75% WP (Saaf)',
        activeIngredient: 'Carbendazim + Mancozeb',
        dosage: '2.0 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ',
        waitingPeriod: 'ಕೊಯ್ಲಿಗೆ 15 ದಿನಗಳ ಮೊದಲು',
      },
    ],
    preventionTipsEn: ['Seed treatment with Thiram or Trichoderma', 'Rotate with maize or sorghum'],
    preventionTipsKn: ['ಬಿತ್ತನೆ ಮುನ್ನ ಬೀಜೋಪಚಾರ ಮಾಡಿ', 'ಜೋಳ ಅಥವಾ ಮೆಕ್ಕೆಜೋಳದೊಂದಿಗೆ ಬೆಳೆ ಪರಿವರ್ತನೆ ಮಾಡಿ'],
    sprayVolumeGuide: '180 Liters of water per acre.',
    summaryEn: 'Groundnut Tikka disease detected. Spray Saaf WP @ 2g/L to prevent defoliation.',
    summaryKn: 'ಶೇಂಗಾದಲ್ಲಿ ಟಿಕ್ಕಾ ರೋಗ 95% ಖಚಿತವಾಗಿದೆ. ಎಲೆ ಉದುರದಂತೆ ತಕ್ಷಣ ಸಾಫ್ (Saaf) 2 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ.',
  },
};

/**
 * Helper to match any user query, crop hint, or crop name to catalog
 */
export function findDiagnosisByCropHint(hint: string): DiagnosisRecord {
  if (!hint) {
    // Default to Paddy (Karnataka's #1 crop) rather than Tomato
    return CROP_DIAGNOSIS_CATALOG.paddy;
  }

  const clean = hint.toLowerCase();

  if (clean.includes('paddy') || clean.includes('rice') || clean.includes('ಭತ್ತ') || clean.includes('1')) {
    return CROP_DIAGNOSIS_CATALOG.paddy;
  }
  if (clean.includes('chilli') || clean.includes('pepper') || clean.includes('ಮೆಣಸಿನಕಾಯಿ') || clean.includes('2')) {
    return CROP_DIAGNOSIS_CATALOG.chilli;
  }
  if (clean.includes('cotton') || clean.includes('ಹತ್ತಿ') || clean.includes('3')) {
    return CROP_DIAGNOSIS_CATALOG.cotton;
  }
  if (clean.includes('ragi') || clean.includes('millet') || clean.includes('ರಾಗಿ') || clean.includes('4')) {
    return CROP_DIAGNOSIS_CATALOG.ragi;
  }
  if (clean.includes('areca') || clean.includes('betel') || clean.includes('ಅಡಿಕೆ') || clean.includes('5')) {
    return CROP_DIAGNOSIS_CATALOG.arecanut;
  }
  if (clean.includes('sugarcane') || clean.includes('cane') || clean.includes('ಕಬ್ಬು') || clean.includes('6')) {
    return CROP_DIAGNOSIS_CATALOG.sugarcane;
  }
  if (clean.includes('chickpea') || clean.includes('gram') || clean.includes('chana') || clean.includes('ಕಡಲೆ') || clean.includes('7')) {
    return CROP_DIAGNOSIS_CATALOG.chickpea;
  }
  if (clean.includes('tomato') || clean.includes('ಟೊಮ್ಯಾಟೊ')) {
    return CROP_DIAGNOSIS_CATALOG.tomato;
  }
  if (clean.includes('maize') || clean.includes('corn') || clean.includes('ಮೆಕ್ಕೆಜೋಳ') || clean.includes('ಜೋಳ')) {
    return CROP_DIAGNOSIS_CATALOG.maize;
  }
  if (clean.includes('onion') || clean.includes('ಈರುಳ್ಳಿ')) {
    return CROP_DIAGNOSIS_CATALOG.onion;
  }
  if (clean.includes('potato') || clean.includes('ಆಲೂಗಡ್ಡೆ')) {
    return CROP_DIAGNOSIS_CATALOG.potato;
  }
  if (clean.includes('banana') || clean.includes('ಬಾಳೆ')) {
    return CROP_DIAGNOSIS_CATALOG.banana;
  }
  if (clean.includes('groundnut') || clean.includes('peanut') || clean.includes('ಶೇಂಗಾ') || clean.includes('ನೆಲಗಡಲೆ')) {
    return CROP_DIAGNOSIS_CATALOG.groundnut;
  }

  // If no match found, fallback to paddy
  return CROP_DIAGNOSIS_CATALOG.paddy;
}
