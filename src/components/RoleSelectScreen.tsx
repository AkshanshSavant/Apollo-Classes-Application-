import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const RoleSelectScreen: React.FC = () => {
  const { setPerspective, setHasChosenRole, setActiveTab, showToast } = useApp();
  const [selectedRole, setSelectedRole] = useState<'student' | 'parent' | null>(null);

  const handleSelectRole = (role: 'student' | 'parent') => {
    setSelectedRole(role);
    setPerspective(role);
    showToast(`Entering as ${role === 'student' ? 'Student' : 'Parent'}...`);
    
    setTimeout(() => {
      setHasChosenRole(true);
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleBrowseAsGuest = () => {
    setPerspective('student');
    setHasChosenRole(true);
    setActiveTab('explore');
    showToast('Browsing institute curriculum as guest');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col relative w-full bg-[#f9f9f8] min-h-screen pt-4 pb-12 px-margin-mobile max-w-lg mx-auto">
      {/* Top Header Branding */}
      <div className="flex flex-col items-center text-center mt-space-md mb-space-lg">
        {/* Insignia Emblem */}
        <div className="relative w-20 h-20 mb-space-sm rounded-2xl overflow-hidden shadow-md bg-white flex items-center justify-center p-2.5 border border-[#c5c6cd]/30">
          <img 
            alt="Apollo Classes Official Insignia" 
            className="w-full h-full object-contain"
            src="/assets/apollo-logo.png"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('googleusercontent')) {
                target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC7YTSHh3KyGjksU3wKCKCFeN8kygJGyI3mvF_n5hkgfT6KJ07xVgm7eYuVzxpO4YiIs_s5g9_at8jUC6wWE9T1XOl0M8RP-Rrtce3qsw4ZA8GS7p_nY7_QI_7JYRzhSLudxM35--cAJ8wh01xkVD5k9AhLIrXZNoWAHMzXKoU49bw6eRUeJ5uqp923nxarATvBI12LMMXohhN-A8Ax2NJ6_cRbWMkNk_ebk7NiAnFoozWNS6qa_Ow_qqCXPNTEkbD1YoY";
              }
            }}
          />
        </div>

        {/* Passport System Chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b3d1fd] text-[#3b5a7f] mb-space-xs shadow-xs border border-[#3b5a7f]/20">
          <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_stories
          </span>
          <span className="font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
            Academic Passport System
          </span>
        </div>

        <p className="font-label-md text-label-md text-[#426086] font-semibold tracking-wide">
          Understand clearly. Learn confidently.
        </p>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] mt-space-sm font-bold text-center">
          How would you like to explore Apollo?
        </h1>

        <p className="font-body-md text-body-md text-[#44474c] max-w-sm mt-1.5 text-center leading-relaxed">
          One learning passport. Two thoughtful perspectives. Choose your view below—you can seamlessly switch anytime.
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="flex flex-col gap-space-md w-full">
        {/* Student Perspective Card */}
        <div 
          className={`perspective-card relative overflow-hidden bg-white rounded-2xl p-space-lg shadow-sm border border-[#e8e8e7] transition-all duration-300 hover:shadow-md ${
            selectedRole === 'parent' ? 'opacity-60 scale-[0.99]' : ''
          }`}
          id="card-student"
        >
          {/* Left tactile border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#bac7e1]"></div>

          <div className="flex items-start justify-between gap-3 mb-space-md pl-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#d6e3fe] flex items-center justify-center text-[#0e1c2f] shadow-xs">
                <span className="material-symbols-outlined text-[26px]">menu_book</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-[#3a475c] font-label-stamp text-[10px] uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#0e1c2f] inline-block"></span>
                  Independent Desk
                </div>
                <h2 className="font-headline-md text-headline-md text-[#1a1c1c] font-bold">
                  I am a Student
                </h2>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#f3f4f3] flex items-center justify-center text-[#426086]">
              <span className="material-symbols-outlined text-[20px]">explore</span>
            </div>
          </div>

          {/* Student Banner Image */}
          <div className="mb-space-md rounded-xl overflow-hidden relative shadow-xs h-32 bg-[#eeeeed]">
            <img 
              alt="Focused student studying" 
              className="w-full h-full object-cover"
              src="/assets/student-hero.jpg"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC28VTwyRKc3R5WzliDu-RbFWCjgDniAgDckpbeuuvX_amVXB0ZAJEscVHT9u-2DukjlAtBvfSDIKgAgahhsB3eIh7ioTnCrnV1YV3hKpcPyNTg7Onse6X6YfyRoqMJuPU3S3FkvNA-MYIMmr7W5PpHyRtLqkSaHHq8u-xXkizCVqppJvReeQ0n2mOYKoe72qDMPWqqm2U9GdKfHIrgtG4hkkmGbZBxGdbwIMSvXUQBKalBpC19dgpWGg";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/85 via-transparent to-transparent flex items-end p-3">
              <span className="font-label-stamp text-label-stamp text-white uppercase tracking-wider font-bold">
                Class 6–10 Mastery Modules
              </span>
            </div>
          </div>

          <p className="font-body-md text-body-md text-[#44474c] mb-space-md leading-relaxed">
            Curious, focused, and goal-driven. Craft your academic journey with direct syllabus tools:
          </p>

          <ul className="flex flex-col gap-2.5 mb-space-lg">
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Core Subjects:</strong> Maths, Science, English &amp; Social Science
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                verified_user
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Learning Passport:</strong> Track chapters, mock scores &amp; official milestone stamps
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                play_circle
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Official Concept Videos:</strong> Instant curated YouTube video lectures by chapter
              </span>
            </li>
          </ul>

          <button 
            className="w-full h-11 bg-[#000000] hover:bg-[#1a1c1c] text-white rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform cursor-pointer font-bold"
            onClick={() => handleSelectRole('student')}
            type="button"
          >
            <span>Enter as Student</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Parent Perspective Card */}
        <div 
          className={`perspective-card relative overflow-hidden bg-white rounded-2xl p-space-lg shadow-sm border border-[#e8e8e7] transition-all duration-300 hover:shadow-md ${
            selectedRole === 'student' ? 'opacity-60 scale-[0.99]' : ''
          }`}
          id="card-parent"
        >
          {/* Left tactile border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d3e4ff]"></div>

          <div className="flex items-start justify-between gap-3 mb-space-md pl-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#d3e4ff] flex items-center justify-center text-[#001c38] shadow-xs">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-[#29486d] font-label-stamp text-[10px] uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#426086] inline-block"></span>
                  Parent Oversight Hub
                </div>
                <h2 className="font-headline-md text-headline-md text-[#1a1c1c] font-bold">
                  I am a Parent / Guardian
                </h2>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#f3f4f3] flex items-center justify-center text-[#426086]">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
          </div>

          {/* Parent Banner Image */}
          <div className="mb-space-md rounded-xl overflow-hidden relative shadow-xs h-32 bg-[#eeeeed]">
            <img 
              alt="Parent and daughter reviewing academic report" 
              className="w-full h-full object-cover"
              src="/assets/parent-hero.jpg"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBLMRrhOdsqSH97ZgcEZde31P0vui-5iivYAQaa_SGZQulsvAu8ZG0be5U9wjCbsfztGLDLfDDe3o9v7JqDYhTZyoS_cU_CQvsbq5sxgW40SPAGLCqh567faMeWEgO87wd1RUiyesR4ImsasVlcENsGJxLA7z0Be28mfJ9kQ2U2H-lRyhbCrjIuX-nVEnopbDL6SLZ8v7sgaKiQEE3ScrztwQZPDYT8_nqHfcE30QeP0nsM8F2dFJZ4ZA";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/85 via-transparent to-transparent flex items-end p-3">
              <span className="font-label-stamp text-label-stamp text-white uppercase tracking-wider font-bold">
                CBSE &amp; GSEB (NCERT) Alignment
              </span>
            </div>
          </div>

          <p className="font-body-md text-body-md text-[#44474c] mb-space-md leading-relaxed">
            Transparent, measured, and supportive. Everything you need to evaluate classroom rigor and pastoral care:
          </p>

          <ul className="flex flex-col gap-2.5 mb-space-lg">
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                workspace_premium
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Leadership Faculty:</strong> Deepak Savant Sir (M.Sc.) &amp; Jyoti Savant Ma'am (M.A.)
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                assignment_turned_in
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Board Coverage:</strong> Rigorous 6th–10th NCERT foundation for both CBSE &amp; GSEB
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[#1a1c1c]">
              <span className="material-symbols-outlined text-[18px] text-[#426086] mt-0.5 flex-shrink-0">
                pin_drop
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-semibold text-[#1a1c1c]">Classroom Transparency:</strong> Walk-in schedule, fee terms &amp; New Ranip campus details
              </span>
            </li>
          </ul>

          <button 
            className="w-full h-11 bg-[#426086] hover:bg-[#354f6f] text-white rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform cursor-pointer font-bold"
            onClick={() => handleSelectRole('parent')}
            type="button"
          >
            <span>Enter as Parent / Guardian</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Direct Overview Link */}
      <div className="mt-space-lg flex flex-col items-center text-center">
        <button 
          className="inline-flex items-center gap-1.5 py-2 px-3 text-[#426086] hover:text-[#1a1c1c] font-label-lg text-label-lg transition-colors cursor-pointer font-semibold"
          onClick={handleBrowseAsGuest}
          type="button"
        >
          <span>Just exploring? Browse institute overview without selecting a role</span>
          <span className="material-symbols-outlined text-[16px]">north_east</span>
        </button>
        <p className="font-body-sm text-body-sm text-[#44474c] max-w-xs mt-1.5 leading-relaxed">
          Browsing classes, faculty, and contact information is open to all. Parent linking to verified student passports requires authenticated enrollment.
        </p>
      </div>

      {/* Verified Institutional Footer Badge */}
      <div className="mt-space-xl bg-[#e8e8e7] rounded-2xl p-space-md flex flex-col gap-2.5 shadow-xs border border-[#c5c6cd]/40">
        <div className="flex items-center gap-2 text-[#1a1c1c]">
          <span className="material-symbols-outlined text-[#426086] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_police
          </span>
          <span className="font-headline-sm text-headline-sm font-bold">
            Apollo Classes Official Registry
          </span>
        </div>
        <div className="flex flex-col gap-1.5 font-body-sm text-body-sm text-[#44474c]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#426086]">class</span>
            <span>Classes 6th–10th • English Medium • CBSE &amp; GSEB (NCERT)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#426086]">location_on</span>
            <span>New Ranip, Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
    </div>
  );
};
