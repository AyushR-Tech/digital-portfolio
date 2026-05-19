export const sectionIds = [
  'home',
  'about',
  'projects',
  'experience',
  'skills',
  'certifications',
  'contact',
];

export const portfolioData = {
  candidate: {
    name: 'Ayush Rewatkar',
    role: 'AI/ML Engineer | Final Year Computer Engineering Student',
    location: 'Nagpur, Maharashtra, India',
    summary:
      'Final-year Computer Engineering student specializing in Artificial Intelligence and Machine Learning with hands-on experience in deep learning, computer vision, and NLP. Skilled in building end-to-end ML pipelines including data preprocessing, model training, evaluation, and deployment using Flask and AWS.',
    skills: [
      'Python',
      'C++',
      'PyTorch',
      'TensorFlow',
      'Computer Vision',
      'NLP',
      'Flask',
      'AWS',
      'MySQL',
      'Git'
    ],
    socials: [
      { label: 'GitHub', icon: 'FiGithub', href: 'https://github.com/AyushR-Tech' },
      { label: 'LinkedIn', icon: 'FiLinkedin', href: 'https://www.linkedin.com/in/ayush-rewatkar-2026k/' },
      { label: 'Mail', icon: 'FiMail', href: 'mailto:ayushrewatkar011@gmail.com' }
    ]
  },

  about: {
    summary:
      'AI/ML-focused engineering student with strong expertise in computer vision, NLP, and deep learning systems. Experienced in building scalable ML pipelines and deploying models through REST APIs. Passionate about solving real-world problems using data-driven approaches and modern AI architectures.',
    
    education: [
      {
        institution: 'MIT Academy of Engineering, Alandi, Pune',
        degree: 'B.Tech in Computer Engineering',
        period: '2022 - 2026',
        details: 'Specializing in AI/ML with coursework in deep learning, computer vision, NLP, and software engineering.'
      }
    ],

    skillMetrics: [
      { label: '10th SSC', value: 89.60 },
      { label: '12th HSC', value: 89 },
      { label: 'CGPA (8.91/10)', value: 89.10 },
      { label: 'Machine Learning', value: 90 },
      { label: 'Deep Learning', value: 88 },
      { label: 'Cloud Computing', value: 85 }
    ]
  },

  github: {
    title: 'GitHub Projects & Contributions',
    description:
      'Explore my repositories showcasing AI/ML projects, deep learning implementations, and backend-integrated applications.',
  },

  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ],

  projects: [
    {
      id: 'deepfake-system',
      title: 'True Vision AI: Deepfake Detection & Synthetic Image Generation System',
      description:
        'End-to-end deep learning system for deepfake detection and synthetic image generation using multiple AI architectures.',
      category: 'AI/ML',
      stack: ['Python', 'PyTorch', 'TensorFlow'],
      github: 'https://github.com/AyushR-Tech/TrueVision-AI.git',
      demo: '',
      longDescription:
        'Designed a unified deep learning framework integrating CNNs, Transformers, GANs, VAEs, and Diffusion Models for both image generation and deepfake detection. Implemented full pipeline including data preprocessing, model training, evaluation, and inference.',
      features: [
        'Integrated multiple architectures (GAN, VAE, Transformers)',
        'End-to-end ML pipeline implementation',
        'Deepfake detection and synthetic generation in one system'
      ],
      previewFrames: [
        {
          title: 'Model Pipeline',
          description: 'Training and evaluation pipeline for multiple deep learning architectures.'
        },
        {
          title: 'Detection System',
          description: 'Deepfake classification based on learned feature representations.'
        }
      ],
      previewClass: 'bg-gradient-to-br from-blue-600 to-indigo-600',
    },

    {
      id: 'student-performance',
      title: 'PredictNova AI: Student Performance Prediction System',
      description:
        'Machine learning-based system to predict student performance using structured data.',
      category: 'Machine Learning',
      stack: ['Python', 'Scikit-learn', 'Flask', 'Streamlit'],
      github: 'https://github.com/AyushR-Tech/PredictNova-AI.git',
      demo: '',
      longDescription:
        'Developed a machine learning application using Support Vector Machine (SVM). Performed data preprocessing, feature engineering, and built backend APIs using Flask with a Streamlit-based user interface.',
      features: [
        'Data preprocessing and feature engineering',
        'SVM-based prediction model',
        'Flask backend with Streamlit UI'
      ],
      previewFrames: [
        {
          title: 'Prediction Interface',
          description: 'User input system for predicting student performance.'
        }
      ],
      previewClass: 'bg-gradient-to-br from-violet-600 to-fuchsia-600',
    },

    {
      id: 'fake-news',
      title: 'VeriNews AI: NLP-based Fake News Detection System',
      description:
        'NLP-based classification system for detecting fake news using machine learning models.',
      category: 'NLP',
      stack: ['Python', 'Scikit-learn'],
      github: 'https://github.com/AyushR-Tech/VeriNews-AI.git',
      demo: '',
      longDescription:
        'Built an NLP classification system using TF-IDF for feature extraction and models like Logistic Regression and Random Forest. Implemented preprocessing including tokenization and evaluated performance using standard metrics.',
      features: [
        'TF-IDF feature extraction',
        'Multiple ML model comparison',
        'Text preprocessing pipeline'
      ],
      previewFrames: [
        {
          title: 'Text Processing',
          description: 'Pipeline for tokenization and feature extraction.'
        }
      ],
      previewClass: 'bg-gradient-to-br from-cyan-600 to-sky-700',
    },
  ],

  experience: [
    {
      role: 'AI/ML Intern',
      company: 'Anand Automotive India',
      period: 'Jun 2025 – Aug 2025',
      details:
        'Developed deep learning-based defect detection models for automotive gear components using CNNs. Built an end-to-end inference pipeline integrating trained models with a Flask-based REST API for real-time prediction. Implemented structured logging and historical prediction storage using MySQL. Performed model validation and hyperparameter tuning to improve classification performance.',
    },
  ],

  education: [
    {
      institution: 'MIT Academy of Engineering, Pune',
      degree: 'B.Tech in Computer Engineering',
      period: '2022 – 2026',
      details: 'CGPA: 8.90 / 10'
    },
    {
      institution: 'Insight Junior College, Nagpur',
      degree: '12th (MSBSHSE)',
      period: '2022',
      details: '89%'
    },
    {
      institution: 'Late Devkibai Bang English Medium High School, Nagpur',
      degree: '10th (MSBSHSE)',
      period: '2020',
      details: '89.60%'
    }
  ],

  skills: {
    'Programming': ['Python', 'C++'],
    'Machine Learning': [
      'Supervised Learning',
      'Computer Vision',
      'Natural Language Processing',
      'SVM',
      'Logistic Regression',
      'Random Forest'
    ],
    'Deep Learning': [
      'CNN',
      'GAN',
      'VAE',
      'Transformers',
      'PyTorch',
      'TensorFlow'
    ],
    'Backend & Development': [
      'Flask',
      'REST APIs',
      'OOP',
      'Data Structures',
      'Algorithms'
    ],
    'Cloud & Infrastructure': ['AWS EC2', 'S3', 'IAM'],
    'Tools & Databases': ['MySQL', 'Git', 'GitHub']
  },

  skillGroups: [
    {
      title: 'Programming',
      icon: 'FiCode',
      skills: ['Python', 'C++']
    },
    {
      title: 'Machine Learning',
      icon: 'FiCpu',
      skills: ['Computer Vision', 'NLP', 'SVM', 'Logistic Regression', 'Random Forest']
    },
    {
      title: 'Deep Learning',
      icon: 'FiZap',
      skills: ['CNN', 'GAN', 'VAE', 'Transformers', 'PyTorch', 'TensorFlow']
    },
    {
      title: 'Backend',
      icon: 'FiServer',
      skills: ['Flask', 'REST APIs', 'OOP', 'DSA']
    },
    {
      title: 'Cloud',
      icon: 'FiCloud',
      skills: ['AWS EC2', 'S3', 'IAM', 'VPC']
    },
    {
      title: 'Tools',
      icon: 'FiDatabase',
      skills: ['MySQL', 'Git', 'GitHub']
    }
  ],

  certifications: [
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'Amazon Web Services',
      year: 2025
    },
    {
      title: 'AWS Academy Graduate – Cloud Architecting',
      issuer: 'Amazon Web Services',
      year: 2025
    },
    {
      title: 'NPTEL Cloud Computing – Elite (Top 5%)',
      issuer: 'NPTEL',
      year: 2024
    },
    {
      title: 'NPTEL Introduction to Machine Learning',
      issuer: 'NPTEL',
      year: 2024
    }
  ],
};