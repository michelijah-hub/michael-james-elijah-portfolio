import { Project, LeadershipExperience, EducationItem, SkillGroup } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Michael James Elijah',
  headline: 'Computer Science Student · Minor in Intelligent Systems',
  university: 'Bina Nusantara University',
  semester: '4th Semester',
  highSchool: 'SMAK 4 Penabur Sunrise Garden',
  email: 'michelijah@gmail.com',
  phone: '+62 818-222-448',
  phoneDisplay: '+62 818-222-448',
  linkedIn: 'https://www.linkedin.com/in/michael-elijah-960172308',
  linkedInDisplay: 'linkedin.com/in/michael-elijah-960172308',
  githubUser: 'michelijah-hub',
  positioning:
    'Computer Science student focused on Intelligent Systems with hands-on experience in Machine Learning, Computer Vision, Natural Language Processing, applied research, and software engineering, alongside active student leadership.',
  aboutBio:
    'I am an undergraduate Computer Science student minoring in Intelligent Systems at Bina Nusantara University (4th semester). I build technical systems that solve practical problems—from computer vision safety pipelines at railway crossings and biological sequence tokenization research, to multi-model ensemble music predictors, real-time NLP moderation tools, and distributed offline-first applications. Beyond engineering, I actively serve as a Freshmen Leader and Freshmen Partner, mentoring peer cohorts and developing collaborative communication skills.',
};

