import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AddGoalModal: React.FC = () => {
  const { isAddGoalModalOpen, setIsAddGoalModalOpen, activeSubject, addTopicToSubject, subjectGoals } = useApp();
  const [topicName, setTopicName] = useState('');

  if (!isAddGoalModalOpen) return null;

  const currentSubject = subjectGoals[activeSubject] || subjectGoals['math'];

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicName.trim()) return;
    addTopicToSubject(activeSubject, topicName.trim());
    setTopicName('');
    setIsAddGoalModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-space-md shadow-2xl border border-[#c5c6cd]/50 flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#eeeeed]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[20px]">add_circle</span>
            <span className="font-bold text-sm text-[#1a1c1c]">Add Personal Topic Goal</span>
          </div>
          <button 
            onClick={() => setIsAddGoalModalOpen(false)}
            className="w-7 h-7 rounded-full bg-[#eeeeed] hover:bg-[#e8e8e7] flex items-center justify-center text-[#44474c] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <form onSubmit={handleAdd} className="flex flex-col gap-3">
          <div className="text-xs text-[#44474c]">
            Active Subject: <strong className="text-[#1a1c1c]">{currentSubject.subjectName}</strong>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#1a1c1c] block mb-1">
              Enter Topic or Chapter to Master:
            </label>
            <input
              type="text"
              placeholder="e.g. Surface Areas & Volumes / Optics Ray Diagrams"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
              required
              autoFocus
            />
          </div>

          <div className="p-2.5 rounded-xl bg-[#d3e4ff]/30 text-xs text-[#001c38] flex items-start gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#426086]">info</span>
            <span>This will be added to your Term 1 roadmap and flagged for question review with Deepak Sir.</span>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-[#eeeeed]">
            <button
              type="button"
              onClick={() => setIsAddGoalModalOpen(false)}
              className="px-3 py-2 text-xs font-semibold text-[#44474c]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#000000] hover:bg-[#1a1c1c] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
            >
              Add to Passport
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
