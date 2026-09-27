import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const VideoPlayerModal: React.FC = () => {
  const { activeVideoLesson, setActiveVideoLesson, addMilestone, showToast } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!activeVideoLesson) return null;

  const handleBookmarkForDoubt = () => {
    addMilestone({
      title: `Concept Clinic: ${activeVideoLesson.title}`,
      type: 'student-reported',
      typeLabel: 'BOOKMARKED FOR DOUBT CLINIC',
      description: `Targeting clarification on ${activeVideoLesson.ncertRef} with ${activeVideoLesson.teacher}.`,
      dateStr: 'Scheduled Clinic'
    });
    setIsBookmarked(true);
    showToast(`Added "${activeVideoLesson.title}" to doubt clinic list!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-[#c5c6cd]/50 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-3 border-b border-[#eeeeed]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
            <span className="font-bold text-xs text-[#1a1c1c] truncate">
              Apollo Video Library • {activeVideoLesson.teacher}
            </span>
          </div>
          <button 
            onClick={() => setActiveVideoLesson(null)}
            className="w-7 h-7 rounded-full bg-[#eeeeed] hover:bg-[#e8e8e7] flex items-center justify-center text-[#44474c] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative w-full aspect-video bg-[#0e1c2f] flex flex-col justify-between p-4 overflow-hidden">
          {/* Background graphic grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
              {activeVideoLesson.ncertRef}
            </span>
            <span className="text-[10px] text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">schedule</span>
              {activeVideoLesson.duration}
            </span>
          </div>

          {/* Central Play/Pause Trigger */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[32px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <span className="text-white text-xs font-semibold mt-2 drop-shadow-sm">
              {isPlaying ? 'Lesson Playing (Interactive Walkthrough)' : 'Lesson Paused'}
            </span>
          </div>

          {/* Video Scrubber */}
          <div className="relative z-10 flex flex-col gap-1 w-full pt-2">
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#ba1a1a] h-full w-[45%] rounded-full"></div>
            </div>
            <div className="flex justify-between text-[10px] text-white/70">
              <span>08:14</span>
              <span>{activeVideoLesson.duration}</span>
            </div>
          </div>
        </div>

        {/* Lesson Details & Pedagogical Notes */}
        <div className="p-4 flex flex-col gap-3 overflow-y-auto">
          <div>
            <span className="text-[10px] font-bold text-[#426086] bg-[#d3e4ff] px-2 py-0.5 rounded">
              {activeVideoLesson.subject} • {activeVideoLesson.grade}
            </span>
            <h2 className="font-headline-sm text-sm font-bold text-[#1a1c1c] mt-1.5">
              {activeVideoLesson.title}
            </h2>
            <p className="font-body-sm text-body-sm text-[#44474c] mt-1">
              {activeVideoLesson.summary}
            </p>
          </div>

          {/* Core Principle / Formula Card */}
          <div className="p-3 rounded-2xl bg-[#f3f4f3] border border-[#e8e8e7] flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#426086] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">school</span>
              Mentor’s Golden Principle
            </span>
            <p className="text-xs text-[#1a1c1c] font-medium leading-relaxed">
              “{activeVideoLesson.keyTakeaway}”
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1 border-t border-[#eeeeed]">
            <button
              onClick={handleBookmarkForDoubt}
              disabled={isBookmarked}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                isBookmarked 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-[#eeeeed] hover:bg-[#e8e8e7] text-[#1a1c1c] cursor-pointer'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isBookmarked ? 'done_all' : 'help_outline'}
              </span>
              <span>{isBookmarked ? 'Saved to Doubt Clinic' : 'Bookmark for Doubt Clinic'}</span>
            </button>

            <a
              href="https://www.youtube.com/@apollocbseclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer text-center"
            >
              <span>Watch on YouTube</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
