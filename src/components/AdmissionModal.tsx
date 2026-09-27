import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AdmissionModal: React.FC = () => {
  const { isAdmissionModalOpen, setIsAdmissionModalOpen, updateProfile, showToast } = useApp();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [studentName, setStudentName] = useState('Aarav Patel');
  const [grade, setGrade] = useState('Class 9');
  const [board, setBoard] = useState<'CBSE' | 'GSEB'>('CBSE');
  const [school, setSchool] = useState('DPS Gandhinagar / Ahmedabad');
  const [parentName, setParentName] = useState('Rajesh Patel');
  const [parentPhone, setParentPhone] = useState('9876543210');
  const [batchSlot, setBatchSlot] = useState('Evening Batch (6:30 PM - 8:30 PM)');
  const [isSuccess, setIsSuccess] = useState(false);
  const [assignedFolio, setAssignedFolio] = useState('');

  if (!isAdmissionModalOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((step + 1) as 2 | 3);
    } else {
      // Complete admission
      const folio = `AP-2025-${Math.floor(10 + Math.random() * 90)}`;
      setAssignedFolio(folio);
      updateProfile({
        name: studentName,
        grade,
        board,
        folioNo: folio,
        schoolName: school,
        parentName,
        parentPhone
      });
      setIsSuccess(true);
      showToast(`Admission folio ${folio} provisioned successfully!`);
    }
  };

  const handleClose = () => {
    setIsAdmissionModalOpen(false);
    setStep(1);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-space-md shadow-2xl border border-[#c5c6cd]/50 flex flex-col gap-3 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#eeeeed]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#000000] text-white flex items-center justify-center font-bold text-xs">
              Α
            </div>
            <div>
              <span className="font-bold text-sm text-[#1a1c1c] block">Apollo Classes Admissions 2024–25</span>
              <span className="text-[11px] text-[#44474c]">3-Step Enrollment &amp; Passport Folio</span>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="w-7 h-7 rounded-full bg-[#eeeeed] hover:bg-[#e8e8e7] flex items-center justify-center text-[#44474c] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-4 gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h3 className="font-headline-sm text-base font-bold text-[#1a1c1c]">
              Academic Passport Folio Generated!
            </h3>
            <div className="p-3 bg-[#f3f4f3] rounded-2xl border border-[#c5c6cd] w-full text-xs flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span className="text-[#44474c]">Student:</span>
                <span className="font-bold text-[#1a1c1c]">{studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Folio Reference:</span>
                <span className="font-bold text-[#426086]">{assignedFolio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Enrolled Class:</span>
                <span className="font-bold text-[#1a1c1c]">{grade} • {board}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Batch Allocation:</span>
                <span className="font-bold text-[#1a1c1c]">{batchSlot}</span>
              </div>
            </div>
            <p className="text-xs text-[#44474c]">
              Deepak Sir and Jyoti Ma'am have reserved your seat. Please visit our New Ranip campus with your previous term mark-sheet for the welcome briefing.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-2.5 bg-[#000000] text-white rounded-xl text-xs font-bold hover:bg-[#1a1c1c]"
            >
              Open My Verified Passport
            </button>
          </div>
        ) : (
          <form onSubmit={handleNextStep} className="flex flex-col gap-3">
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-semibold px-2 py-1 bg-[#f3f4f3] rounded-xl text-[#44474c]">
              <span className={step === 1 ? 'text-[#000000] font-bold' : ''}>1. Student</span>
              <span>→</span>
              <span className={step === 2 ? 'text-[#000000] font-bold' : ''}>2. Guardian</span>
              <span>→</span>
              <span className={step === 3 ? 'text-[#000000] font-bold' : ''}>3. Batch &amp; Folio</span>
            </div>

            {/* Step 1: Student Details */}
            {step === 1 && (
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-bold text-[#1a1c1c]">Student Background</span>
                <div>
                  <label className="text-[11px] text-[#44474c] block mb-0.5">Student Full Name</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] text-[#44474c] block mb-0.5">Class / Grade</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                    >
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-[#44474c] block mb-0.5">Board</label>
                    <select
                      value={board}
                      onChange={(e) => setBoard(e.target.value as 'CBSE' | 'GSEB')}
                      className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                    >
                      <option value="CBSE">CBSE (NCERT)</option>
                      <option value="GSEB">GSEB (NCERT)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] text-[#44474c] block mb-0.5">Current School Name</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Guardian Details */}
            {step === 2 && (
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-bold text-[#1a1c1c]">Parent / Guardian Information</span>
                <div>
                  <label className="text-[11px] text-[#44474c] block mb-0.5">Parent / Guardian Name</label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#44474c] block mb-0.5">Contact Phone Number</label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                    required
                  />
                </div>
                <div className="p-2.5 rounded-xl bg-[#d3e4ff]/30 border border-[#426086]/20 text-xs text-[#001c38]">
                  <strong>Pastoral Transparency:</strong> You will receive SMS alerts after every classroom test and direct progress calls with Deepak Sir.
                </div>
              </div>
            )}

            {/* Step 3: Batch Timing & Confirmation */}
            {step === 3 && (
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-bold text-[#1a1c1c]">Batch Selection (New Ranip Campus)</span>
                <div>
                  <label className="text-[11px] text-[#44474c] block mb-0.5">Preferred Timing</label>
                  <select
                    value={batchSlot}
                    onChange={(e) => setBatchSlot(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
                  >
                    <option value="Evening Batch (6:30 PM - 8:30 PM)">Evening Batch (6:30 PM – 8:30 PM)</option>
                    <option value="Late Afternoon Batch (4:30 PM - 6:30 PM)">Late Afternoon Batch (4:30 PM – 6:30 PM)</option>
                    <option value="Weekend Intensive Batch (Sat & Sun)">Weekend Intensive Batch (Sat &amp; Sun)</option>
                  </select>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-xs flex flex-col gap-1">
                  <span className="font-bold text-[#1a1c1c]">Batch Assurance:</span>
                  <span className="text-[#44474c]">Cap of 18 students strictly enforced. 100% NCERT chapter books and daily personal doubt sessions included.</span>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-[#eeeeed]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as 1 | 2)}
                  className="px-3 py-2 text-xs font-semibold text-[#44474c] hover:text-[#1a1c1c]"
                >
                  ← Back
                </button>
              ) : <div></div>}

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#000000] hover:bg-[#1a1c1c] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                {step === 3 ? 'Generate Folio & Enroll' : 'Continue →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
