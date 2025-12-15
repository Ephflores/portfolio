export const personalInfo = {
  name: "Ephraim Flores",
  title: "Software Developer | Cloud & Full-Stack",
  location: "Vancouver, BC",
  phone: "204-595-8184",
  email: "ephraim.flores@gmail.com",
  linkedin: "https://linkedin.com/in/ephraim-flores/",
  summary: "Software developer with a strong foundation in embedded systems and backend development, combined with hands-on experience in cloud-native and full-stack applications. Former Embedded Software Engineer at Denso Techno with experience delivering production-grade software for automotive systems. Currently completing a Computer Systems Technology diploma at BCIT, focusing on modern web development, cloud infrastructure, and API-driven systems. Passionate about building reliable, scalable software and transitioning fully into cloud and full-stack engineering roles."
};

export const about = {
  story: "I transitioned from embedded software engineering to cloud and full-stack development, bringing a unique perspective rooted in systems thinking and reliability. My experience building production-grade software for automotive systems taught me the importance of thorough testing, clear architecture, and delivering robust solutions. Now, I'm focused on applying these principles to modern web applications and cloud infrastructure, combining my background in low-level systems with expertise in scalable backend services and responsive frontends."
};

export const skills = {
  languages: [
    "C", "C++", "Java", "Python", "JavaScript", "Kotlin", "HTML", "CSS"
  ],
  frameworks: [
    "Node.js", "React", "FastAPI", "Django", "Jetpack Compose", "Bootstrap", "Tailwind CSS"
  ],
  cloud: [
    "AWS (EC2, S3, Lambda, DynamoDB, Cognito)", "Firebase", "MongoDB", "PostgreSQL", "Docker", "REST APIs"
  ],
  tools: [
    "VS Code", "IntelliJ", "Eclipse", "Android Studio", "PyCharm", "CLion", "GitHub"
  ],
  embedded: [
    "Embedded Software Development", "MCU Programming", "CAN / LIN Bus Systems", 
    "Testing & Debugging", "Vector CANoe", "Fujitsu Softune Workbench", "Oscilloscope"
  ]
};

