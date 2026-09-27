import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { RoleSelectScreen } from './components/RoleSelectScreen';
import { StudentHomeView } from './components/StudentHomeView';
import { ParentHomeView } from './components/ParentHomeView';
import { PassportView } from './components/PassportView';
import { ExploreView } from './components/ExploreView';
import { ConceptLessonsView } from './components/ConceptLessonsView';
import { FacultyInstituteView } from './components/FacultyInstituteView';
import { AdmissionModal } from './components/AdmissionModal';
import { AddGoalModal } from './components/AddGoalModal';
import { SharePassportModal } from './components/SharePassportModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';

const MainLayout: React.FC = () => {
  const { hasChosenRole, perspective, activeTab, toastMessage } = useApp();

  // If user hasn't selected a role or clicked the gateway toggle, render the official Role Gate (Image 5)
  if (!hasChosenRole) {
    return (
      <main className="min-h-screen bg-[#f9f9f8] flex flex-col justify-center">
        <RoleSelectScreen />
        {toastMessage && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2f3130] text-[#f1f1f0] px-4 py-2 rounded-full font-label-md text-xs flex items-center gap-2 shadow-xl z-50">
            <span className="material-symbols-outlined text-[16px] text-[#bac7e1]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </main>
    );
  }

  return (
    <div className="bg-[#f9f9f8] font-body-md text-[#1a1c1c] flex flex-col min-h-screen">
      {/* Top Fixed Header with Perspective Switcher */}
      <Header />

      {/* Main Dynamic Viewport Container */}
      <main className="flex flex-col relative w-full pt-20 pb-24 bg-[#f9f9f8] min-h-screen">
        {activeTab === 'home' && (
          perspective === 'student' ? <StudentHomeView /> : <ParentHomeView />
        )}
        {activeTab === 'passport' && <PassportView />}
        {activeTab === 'explore' && <ExploreView />}
        {activeTab === 'lessons' && <ConceptLessonsView />}
        {activeTab === 'apollo' && <FacultyInstituteView />}
      </main>

      {/* Bottom 4-Tab Navigation */}
      <BottomNav />

      {/* Interactive Modals */}
      <AdmissionModal />
      <AddGoalModal />
      <SharePassportModal />
      <VideoPlayerModal />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#2f3130] text-[#f1f1f0] px-4 py-2 rounded-full font-label-md text-xs flex items-center gap-2 shadow-2xl z-50 border border-white/10 animate-fade-in">
          <span className="material-symbols-outlined text-[16px] text-[#b3d1fd]">verified</span>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
