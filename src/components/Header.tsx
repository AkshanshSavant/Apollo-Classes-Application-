import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const { perspective, setPerspective, activeTab, returnToRoleGate, profile } = useApp();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const getSubtitle = () => {
    if (activeTab === 'passport') return 'Learning Passport';
    if (activeTab === 'explore') return 'Syllabus Roadmaps';
    if (activeTab === 'apollo') return 'Faculty & Institute';
    if (activeTab === 'lessons') return 'Concept Video Library';
    return perspective === 'student' ? 'Student Home' : 'Parent Oversight';
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#f9f9f8]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e8e8e7]">
      <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm max-w-5xl mx-auto">
        {/* Brand & Logo */}
        <div 
          className="flex items-center gap-2.5 min-w-0 cursor-pointer"
          onClick={() => returnToRoleGate()}
          title="Click to view Role Gate / Welcome screen"
        >
          <div className="h-9 w-9 rounded-lg bg-[#0e1c2f] flex items-center justify-center p-1 flex-shrink-0 shadow-sm overflow-hidden">
            <img 
              alt="Apollo Classes Logo" 
              className="h-full w-full object-contain"
              src="/assets/apollo-logo.png"
              onError={(e) => {
                // Fallback to Google CDN or styled letter
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC7YTSHh3KyGjksU3wKCKCFeN8kygJGyI3mvF_n5hkgfT6KJ07xVgm7eYuVzxpO4YiIs_s5g9_at8jUC6wWE9T1XOl0M8RP-Rrtce3qsw4ZA8GS7p_nY7_QI_7JYRzhSLudxM35--cAJ8wh01xkVD5k9AhLIrXZNoWAHMzXKoU49bw6eRUeJ5uqp923nxarATvBI12LMMXohhN-A8Ax2NJ6_cRbWMkNk_ebk7NiAnFoozWNS6qa_Ow_qqCXPNTEkbD1YoY";
                }
              }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-headline-sm text-[#1a1c1c] truncate tracking-tight font-bold">
              Apollo Classes
            </span>
            <span className="font-label-stamp text-[10px] text-[#44474c] truncate uppercase tracking-widest font-semibold">
              {getSubtitle()}
            </span>
          </div>
        </div>

        {/* Perspective Switcher & Profile Avatar */}
        <div className="flex items-center gap-space-sm flex-shrink-0">
          <div 
            aria-label="Perspective Selector" 
            className="inline-flex items-center bg-[#e8e8e7] rounded-full p-0.5 border border-[#c5c6cd]/40" 
            role="group"
          >
            <button 
              aria-label="Student Perspective" 
              className={`min-h-[30px] px-3 rounded-full font-label-md text-label-md flex items-center justify-center transition-all ${
                perspective === 'student'
                  ? 'text-white bg-[#000000] shadow-sm font-semibold'
                  : 'text-[#44474c] hover:text-[#1a1c1c]'
              }`} 
              type="button"
              onClick={() => setPerspective('student')}
            >
              {perspective === 'student' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3d1fd] mr-1.5 animate-pulse"></span>
              )}
              <span>Student</span>
            </button>
            <button 
              aria-label="Parent Perspective" 
              className={`min-h-[30px] px-3 rounded-full font-label-md text-label-md flex items-center justify-center transition-all ${
                perspective === 'parent'
                  ? 'text-white bg-[#426086] shadow-sm font-semibold'
                  : 'text-[#44474c] hover:text-[#1a1c1c]'
              }`} 
              type="button"
              onClick={() => setPerspective('parent')}
            >
              {perspective === 'parent' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#d3e4ff] mr-1.5 animate-pulse"></span>
              )}
              <span>Parent</span>
            </button>
          </div>

          {/* User Profile Avatar with drop trigger */}
          <div className="relative">
            <button 
              aria-label="Profile and options"
              className="w-8 h-8 rounded-full bg-[#000000] hover:bg-[#426086] flex items-center justify-center flex-shrink-0 text-white transition-colors cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#e8e8e7] p-3 z-50 flex flex-col gap-2">
                <div className="flex items-center gap-2 pb-2 border-b border-[#eeeeed]">
                  <div className="w-9 h-9 rounded-full bg-[#d6e3fe] text-[#0e1c2f] flex items-center justify-center font-bold text-sm">
                    {profile.name.charAt(0)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-sm text-[#1a1c1c] truncate">{profile.name}</span>
                    <span className="text-xs text-[#44474c]">{profile.grade} • {profile.board}</span>
                  </div>
                </div>

                <div className="text-xs text-[#44474c] px-1 py-0.5">
                  <span className="font-semibold">Folio:</span> {profile.folioNo}
                </div>

                <button
                  className="w-full text-left px-2 py-1.5 text-xs text-[#426086] hover:bg-[#f3f4f3] rounded flex items-center gap-1.5"
                  onClick={() => {
                    returnToRoleGate();
                    setIsProfileMenuOpen(false);
                  }}
                >
                  <span className="material-symbols-outlined text-[15px]">sync_alt</span>
                  Switch Role / Welcome Gateway
                </button>
                
                <button
                  className="w-full text-left px-2 py-1.5 text-xs text-[#ba1a1a] hover:bg-[#ffdad6]/40 rounded flex items-center gap-1.5"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-[15px]">close</span>
                  Close Menu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
