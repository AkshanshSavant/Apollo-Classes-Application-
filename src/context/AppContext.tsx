import React, { createContext, useContext, useState, useEffect } from 'react';
import { Perspective, Tab, Milestone, SubjectGoals, StudentProfile, ConceptLesson } from '../types';
import { VIDEO_LESSONS } from '../data/videoLessons';

interface AppContextType {
  perspective: Perspective;
  setPerspective: (role: Perspective) => void;
  hasChosenRole: boolean;
  setHasChosenRole: (chosen: boolean) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  
  // Student Profile & Passport
  profile: StudentProfile;
  updateProfile: (updates: Partial<StudentProfile>) => void;
  
  // Subject Topics
  activeSubject: string;
  setActiveSubject: (subjectId: string) => void;
  subjectGoals: Record<string, SubjectGoals>;
  addTopicToSubject: (subjectId: string, topic: string) => void;
  
  // Timeline Milestones
  milestones: Milestone[];
  addMilestone: (milestone: Omit<Milestone, 'id'>) => void;
  verifyMilestone: (id: string, verifierName?: string) => void;
  
  // Modals & Flows
  isAdmissionModalOpen: boolean;
  setIsAdmissionModalOpen: (open: boolean) => void;
  isAddGoalModalOpen: boolean;
  setIsAddGoalModalOpen: (open: boolean) => void;
  isShareModalOpen: boolean;
  setIsShareModalOpen: (open: boolean) => void;
  activeVideoLesson: ConceptLesson | null;
  setActiveVideoLesson: (lesson: ConceptLesson | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  
  // Navigation helpers
  openFacultySection: () => void;
  openCurriculumExplorer: (grade?: string) => void;
  openConceptLessons: () => void;
  openAdmissions: () => void;
  openPassport: () => void;
  returnToRoleGate: () => void;
}

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Aarav Patel',
  folioNo: 'AP-2025-09',
  grade: 'Class 9',
  board: 'CBSE',
  medium: 'English Medium',
  session: 'Session 2024–25',
  intent: 'Understand concepts more clearly in Science & practice Mathematics more consistently.',
  selfReflection: 'Feeling more confident in Linear Equations; need clarification on Tissue Types.',
  immediateNextAction: 'Discuss question sheet with Deepak Sir during next session.'
};

const DEFAULT_SUBJECT_GOALS: Record<string, SubjectGoals> = {
  math: {
    subjectId: 'math',
    subjectName: 'Mathematics',
    chapterRef: 'CH. 2, 3, 4',
    topics: ['Polynomials', 'Coordinate Geometry', 'Linear Equations (Two Variables)']
  },
  science: {
    subjectId: 'science',
    subjectName: 'Science • Physics & Biology Foundations',
    chapterRef: 'CH. 5, 6, 8',
    topics: ['Laws of Motion & Friction', 'Plant & Animal Tissues', 'Cell Organelles & Osmosis']
  },
  english: {
    subjectId: 'english',
    subjectName: 'English Language • Literature & Grammar',
    chapterRef: 'SEC. A & B',
    topics: ['Descriptive Composition', 'Reported Speech Drills', 'Poetic Devices in Road Not Taken']
  },
  sst: {
    subjectId: 'sst',
    subjectName: 'Social Science • India & The Contemporary World',
    chapterRef: 'HIST & GEO',
    topics: ['French Revolution Causes', 'India Geographical Extent', 'Democratic Institutional Framework']
  }
};

