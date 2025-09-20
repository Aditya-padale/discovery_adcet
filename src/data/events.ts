export interface Event {
  id: string;
  name: string;
  department: string;
  maxTeamSize: number;
  entryFee: number;
  description?: string;
  topics?: string[];
  rules?: string[];
  coordinators?: {
    faculty?: {
      name: string;
      phone: string;
      email: string;
    };
    student?: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

// Common rules for all Paper Presentation events (extracted from "Discovery 2K25Rules Final.pdf")
const paperPresentationRules: string[] = [
  "Maximum of 4 participants per team.",
  "Entry fee: ₹100 per participant.",
  "Participants must choose topics from the provided group/topic list and submit a one-page abstract by the designated deadline (soft copy to group faculty coordinators).",
  "Abstract submission is mandatory; approved teams must submit the full paper in IEEE format (PDF), maximum 10 pages including figures, tables and references.",
  "PowerPoint presentations should be provided on a pen drive or can be sent via email before the event.",
  "Each team will be allotted 10 minutes for presentation followed by a question-and-answer session.",
  "All participants must bring college ID cards and event registration receipts on the day of the event."
];

export const eventsByDepartment: Record<string, Event[]> = {
  aeronautical: [
    {
      id: "aero-paper",
      name: "Paper Presentation",
      department: "Aeronautical Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present your research on advanced aeronautical engineering topics",
      topics: [
        "Advanced Materials and Manufacturing",
        "High-Temperature Materials and composites", 
        "Surface Modification of Materials",
        "Materials for Space Applications",
        "Conventional Aerospace Metals and Materials",
        "Statics and dynamics of structures",
        "Behavior of Aerospace Structures",
        "Rocket, Helicopter, Missiles, and Spacecraft Structural Design",
        "Conventional and Non-Conventional Methods in Aerospace Structural Design",
        "Non-Destructive Testing (NDT) in Aerospace Systems",
        "Aerodynamic Optimization of Aircraft Wings",
        "Subsonic, Transonic and supersonic flow analysis",
        "Aerodynamic Flow Control",
        "Unmanned Aerial Vehicles (UAVs) Technologies"
      ],
      // use the common paper presentation rules and add the submission deadline explicitly
      rules: [
        ...paperPresentationRules,
        "Submit abstract (soft copy) to the group faculty coordinators by 7th October 2025."
      ],
      coordinators: {
        faculty: {
          name: "Dr. Sudharson Murugan",
          phone: "9790551772",
          email: "sm_aero@adcet.in"
        },
        student: {
          name: "Vedanti Gondhali", 
          phone: "9867980126",
          email: "vedantigondhali@gmail.com"
        }
      }
    },
    {
      id: "paper-glider",
      name: "Paper Glider: Flight Challenge",
      department: "Aeronautical Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Design and build paper gliders for maximum flight distance and time",
      rules: [
        "Teams must consist of minimum 2 and maximum 4 members.",
        "Rockets/gliders must be constructed only from paper, tape and adhesive (no cardboard, plastic, metal, wood or foam).",
        "Maximum length: 30 cm; maximum diameter: 5 cm; maximum weight: 50 grams.",
        "Rockets/gliders must be a single self-contained unit; no external guidance or active stabilization devices allowed.",
        "Each team will have two official launch attempts; the best score will be considered for ranking.",
        "Pre-flight inspection by judges is mandatory; non-compliant entries will be disqualified.",
        "Safety goggles must be worn by team members in the launch area.",
        "Entry Fee: Rs. 100/- per participant."
      ]
    },
    {
      id: "water-rocket",
      name: "Water Rocket",
      department: "Aeronautical Engineering", 
      maxTeamSize: 4,
      entryFee: 100,
      description: "Build and launch water rockets for maximum altitude and accuracy",
      rules: [
        "Teams must consist of minimum 2 and maximum 4 members.",
        "Rockets must be built around standard PET bottles (2L or smaller). Additional materials such as paper, cardboard, tape and adhesives are permitted for fins and nose cones; metal, wood or glass are prohibited.",
        "Maximum length: 75 cm. Water volume must not exceed one-third of bottle capacity.",
        "Propellant allowed: water and compressed air only; no other liquids, gases or solid propellants permitted.",
        "Rockets must be a single self-contained unit; fins/nose cones must be securely attached and not detach during flight.",
        "A standardized launcher will be provided; teams may not use their own launch systems.",
        "Organizers will set and maintain a standard launch pressure (80 psi) for all rockets.",
        "Pre-launch checks will be performed by judges; non-compliant entries will be disqualified.",
        "Entry Fee: Rs. 100/- per participant."
      ]
    }
  ],
  mechanical: [
    {
      id: "mech-paper",
      name: "Paper Presentation",
      department: "Mechanical Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present innovative research in mechanical engineering",
      topics: [
        "Advances in Automation and Robotics",
        "Innovations in Automotive Industries", 
        "Thermal Engineering and Energy Systems",
        "Manufacturing and Production Engineering",
        "Materials Science and Engineering",
        "Fluid Mechanics and Heat Transfer",
        "Machine Design and Mechatronics",
        "Renewable Energy Technologies"
    ],
    rules: paperPresentationRules
    },
    {
      id: "robo-race",
      name: "Robo Race",
      department: "Mechanical Engineering",
      maxTeamSize: 2,
      entryFee: 100,
      description: "Design autonomous robots to navigate through challenging race tracks"
      ,
      rules: [
        "Bot dimensions must not exceed 300 mm x 300 mm x 300 mm (L x B x H).",
        "Bot weight must not exceed 4 kg.",
        "Bots must be manually controlled; maximum allowed voltage is 12V.",
        "Ready-made LEGO kits or any ready-made mechanisms are not permitted.",
        "Only two members of the team are allowed to handle and operate the bot during the run.",
        "Bots must not damage the arena; any team causing arena damage will be disqualified.",
        "If the bot breaks into multiple parts during the run it will lead to immediate disqualification.",
        "All bots will undergo a safety check before starting; unsafe bots will be disqualified.",
        "Teams will be given five minutes to prepare their bots; failure to start within this time will lead to disqualification.",
        "Only three hand touches are allowed during the run; after the third touch the team will be disqualified.",
        "Referee decisions are final and binding.",
        "Race gameplay: the bot must navigate between checkpoints; skipping an obstacle will result in point deductions; if the bot goes out of track it must be restarted from the previous checkpoint; complete all checkpoints to finish the race."
      ]
    },
    {
      id: "cad-conqueror",
      name: "CAD Conqueror",
      department: "Mechanical Engineering",
      maxTeamSize: 1,
      entryFee: 100,
      description: "Showcase your CAD modeling skills in this individual competition"
      ,
      rules: [
        "Individual participation only. If entries exceed 45 candidates, a pre-qualifier round will be conducted.",
        "Participants should use SolidWorks or CATIA for modeling.",
        "Computer and software facilities will be provided at the venue.",
        "Participants are not allowed to bring digital gadgets or external storage devices into the event hall.",
        "Evaluation will be conducted by the event management team using predefined rubrics.",
        "The task will be revealed during the event and the maximum time allowed per candidate is 1 hour.",
        "Exceeding the scheduled time may lead to the submission not being considered for evaluation.",
        "Final output must be submitted in PDF format to the event management team."
      ]
    }
  ],
  electrical: [
    {
      id: "elec-paper",
      name: "Paper Presentation",
      department: "Electrical Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present cutting-edge research in electrical engineering",
      topics: [
        "Power Electronics and Drives",
        "Renewable Energy Systems",
        "Smart Grid Technologies",
        "Electric Vehicles and Charging Infrastructure",
        "Power Quality and Energy Efficiency",
        "Digital Signal Processing",
        "Control Systems and Automation",
        "High Voltage Engineering"
    ],
    rules: paperPresentationRules
    },
    {
      id: "circuit-builder",
      name: "Circuit Builder",
      department: "Electrical Engineering",
      maxTeamSize: 2,
      entryFee: 100,
      description: "Design and build functional circuits to solve engineering challenges"
      ,
      rules: [
        "Participants must carry valid college ID cards.",
        "The event consists of 2 rounds; each round has a predefined time limit.",
        "Participants are not allowed to use electronic accessories inside the venue hall.",
        "Round 1 is an offline quiz; Round 2 requires building a circuit from a given diagram.",
        "All decisions of the event management and judges are final."
      ],
      coordinators: {
        faculty: { name: "Mrs. Rutuja S Pawar", phone: "9765317323", email: "" },
        student: { name: "Ms. Samruddhi Patil", phone: "9021681044", email: "" }
      }
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      department: "Electrical Engineering",
      maxTeamSize: 2,
      entryFee: 100,
      description: "Identify and fix electrical circuit problems under time pressure"
      ,
      rules: [
        "Ten circuits will be provided during the event.",
        "Only two participants are permitted per team.",
        "Each team will get one minute to find the fault in each circuit.",
        "College ID cards and event registration receipts must be brought on the day of the event.",
        "Judges' decisions are final and the host institute reserves the right to modify rules."
      ],
      coordinators: {
        faculty: { name: "Mr. P. D. More", phone: "09657175613", email: "pdm_ele@adcet.in" },
        student: { name: "Mr. Vivek Borage", phone: "8080220991", email: "vivekborage1711@gmail.com" }
      }
    }
  ],
  civil: [
    {
      id: "civil-paper",
      name: "Paper Presentation",
      department: "Civil Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present innovative solutions in civil engineering",
      topics: [
        "Sustainable Construction Materials",
        "Smart Cities and Infrastructure",
        "Earthquake Resistant Design",
        "Water Resources Management",
        "Environmental Engineering",
        "Transportation Engineering",
        "Structural Health Monitoring",
        "Green Building Technologies"
    ],
    rules: paperPresentationRules
    },
    {
      id: "akruti",
      name: "AKRUTI",
      department: "Civil Engineering",
      maxTeamSize: 1,
      entryFee: 100,
      description: "Individual structural design and analysis competition"
      ,
      rules: [
        "Single participant per entry.",
        "Problem statement provided at the start of the event.",
        "Evaluation based on drafting accuracy, detailing, labeling and use of appropriate coloring.",
        "Final assessment will consider completeness and effective utilization of time."
      ],
      coordinators: {
        faculty: { name: "Mr. Atul N. Kolekar", phone: "9545428026", email: "Ank_civil@adcet.in" },
        student: { name: "Aman Attar", phone: "9356709191", email: "amanattar0303@gmail.com" }
      }
    },
    {
      id: "setu",
      name: "SETU",
      department: "Civil Engineering",
      maxTeamSize: 2,
      entryFee: 100,
      description: "Bridge design and construction challenge"
      ,
      rules: [
        "Each team may have up to two members and must be registered students.",
        "Bridge span: 60 cm (±1 cm); max height 20 cm; max width 8 cm.",
        "Bridges must be constructed only with popsicle sticks and white adhesive glue; no other adhesives or fasteners allowed.",
        "Bridges must sustain the applied load for at least 20 seconds; teams get four incremental loading attempts.",
        "Use of unauthorized materials or non-compliance will lead to disqualification."
      ],
      coordinators: {
        faculty: { name: "Dr. Bajirao V. Mane", phone: "9373277474", email: "bvm_civil@adcet.in" },
        student: { name: "Vedant Bajare", phone: "9172919766", email: "bajarevedantraje@gmail.com" }
      }
    }
  ],
  cse: [
    {
      id: "cse-paper",
      name: "Paper Presentation",
      department: "Computer Science Engineering",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present innovative computer science research and solutions",
      topics: [
        "Artificial Intelligence and Machine Learning",
        "Blockchain Technology",
        "Cloud Computing and DevOps",
        "Cybersecurity and Information Security",
        "Data Science and Big Data Analytics",
        "Internet of Things (IoT)",
        "Mobile Application Development",
        "Software Engineering and Agile Methodologies"
    ],
    rules: paperPresentationRules
    },
    {
      id: "code-compete",
      name: "Code 2 Compete",
      department: "Computer Science Engineering",
      maxTeamSize: 1,
      entryFee: 100,
      description: "Individual competitive programming challenge"
      ,
      rules: [
        "Contest has two rounds: Round 1 is 1 hour (MCQ), Round 2 is 2 hours (programming).",
        "Round 1 contains 50 MCQs; Round 2 contains 3 problem statements.",
        "Shortlisted students from Round 1 advance to Round 2.",
        "Plagiarism will result in immediate disqualification.",
        "Preferred languages: C, C++, Java, Python. Round 2 environment: HackerRank."
      ],
      coordinators: {
        faculty: { name: "Mr. Yogesh V. Koli", phone: "9503265322", email: "yvk_cse@adect.in" },
        student: { name: "Mr. Zahoorahmad Sayyad", phone: "8767354046", email: "zahoor.adcet@gmail.com" }
      }
    },
    {
      id: "b-plan",
      name: "B-Plan",
      department: "Computer Science Engineering",
      maxTeamSize: 2,
      entryFee: 200,
      description: "Present your startup business plan and pitch to judges"
      ,
      rules: [
        "Maximum team size: 2 students per team.",
        "Poster must be 300–800 words and readable from 10 feet.",
        "Presentation time: 10 minutes + 5 minutes Q&A.",
        "Teams must present both poster and business idea to judges.",
        "Entry fee: Rs. 200 (per participant or per team of 2)."
      ],
      coordinators: {
        faculty: { name: "Mrs. Shubhangi Patil", phone: "9730623168", email: "spp1_cse@adcet.in" },
        student: { name: "Mr. Shardul Mane", phone: "9307708830", email: "shardulmane369@gmail.com" }
      }
    }
  ],
  aids: [
    {
      id: "aids-paper",
      name: "Paper Presentation",
      department: "AI & Data Science",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present research on AI and data science applications",
      topics: [
        "Deep Learning and Neural Networks",
        "Natural Language Processing",
        "Computer Vision and Image Processing",
        "Predictive Analytics and Forecasting",
        "Big Data Technologies",
        "Edge AI and IoT Integration",
        "Ethical AI and Bias Mitigation",
        "Reinforcement Learning"
    ],
    rules: paperPresentationRules
    },
    {
      id: "bgmi-dominator",
      name: "BGMI Dominator",
      department: "AI & Data Science",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Esports competition featuring BGMI battles"
      ,
      rules: [
        "Players must join the room 10 minutes prior to match time.",
        "All players must be in the registered list.",
        "Any suspicious activity or use of cheats will result in disqualification.",
        "Use only in-game voice chat while playing; organizers are not responsible for participant connectivity issues.",
        "Entry fee is non-refundable; participants must carry ID cards."
      ],
      coordinators: {
        faculty: { name: "Mr. V. N. Honmane", phone: "+91 8329490361", email: "Vikas_aids@adcet.in" },
        student: { name: "Ronit Swami", phone: "8208980085", email: "ronitswami43@gmail.com" }
      }
    },
    {
      id: "coding-competition",
      name: "Coding Competition",
      department: "AI & Data Science",
      maxTeamSize: 1,
      entryFee: 100,
      description: "Individual coding challenge focusing on algorithms and data structures"
      ,
      rules: [
        "Contest has 3 rounds; problems are revealed at the start of each round.",
        "Each round will have two problems and last approximately 30 minutes per round.",
        "Plagiarism will result in disqualification.",
        "Preferred languages as per event guidelines."
      ],
      coordinators: {
        faculty: { name: "Ms. Smita Dhanaji Patil", phone: "7498695865", email: "Sdp_aids@adect.in" },
        student: { name: "Gaurav Kumbhare", phone: "7768807185", email: "" }
      }
    }
  ],
  iot: [
    {
      id: "iot-paper",
      name: "Paper Presentation",
      department: "IoT & Cyber Security",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present innovations in IoT and cybersecurity",
      topics: [
        "IoT Security and Privacy",
        "Blockchain in IoT",
        "Edge Computing and Fog Computing",
        "Industrial IoT and Industry 4.0",
        "Smart Home and Smart City Applications",
        "Cybersecurity Threat Detection",
        "Network Security and Firewalls",
        "Digital Forensics and Incident Response"
    ],
    rules: paperPresentationRules
    },
    {
      id: "ideathon",
      name: "Ideathon",
      department: "IoT & Cyber Security",
      maxTeamSize: 2,
      entryFee: 100,
      description: "Brainstorm and pitch innovative IoT solutions"
      ,
      rules: [
        "Teams may have up to 2 members; cross-department and cross-year teams allowed.",
        "Initial submission must include a brief (≈500-word) abstract.",
        "Final submission should include a presentation, prototype demo (if applicable) and documentation.",
        "Abstract submission deadline: 1st October 2025. Deadlines will be strictly followed."
      ],
      coordinators: {
        faculty: { name: "Mrs. Prachi S. Pathak", phone: "9158839366", email: "" },
        student: { name: "Vishwajit M Bavadhankar", phone: "9852511717", email: "" }
      }
    },
    {
      id: "box-cricket",
      name: "Box Cricket League",
      department: "IoT & Cyber Security",
      maxTeamSize: 6,
      entryFee: 100,
      description: "Indoor cricket tournament for tech enthusiasts"
      ,
      rules: [
        "Each team shall consist of six players; a player may represent only one team.",
        "Matches are 3 overs per side; each bowler may bowl a maximum of 1 over.",
        "Throw bowling is prohibited; umpire decisions are final.",
        "In case of tie, a Super Over will decide the winner."
      ],
      coordinators: {
        faculty: { name: "Prof. Kumarsagar M. Dange", phone: "9922425350", email: "" },
        student: { name: "Mr. Ruturaj Wani", phone: "9226990917", email: "" }
      }
    }
  ],
  bba: [
    {
      id: "bba-paper",
      name: "Paper Presentation",
      department: "Business Administration",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Present business strategies and management concepts",
      topics: [
        "Digital Marketing and E-commerce",
        "Sustainable Business Practices",
        "Entrepreneurship and Innovation",
        "Financial Management and Investment",
        "Human Resource Management",
        "Supply Chain Management",
        "Business Analytics and Decision Making",
        "Corporate Social Responsibility"
      ],
      rules: paperPresentationRules,
      coordinators: {
        faculty: { name: "Mr. Aftab Mulla", phone: "8928735958", email: "ahm_bba@adcet.in" },
        student: { name: "Mr. Rudrapratap Chavan", phone: "7028354005", email: "rudrachavan400@gmail.com" }
      }
    }
  ],
  food: [
    {
      id: "functional-food",
      name: "Functional Food",
      department: "Food Technology",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Develop innovative functional food products with health benefits"
    },
    {
      id: "product-development",
      name: "New Product Development (Prototype)",
      department: "Food Technology",
      maxTeamSize: 4,
      entryFee: 100,
      description: "Create and prototype new food products with market potential"
    }
  ]
};

export const getAllEvents = (): Event[] => {
  return Object.values(eventsByDepartment).flat();
};

export const getEventsByDepartment = (departmentId: string): Event[] => {
  return eventsByDepartment[departmentId] || [];
};