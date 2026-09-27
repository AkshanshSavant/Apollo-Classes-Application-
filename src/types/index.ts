export type Perspective = 'student' | 'parent';
export type Tab = 'home' | 'explore' | 'passport' | 'apollo' | 'lessons';

export interface Milestone {
  id: string;
  title: string;
  type: 'verified' | 'student-reported' | 'upcoming';
  typeLabel: string;
  description: string;
  verifiedBy?: string;
  verificationDate?: string;
  dateStr: string;
  tag?: string;
}

export interface SubjectGoals {
  subjectId: string;
  subjectName: string;
  chapterRef: string;
  topics: string[];
}

export interface StudentProfile {
  name: string;
  folioNo: string;
  grade: string;
  board: 'CBSE' | 'GSEB';
  medium: string;
  session: string;
  intent: string;
  selfReflection: string;
  immediateNextAction: string;
  parentName?: string;
  parentPhone?: string;
  schoolName?: string;
}

export interface CurriculumChapter {
  chapterNumber: number;
  title: string;
  keyConcepts: string[];
  boardWeightage: string;
  difficulty: 'Foundation' | 'Moderate' | 'Challenging';
  pedagogyTip: string;
}

export interface CurriculumSubject {
  subjectName: string;
  icon: string;
  chapters: CurriculumChapter[];
}

export interface ClassCurriculum {
  classGrade: string;
  curriculumBoard: 'CBSE' | 'GSEB';
  description: string;
  subjects: CurriculumSubject[];
}

export interface ConceptLesson {
  id: string;
  title: string;
  subject: string;
  grade: string;
  duration: string;
  teacher: 'Deepak Savant Sir' | "Jyoti Savant Ma'am";
  youtubeId: string;
  summary: string;
  keyTakeaway: string;
  ncertRef: string;
}
