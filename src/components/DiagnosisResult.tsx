import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Volume2,
  VolumeX,
  Droplets,
  Sprout,
  FlaskConical,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Bookmark,
  Share2,
  Calculator,
  ArrowLeft,
  Info,
  Clock,
  Sparkles,
} from 'lucide-react';
import { DiagnosisData, Language } from '../types/plants';

interface DiagnosisResultProps {
  diagnosis: DiagnosisData;
  imageSrc: string;
  language: Language;
  onBackToScanner: () => void;
  onOpenCalculator: (cropName: string) => void;
  onAskCommunity: (diagnosis: DiagnosisData, imageSrc: string) => void;
  onSaveReport?: (diagnosis: DiagnosisData, imageSrc: string) => void;
}

export const DiagnosisResult: React.FC<DiagnosisResultProps> = ({
  diagnosis,
  imageSrc,
  language,
  onBackToScanner,
  onOpenCalculator,
  onAskCommunity,
  onSaveReport,
}) => {
  const [activeTab, setActiveTab] = useState<'biological' | 'chemical' | 'symptoms' | 'causes' | 'prevention'>('biological');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Text-To-Speech audio reader in Kannada or English
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead =
      language === 'kn'
        ? `${diagnosis.cropNameKn}. ರೋಗದ ಹೆಸರು: ${diagnosis.issueNameKn}. ತೀವ್ರತೆ: ${diagnosis.severity}. ${diagnosis.summaryKn}`
        : `${diagnosis.cropNameEn}. Issue identified: ${diagnosis.issueNameEn}. Severity: ${diagnosis.severity}. ${diagnosis.summaryEn}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = language === 'kn' ? 'kn-IN' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSave = () => {
    setIsSaved(true);
    if (onSaveReport) {
      onSaveReport(diagnosis, imageSrc);
    }
  };

  const getSeverityBadge = () => {
    if (diagnosis.isHealthy) {
      return (
        <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          {language === 'kn' ? 'ಆರೋಗ್ಯಕರ' : 'Healthy Plant'}
        </span>
      );
    }
    if (diagnosis.severity === 'Severe') {
      return (
        <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 font-bold px-2.5 py-1 rounded-full text-xs animate-pulse">
          <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
          {language === 'kn' ? 'ತೀವ್ರ ಹಾನಿ (Severe)' : 'Severe Damage'}
        </span>
      );
    }
    if (diagnosis.severity === 'Moderate') {
      return (
        <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full text-xs">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
          {language === 'kn' ? 'ಮಧ್ಯಮ (Moderate)' : 'Moderate'}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 font-bold px-2.5 py-1 rounded-full text-xs">
        <Info className="w-3.5 h-3.5 text-blue-600" />
        {language === 'kn' ? 'ಆರಂಭಿಕ ಹಂತ (Low)' : 'Low Severity'}
      </span>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 pb-24 space-y-4">
      {/* Top back navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToScanner}
          className="flex items-center gap-1.5 text-slate-600 hover:text-emerald-700 text-xs font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'kn' ? 'ಹೊಸ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ' : 'New Scan'}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Audio voice readout */}
          <button
            onClick={handleToggleSpeech}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
              isSpeaking
                ? 'bg-amber-400 text-slate-900 shadow-md ring-2 ring-amber-300'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isSpeaking ? (language === 'kn' ? 'ನಿಲ್ಲಿಸಿ' : 'Stop') : (language === 'kn' ? 'ಧ್ವನಿ ಕೇಳಿ' : 'Listen')}</span>
          </button>

          {/* Bookmark / Save */}
          <button
            onClick={handleSave}
            className={`p-1.5 rounded-full border transition-colors ${
              isSaved
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-slate-600 border-slate-200 hover:text-emerald-700'
            }`}
            title="Save report"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Diagnosis Summary Card (Plantix iconic card design) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start">
          {/* Leaf photo preview */}
          <div className="relative w-full sm:w-36 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner group">
            <img
              src={imageSrc}
              alt="Diagnosed Plant Leaf"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
              AI Scan
            </div>
          </div>

          {/* Issue & Plant details */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {language === 'kn' ? diagnosis.cropNameKn : diagnosis.cropNameEn}
              </span>
              {getSeverityBadge()}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {language === 'kn' ? diagnosis.issueNameKn : diagnosis.issueNameEn}
            </h2>

            {diagnosis.scientificName && (
              <p className="text-xs italic text-slate-500 font-serif">
                Pathogen: {diagnosis.scientificName}
              </p>
            )}

            {/* AI Confidence Meter */}
            <div className="pt-1">
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span className="text-slate-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {language === 'kn' ? 'AI ರೋಗ ಪತ್ತೆ ನಿಖರತೆ' : 'AI Confidence Score'}
                </span>
                <span className="text-emerald-700 font-bold">{diagnosis.confidenceScore}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-700"
                  style={{ width: `${diagnosis.confidenceScore}%` }}
                />
              </div>
            </div>

            {/* Concise summary text */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 text-xs text-slate-700 leading-relaxed font-medium">
              {language === 'kn' ? diagnosis.summaryKn : diagnosis.summaryEn}
            </div>

            {/* IMMEDIATE MEDICINE PRESCRIPTION HIGHLIGHT BOX */}
            {!diagnosis.isHealthy && (
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-400/80 rounded-xl p-3 space-y-2 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900 uppercase tracking-wider">
                  <FlaskConical className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'kn' ? '💊 ಈ ರೋಗಕ್ಕೆ ಬೇಕಾದ ಮುಖ್ಯ ಮದ್ದು (Required Medicines):' : '💊 Prescribed Medicines for this Disease:'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Chemical Cure Highlight */}
                  {(language === 'kn' ? diagnosis.chemicalTreatmentKn : diagnosis.chemicalTreatmentEn)[0] && (
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {language === 'kn' ? 'ರಾಸಾಯನಿಕ ಮದ್ದು' : 'Chemical Medicine'}
                      </span>
                      <p className="font-extrabold text-slate-900 mt-1">
                        {(language === 'kn' ? diagnosis.chemicalTreatmentKn : diagnosis.chemicalTreatmentEn)[0].productName}
                      </p>
                      <p className="text-[11px] text-emerald-800 font-bold mt-0.5">
                        {language === 'kn' ? 'ಪ್ರಮಾಣ:' : 'Dosage:'}{' '}
                        {(language === 'kn' ? diagnosis.chemicalTreatmentKn : diagnosis.chemicalTreatmentEn)[0].dosage}
                      </p>
                    </div>
                  )}

                  {/* Biological Cure Highlight */}
                  {(language === 'kn' ? diagnosis.biologicalTreatmentKn : diagnosis.biologicalTreatmentEn)[0] && (
                    <div className="bg-white p-2.5 rounded-lg border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {language === 'kn' ? 'ಜೈವಿಕ / ಸಾವಯವ ಮದ್ದು' : 'Organic / Bio Remedy'}
                      </span>
                      <p className="font-bold text-slate-900 text-[11px] mt-1 leading-snug">
                        {(language === 'kn' ? diagnosis.biologicalTreatmentKn : diagnosis.biologicalTreatmentEn)[0]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab navigation for detailed cures */}
        <div className="flex border-t border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('biological')}
            className={`flex-1 min-w-[120px] py-3 px-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'biological'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-sm'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'kn' ? 'ಜೈವಿಕ ಚಿಕಿತ್ಸೆ' : 'Biological'}</span>
          </button>

          <button
            onClick={() => setActiveTab('chemical')}
            className={`flex-1 min-w-[120px] py-3 px-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'chemical'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-sm'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5 text-indigo-600" />
            <span>{language === 'kn' ? 'ರಾಸಾಯನಿಕ ಮದ್ದು' : 'Chemical'}</span>
          </button>

          <button
            onClick={() => setActiveTab('symptoms')}
            className={`flex-1 min-w-[110px] py-3 px-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'symptoms'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-sm'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'kn' ? 'ಲಕ್ಷಣಗಳು' : 'Symptoms'}</span>
          </button>

          <button
            onClick={() => setActiveTab('prevention')}
            className={`flex-1 min-w-[110px] py-3 px-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'prevention'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-sm'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'kn' ? 'ಮುನ್ನೆಚ್ಚರಿಕೆ' : 'Prevention'}</span>
          </button>

          <button
            onClick={() => setActiveTab('causes')}
            className={`flex-1 min-w-[110px] py-3 px-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'causes'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-sm'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-slate-600" />
            <span>{language === 'kn' ? 'ಕಾರಣಗಳು' : 'Causes'}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-4 sm:p-5">
          {/* 1. BIOLOGICAL / ORGANIC TREATMENT */}
          {activeTab === 'biological' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Sprout className="w-4 h-4 text-emerald-600" />
                <h3>{language === 'kn' ? 'ಸಾವಯವ & ಜೈವಿಕ ನಿಯಂತ್ರಣ ಕ್ರಮಗಳು' : 'Biological & Organic Remedies'}</h3>
              </div>
              <p className="text-xs text-slate-600">
                {language === 'kn'
                  ? 'ಪರಿಸರಸ್ನೇಹಿ, ನೈಸರ್ಗಿಕ ಜೈವಿಕ ಸೂಕ್ಷ್ಮಾಣುಜೀವಿಗಳು ಮತ್ತು ಸಾವಯವ ಕಷಾಯಗಳ ಬಳಕೆ:'
                  : 'Eco-friendly organic remedies and beneficial bio-fungicides / bio-pesticides:'}
              </p>

              <div className="space-y-2.5">
                {(language === 'kn' ? diagnosis.biologicalTreatmentKn : diagnosis.biologicalTreatmentEn).map((bio, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">{bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. CHEMICAL TREATMENT */}
          {activeTab === 'chemical' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                  <FlaskConical className="w-4 h-4 text-indigo-600" />
                  <h3>{language === 'kn' ? 'ಶಿಫಾರಸು ಮಾಡಿದ ರಾಸಾಯನಿಕ ಮದ್ದು & ಪ್ರಮಾಣ' : 'Recommended Chemical Fungicides / Pesticides'}</h3>
                </div>
              </div>

              {diagnosis.isHealthy ? (
                <div className="p-4 bg-emerald-50 rounded-xl text-xs text-emerald-800 font-medium">
                  {language === 'kn'
                    ? 'ಗಿಡ ಆರೋಗ್ಯವಾಗಿದೆ. ಯಾವುದೇ ರಾಸಾಯನಿಕ ಸಿಂಪಡಣೆ ಅಗತ್ಯವಿಲ್ಲ.'
                    : 'The plant is healthy! No chemical spraying is needed.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {(language === 'kn' ? diagnosis.chemicalTreatmentKn : diagnosis.chemicalTreatmentEn).map((chem, idx) => (
                    <div
                      key={idx}
                      className="bg-indigo-50/40 p-3.5 rounded-xl border border-indigo-100 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-indigo-950">{chem.productName}</h4>
                        <span className="text-[10px] font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                          {chem.activeIngredient}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Droplets className="w-3.5 h-3.5 text-indigo-600" />
                          <span>
                            <strong className="text-slate-900">{language === 'kn' ? 'ಪ್ರಮಾಣ:' : 'Dosage:'}</strong> {chem.dosage}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>
                            <strong className="text-slate-900">{language === 'kn' ? 'ಕಾಯುವ ಅವಧಿ:' : 'Harvest Interval:'}</strong> {chem.waitingPeriod}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p>
                      {language === 'kn'
                        ? 'ಸೂಚನೆ: ಕೀಟನಾಶಕ ಸಿಂಪಡಿಸುವಾಗ ರಕ್ಷಣಾ ಮುಖವಾಡ ಧರಿಸಿ. ಬಿಸಿಲು ಹೆಚ್ಚಾಗುವ ಮುನ್ನ ಬೆಳಿಗ್ಗೆ ಅಥವಾ ಸಂಜೆ ವೇಳೆ ಸಿಂಪಡಿಸಿ.'
                        : 'Notice: Always wear gloves and a safety mask. Spray early morning or late afternoon to prevent evaporation.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. SYMPTOMS */}
          {activeTab === 'symptoms' && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'kn' ? 'ಎಲೆಯ ರೋಗಲಕ್ಷಣಗಳು (Symptoms)' : 'Observable Disease Symptoms'}
              </h3>
              <div className="space-y-2">
                {(language === 'kn' ? diagnosis.symptomsKn : diagnosis.symptomsEn).map((symp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{symp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CAUSES */}
          {activeTab === 'causes' && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'kn' ? 'ರೋಗ ಉಂಟಾಗಲು ಕಾರಣಗಳು (Causes)' : 'Pathogen & Triggers'}
              </h3>
              <div className="space-y-2">
                {(language === 'kn' ? diagnosis.causesKn : diagnosis.causesEn).map((cau, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>{cau}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PREVENTION */}
          {activeTab === 'prevention' && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'kn' ? 'ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ತಡೆಯುವ ಕ್ರಮಗಳು' : 'Long-term Preventative Agronomy'}
              </h3>
              <div className="space-y-2">
                {(language === 'kn' ? diagnosis.preventionTipsKn : diagnosis.preventionTipsEn).map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Spray guide banner */}
        {diagnosis.sprayVolumeGuide && (
          <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold text-slate-700">{language === 'kn' ? 'ಸಿಂಪರಣೆ ನೀರಿನ ಪ್ರಮಾಣ:' : 'Spray Water Guide:'}</span>
            <span className="font-mono text-emerald-800 font-bold">{diagnosis.sprayVolumeGuide}</span>
          </div>
        )}
      </div>

      {/* Action Footer (Plantix action buttons) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          onClick={() => onOpenCalculator(diagnosis.cropNameEn)}
          className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
        >
          <Calculator className="w-4 h-4 text-amber-300" />
          <span>{language === 'kn' ? 'ನನ್ನ ಜಮೀನಿಗೆ ಔಷಧ/ಗೊಬ್ಬರ ಲೆಕ್ಕ ಹಾಕಿ' : 'Calculate Farm Dosage (Calculator)'}</span>
        </button>

        <button
          onClick={() => onAskCommunity(diagnosis, imageSrc)}
          className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>{language === 'kn' ? 'ಕೃಷಿ ವೇದಿಕೆಯಲ್ಲಿ ರೈತರಿಗೆ ಪ್ರಶ್ನಿಸಿ' : 'Ask Farming Community'}</span>
        </button>
      </div>
    </div>
  );
};