const INITIAL_MILESTONES: Milestone[] = [
  {
    id: 'm-1',
    title: 'Coordinate Geometry Concept Review',
    type: 'verified',
    typeLabel: 'TEACHER VERIFIED',
    description: 'Demonstrated complete grasp of Cartesian coordinate quadrants and plotting formulas. Ready for advanced practice.',
    verifiedBy: 'SAVANT MSc',
    verificationDate: '14 Sep 2024',
    dateStr: 'Classroom Log • Verified',
    tag: 'APOLLO VERIFIED'
  },
  {
    id: 'm-2',
    title: 'NCERT Exercise 3.2 Practice Set',
    type: 'student-reported',
    typeLabel: 'SELF-REFLECTION (STUDENT-REPORTED)',
    description: 'Solved 12 subjective textbook problems in student study notebook. 2 complex polynomial items bookmarked for doubt clinic.',
    dateStr: 'Self-Practice Log'
  },
  {
    id: 'm-3',
    title: 'Triangles & Congruence Criteria',
    type: 'upcoming',
    typeLabel: 'UPCOMING',
    description: 'Working towards • Next Step in Sequence. Scheduled proof session with Deepak Sir.',
    dateStr: 'Next Sequence Target'
  }
];

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [perspective, setPerspectiveState] = useState<Perspective>(() => {
    try {
      const saved = localStorage.getItem('apollo_active_role');
      if (saved === 'student' || saved === 'parent') return saved;
    } catch (_) {}
    return 'student';
  });

  const [hasChosenRole, setHasChosenRole] = useState<boolean>(() => {
    try {
      return localStorage.getItem('apollo_role_chosen') === 'true';
    } catch (_) {}
    return true; // default to true so users can immediately view the rich student view, with clear gate toggle
  });

  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [activeSubject, setActiveSubject] = useState<string>('math');
  const [subjectGoals, setSubjectGoals] = useState<Record<string, SubjectGoals>>(DEFAULT_SUBJECT_GOALS);
  const [milestones, setMilestones] = useState<Milestone[]>(INITIAL_MILESTONES);

  // Modals
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [activeVideoLesson, setActiveVideoLesson] = useState<ConceptLesson | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const setPerspective = (role: Perspective) => {
    setPerspectiveState(role);
    try {
      localStorage.setItem('apollo_active_role', role);
      localStorage.setItem('apollo_role_chosen', 'true');
    } catch (_) {}
    showToast(`Switched to ${role === 'student' ? 'Student' : 'Parent'} Perspective`);
  };

  const updateProfile = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
    showToast('Academic Dossier updated');
  };

  const addTopicToSubject = (subjectId: string, topic: string) => {
    setSubjectGoals(prev => {
      const target = prev[subjectId];
      if (!target) return prev;
      return {
        ...prev,
        [subjectId]: {
          ...target,
          topics: [...target.topics, topic.trim()]
        }
      };
    });
    showToast(`Added topic "${topic}" to passport`);
  };

  const addMilestone = (milestoneData: Omit<Milestone, 'id'>) => {
    const newMilestone: Milestone = {
      ...milestoneData,
      id: `m-${Date.now()}`
    };
    setMilestones(prev => [newMilestone, ...prev]);
    showToast('New academic entry recorded in passport');
  };

  const verifyMilestone = (id: string, verifierName = 'SAVANT MSc') => {
    setMilestones(prev =>
      prev.map(m =>
        m.id === id
          ? {
              ...m,
              type: 'verified',
              typeLabel: 'TEACHER VERIFIED',
              verifiedBy: verifierName,
              verificationDate: 'Verified Today',
              tag: 'APOLLO VERIFIED'
            }
          : m
      )
    );
    showToast('Teacher Stamp Applied: Verified by Deepak Savant Sir');
  };

  const openFacultySection = () => {
    setActiveTab('apollo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCurriculumExplorer = () => {
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConceptLessons = () => {
    setActiveTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAdmissions = () => {
    setIsAdmissionModalOpen(true);
  };

  const openPassport = () => {
    setActiveTab('passport');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToRoleGate = () => {
    setHasChosenRole(false);
    try {
      localStorage.removeItem('apollo_role_chosen');
    } catch (_) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        perspective,
        setPerspective,
        hasChosenRole,
        setHasChosenRole,
        activeTab,
        setActiveTab,
        profile,
        updateProfile,
        activeSubject,
        setActiveSubject,
        subjectGoals,
        addTopicToSubject,
        milestones,
        addMilestone,
        verifyMilestone,
        isAdmissionModalOpen,
        setIsAdmissionModalOpen,
        isAddGoalModalOpen,
        setIsAddGoalModalOpen,
        isShareModalOpen,
        setIsShareModalOpen,
        activeVideoLesson,
        setActiveVideoLesson,
        toastMessage,
        showToast,
        openFacultySection,
        openCurriculumExplorer,
        openConceptLessons,
        openAdmissions,
        openPassport,
        returnToRoleGate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
