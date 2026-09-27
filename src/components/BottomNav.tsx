import React from 'react';
import { useApp } from '../context/AppContext';
import { Tab } from '../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const navItems: { tab: Tab; label: string; icon: string; hasBadge?: boolean }[] = [
    { tab: 'home', label: 'Home', icon: 'dashboard' },
    { tab: 'explore', label: 'Explore', icon: 'menu_book' },
    { tab: 'passport', label: 'Passport', icon: 'verified', hasBadge: true },
    { tab: 'apollo', label: 'Apollo', icon: 'account_balance' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#f9f9f8]/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] border-t border-[#e8e8e7]">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-space-xs">
        {navItems.map((item) => {
          const isActive = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] h-full transition-colors relative cursor-pointer ${
                isActive ? 'text-[#000000] font-semibold' : 'text-[#44474c] hover:text-[#1a1c1c]'
              }`}
              onClick={() => {
                setActiveTab(item.tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              type="button"
            >
              <span className="relative">
                <span 
                  className="material-symbols-outlined text-[22px]"
                  style={isActive && item.tab === 'passport' ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {item.hasBadge && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#426086] ring-2 ring-white"></span>
                )}
              </span>
              <span className={`font-label-md text-[11px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-5 h-0.5 rounded-full bg-[#000000]"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
