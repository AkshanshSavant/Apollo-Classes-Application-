import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ParentHomeView: React.FC = () => {
  const { 
    profile, 
    setPerspective, 
    openPassport, 
    openCurriculumExplorer, 
    openFacultySection,
    showToast 
  } = useApp();

  const [isConsultationBooked, setIsConsultationBooked] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Tomorrow 5:30 PM');
  const [parentNote, setParentNote] = useState('');
  const [isEncouragementSent, setIsEncouragementSent] = useState(false);

  const handleSendEncouragement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentNote.trim()) return;
    setIsEncouragementSent(true);
    showToast('Encouragement note added to Aarav’s Passport!');
    setTimeout(() => {
      setParentNote('');
      setIsEncouragementSent(false);
    }, 3000);
  };

  const handleBookConsultation = () => {
    setIsConsultationBooked(true);
    showToast(`Walk-in counselling confirmed for ${selectedDay}!`);
  };

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-lg max-w-lg mx-auto">
      {/* Header Banner */}
      <section className="flex flex-col gap-space-sm pt-space-xs">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-[#d3e4ff] text-[#001c38]">
            <span className="w-2 h-2 rounded-full bg-[#426086] animate-pulse"></span>
            <span className="font-label-stamp text-label-stamp tracking-wider uppercase font-bold">
              Parent Oversight Hub
            </span>
          </div>
          <button 
            aria-label="Switch to Student Mode" 
            className="inline-flex items-center gap-1 text-[#44474c] hover:text-[#1a1c1c] transition-colors py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => setPerspective('student')}
            type="button"
          >
            <span className="font-label-md text-label-md font-semibold">Switch to Student</span>
            <span className="material-symbols-outlined text-[16px]">sync_alt</span>
          </button>
        </div>

        <div className="flex flex-col mt-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
            Guiding Aarav with Transparency &amp; Care
          </h1>
          <p className="font-body-md text-body-md text-[#44474c] mt-1 leading-relaxed">
            Direct insight into classroom progress, NCERT board readiness, and personalized faculty mentorship.
          </p>
        </div>
      </section>

      {/* 1. Verified Student Academic Snapshot */}
      <section className="relative w-full rounded-2xl bg-white shadow-sm border border-[#e8e8e7] overflow-hidden flex flex-col p-space-md gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#eeeeed]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#d3e4ff] text-[#001c38] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
                {profile.name}’s Active Folio
              </span>
              <p className="text-xs text-[#44474c]">Folio No: {profile.folioNo} • {profile.grade} CBSE</p>
            </div>
          </div>
          <button
            onClick={openPassport}
            className="text-xs font-bold text-[#426086] hover:underline flex items-center gap-0.5"
          >
            Open Passport →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-xl bg-[#f3f4f3] border border-[#e8e8e7]">
            <span className="text-[#44474c] block">Latest Milestone:</span>
            <span className="font-bold text-[#1a1c1c] line-clamp-1">Coordinate Geometry</span>
            <span className="inline-block mt-1 text-[10px] font-bold text-[#426086] bg-[#d3e4ff] px-1.5 py-0.5 rounded">
              TEACHER VERIFIED
            </span>
          </div>
          <div className="p-2 rounded-xl bg-[#f3f4f3] border border-[#e8e8e7]">
            <span className="text-[#44474c] block">Classroom Next Action:</span>
            <span className="font-bold text-[#1a1c1c] line-clamp-1">Question Sheet with Deepak Sir</span>
            <span className="inline-block mt-1 text-[10px] font-bold text-[#44474c] bg-[#eeeeed] px-1.5 py-0.5 rounded">
              NEXT SESSION
            </span>
          </div>
        </div>

        {/* Send Parent Encouragement Note */}
        <form onSubmit={handleSendEncouragement} className="mt-1 flex flex-col gap-1.5 pt-2 border-t border-[#eeeeed]">
          <label className="text-xs font-semibold text-[#1a1c1c] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#426086]">favorite</span>
            Pin a Parent Note to Aarav’s Desk:
          </label>
          <div className="flex gap-1.5">
            <input 
              type="text"
              placeholder="e.g. Keep up the great focus in Math!"
              value={parentNote}
              onChange={(e) => setParentNote(e.target.value)}
              className="flex-1 text-xs p-2 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c]"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-[#426086] text-white text-xs font-semibold rounded-xl hover:bg-[#354f6f]"
            >
              Pin Note
            </button>
          </div>
          {isEncouragementSent && (
            <span className="text-xs text-emerald-700 font-medium">✓ Note successfully added to Aarav’s timeline.</span>
          )}
        </form>
      </section>

      {/* 2. Institutional Pillars & Guarantees */}
      <section className="flex flex-col gap-space-sm">
        <h2 className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
          Why Parents Choose Apollo Classes
        </h2>

        <div className="flex flex-col gap-2.5">
          <div className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d3e4ff] text-[#001c38] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">groups</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
                Strict Batch Cap (Max 18 Students)
              </span>
              <p className="font-body-sm text-body-sm text-[#44474c] mt-0.5 leading-relaxed">
                No auditorium seating or crowded coaching factory floors. Every child is personally known by Deepak Sir and Jyoti Ma'am by name and learning speed.
              </p>
            </div>
          </div>

          <div className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#b3d1fd] text-[#001c38] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">forum</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
                Direct Faculty Access
              </span>
              <p className="font-body-sm text-body-sm text-[#44474c] mt-0.5 leading-relaxed">
                Parents communicate directly with Deepak Sir (Physics &amp; Math) and Jyoti Ma'am (English &amp; Pedagogy), not tele-callers or administrative intermediaries.
              </p>
            </div>
          </div>

          <div className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e8e8e7] text-[#1a1c1c] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
                Zero Hidden Charges Policy
              </span>
              <p className="font-body-sm text-body-sm text-[#44474c] mt-0.5 leading-relaxed">
                All mock test papers, printed chapter dossiers, and doubt clinics are included in the term fee. No unexpected quarterly fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Book a Walk-In Campus Visit */}
      <section className="flex flex-col rounded-2xl bg-white shadow-sm border border-[#e8e8e7] p-space-md gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[20px]">calendar_month</span>
            <h3 className="font-headline-sm text-headline-sm font-bold text-[#1a1c1c]">
              Schedule Walk-In Campus Consultation
            </h3>
          </div>
          <span className="font-label-stamp text-[10px] bg-[#d3e4ff] text-[#001c38] px-2 py-0.5 rounded font-bold">
            NEW RANIP
          </span>
        </div>

        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
          Meet Deepak Sir &amp; Jyoti Ma'am in person at our New Ranip centre to review your child’s textbooks, syllabus requirements, and target timeline.
        </p>

        {isConsultationBooked ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex flex-col gap-1">
            <span className="font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Consultation Reserved: {selectedDay}
            </span>
            <span>Location: Apollo Classes, New Ranip, Ahmedabad. Deepak Sir and Jyoti Ma'am look forward to meeting you.</span>
            <button 
              onClick={() => setIsConsultationBooked(false)}
              className="mt-1 text-emerald-900 underline text-left cursor-pointer"
            >
              Change appointment time
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 pt-1">
            <label className="text-xs font-semibold text-[#1a1c1c]">Select Preferred Walk-In Slot:</label>
            <div className="grid grid-cols-2 gap-2">
              {['Today 6:00 PM', 'Tomorrow 5:30 PM', 'Saturday 11:00 AM', 'Sunday 4:30 PM'].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedDay(slot)}
                  className={`p-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedDay === slot 
                      ? 'bg-[#426086] text-white border-[#426086] shadow-xs' 
                      : 'bg-[#f3f4f3] text-[#1a1c1c] border-[#c5c6cd]/50 hover:bg-[#e8e8e7]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleBookConsultation}
              className="mt-2 w-full h-11 bg-[#000000] hover:bg-[#1a1c1c] text-white font-label-lg rounded-xl flex items-center justify-center gap-2 font-bold shadow-xs cursor-pointer"
            >
              <span>Confirm Walk-in Meeting</span>
              <span className="material-symbols-outlined text-[18px]">event_available</span>
            </button>
          </div>
        )}
      </section>

      {/* 4. Leadership Faculty Card */}
      <section className="flex flex-col rounded-2xl bg-white shadow-sm border border-[#e8e8e7] overflow-hidden">
        <div className="relative w-full aspect-[16/9] bg-[#eeeeed]">
          <img 
            alt="Deepak Savant Sir and Jyoti Savant Ma'am" 
            className="w-full h-full object-cover object-top"
            src="/assets/faculty-mentors.jpg"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('googleusercontent')) {
                target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCANUsUVTJL5K0anR5oVNdKAbjBQsYkvLnCeib4aWLLyHDHBly2JNW_kURJ0mfMybkZ85rQlCtRvnlXVDt8TwuKE7T4kB68KbzyiLVxhEkFkr6CA0GBJWMCFpAFlbOKbkWO-gtxuzb2A5qRi0wAz0avCrN-4FBpUAsMSLFv1bzkhyDMh599A0atX1J_fm3vp6KH-c92rnlnNYLGS8TZqoAIjTZo8feuvxH0nbbdVMesE7BWrzTYF4_KBq1R4LkBrg5R8jA";
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="font-label-stamp text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-white text-[#1a1c1c] font-bold shadow-xs">
              Mentorship Board
            </span>
            <span className="font-label-md text-label-md text-white font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">pin_drop</span>
              New Ranip, Ahmedabad
            </span>
          </div>
        </div>

        <div className="p-space-md flex flex-col gap-2">
          <span className="font-headline-sm text-headline-sm font-bold text-[#1a1c1c]">
            Deepak Savant Sir &amp; Jyoti Savant Ma'am
          </span>
          <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
            Over three decades of combined teaching mastery. Deepak Sir specializes in removing math anxiety and building intuitive physics fundamentals; Jyoti Ma'am nurtures analytical reading, grammar precision, and confident self-expression.
          </p>
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => openCurriculumExplorer()}
              className="flex-1 py-2 rounded-xl bg-[#eeeeed] hover:bg-[#e8e8e7] text-xs font-bold text-[#1a1c1c] text-center"
            >
              View 6–10 Syllabus
            </button>
            <button
              onClick={openFacultySection}
              className="flex-1 py-2 rounded-xl bg-[#426086] hover:bg-[#354f6f] text-xs font-bold text-white text-center"
            >
              Faculty Bio &amp; Centre
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