export const PROJECTS: Project[] = [
  {
    id: 'railroad-cv',
    title: 'Obstacle Detection at Level Crossings',
    year: '2026',
    role: 'Machine Learning Developer & Documentation Contributor',
    category: 'Computer Vision',
    shortDescription:
      'Computer vision and machine learning safety system analyzing CCTV frames from railway level crossings to classify crossing hazards into safe or dangerous conditions with confidence scores.',
    fullDescription:
      'Obstacle Detection at Level Crossings is a computer vision and machine learning project developed to improve safety monitoring at railway level crossings. The system analyzes CCTV frames from railway crossings and classifies the detected situation as either safe or dangerous based on the presence of obstacles and crossing conditions. By applying image-based analysis and machine learning models, the system provides a direct safety verdict with confidence scores, helping support faster awareness of potential hazards at railway crossings.',
    problem:
      'Railway level crossings are critical transit intersections where undetected track obstacles, stalled vehicles, or barrier breaches can lead to severe accidents. Human monitoring alone can suffer from delayed reaction times or visual obstruction.',
    approach:
      'Engineered an image-based processing and classification pipeline comparing Classic ML and Deep Learning architectures. Captured CCTV frames are evaluated for obstacle presence across designated barrier and track boundary zones, outputting real-time safety verdicts (SAFE vs. DANGER) with model confidence scores.',
    myContribution:
      'Contributed as Machine Learning Developer & Documentation Contributor. Participated in model training workflows, comparative evaluation between Classic ML and Deep Learning approaches, frame classification pipeline, and comprehensive technical documentation.',
    technologies: ['Computer Vision', 'Machine Learning', 'Image-Based Analysis', 'Classic ML', 'Deep Learning', 'Railway Safety'],
    links: {
      app: 'https://railroadcv.vercel.app/',
      github: 'https://github.com/AxelS27/railroad-cv',
      demo: 'https://drive.google.com/drive/folders/131YFdc3fWqiGIXFZmkZh3vDk-dMqpoMJ',
      presentation: 'https://canva.link/zdye0e7p19x43ph',
    },
    metrics: [
      { label: 'Safety Verdict', value: 'Real-time DANGER / SAFE' },
      { label: 'Model Modalities', value: 'Classic ML & Deep Learning' },
    ],
  },
  {
    id: 'tis-tokenization',
    title: 'Naïve vs. Codon Tokenization in TIS Prediction',
    year: '2026',
    role: 'Research Contributor – Literature Review',
    category: 'Research',
    shortDescription:
      'Computational biology research evaluating the impact of Naïve tokenization (BPE) versus Codon-aware tokenization on biological sequence representations for Translation Initiation Site (TIS) prediction.',
    fullDescription:
      'Translation Initiation Site Prediction is a research project that evaluates the effectiveness of different tokenization approaches for predicting Translation Initiation Sites (TIS) in biological sequences. The study compares naive tokenization and codon tokenization to examine how different sequence representations affect the prediction process. Through literature analysis and comparative evaluation, the research explores how tokenization strategies can contribute to improving computational approaches for TIS prediction.',
    problem:
      'Popular genomic deep learning models (such as DNABERT-2) adopt NLP-style Byte-Pair Encoding (BPE), which treats genomic sequences as text without biological grammar. This introduces positional blurring across nucleotide sequences, obscuring exact Translation Initiation Sites (TIS).',
    approach:
      'Conducted a rigorous comparative analysis examining why Codon Tokenization (reading 3 base-pairs together adhering to mRNA triplet reading frames) prevents positional distortion compared to text-based BPE, aligning mathematical model inputs with fundamental biological translation rules.',
    myContribution:
      'Served as Research Contributor focused on Literature Review. Synthesized computational biology publications, investigated the mechanisms of positional blurring in sequence models, documented tokenization differences, and co-prepared technical research presentation materials.',
    technologies: ['Machine Learning', 'Computational Biology', 'Sequence Representation', 'Codon Tokenization', 'Byte-Pair Encoding (BPE)', 'Literature Review'],
    links: {
      videos: [
        'https://youtu.be/mSDyCtM8emA_',
        'https://youtu.be/Sgho_drONYE',
      ],
      presentation: 'https://docs.google.com/presentation/d/1O9jo-AOd86cRJgry0M6Gv9RUerqIoPSdVH-R11V-8UA/edit?usp=sharing',
    },
    metrics: [
      { label: 'Tokenization Focus', value: 'Codon (3-mer) vs. Naïve BPE' },
      { label: 'Biological Target', value: 'Translation Initiation Site (TIS)' },
    ],
  },
  {
    id: 'hit-or-flop',
    title: 'Hit or Flop – Music Hit Predictor',
    year: '2026',
    role: 'Machine Learning Developer & Documentation Contributor',
    category: 'Machine Learning',
    shortDescription:
      'Machine learning system predicting whether a song has the potential to become a HIT or FLOP based on Spotify audio characteristics, utilizing a Multi-Vote Ensemble across 5 classical ML algorithms.',
    fullDescription:
      'Hit or Flop is a machine learning project developed to predict whether a song has the potential to become a HIT or FLOP based on its audio characteristics. The system analyzes Spotify music data using features such as tempo, loudness, key, mode, and energy, and applies several classical machine learning models including Random Forest, XGBoost, AdaBoost, K-Nearest Neighbors, and Decision Tree. The project also implements a Multi-Vote Ensemble to combine predictions from multiple models and provide a more robust prediction of a song’s potential.',
    problem:
      'Music producers and independent artists frequently struggle to assess commercial viability prior to marketing campaigns. Individual machine learning classifiers can overfit to specific acoustic niches, yielding brittle predictions.',
    approach:
      'Extracted key acoustic attributes (tempo, energy, loudness, key, mode, danceability) from Spotify datasets. Trained five distinct benchmark classifiers (Random Forest, XGBoost, AdaBoost, KNN, Decision Tree) and created a voting aggregation ensemble that achieves 84.5% multi-vote accuracy.',
    myContribution:
      'Served as Machine Learning Developer & Documentation Contributor. Assisted in data preprocessing of Spotify audio parameters, comparative model benchmarking, implementing ensemble logic, and compiling project technical reports.',
    technologies: ['Machine Learning', 'XGBoost', 'Random Forest', 'AdaBoost', 'K-Nearest Neighbors', 'Decision Tree', 'Ensemble Learning', 'Data Analysis'],
    links: {
      app: 'https://hitorflop.vercel.app/',
      github: 'https://github.com/AxelS27/HitOrFLop/',
      demo: 'https://drive.google.com/file/d/13_nYNqZQlVDWilfaLhTytW2woHL8-mr0/view?usp=sharing',
      presentation: 'https://canva.link/jbiv0shbz2hcfbm',
    },
    metrics: [
      { label: 'Ensemble Accuracy', value: '84.5% Multi-Vote' },
      { label: 'Models Benchmarked', value: '5 Classical ML Algorithms' },
    ],
  },
  {
    id: 'toxic-comment-detection',
    title: 'Toxicity Comment Detection',
    year: '2026',
    role: 'NLP Developer & Machine Learning Developer',
    category: 'NLP',
    shortDescription:
      'NLP and machine learning classification application identifying toxic comments in social media text using TF-IDF feature extraction and multi-algorithm evaluation integrated into a Streamlit interface.',
    fullDescription:
      'Toxic Comment Detection is a Natural Language Processing and machine learning project developed to automatically identify toxic comments in social media content. The system processes text using data preprocessing and TF-IDF feature extraction, then applies several machine learning algorithms including Logistic Regression, Support Vector Machine (SVM), Naive Bayes, SGD, and XGBoost for toxicity classification. The project also integrates the trained models into a Streamlit web application, allowing users to input comments and receive real-time toxicity predictions.',
    problem:
      'Online communities face widespread cyberbullying, hate speech, and abusive interactions. Manual moderation at scale is unsustainable, requiring automated text classification pipelines that reliably flag nuanced toxicity without high latency.',
    approach:
      'Constructed a robust text processing pipeline featuring tokenization, text normalization, and TF-IDF n-gram vectorization. Benchmarked five classifiers (Logistic Regression, SVM, Naive Bayes, SGD, and XGBoost) and packaged the inference pipeline into an interactive Streamlit web dashboard for live comment testing.',
    myContribution:
      'Served as NLP Developer & Machine Learning Developer. Built text preprocessing routines, extracted TF-IDF representations, trained and validated the classification models, and developed the Streamlit user interface for live prediction and category tagging.',
    technologies: ['Natural Language Processing', 'TF-IDF', 'Support Vector Machine (SVM)', 'Logistic Regression', 'Naive Bayes', 'SGD', 'XGBoost', 'Streamlit'],
    links: {
      github: 'https://github.com/michelijah-hub/NLP-Toxic-Comment-Detection',
      demo: 'https://drive.google.com/file/d/1_P-padYXj1pov6M9z1zWpJsSJ5_cgwS5/view?usp=sharing',
    },
    metrics: [
      { label: 'Feature Extraction', value: 'TF-IDF Vectorization' },
      { label: 'Algorithms Evaluated', value: 'SVM, LogReg, NB, SGD, XGBoost' },
    ],
  },
  {
    id: 'smartqueue',
    title: 'SmartQueue – Digital Queue System',
    year: '2026',
    role: 'UI/UX & Software Engineering Contributor',
    category: 'Software Engineering',
    shortDescription:
      'Distributed digital queue management system designed with WebSocket real-time updates and an Offline-First architecture powered by IndexedDB for reliable public service operations.',
    fullDescription:
      'SmartQueue is a distributed digital queue management system designed to improve the efficiency and transparency of public service queues. The system allows citizens to take digital queue numbers and monitor queue status in real-time through a user-friendly interface, while staff can manage queues through a dedicated dashboard. The project uses WebSocket communication for real-time updates and an Offline-First approach with IndexedDB to maintain system functionality during network interruptions, with automatic synchronization when the connection is restored.',
    problem:
      'Public service facilities (like local community health centers and government offices) frequently encounter long physical queues, crowded waiting rooms, and network instability that disrupts online-only ticket issuance.',
    approach:
      'Designed a dual-interface distributed architecture: a responsive mobile citizen interface for ticketing and queue tracking, paired with a desktop staff counter console. Connected via WebSocket channels for instant state propagation, with local persistence in browser IndexedDB to allow uninterrupted offline queue generation and automated resync upon reconnection.',
    myContribution:
      'Contributed as UI/UX & Software Engineering Contributor. Designed the citizen mobile interface and staff administration dashboard, formulated offline-first state synchronization flows, and helped implement WebSocket communication handling.',
    technologies: ['Software Engineering', 'UI/UX Design', 'WebSocket', 'Offline-First', 'IndexedDB', 'Distributed Systems'],
    links: {
      github: 'https://github.com/michelijah-hub/SmartQueue',
    },
    metrics: [
      { label: 'Architecture', value: 'Offline-First + IndexedDB' },
      { label: 'Real-Time Sync', value: 'Bi-directional WebSocket' },
    ],
  },
];

