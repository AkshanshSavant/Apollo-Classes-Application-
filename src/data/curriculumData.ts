import { ClassCurriculum } from '../types';

export const CURRICULUM_DATA: Record<string, ClassCurriculum> = {
  'class-9-cbse': {
    classGrade: 'Class 9',
    curriculumBoard: 'CBSE',
    description: 'Crucial foundational year bridging middle school basics to senior secondary board examination rigor with direct NCERT alignment.',
    subjects: [
      {
        subjectName: 'Mathematics',
        icon: 'functions',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Number Systems',
            keyConcepts: ['Irrational numbers', 'Real numbers and decimal expansions', 'Operations on real numbers', 'Laws of exponents'],
            boardWeightage: '8 Marks',
            difficulty: 'Foundation',
            pedagogyTip: 'Deepak Sir uses geometric number line visualization for square roots to prevent formula cramming.'
          },
          {
            chapterNumber: 2,
            title: 'Polynomials',
            keyConcepts: ['Zeroes of polynomial', 'Remainder theorem', 'Factorisation of polynomials', 'Algebraic identities'],
            boardWeightage: '12 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Split-the-middle-term drills paired with graphic representation of cubic and quadratic equations.'
          },
          {
            chapterNumber: 3,
            title: 'Coordinate Geometry',
            keyConcepts: ['Cartesian plane', 'Plotting points in coordinate quadrants', 'Abscissa and ordinate properties'],
            boardWeightage: '6 Marks',
            difficulty: 'Foundation',
            pedagogyTip: 'Hands-on grid plotting practice to build intuitive orientation for Class 10 analytical geometry.'
          },
          {
            chapterNumber: 4,
            title: 'Linear Equations in Two Variables',
            keyConcepts: ['Standard form ax + by + c = 0', 'Graph of linear equation', 'Equations parallel to x-axis and y-axis'],
            boardWeightage: '8 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Connecting algebraic pairs directly with geometric straight-line slopes.'
          },
          {
            chapterNumber: 5,
            title: 'Triangles & Congruence Criteria',
            keyConcepts: ['SAS, ASA, AAS, SSS, RHS congruence criteria', 'Inequalities in a triangle', 'Isosceles triangle theorems'],
            boardWeightage: '10 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Focus on structured step-by-step mathematical proof writing.'
          }
        ]
      },
      {
        subjectName: 'Science',
        icon: 'science',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Matter in Our Surroundings',
            keyConcepts: ['Physical nature of matter', 'States of matter', 'Latent heat', 'Evaporation and cooling factors'],
            boardWeightage: '7 Marks',
            difficulty: 'Foundation',
            pedagogyTip: 'Real-world kitchen and atmospheric pressure experiments explained by Deepak Sir.'
          },
          {
            chapterNumber: 2,
            title: 'Is Matter Around Us Pure?',
            keyConcepts: ['Colloids vs suspensions', 'Separation techniques', 'Physical vs chemical change', 'True solutions'],
            boardWeightage: '8 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Solute-solvent concentration calculation frameworks.'
          },
          {
            chapterNumber: 5,
            title: 'The Fundamental Unit of Life',
            keyConcepts: ['Plasma membrane and osmosis', 'Prokaryotic vs Eukaryotic cells', 'Organelles: Mitochondria, ER, Plastids'],
            boardWeightage: '10 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'High-clarity schematic cellular diagrams with functional analogies.'
          },
          {
            chapterNumber: 6,
            title: 'Tissues: Plant & Animal',
            keyConcepts: ['Meristematic vs permanent tissue', 'Xylem and phloem', 'Epithelial, connective, muscular & nervous'],
            boardWeightage: '9 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Comparative tables to prevent confusion between involuntary muscle types and vascular bundles.'
          },
          {
            chapterNumber: 8,
            title: 'Motion & Laws of Motion',
            keyConcepts: ['Distance vs displacement', 'Uniform acceleration equations', "Newton's three laws", 'Momentum conservation'],
            boardWeightage: '12 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Deriving v = u + at, s = ut + 1/2at^2 graphically with real-time acceleration vectors.'
          }
        ]
      },
      {
        subjectName: 'English',
        icon: 'auto_stories',
        chapters: [
          {
            chapterNumber: 1,
            title: 'The Fun They Had & The Road Not Taken',
            keyConcepts: ['Futuristic schooling commentary', 'Metaphorical decision making', 'Poetic devices and rhyme scheme'],
            boardWeightage: '6 Marks',
            difficulty: 'Foundation',
            pedagogyTip: "Jyoti Ma'am's theme-analysis workbook connecting speculative literature with critical thought."
          },
          {
            chapterNumber: 2,
            title: 'The Sound of Music & Wind',
            keyConcepts: ['Determination and overcoming sensory barriers', 'Symbolism of wind as adversity', 'Character sketch writing'],
            boardWeightage: '7 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Guided subjective answer structuring for 3-mark and 5-mark board formats.'
          },
          {
            chapterNumber: 3,
            title: 'Grammar: Modals, Tenses & Determiners',
            keyConcepts: ['Error finding and correction', 'Sentence transformation', 'Reported speech conversion'],
            boardWeightage: '10 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Contextual reading drills rather than memorizing dry formulaic rules.'
          }
        ]
      },
      {
        subjectName: 'Social Science',
        icon: 'public',
        chapters: [
          {
            chapterNumber: 1,
            title: 'The French Revolution',
            keyConcepts: ['Three Estates crisis', 'Storming of the Bastille', 'Reign of Terror & Robespierre', 'Legacy of democratic rights'],
            boardWeightage: '8 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Visual cause-and-effect timeline charts eliminating the need to memorize arbitrary dates.'
          },
          {
            chapterNumber: 2,
            title: 'India - Size and Location',
            keyConcepts: ['Latitudinal and longitudinal extent', 'Standard Meridian of India (82°30’ E)', 'Strategic maritime location'],
            boardWeightage: '5 Marks',
            difficulty: 'Foundation',
            pedagogyTip: 'Interactive map-pointing exercises with neighbor nations and key water bodies.'
          },
          {
            chapterNumber: 3,
            title: 'What is Democracy? Why Democracy?',
            keyConcepts: ['Major features of representative democracy', 'Rule of law and respect for rights', 'Arguments for & against'],
            boardWeightage: '6 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Case studies comparing Pakistan, Zimbabwe, and Mexico electoral systems.'
          }
        ]
      }
    ]
  },
  'class-10-cbse': {
    classGrade: 'Class 10',
    curriculumBoard: 'CBSE',
    description: 'The defining Board Examination year. Intensive NCERT concept coverage with past 10-year question trend analysis and small-batch doubt clearance.',
    subjects: [
      {
        subjectName: 'Mathematics',
        icon: 'functions',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Real Numbers & Fundamental Theorem of Arithmetic',
            keyConcepts: ['Prime factorisation uniqueness', 'Proving irrationality of √2, √3, √5', 'HCF and LCM relations'],
            boardWeightage: '6 Marks',
            difficulty: 'Foundation',
            pedagogyTip: 'Formal step-by-step contradiction proof templates.'
          },
          {
            chapterNumber: 3,
            title: 'Pair of Linear Equations in Two Variables',
            keyConcepts: ['Graphical consistency conditions', 'Substitution & Elimination methods', 'Real-world speed/work word problems'],
            boardWeightage: '9 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Deconstructing upstream/downstream and age word problems into algebraic diagrams.'
          },
          {
            chapterNumber: 4,
            title: 'Quadratic Equations',
            keyConcepts: ['Standard form ax² + bx + c = 0', 'Quadratic formula & Discriminant', 'Nature of roots analysis'],
            boardWeightage: '9 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Deepak Sir teaches speed-checks for discriminant D = b² - 4ac.'
          },
          {
            chapterNumber: 8,
            title: 'Introduction to Trigonometry',
            keyConcepts: ['Trigonometric ratios sin, cos, tan, cot, sec, cosec', 'Specific angles (0°, 30°, 45°, 60°, 90°)', 'Trigonometric identities'],
            boardWeightage: '12 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Unit circle visualization and identity transformation drills.'
          }
        ]
      },
      {
        subjectName: 'Science',
        icon: 'science',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Chemical Reactions and Equations',
            keyConcepts: ['Balancing chemical equations', 'Combination, Decomposition, Displacement, Redox', 'Corrosion & rancidity'],
            boardWeightage: '7 Marks',
            difficulty: 'Moderate',
            pedagogyTip: 'Observable color changes and precipitate mnemonic table.'
          },
          {
            chapterNumber: 6,
            title: 'Life Processes',
            keyConcepts: ['Nutrition in plants and human digestive tract', 'Respiration & ATP production', 'Human circulatory system and kidney excretion'],
            boardWeightage: '10 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Full pathway flowcharts for blood circulation and nephron filtration.'
          },
          {
            chapterNumber: 9,
            title: 'Light - Reflection and Refraction',
            keyConcepts: ['Spherical mirrors: Concave and Convex ray diagrams', 'Mirror formula and magnification', 'Snell’s law and lens formula'],
            boardWeightage: '10 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Deepak Sir’s infallible Cartesian sign convention checklist.'
          },
          {
            chapterNumber: 11,
            title: 'Electricity',
            keyConcepts: ["Ohm's law and V-I characteristics", 'Resistance factors and resistivity', 'Series vs parallel circuits', 'Joule’s heating effect'],
            boardWeightage: '11 Marks',
            difficulty: 'Challenging',
            pedagogyTip: 'Equivalent resistance circuit reduction techniques.'
          }
        ]
      }
    ]
  },
  'class-8-cbse': {
    classGrade: 'Class 8',
    curriculumBoard: 'CBSE',
    description: 'Solidifying algebraic thinking, scientific inquiry, and clear written expression to build effortless momentum for Class 9.',
    subjects: [
      {
        subjectName: 'Mathematics',
        icon: 'functions',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Rational Numbers',
            keyConcepts: ['Closure, commutativity & associativity', 'Distributive property', 'Representation on number line'],
            boardWeightage: 'Foundation',
            difficulty: 'Foundation',
            pedagogyTip: 'Mental math drills for negative fractional arithmetic.'
          },
          {
            chapterNumber: 2,
            title: 'Linear Equations in One Variable',
            keyConcepts: ['Solving equations with variables on both sides', 'Practical application word problems'],
            boardWeightage: 'Core',
            difficulty: 'Moderate',
            pedagogyTip: 'Balancing equation scales visually.'
          },
          {
            chapterNumber: 7,
            title: 'Comparing Quantities',
            keyConcepts: ['Percentage increase/decrease', 'Profit and loss', 'Compound interest formulas'],
            boardWeightage: 'Core',
            difficulty: 'Moderate',
            pedagogyTip: 'Distinguishing annual compounding from simple interest growth.'
          }
        ]
      },
      {
        subjectName: 'Science',
        icon: 'science',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Crop Production and Management',
            keyConcepts: ['Agricultural practices', 'Sowing and harvesting', 'Drip and sprinkler irrigation', 'Storage methods'],
            boardWeightage: 'Core',
            difficulty: 'Foundation',
            pedagogyTip: 'Local Gujarat agricultural context and seasonal crop cycles.'
          },
          {
            chapterNumber: 4,
            title: 'Combustion and Flame',
            keyConcepts: ['Ignition temperature', 'Types of combustion', 'Structure of a candle flame zones'],
            boardWeightage: 'Core',
            difficulty: 'Moderate',
            pedagogyTip: 'Luminous vs non-luminous flame temperature analysis.'
          }
        ]
      }
    ]
  },
  'class-7-cbse': {
    classGrade: 'Class 7',
    curriculumBoard: 'CBSE',
    description: 'Transitioning from primary observational learning to structured reasoning in mathematics and science.',
    subjects: [
      {
        subjectName: 'Mathematics',
        icon: 'functions',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Integers',
            keyConcepts: ['Properties of integer addition & subtraction', 'Multiplication and division of integers'],
            boardWeightage: 'Core',
            difficulty: 'Foundation',
            pedagogyTip: 'Using thermometer elevation analogies for negative numbers.'
          },
          {
            chapterNumber: 2,
            title: 'Fractions and Decimals',
            keyConcepts: ['Multiplication and division of fractions', 'Decimal place values and operations'],
            boardWeightage: 'Core',
            difficulty: 'Foundation',
            pedagogyTip: 'Visual pie slices and decimal area squares.'
          }
        ]
      }
    ]
  },
  'class-6-cbse': {
    classGrade: 'Class 6',
    curriculumBoard: 'CBSE',
    description: 'Welcoming students into secondary school disciplines. Developing curiosity, daily study habits, and fear-free question asking.',
    subjects: [
      {
        subjectName: 'Mathematics',
        icon: 'functions',
        chapters: [
          {
            chapterNumber: 1,
            title: 'Knowing Our Numbers',
            keyConcepts: ['Large numbers in Indian and International systems', 'Estimation and rounding off', 'Roman numerals'],
            boardWeightage: 'Foundation',
            difficulty: 'Foundation',
            pedagogyTip: 'Interactive place value charts with large practical quantities.'
          },
          {
            chapterNumber: 2,
            title: 'Whole Numbers & Basic Geometrical Ideas',
            keyConcepts: ['Properties of whole numbers', 'Points, line segments, rays, curves and polygons'],
            boardWeightage: 'Foundation',
            difficulty: 'Foundation',
            pedagogyTip: 'Drawing and measuring instruments introduced with patience.'
          }
        ]
      }
    ]
  }
};
