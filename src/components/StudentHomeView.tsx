import React from 'react';
import { useApp } from '../context/AppContext';

export const StudentHomeView: React.FC = () => {
  const { 
    setPerspective, 
    openPassport, 
    openCurriculumExplorer, 
    openFacultySection, 
    openConceptLessons, 
    openAdmissions,
    profile
  } = useApp();

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-lg max-w-lg mx-auto">
      {/* Welcome & Greeting Card */}
      <section className="flex flex-col gap-space-sm pt-space-xs">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-[#d3e4ff] text-[#001c38]">
            <span className="w-2 h-2 rounded-full bg-[#3b5a7f] animate-pulse"></span>
            <span className="font-label-stamp text-label-stamp tracking-wider uppercase font-bold">
              Student Perspective
            </span>
          </div>
          <button 
            aria-label="Switch to Parent Mode" 
            className="inline-flex items-center gap-1 text-[#44474c] hover:text-[#1a1c1c] transition-colors py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => setPerspective('parent')}
            type="button"
          >
            <span className="font-label-md text-label-md font-semibold">Switch to Parent</span>
            <span className="material-symbols-outlined text-[16px]">sync_alt</span>
          </button>
        </div>

        <div className="flex flex-col mt-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
            Where would you like to begin?
          </h1>
          <p className="font-body-md text-body-md text-[#44474c] mt-1 leading-relaxed">
            Build your learning passport, clarify challenging concepts, or plan your next step with Apollo.
          </p>
        </div>
      </section>

      {/* 1. Signature Learning Passport Preview Card */}
      <section className="relative w-full rounded-2xl bg-white shadow-sm border border-[#e8e8e7] overflow-hidden flex flex-col hover:shadow-md transition-shadow">
        {/* Tactile Document Binding Strip (Left Spine Accent) */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#426086] flex flex-col justify-around py-4 items-center z-10">
          <span className="w-1 h-3 rounded-full bg-white/40"></span>
          <span className="w-1 h-3 rounded-full bg-white/40"></span>
          <span className="w-1 h-3 rounded-full bg-white/40"></span>
          <span className="w-1 h-3 rounded-full bg-white/40"></span>
        </div>

        <div className="pl-6 pr-space-md py-space-md flex flex-col gap-space-md">
          {/* Card Top Dossier Header */}
          <div className="flex items-start justify-between gap-space-xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#e8e8e7] flex items-center justify-center flex-shrink-0 text-[#1a1c1c]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold tracking-wider">
                  Academic Dossier
                </span>
                <span className="font-headline-sm text-headline-sm text-[#1a1c1c] truncate font-bold">
                  My Learning Passport
                </span>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded bg-[#eeeeed] text-[#44474c] flex-shrink-0 border border-[#c5c6cd]/30">
              <span className="font-label-stamp text-[10px] uppercase font-semibold">
                Preview Mode • Guest
              </span>
            </div>
          </div>

          {/* Cohort & Grade Identifier */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#d3e4ff] text-[#001c38] font-label-md text-label-md font-semibold">
              {profile.grade} • {profile.board} (NCERT)
            </span>
            <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase tracking-wider">
              {profile.session}
            </span>
          </div>

          {/* Quotation / Goal Note */}
          <div className="bg-[#f3f4f3] rounded-xl p-space-sm flex flex-col gap-1 border border-[#e8e8e7]">
            <span className="font-label-stamp text-[10px] text-[#426086] uppercase tracking-widest font-bold">
              Personal Learning Intent
            </span>
            <p className="font-body-md text-body-md text-[#1a1c1c] italic leading-snug">
              “{profile.intent}”
            </p>
          </div>

          {/* Key Focus Subjects */}
          <div className="flex flex-col gap-1.5">
            <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold">
              Subjects in Module
            </span>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-[#eeeeed] text-[#1a1c1c] font-body-sm text-body-sm font-medium">
                Mathematics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#eeeeed] text-[#1a1c1c] font-body-sm text-body-sm font-medium">
                Science
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#eeeeed] text-[#1a1c1c] font-body-sm text-body-sm font-medium">
                English
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#eeeeed] text-[#1a1c1c] font-body-sm text-body-sm font-medium">
                Social Science
              </span>
            </div>
          </div>

          {/* Passport Action Button */}
          <div className="pt-space-xs">
            <button 
              className="w-full min-h-[44px] rounded-xl bg-[#000000] hover:bg-[#1a1c1c] text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-[0.99] cursor-pointer font-bold"
              onClick={openPassport}
              type="button"
            >
              <span>Continue Building Passport</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. 'Choose Your Next Step' 2x2 Interactive Grid */}
      <section className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
            Choose Your Next Step
          </h2>
          <span className="font-label-stamp text-label-stamp text-[#44474c] uppercase font-bold">
            Quick Actions
          </span>
        </div>

        <div className="grid grid-cols-2 gap-space-sm">
          {/* Card A: Explore Classes 6-10 */}
          <button 
            className="flex flex-col justify-between p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] hover:border-[#426086]/50 hover:shadow-md transition-all min-h-[140px] text-left cursor-pointer group"
            onClick={() => openCurriculumExplorer()}
            type="button"
          >
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#eeeeed] flex items-center justify-center text-[#1a1c1c] group-hover:bg-[#000000] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">auto_stories</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-[#1a1c1c] leading-tight font-bold">
                Explore Classes 6–10
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#44474c] mt-2">
              CBSE &amp; GSEB syllabus roadmaps
            </p>
          </button>

          {/* Card B: Meet the Faculty */}
          <button 
            className="flex flex-col justify-between p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] hover:border-[#426086]/50 hover:shadow-md transition-all min-h-[140px] text-left cursor-pointer group"
            onClick={openFacultySection}
            type="button"
          >
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#d3e4ff] flex items-center justify-center text-[#001c38] group-hover:bg-[#426086] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">supervisor_account</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-[#1a1c1c] leading-tight font-bold">
                Meet the Faculty
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#44474c] mt-2">
              Deepak Sir &amp; Jyoti Ma'am
            </p>
          </button>

          {/* Card C: Concept Lessons */}
          <button 
            className="flex flex-col justify-between p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] hover:border-[#ba1a1a]/50 hover:shadow-md transition-all min-h-[140px] text-left cursor-pointer group"
            onClick={openConceptLessons}
            type="button"
          >
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#ffdad6] flex items-center justify-center text-[#93000a] group-hover:bg-[#ba1a1a] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-[#1a1c1c] leading-tight font-bold">
                Concept Lessons
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#44474c] mt-2">
              Free NCERT video breakdowns
            </p>
          </button>

          {/* Card D: Admissions */}
          <button 
            className="flex flex-col justify-between p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] hover:border-[#426086]/50 hover:shadow-md transition-all min-h-[140px] text-left cursor-pointer group"
            onClick={openAdmissions}
            type="button"
          >
            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#eeeeed] flex items-center justify-center text-[#1a1c1c] group-hover:bg-[#000000] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-[#1a1c1c] leading-tight font-bold">
                Admissions 2024
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#44474c] mt-2">
              Simple 3-step application flow
            </p>
          </button>
        </div>
      </section>

      {/* 3. Official YouTube Channel Highlight Card */}
      <section className="flex flex-col rounded-2xl bg-[#000000] text-white overflow-hidden shadow-sm border border-[#2f3130]">
        <div className="p-space-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/10">
              <span className="material-symbols-outlined text-[14px]">smart_display</span>
              <span className="font-label-stamp text-[10px] uppercase tracking-wider font-bold">
                Free Video Library
              </span>
            </div>
            <span className="material-symbols-outlined text-[#d3e4ff] text-[20px]">open_in_new</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-headline-sm text-headline-sm text-white font-bold">
              Apollo CBSE Classes YouTube
            </h3>
            <p className="font-body-sm text-body-sm text-white/80 leading-relaxed">
              Free concept explainers &amp; NCERT chapter insights by Deepak Sir &amp; Jyoti Ma'am. Watch at your own pace anytime.
            </p>
          </div>

          <div className="pt-1 flex flex-col sm:flex-row gap-2">
            <button 
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-space-md rounded-xl bg-[#426086] hover:bg-[#354f6f] text-white font-label-md text-label-md w-full transition-transform active:scale-[0.99] cursor-pointer font-semibold"
              onClick={openConceptLessons}
              type="button"
            >
              <span>Explore In-App Lessons</span>
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            </button>
            <a 
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-space-md rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md w-full transition-all cursor-pointer font-semibold"
              href="https://www.youtube.com/@apollocbseclasses" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span>Open YouTube Channel</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Faculty Preview Section */}
      <section className="flex flex-col rounded-2xl bg-white shadow-sm border border-[#e8e8e7] overflow-hidden" id="faculty-section">
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
            <span className="font-label-stamp text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-white/95 text-[#1a1c1c] font-bold shadow-xs">
              Co-Founders &amp; Mentors
            </span>
            <span className="font-label-md text-label-md text-white flex items-center gap-1 font-medium drop-shadow-sm">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              New Ranip, Ahmedabad
            </span>
          </div>
        </div>

        <div className="p-space-md flex flex-col gap-space-sm">
          <div className="flex flex-col">
            <h3 className="font-headline-sm text-headline-sm text-[#1a1c1c] font-bold">
              Deepak Savant Sir &amp; Jyoti Savant Ma'am
            </h3>
            <p className="font-body-sm text-body-sm text-[#426086] font-semibold mt-0.5">
              MSc (Physics &amp; Math) • MA (English &amp; Pedagogy)
            </p>
          </div>

          <p className="font-body-md text-body-md text-[#44474c] leading-relaxed">
            Passionate mentoring right in New Ranip. Focused on clear conceptual fundamentals without rote memorization or undue academic stress.
          </p>

          <div className="flex items-center justify-between pt-space-xs border-t-0 bg-[#f3f4f3] rounded-xl p-2.5 border border-[#e8e8e7]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px]">verified_user</span>
              <span className="font-label-md text-label-md text-[#1a1c1c] font-semibold">
                Personal doubt-clearing sessions
              </span>
            </div>
            <span className="font-label-stamp text-[10px] text-[#44474c] uppercase font-bold tracking-wider">
              Small Batches
            </span>
          </div>

          <button 
            className="w-full mt-1 py-2 text-center text-xs font-semibold text-[#426086] hover:text-[#1a1c1c] transition-colors cursor-pointer"
            onClick={openFacultySection}
          >
            Read teaching ethos &amp; schedule walk-in visit →
          </button>
        </div>
      </section>

      {/* Subtle Guidance Footer Notice */}
      <div className="flex items-center justify-center gap-2 py-space-xs text-[#44474c]">
        <span className="material-symbols-outlined text-[16px] text-[#426086]">school</span>
        <span className="font-body-sm text-body-sm font-medium">
          Guiding CBSE &amp; GSEB students with patience &amp; care.
        </span>
      </div>
    </div>
  );
};
