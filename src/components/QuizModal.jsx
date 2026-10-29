import React, { useState } from 'react';
import { X, Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import { quizQuestions } from '../data/batikData';

export default function QuizModal({ isOpen, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-[#C5A059]/40 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#2A1810] text-white flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-title text-xl font-bold">
              Kuis Pengetahuan Batik Nusantara
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-stone-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {!isFinished ? (
            <>
              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-stone-500 font-medium">
                  <span>Pertanyaan {currentIdx + 1} dari {quizQuestions.length}</span>
                  <span>Skor Sementara: {score}</span>
                </div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#C5A059] to-[#8B4513] h-full transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Text */}
              <h4 className="font-serif-title text-lg sm:text-xl font-bold text-[#2A1810] leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-800";
                  if (isAnswered) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = "bg-green-50 border-green-500 text-green-900 font-bold ring-2 ring-green-500/20";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-red-50 border-red-500 text-red-900";
                    } else {
                      btnStyle = "bg-stone-50 border-stone-200 opacity-60 text-stone-600";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswered && (
                <div className="p-4 bg-[#FDFBF7] border border-[#C5A059]/40 rounded-2xl space-y-3 animate-fadeIn">
                  <p className="text-xs text-stone-700 leading-relaxed">
                    <span className="font-bold text-[#8B4513]">Pembahasan: </span>
                    {currentQ.explanation}
                  </p>
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 bg-[#8B4513] hover:bg-[#6b350e] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{currentIdx + 1 === quizQuestions.length ? 'Lihat Hasil Akhir' : 'Lanjut ke Soal Berikutnya'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Result Screen */
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C5A059] to-[#8B4513] p-1 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-[#C5A059]" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif-title text-2xl font-bold text-[#2A1810]">
                  Kuis Selesai!
                </h4>
                <p className="text-stone-600 text-sm">
                  Kamu berhasil menjawab <span className="font-bold text-[#8B4513]">{score}</span> dari {quizQuestions.length} pertanyaan dengan benar.
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#C5A059]/15 text-[#8B4513] text-xs font-bold mt-2">
                  {score >= 4 ? "🌟 Gelar: Pelestari Mahir Warisan Nusantara" : "📖 Gelar: Penjelajah Budaya Batik Nusantara"}
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Coba Lagi</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#2A1810] text-white hover:bg-stone-900 text-sm font-semibold"
                >
                  Tutup Kuis
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
