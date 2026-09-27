import { ConceptLesson } from '../types';

export const VIDEO_LESSONS: ConceptLesson[] = [
  {
    id: 'lesson-1',
    title: 'Coordinate Geometry: Plotting & Quadrant Intuition',
    subject: 'Mathematics',
    grade: 'Class 9',
    duration: '18:45',
    teacher: 'Deepak Savant Sir',
    youtubeId: 'v_coordinate_geo',
    summary: 'Master the Cartesian coordinate plane, identifying abscissa & ordinate, and avoiding common minus-sign quadrant errors.',
    keyTakeaway: 'The origin (0,0) is your fixed benchmark; always move horizontal on x-axis before vertical on y-axis.',
    ncertRef: 'NCERT Class 9 Mathematics Chapter 3 (Ex 3.1 & 3.2)'
  },
  {
    id: 'lesson-2',
    title: 'Polynomials: Factoring by Splitting the Middle Term',
    subject: 'Mathematics',
    grade: 'Class 9',
    duration: '24:10',
    teacher: 'Deepak Savant Sir',
    youtubeId: 'v_polynomials_split',
    summary: 'Step-by-step method to find product a·c and sum b for quadratic expressions with positive and negative coefficients.',
    keyTakeaway: 'Always write terms in decreasing power order before checking factor signs.',
    ncertRef: 'NCERT Class 9 Mathematics Chapter 2 (Ex 2.4)'
  },
  {
    id: 'lesson-3',
    title: 'Newton’s Second Law: F = ma Visual Derivation',
    subject: 'Science (Physics)',
    grade: 'Class 9',
    duration: '21:30',
    teacher: 'Deepak Savant Sir',
    youtubeId: 'v_newton_law_2',
    summary: 'Connecting rate of change of momentum (dp/dt) with applied unbalanced force using real-world vehicle stopping distances.',
    keyTakeaway: 'Force is directly proportional to rate of change of momentum, where k = 1 in SI units.',
    ncertRef: 'NCERT Class 9 Science Chapter 9'
  },
  {
    id: 'lesson-4',
    title: 'Plant Tissues: Xylem vs Phloem Transport Mechanisms',
    subject: 'Science (Biology)',
    grade: 'Class 9',
    duration: '16:15',
    teacher: 'Deepak Savant Sir',
    youtubeId: 'v_plant_tissues',
    summary: 'Clear distinction between unidirectional water/mineral ascent through tracheids/vessels vs bidirectional food translocation.',
    keyTakeaway: 'Xylem transport is driven by passive transpiration pull; Phloem translocation requires active ATP energy.',
    ncertRef: 'NCERT Class 9 Science Chapter 6'
  },
  {
    id: 'lesson-5',
    title: 'Active vs Passive Voice in CBSE Board Writing',
    subject: 'English',
    grade: 'Class 9 & 10',
    duration: '15:20',
    teacher: "Jyoti Savant Ma'am",
    youtubeId: 'v_english_voice',
    summary: 'How to naturally shift focus from doer to action in scientific reporting and formal factual descriptions.',
    keyTakeaway: 'Use passive voice in science and formal reports; keep narrative prose in vivid active voice.',
    ncertRef: 'CBSE Secondary English Grammar Section B'
  },
  {
    id: 'lesson-6',
    title: 'Trigonometric Ratios: Memorize Without Cramming',
    subject: 'Mathematics',
    grade: 'Class 10',
    duration: '27:00',
    teacher: 'Deepak Savant Sir',
    youtubeId: 'v_trig_ratios',
    summary: 'Geometric derivation of 30°, 45°, and 60° right triangle ratios using equilateral and isosceles triangles.',
    keyTakeaway: 'Never blindly memorize tables: construct the 30-60-90 triangle with sides 1, √3, 2 in 10 seconds.',
    ncertRef: 'NCERT Class 10 Mathematics Chapter 8'
  }
];