export const LEADERSHIP_EXPERIENCES: LeadershipExperience[] = [
  {
    id: 'freshmen-leader',
    role: 'Freshmen Leader (FL)',
    organization: 'Bina Nusantara University (BINUS)',
    period: 'BINUS First Year Program',
    summary:
      'Led and guided incoming freshmen during BINUS University’s First Year Program (FYP), facilitating their smooth transition into university academic and campus life.',
    responsibilities: [
      'Led and guided freshmen cohorts through First Year Program (FYP) activities, orientation modules, and campus introductions.',
      'Assisted freshmen in understanding university academic regulations, registration systems, and university culture.',
      'Helped daily orientation activities run smoothly through proactive coordination, crowd management, and problem solving.',
      'Acted as an accessible, positive role model, fostering an inclusive and encouraging environment for new students.',
    ],
    skills: [
      'Leadership',
      'Communication',
      'Public Speaking',
      'Teamwork',
      'Planning',
      'Organization',
      'Problem Solving',
      'Mentoring',
      'Adaptability',
    ],
    photoHighlights: [
      {
        title: 'First Year Program Orientation Day',
        description: 'Coordinated outdoor cohort sessions with fellow Freshmen Leaders and incoming freshmen.',
        context: 'BINUS Campus Courtyard',
      },
      {
        title: 'Interactive Academic Workshop',
        description: 'Facilitated classroom guidance sessions and group discussions to help freshmen navigate university life.',
        context: 'Campus Lecture Hall',
      },
    ],
  },
  {
    id: 'freshmen-partner',
    role: 'Freshmen Partner (FP)',
    organization: 'Bina Nusantara University (BINUS)',
    period: 'Sustained First-Year Mentorship',
    summary:
      'Accompanied and mentored freshmen cohorts throughout their entire first year at BINUS University, providing ongoing guidance, peer support, and community engagement.',
    responsibilities: [
      'Supported freshmen continuously throughout their initial academic year to assist with adaptation to college workload.',
      'Provided one-on-one and group peer guidance to resolve academic and campus life inquiries.',
      'Facilitated social integration and cohort camaraderie through community activities, including student environmental initiatives like tree planting.',
      'Served as a trusted senior student companion, linking first-year students to university academic resources and peer networks.',
    ],
    skills: [
      'Mentoring',
      'Communication',
      'Empathy',
      'Collaboration',
      'Facilitation',
      'Adaptability',
      'Planning',
      'Problem Solving',
    ],
    videoLink: 'https://drive.google.com/drive/folders/1C7G8bK-uVj7k81KNTFJ4d_TJ8qU1-uqM',
    photoHighlights: [
      {
        title: 'Community Tree-Planting Initiative',
        description: 'Participated with student peers and freshmen in environmental tree planting and community-building.',
        context: 'BINUS Community Nature Activity',
      },
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Bina Nusantara University (BINUS)',
    degree: 'Undergraduate Computer Science',
    minor: 'Minor in Intelligent Systems',
    status: 'Currently 4th Semester',
    period: 'Undergraduate',
    description:
      'Pursuing Computer Science with specialization in Intelligent Systems. Actively studying core computing principles, machine learning paradigms, data structures, and computer vision while participating in student leadership and academic research.',
    highlights: [
      'Intelligent Systems Focus',
      'Machine Learning & Data Modeling',
      'Computer Vision & NLP Pipelines',
      'First Year Program Leadership (FL & FP)',
    ],
  },
  {
    institution: 'SMAK 4 Penabur Sunrise Garden',
    degree: 'High School Diploma',
    status: 'Completed',
    period: 'High School',
    description:
      'Completed secondary education with a rigorous academic foundation in mathematics and sciences, fostering logical thinking and an enduring interest in computing.',
    highlights: ['Natural Sciences & Mathematics Track', 'Analytical Problem Solving'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Machine Learning & Ensemble Methods',
    description: 'Predictive modeling, classical algorithms, and multi-vote ensembling techniques',
    skills: [
      'XGBoost',
      'Random Forest',
      'AdaBoost',
      'K-Nearest Neighbors (KNN)',
      'Decision Tree',
      'Logistic Regression',
      'Support Vector Machine (SVM)',
      'Naive Bayes',
      'Stochastic Gradient Descent (SGD)',
      'Multi-Vote Ensemble',
    ],
  },
  {
    category: 'Computer Vision & NLP',
    description: 'Image processing, sequence tokenization, and text feature representation',
    skills: [
      'Computer Vision',
      'CCTV Frame Analysis',
      'Obstacle Detection',
      'Safety Verdict Classification',
      'TF-IDF Feature Extraction',
      'Codon Tokenization (3-mer)',
      'Byte-Pair Encoding (BPE)',
      'TIS Sequence Prediction',
    ],
  },
  {
    category: 'Software Engineering & Architecture',
    description: 'Real-time protocols, client-side persistence, and distributed state',
    skills: [
      'WebSocket Real-Time Sync',
      'Offline-First Architecture',
      'IndexedDB Persistence',
      'Streamlit Applications',
      'UI/UX Prototyping',
      'Distributed Queue State',
      'Git & GitHub Version Control',
    ],
  },
  {
    category: 'Leadership & Collaboration',
    description: 'Peer mentorship, cohort guidance, public communication, and student governance',
    skills: [
      'Freshmen Leader (FYP)',
      'Freshmen Partner (FP)',
      'Public Speaking',
      'Student Mentoring',
      'Teamwork & Coordination',
      'Empathy & Active Listening',
      'Technical Documentation',
    ],
  },
];
