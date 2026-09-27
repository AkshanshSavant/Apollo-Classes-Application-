import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const FacultyInstituteView: React.FC = () => {
  const { openAdmissions, showToast } = useApp();
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryClass, setInquiryClass] = useState('Class 9');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setIsSubmitted(true);
    showToast('Inquiry received! Deepak Sir or Jyoti Ma’am will call you within 2 hours.');
  };

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-md max-w-lg mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col gap-1 pt-space-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d3e4ff] text-[#001c38] self-start">
          <span className="material-symbols-outlined text-[14px]">account_balance</span>
          <span className="font-label-stamp text-[10px] uppercase font-bold tracking-wider">
            About Apollo Classes
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#1a1c1c] font-bold">
          Mentorship &amp; Institution
        </h1>
        <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
          Empowering young minds for a brighter future through structured conceptual learning in New Ranip, Ahmedabad.
        </p>
      </div>

      {/* Faculty Card with Real Photo */}
      <div className="flex flex-col rounded-2xl bg-white shadow-sm border border-[#e8e8e7] overflow-hidden">
        <div className="relative w-full aspect-[16/10] bg-[#eeeeed]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="font-label-stamp text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-white text-[#1a1c1c] font-bold shadow-xs">
              Co-Founders &amp; Lead Educators
            </span>
            <span className="font-label-md text-label-md text-white font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              New Ranip, Ahmedabad
            </span>
          </div>
        </div>

        <div className="p-space-md flex flex-col gap-3">
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-base font-bold text-[#1a1c1c]">
              Deepak Savant Sir &amp; Jyoti Savant Ma'am
            </h2>
            <p className="font-body-sm text-body-sm text-[#426086] font-semibold mt-0.5">
              MSc (Physics &amp; Math) • MA (English &amp; Pedagogy)
            </p>
          </div>

          <p className="font-body-md text-body-md text-[#44474c] leading-relaxed">
            Apollo Classes was founded with a single uncompromising belief: <strong>every child can excel when conceptual fundamentals replace rote memorization.</strong> 
          </p>

          <div className="p-3 bg-[#f3f4f3] rounded-xl border border-[#e8e8e7] flex flex-col gap-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px] flex-shrink-0">check_circle</span>
              <span className="text-[#1a1c1c]">
                <strong>Deepak Sir (Physics &amp; Math):</strong> Master of visualizing complex algebraic equations, coordinate systems, and kinematic derivations.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px] flex-shrink-0">check_circle</span>
              <span className="text-[#1a1c1c]">
                <strong>Jyoti Ma'am (English &amp; Social Science):</strong> Champion of structured writing, active grammar acquisition, and empathetic student counseling.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Campus & Location Details */}
      <div className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[#1a1c1c]">
          <span className="material-symbols-outlined text-[#426086] text-[20px]">pin_drop</span>
          <h3 className="font-headline-sm text-sm font-bold">New Ranip Campus Information</h3>
        </div>

        <div className="flex flex-col gap-2 text-xs text-[#44474c]">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#1a1c1c] w-20 flex-shrink-0">Address:</span>
            <span>Apollo Classes, Near Ranip Cross Roads / GST Crossing, New Ranip, Ahmedabad, Gujarat 382480</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#1a1c1c] w-20 flex-shrink-0">Class Hours:</span>
            <span>Batch 1: 4:30 PM – 6:30 PM (Classes 6–8)<br />Batch 2: 6:30 PM – 8:30 PM (Classes 9–10)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#1a1c1c] w-20 flex-shrink-0">Doubt Clinic:</span>
            <span>Daily 6:30 PM – 7:30 PM (Free 1-on-1 assistance for enrolled students)</span>
          </div>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#eeeeed]">
          <a
            href="tel:+919876543210"
            className="py-2.5 px-3 rounded-xl bg-[#eeeeed] hover:bg-[#e8e8e7] text-xs font-bold text-[#1a1c1c] flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Call Campus</span>
          </a>
          <a
            href="https://wa.me/919876543210?text=Hello%20Apollo%20Classes,%20I%20would%20like%20to%20inquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Direct Inquiry Form */}
      <div className="p-space-md rounded-2xl bg-white shadow-xs border border-[#e8e8e7] flex flex-col gap-2.5">
        <h3 className="font-headline-sm text-sm font-bold text-[#1a1c1c]">
          Book a Free Diagnostic Assessment
        </h3>
        <p className="font-body-sm text-body-sm text-[#44474c]">
          Let Deepak Sir &amp; Jyoti Ma'am evaluate your child’s conceptual gaps in a 30-minute stress-free consultation.
        </p>

        {isSubmitted ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex flex-col gap-1">
            <span className="font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Thank You! Diagnostic Assessment Requested
            </span>
            <span>We will contact you at {inquiryPhone} to finalize your consultation time.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-2 mt-1">
            <input
              type="text"
              placeholder="Student / Parent Full Name"
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              className="text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="Phone Number (10 digits)"
                value={inquiryPhone}
                onChange={(e) => setInquiryPhone(e.target.value)}
                className="text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
                required
              />
              <select
                value={inquiryClass}
                onChange={(e) => setInquiryClass(e.target.value)}
                className="text-xs p-2.5 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd] text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#426086]"
              >
                <option value="Class 6">Class 6 (CBSE/GSEB)</option>
                <option value="Class 7">Class 7 (CBSE/GSEB)</option>
                <option value="Class 8">Class 8 (CBSE/GSEB)</option>
                <option value="Class 9">Class 9 (CBSE/GSEB)</option>
                <option value="Class 10">Class 10 (CBSE/GSEB)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#000000] hover:bg-[#1a1c1c] text-white font-label-md text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer mt-1"
            >
              Request Free Diagnostic Session
            </button>
          </form>
        )}
      </div>

      {/* Admissions CTA */}
      <div className="p-space-md rounded-2xl bg-[#426086] text-white flex items-center justify-between shadow-xs">
        <div>
          <span className="font-bold text-sm block">Admissions 2024–25 Open</span>
          <span className="text-xs text-white/85">Limited to 18 students per batch</span>
        </div>
        <button
          onClick={openAdmissions}
          className="px-3 py-2 bg-white text-[#426086] hover:bg-slate-100 rounded-xl text-xs font-bold flex-shrink-0"
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
};
