import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const PassportView: React.FC = () => {
  const { 
    profile, 
    activeSubject, 
    setActiveSubject, 
    subjectGoals, 
    milestones, 
    setIsAddGoalModalOpen,
    setIsAdmissionModalOpen,
    setIsShareModalOpen,
    verifyMilestone,
    addMilestone,
    showToast
  } = useApp();

  const [isEditingReflection, setIsEditingReflection] = useState(false);
  const [reflectionInput, setReflectionInput] = useState(profile.selfReflection);
  const [isLoggingPractice, setIsLoggingPractice] = useState(false);
  const [practiceTitle, setPracticeTitle] = useState('');
  const [practiceNote, setPracticeNote] = useState('');

  const subjectsList = [
    { id: 'math', label: 'Mathematics' },
    { id: 'science', label: 'Science' },
    { id: 'english', label: 'English' },
    { id: 'sst', label: 'Social Science' }
  ];

  const currentGoal = subjectGoals[activeSubject] || subjectGoals['math'];

  const handleSaveReflection = () => {
    profile.selfReflection = reflectionInput;
    setIsEditingReflection(false);
    showToast('Self-reflection saved to passport');
  };

  const handleLogPractice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceTitle.trim()) return;

    addMilestone({
      title: practiceTitle,
      type: 'student-reported',
      typeLabel: 'SELF-REFLECTION (STUDENT-REPORTED)',
      description: practiceNote || 'Completed independent chapter revision and textbook questions.',
      dateStr: 'Self-Practice Log'
    });

    setPracticeTitle('');
    setPracticeNote('');
    setIsLoggingPractice(false);
  };

  return (
    <div className="flex flex-col w-full px-margin-mobile py-space-sm space-y-space-md max-w-lg mx-auto pb-space-xl">
      {/* Status & Context Notice */}
      <div className="flex flex-col space-y-space-xs bg-[#f3f4f3] p-space-md rounded-2xl shadow-xs border border-[#e8e8e7]">
        <div className="flex items-center justify-between gap-space-sm flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-[#d3e4ff] text-[#001c38]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#426086]"></span>
            <span className="font-label-stamp text-label-stamp tracking-wider font-bold">
              PERSONAL PLANNING TOOL
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#44474c]">
            <span className="material-symbols-outlined text-[15px]">cloud_off</span>
            <span className="font-label-md text-label-md">Local Preview • Not Synced</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-[#44474c] pt-1 leading-relaxed">
          Before admission, this passport is your personal learning plan. After confirmed enrollment, teacher-verified milestones will appear here.
        </p>
      </div>

      {/* Digital Passport Booklet Container */}
      <div className="relative w-full rounded-2xl bg-white shadow-md border border-[#e8e8e7] overflow-hidden flex flex-col">
        {/* Tactile Left Edge Bookbinding Spine Accent */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0e1c2f] flex flex-col justify-around items-center py-4 z-10">
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
          <span className="w-1 h-2 rounded-full bg-white/40"></span>
        </div>

        {/* Inside Booklet Folio Content */}
        <div className="pl-6 pr-space-md py-space-lg flex flex-col space-y-space-lg">
          {/* 1. Dossier / Student Profile Header */}
          <div className="flex flex-col space-y-space-sm pb-space-md bg-[#f3f4f3]/70 p-space-md rounded-xl border border-[#e8e8e7]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-xl bg-[#0e1c2f] text-white flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-xs">
                  Α
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
                    Apollo CBSE Classes
                  </span>
                  <span className="font-label-stamp text-[10px] text-[#44474c] uppercase tracking-wider font-semibold">
                    ACADEMIC FOLIO NO. {profile.folioNo}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#426086] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>

            <div className="pt-space-xs flex flex-col">
              <div className="flex items-baseline justify-between">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
                  {profile.name}
                </h2>
                <span className="font-label-stamp text-label-stamp px-2 py-0.5 rounded bg-[#eeeeed] text-[#44474c] font-bold border border-[#c5c6cd]/40">
                  SAMPLE
                </span>
              </div>
              <div className="flex flex-wrap gap-x-space-sm gap-y-1 mt-1 text-[#44474c] font-label-md text-label-md">
                <span>{profile.grade}</span>
                <span>•</span>
                <span>{profile.board} Curriculum</span>
                <span>•</span>
                <span>{profile.medium}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 pt-1 text-[#426086] font-label-md text-label-md font-semibold">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>NCERT Textbook Integrated Coverage</span>
            </div>
          </div>

          {/* 2. Personal Learning Goals Section */}
          <div className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold tracking-wider">
                Academic Direction
              </span>
              <span className="font-label-stamp text-[10px] px-2 py-0.5 rounded-full bg-[#d3e4ff] text-[#001c38] font-bold">
                STUDENT-CREATED GOAL
              </span>
            </div>

            <div className="p-space-md rounded-xl bg-[#f3f4f3] flex flex-col space-y-space-xs border border-[#e8e8e7]">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[#426086] text-[20px] flex-shrink-0 mt-0.5">
                  flag
                </span>
                <p className="font-body-md text-body-md text-[#1a1c1c] font-medium leading-relaxed">
                  “{profile.intent}”
                </p>
              </div>

              {/* Editable Self-Reflection Box */}
              <div className="p-space-sm rounded-lg bg-[#eeeeed] flex flex-col gap-1.5 mt-space-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#44474c]">
                    <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      Self-Reflection (Student-Reported)
                    </span>
                  </div>
                  <button 
                    className="text-[11px] text-[#426086] hover:underline font-semibold cursor-pointer"
                    onClick={() => setIsEditingReflection(!isEditingReflection)}
                  >
                    {isEditingReflection ? 'Cancel' : 'Edit Note'}
                  </button>
                </div>

                {isEditingReflection ? (
                  <div className="flex flex-col gap-2 mt-1">
                    <textarea 
                      className="w-full text-xs p-2 rounded bg-white border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
                      rows={2}
                      value={reflectionInput}
                      onChange={(e) => setReflectionInput(e.target.value)}
                    />
                    <button 
                      className="self-end px-3 py-1 bg-[#426086] text-white text-xs font-semibold rounded hover:bg-[#354f6f]"
                      onClick={handleSaveReflection}
                    >
                      Save Reflection
                    </button>
                  </div>
                ) : (
                  <p className="font-body-sm text-body-sm text-[#44474c] italic">
                    “{profile.selfReflection}”
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 3. Subject Tabs & Active Subject Topics */}
          <div className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold tracking-wider">
                Syllabus Strands
              </span>
              <span className="font-label-md text-label-md text-[#44474c] font-medium">
                Term 1 Roadmap
              </span>
            </div>

            {/* Horizontal scroll selector */}
            <div className="flex gap-space-xs overflow-x-auto pb-1" id="subject-tabs-container">
              {subjectsList.map((sub) => {
                const isActive = activeSubject === sub.id;
                return (
                  <button
                    key={sub.id}
                    className={`subject-tab-btn flex-shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#000000] text-white shadow-xs font-bold'
                        : 'bg-[#eeeeed] text-[#44474c] hover:bg-[#e8e8e7]'
                    }`}
                    onClick={() => setActiveSubject(sub.id)}
                    type="button"
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>

            {/* Active Topic Details Box */}
            <div className="p-space-md rounded-xl bg-[#f3f4f3] flex flex-col space-y-space-sm border border-[#e8e8e7]">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
                  {currentGoal.subjectName} • Focus Topics
                </span>
                <span className="font-label-stamp text-[10px] px-2 py-0.5 rounded bg-[#d3e4ff] text-[#001c38] font-bold">
                  {currentGoal.chapterRef}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {currentGoal.topics.map((topic, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white text-[#1a1c1c] font-body-sm text-body-sm shadow-2xs flex items-center gap-1.5 border border-[#e8e8e7]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#426086]"></span>
                    <span>{topic}</span>
                  </span>
                ))}
              </div>

              <button 
                className="mt-space-xs inline-flex items-center justify-center gap-1.5 py-2 px-space-sm rounded-xl bg-[#eeeeed] hover:bg-[#e8e8e7] text-[#1a1c1c] font-label-md text-label-md transition-colors w-full cursor-pointer font-semibold border border-[#c5c6cd]/30"
                onClick={() => setIsAddGoalModalOpen(true)}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>+ Add personal topic goal</span>
              </button>
            </div>
          </div>

          {/* 4. Milestone & Journey Timeline */}
          <div className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold tracking-wider">
                Timeline &amp; Passport Stamping
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="text-xs font-semibold text-[#426086] hover:underline flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsLoggingPractice(!isLoggingPractice)}
                >
                  <span className="material-symbols-outlined text-[15px]">edit_calendar</span>
                  + Log Practice
                </button>
              </div>
            </div>

            {/* Quick Practice Logger */}
            {isLoggingPractice && (
              <form onSubmit={handleLogPractice} className="p-3 bg-[#f3f4f3] rounded-xl border border-[#c5c6cd] flex flex-col gap-2">
                <span className="text-xs font-bold text-[#1a1c1c]">Log Independent Practice</span>
                <input
                  type="text"
                  placeholder="e.g., NCERT Exercise 4.1 Questions 1-8"
                  value={practiceTitle}
                  onChange={(e) => setPracticeTitle(e.target.value)}
                  className="w-full text-xs p-2 rounded bg-white border border-[#c5c6cd]"
                  required
                />
                <textarea
                  placeholder="Notes on doubts or concepts to review..."
                  value={practiceNote}
                  onChange={(e) => setPracticeNote(e.target.value)}
                  className="w-full text-xs p-2 rounded bg-white border border-[#c5c6cd]"
                  rows={2}
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLoggingPractice(false)}
                    className="px-2.5 py-1 text-xs text-[#44474c] font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 bg-[#000000] text-white text-xs font-semibold rounded hover:bg-[#1a1c1c]"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-col space-y-space-sm">
              {milestones.map((m) => (
                <div 
                  key={m.id}
                  className="p-space-md rounded-xl bg-[#f3f4f3] flex flex-col space-y-space-xs relative overflow-hidden border border-[#e8e8e7]"
                >
                  {/* Official Ink Seal Stamp for Teacher Verified Milestone */}
                  {m.type === 'verified' && (
                    <div className="absolute -right-3 -bottom-3 w-28 h-28 rounded-full bg-[#b3d1fd]/35 flex flex-col items-center justify-center -rotate-12 pointer-events-none p-1 text-center select-none">
                      <div className="w-full h-full rounded-full bg-white/85 flex flex-col items-center justify-center p-1.5 border-2 border-dashed border-[#426086]/50">
                        <span className="material-symbols-outlined text-[#426086] text-[18px]">verified</span>
                        <span className="font-label-stamp text-[9px] text-[#426086] leading-tight font-extrabold uppercase tracking-widest">
                          {m.tag || 'APOLLO VERIFIED'}
                        </span>
                        <span className="font-label-stamp text-[8px] text-[#44474c] leading-none uppercase font-bold mt-0.5">
                          {m.verifiedBy || 'SAVANT MSc'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pr-16">
                    <span className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
                      {m.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-space-sm pt-0.5 flex-wrap">
                    {m.type === 'verified' && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#d3e4ff] text-[#001c38]">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        <span className="font-label-stamp text-[10px] tracking-wider font-bold">
                          {m.typeLabel}
                        </span>
                      </div>
                    )}
                    {m.type === 'student-reported' && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#eeeeed] text-[#44474c]">
                        <span className="material-symbols-outlined text-[14px]">edit_note</span>
                        <span className="font-label-stamp text-[10px] tracking-wider font-bold">
                          {m.typeLabel}
                        </span>
                      </div>
                    )}
                    {m.type === 'upcoming' && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e8e8e7] text-[#426086]">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        <span className="font-label-stamp text-[10px] tracking-wider font-bold">
                          {m.typeLabel}
                        </span>
                      </div>
                    )}
                    <span className="font-body-sm text-body-sm text-[#44474c]">
                      {m.dateStr}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-[#44474c] pt-1 max-w-[85%] leading-relaxed">
                    {m.description}
                  </p>

                  {/* Stamp Simulator for testing verification */}
                  {m.type !== 'verified' && (
                    <div className="pt-1 flex items-center justify-end">
                      <button
                        onClick={() => verifyMilestone(m.id)}
                        className="text-[11px] text-[#426086] hover:bg-[#d3e4ff]/40 px-2 py-1 rounded flex items-center gap-1 cursor-pointer font-semibold"
                        title="Simulate Deepak Sir's Classroom Verification"
                      >
                        <span className="material-symbols-outlined text-[14px]">approval</span>
                        <span>Apply Teacher Stamp</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. 'My Next Step' Box & CTAs */}
          <div className="p-space-md rounded-2xl bg-[#0e1c2f] text-white flex flex-col space-y-space-md shadow-sm border border-[#2f3130]">
            <div className="flex items-start gap-space-sm">
              <div className="w-8 h-8 rounded-xl bg-[#426086] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <span className="material-symbols-outlined text-[18px]">forward</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-stamp text-[10px] text-[#d3e4ff] uppercase tracking-wider font-bold">
                  Immediate Next Action
                </span>
                <p className="font-body-md text-body-md text-white font-medium mt-0.5 leading-snug">
                  {profile.immediateNextAction}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-space-xs pt-1">
              <button 
                className="min-h-[44px] w-full px-space-md py-2.5 rounded-xl bg-[#eeeeed] text-[#1a1c1c] font-label-md text-label-md flex items-center justify-center gap-1.5 hover:bg-[#e8e8e7] transition-colors cursor-pointer font-semibold shadow-xs"
                onClick={() => setIsShareModalOpen(true)}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Share with Parent</span>
              </button>

              <button 
                className="min-h-[44px] w-full px-space-md py-2.5 rounded-xl bg-[#426086] text-white font-label-md text-label-md flex items-center justify-center gap-1.5 hover:bg-[#354f6f] transition-colors shadow-xs cursor-pointer font-semibold"
                onClick={() => setIsAdmissionModalOpen(true)}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Apply for Admission with this Passport</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footnote Disclaimer */}
      <div className="p-space-sm text-center">
        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed max-w-sm mx-auto">
          Personal passports are strictly private. Self-reported progress is never represented as certified mastery.
        </p>
      </div>
    </div>
  );
};
