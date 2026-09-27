import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SharePassportModal: React.FC = () => {
  const { isShareModalOpen, setIsShareModalOpen, profile, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isShareModalOpen) return null;

  const shareUrl = `${window.location.origin}/#passport-${profile.folioNo.toLowerCase()}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    showToast('Passport link copied to clipboard!');
    setTimeout(() => setCopied(false), 2400);
  };

  const handlePrintDossier = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-space-md shadow-2xl border border-[#c5c6cd]/50 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#eeeeed]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[20px]">share</span>
            <span className="font-bold text-sm text-[#1a1c1c]">Share Academic Passport</span>
          </div>
          <button 
            onClick={() => setIsShareModalOpen(false)}
            className="w-7 h-7 rounded-full bg-[#eeeeed] hover:bg-[#e8e8e7] flex items-center justify-center text-[#44474c] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center gap-2 pt-1">
          {/* Simulated QR Code */}
          <div className="w-28 h-28 p-2 rounded-2xl bg-[#f3f4f3] border-2 border-dashed border-[#c5c6cd] flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-[48px] text-[#426086]">qr_code_2</span>
            <span className="text-[9px] font-bold text-[#44474c] tracking-widest uppercase">
              SCAN FOLIO
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm text-[#1a1c1c]">{profile.name}</span>
            <span className="text-xs text-[#44474c]">Folio No. {profile.folioNo} • {profile.grade} CBSE</span>
          </div>
        </div>

        {/* Share Link Box */}
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#f3f4f3] border border-[#c5c6cd]">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="w-full text-xs bg-transparent text-[#1a1c1c] outline-none truncate"
          />
          <button
            onClick={handleCopyLink}
            className="px-2.5 py-1 bg-[#426086] hover:bg-[#354f6f] text-white rounded-lg text-xs font-semibold flex-shrink-0 cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Share Options */}
        <div className="flex flex-col gap-2 pt-1">
          <a
            href={`https://wa.me/?text=Hello!%20Check%20out%20my%20Apollo%20Classes%20Academic%20Passport%20(Folio%20${profile.folioNo}):%20${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Share via WhatsApp to Parent</span>
          </a>

          <button
            onClick={handlePrintDossier}
            className="w-full py-2.5 rounded-xl bg-[#eeeeed] hover:bg-[#e8e8e7] text-[#1a1c1c] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Official Dossier Folio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
