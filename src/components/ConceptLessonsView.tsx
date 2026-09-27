import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VIDEO_LESSONS } from '../data/videoLessons';
import { ConceptLesson } from '../types';

export const ConceptLessonsView: React.FC = () => {
  const { setActiveVideoLesson } = useApp();
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = VIDEO_LESSONS.filter(l => {
    const matchesSubject = filterSubject === 'all' || l.subject.toLowerCase().includes(filterSubject.toLowerCase());
    const matchesQuery = searchQuery === '' || 
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesQuery;
  });

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-md max-w-lg mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-1 pt-space-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] self-start">
          <span className="material-symbols-outlined text-[14px]">smart_display</span>
          <span className="font-label-stamp text-[10px] uppercase font-bold tracking-wider">
            Free Video Library
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
          Concept Lessons
        </h1>
        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
          High-yield chapter explanations &amp; NCERT problem walkthroughs by Deepak Sir &amp; Jyoti Ma'am.
        </p>
      </div>

      {/* Official YouTube Channel Banner */}
      <div className="p-space-md rounded-2xl bg-[#000000] text-white flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#ba1a1a] flex items-center justify-center text-white flex-shrink-0">
            <span className="material-symbols-outlined text-[24px]">play_arrow</span>
          </div>
          <div>
            <span className="font-bold text-sm block">Apollo CBSE Classes YouTube</span>
            <span className="text-xs text-white/80">Subscribe for weekly board problem breakdowns</span>
          </div>
        </div>
        <a 
          href="https://www.youtube.com/@apollocbseclasses" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-white text-[#000000] hover:bg-slate-100 rounded-xl text-xs font-bold flex items-center gap-1 flex-shrink-0"
        >
          <span>Subscribe</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-2">
        <div className="relative">
          <span className="material-symbols-outlined text-[#75777d] text-[18px] absolute left-3 top-2.5">
            search
          </span>
          <input
            type="text"
            placeholder="Search chapters, theorems, teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl bg-white border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {['all', 'Mathematics', 'Science', 'English'].map((subj) => (
            <button
              key={subj}
              onClick={() => setFilterSubject(subj)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filterSubject === subj
                  ? 'bg-[#000000] text-white'
                  : 'bg-[#eeeeed] text-[#44474c] hover:bg-[#e8e8e7]'
              }`}
            >
              {subj === 'all' ? 'All Subjects' : subj}
            </button>
          ))}
        </div>
      </div>

      {/* Video Lessons List */}
      <div className="flex flex-col gap-3">
        {filteredLessons.map((lesson) => (
          <div 
            key={lesson.id}
            className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex flex-col gap-2.5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-bold text-[#426086] bg-[#d3e4ff] px-2 py-0.5 rounded">
                {lesson.subject} • {lesson.grade}
              </span>
              <span className="text-xs font-semibold text-[#44474c] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {lesson.duration}
              </span>
            </div>

            <h3 className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
              {lesson.title}
            </h3>

            <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
              {lesson.summary}
            </p>

            {/* Key takeaway */}
            <div className="p-2 rounded-xl bg-[#f3f4f3] border border-[#e8e8e7] text-xs flex items-start gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#426086] flex-shrink-0 mt-0.5">
                lightbulb
              </span>
              <span className="text-[#1a1c1c]">
                <strong className="font-semibold">Core Principle:</strong> {lesson.keyTakeaway}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#eeeeed]">
              <span className="text-[11px] font-semibold text-[#44474c] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">person</span>
                {lesson.teacher}
              </span>

              <button
                onClick={() => setActiveVideoLesson(lesson)}
                className="px-3 py-1.5 bg-[#ba1a1a] hover:bg-[#93000a] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">play_circle</span>
                <span>Watch Lesson</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