export const projects = [
  {
    id: 1,
    name: "Recipe Finder",
    type: "Personal Project",
    date: "Aug 2025",
    description: "Built an Android application that allows users to search recipes by ingredients and browse a recipe catalogue. Integrated DummyJSON API for recipe data retrieval with dynamic query filtering. Implemented Room database for local persistence of favorite recipes.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "DummyJSON API", "Room Database"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    name: "pos-integrator",
    type: "Practicum – Stocky AI",
    date: "Apr – May 2025",
    description: "Contributed to five agile sprints with daily stand-ups and sprint reviews. Developed FastAPI endpoints to fetch and normalize POS data from Square and Clover APIs. Stored transactional data in a Docker-hosted PostgreSQL database. Wrote Pytest unit tests to ensure API reliability and data consistency.",
    techStack: ["FastAPI", "PostgreSQL", "Docker", "Pytest", "Square API", "Clover API"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    name: "ReloCash",
    type: "Academic Project",
    date: "Feb – Apr 2025",
    description: "Developed a moving-services marketplace in a 3-person team using Node.js and JavaScript. Implemented authentication with Amazon Cognito. Managed application data using DynamoDB and stored media assets in Amazon S3/EFS. Deployed the application on Amazon EC2.",
    techStack: ["AWS", "Node.js", "DynamoDB", "Cognito", "S3", "EC2"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    name: "CallScribe",
    type: "Personal Project",
    date: "Nov 2024",
    description: "Built a Python application that generates and analyzes call transcripts using OpenAI GPT APIs. Implemented audio file upload and direct recording features. Enabled users to query transcripts and receive AI-generated insights.",
    techStack: ["Python", "OpenAI API"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    name: "DocuMint",
    type: "Academic Project",
    date: "Apr – May 2024",
    description: "Collaborated in a team of five to build a blockchain-based document-to-NFT application. Developed the front-end using React and Tailwind CSS. Integrated MetaMask wallet authentication for secure user interactions.",
    techStack: ["React", "Tailwind", "Blockchain", "MetaMask"],
    github: "#",
    demo: "#"
  }
];

export const technicalExperience = [
  {
    id: 1,
    title: "Software Quality Analyst",
    company: "Philippine Long Distance Telephone Company (PLDT)",
    location: "Makati City, Philippines",
    period: "Aug 2015 – Nov 2015",
    responsibilities: [
      "Performed GUI and backend testing for the SingleView Convergent Billing System",
      "Designed and executed regression test scenarios to validate system stability",
      "Authored detailed test plans, test cases, and defect reports to ensure clear communication with development teams"
    ]
  },
  {
    id: 2,
    title: "Embedded Software Engineer",
    company: "Denso Techno Philippines Inc.",
    location: "Makati City, Philippines",
    period: "Oct 2011 – Jun 2015",
    responsibilities: [
      "Led six embedded software projects, handling estimation, task planning, progress tracking, and final delivery",
      "Developed C and Assembly code for Toyota HVAC systems using the V-model development lifecycle",
      "Conducted unit and integration testing using Vector CANoe and Fujitsu Softune, applying black-box and white-box testing techniques",
      "Recognized for high performance and leadership, earning early assignment to senior-level projects"
    ]
  }
];

export const otherExperience = [
  {
    id: 1,
    title: "Mechanic",
    company: "Latecoere",
    location: "Delta, British Columbia, Canada",
    period: "Aug 2022 – May 2024",
    responsibilities: [
      "Assembled parts for sub-assemblies and final assemblies using aerospace-grade fasteners, adhesives, jigs, and fixtures to meet stringent engineering specifications",
      "Repaired and restored sheet metal components, ensuring compliance with F-35 program quality and airworthiness standards",
      "Interpreted blueprints and technical documentation to execute complex assembly processes with micron-level precision",
      "Used precision measuring instruments to verify dimensions and maintain strict tolerances, minimizing rework and ensuring mission-critical reliability",
      "Collaborated with engineers and quality teams to resolve discrepancies, contributing to consistent on-time delivery of components"
    ]
  },
  {
    id: 2,
    title: "Sheet Metal Mechanic",
    company: "Magellan Aerospace Limited",
    location: "Winnipeg, Manitoba, Canada",
    period: "Jun 2019 – Aug 2022",
    responsibilities: [
      "Assembled parts for sub-assemblies and final assemblies using aerospace-grade fasteners, adhesives, jigs, and fixtures to meet stringent engineering specifications",
      "Repaired and restored sheet metal components, ensuring compliance with F-35 program quality and airworthiness standards",
      "Interpreted blueprints and technical documentation to execute complex assembly processes with micron-level precision",
      "Used precision measuring instruments to verify dimensions and maintain strict tolerances, minimizing rework and ensuring mission-critical reliability",
      "Collaborated with engineers and quality teams to resolve discrepancies, contributing to consistent on-time delivery of components"
    ]
  },
  {
    id: 3,
    title: "Packaging Labourer",
    company: "McCain Foods",
    location: "Portage la Prairie, Manitoba, Canada",
    period: "Oct 2017 – Aug 2018",
    responsibilities: [
      "Set up and calibrated packaging machines based on box measurements and production requirements",
      "Inspected packaging materials for tears or defects, ensuring products were packed securely to minimize breakage during transit",
      "Monitored line operations, performed basic troubleshooting, and maintained cleanliness in compliance with food safety standards",
      "Supported continuous production by collaborating with team members and meeting daily output targets"
    ]
  },
  {
    id: 4,
    title: "CNC Brake Press Operator",
    company: "Hi-Tec Industries Inc.",
    location: "Portage la Prairie, Manitoba, Canada",
    period: "May 2017 – Oct 2017",
    responsibilities: [
      "Interpreted blueprints and technical drawings to determine part dimensions and machine setup",
      "Operated and adjusted CNC brake press to produce accurate bends and angles on steel components",
      "Conducted quality checks and measurements to ensure compliance with specifications",
      "Maintained a safe work environment by following company safety protocols and machine operation guidelines"
    ]
  },
  {
    id: 5,
    title: "Shift Supervisor",
    company: "Tim Hortons",
    location: "Portage la Prairie, Manitoba, Canada",
    period: "Aug 2016 – May 2017",
    responsibilities: [
      "Supervised, trained, and motivated staff to meet operational standards and deliver exceptional service",
      "Monitored shift schedules, delegated tasks, and ensured compliance with food safety and quality guidelines",
      "Resolved customer concerns promptly, maintaining a positive guest experience and brand reputation",
      "Assisted with inventory control, managed cash registers, and ensured accurate financial reporting",
      "Supported management in implementing operational improvements to enhance efficiency and reduce waste"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Computer Systems Technology Diploma",
    institution: "British Columbia Institute of Technology (BCIT)",
    period: "Jan 2024 – Dec 2025",
    details: "GPA: 91%"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology",
    institution: "Pamantasan ng Cabuyao (University of Cabuyao)",
    period: "Jun 2006 – Apr 2011"
  },
  {
    id: 3,
    degree: "Certificate, Aerospace Manufacturing and Maintenance Orientation Program",
    institution: "Technical Vocational High School",
    period: "Sep 2018 – May 2019",
    courses: [
      {
        title: "Introduction to Aerospace Industry",
        topics: [
          "Overview of aircraft types, aerospace companies, and global trends",
          "Basics of aerodynamics, flight, and aircraft systems"
        ]
      },
      {
        title: "Manufacturing Processes",
        topics: [
          "Fundamentals of sheet metal work, riveting, and composite materials",
          "Reading and interpreting blueprints and technical drawings",
          "Safety standards and quality assurance in aerospace production"
        ]
      },
      {
        title: "Maintenance Orientation",
        topics: [
          "Introduction to aircraft maintenance procedures and documentation",
          "Basic hand tools, power tools, and measurement instruments"
        ]
      }
    ]
  }
];

