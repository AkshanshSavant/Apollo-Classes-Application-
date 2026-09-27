import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CURRICULUM_DATA } from '../data/curriculumData';

export const ExploreView: React.FC = () => {
  const { addTopicToSubject, showToast, openPassport } = useApp();
  const [selectedGrade, setSelectedGrade] = useState<string>('class-9');
  const [selectedBoard, setSelectedBoard] = useState<'cbse' | 'gseb'>('cbse');
  const [activeSubjectTab, setActiveSubjectTab] = useState<string>('Mathematics');

  const curriculumKey = `${selectedGrade}-cbse`;
  const currentCurriculum = CURRICULUM_DATA[curriculumKey] || CURRICULUM_DATA['class-9-cbse'];

  const grades = [
    { id: 'class-6', label: 'Class 6' },
    { id: 'class-7', label: 'Class 7' },
    { id: 'class-8', label: 'Class 8' },
    { id: 'class-9', label: 'Class 9' },
    { id: 'class-10', label: 'Class 10' },
  ];

  const currentSubjectData = currentCurriculum.subjects.find(
    s => s.subjectName.toLowerCase().includes(activeSubjectTab.toLowerCase())
  ) || currentCurriculum.subjects[0];

  const handleAddChapterToPassport = (chapterTitle: string) => {
    const subKey = activeSubjectTab.toLowerCase().includes('math') ? 'math' :
                   activeSubjectTab.toLowerCase().includes('sci') ? 'science' :
                   activeSubjectTab.toLowerCase().includes('eng') ? 'english' : 'sst';
    addTopicToSubject(subKey, chapterTitle);
  };

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-md max-w-lg mx-auto">
      {/* Top Title Banner */}
      <div className="flex flex-col gap-1 pt-space-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d3e4ff] text-[#001c38] self-start">
          <span className="material-symbols-outlined text-[14px]">auto_stories</span>
          <span className="font-label-stamp text-[10px] uppercase font-bold tracking-wider">
            NCERT Curriculum Roadmaps
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
          Explore Classes 6–10
        </h1>
        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
          Syllabus architecture, core concepts, and pedagogical guidance by Deepak Sir &amp; Jyoti Ma'am.
        </p>
      </div>

      {/* Grade Selector Strip */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {grades.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelectedGrade(g.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedGrade === g.id
                ? 'bg-[#000000] text-white shadow-xs'
                : 'bg-[#eeeeed] text-[#44474c] hover:bg-[#e8e8e7]'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Board Alignment Pill */}
      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#e8e8e7] text-xs">
        <span className="font-semibold text-[#1a1c1c]">Board Standard:</span>
        <div className="flex gap-1">
          <button
            onClick={() => setSelectedBoard('cbse')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
              selectedBoard === 'cbse' ? 'bg-[#d3e4ff] text-[#001c38]' : 'text-[#44474c]'
            }`}
          >
            CBSE (NCERT)
          </button>
          <button
            onClick={() => setSelectedBoard('gseb')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
              selectedBoard === 'gseb' ? 'bg-[#d3e4ff] text-[#001c38]' : 'text-[#44474c]'
            }`}
          >
            GSEB English Med.
          </button>
        </div>
      </div>

      {/* Cohort Overview Card */}
      <div className="p-space-md rounded-2xl bg-[#f3f4f3] border border-[#e8e8e7] flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
            {currentCurriculum.classGrade} Academic Focus
          </span>
          <span className="text-[10px] font-bold text-[#426086] bg-[#d3e4ff] px-2 py-0.5 rounded">
            NCERT Synchronized
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
          {currentCurriculum.description}
        </p>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {currentCurriculum.subjects.map((sub) => {
          const isActive = activeSubjectTab === sub.subjectName;
          return (
            <button
              key={sub.subjectName}
              onClick={() => setActiveSubjectTab(sub.subjectName)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                isActive
                  ? 'bg-[#426086] text-white shadow-xs'
                  : 'bg-white text-[#44474c] border border-[#e8e8e7] hover:bg-[#f3f4f3]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">{sub.icon}</span>
              <span>{sub.subjectName}</span>
            </button>
          );
        })}
      </div>

      {/* Chapter Cards List */}
      <div className="flex flex-col gap-3">
        {currentSubjectData.chapters.map((chapter) => (
          <div 
            key={chapter.chapterNumber}
            className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex flex-col gap-2.5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f3f4f3] flex items-center justify-center font-bold text-xs text-[#0e1c2f] flex-shrink-0">
                  {chapter.chapterNumber}
                </span>
                <h3 className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
                  {chapter.title}
                </h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                chapter.difficulty === 'Challenging' 
                  ? 'bg-[#ffdad6] text-[#ba1a1a]' 
                  : chapter.difficulty === 'Moderate'
                  ? 'bg-[#dbe1ff] text-[#00174b]'
                  : 'bg-[#eeeeed] text-[#44474c]'
              }`}>
                {chapter.difficulty}
              </span>
            </div>

            {/* Key Concepts */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold text-[#44474c] tracking-wider">
                Core NCERT Concepts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {chapter.keyConcepts.map((concept, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-0.5 rounded bg-[#f3f4f3] text-[#1a1c1c] border border-[#e8e8e7]"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Mentor Pedagogy Note */}
            <div className="p-2.5 rounded-xl bg-[#d3e4ff]/35 border border-[#426086]/20 flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-[#426086] text-[16px] flex-shrink-0 mt-0.5">
                tips_and_updates
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[#001c38]">Mentorship Strategy:</span>
                <span className="text-[#29486d] mt-0.5">{chapter.pedagogyTip}</span>
              </div>
            </div>

            {/* Action footer */}
            <div className="flex items-center justify-between pt-1 border-t border-[#eeeeed]">
              <span className="text-[11px] font-semibold text-[#44474c]">
                Weightage: {chapter.boardWeightage}
              </span>
              <button
                onClick={() => handleAddChapterToPassport(chapter.title)}
                className="text-xs font-bold text-[#426086] hover:bg-[#d3e4ff]/50 px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">bookmark_add</span>
                <span>Track in Passport</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Passport CTA */}
      <div className="p-space-md rounded-2xl bg-[#000000] text-white flex items-center justify-between shadow-xs">
        <div>
          <span className="font-bold text-sm block">Personalize your study plan</span>
          <span className="text-xs text-white/80">Keep tabs on chapters and self-practice notes</span>
        </div>
        <button
          onClick={openPassport}
          className="px-3 py-2 bg-[#426086] hover:bg-[#354f6f] text-white rounded-xl text-xs font-bold flex-shrink-0"
        >
          My Passport →
        </button>
      </div>
    </div>
  );
};
