// ---------------------------------------------------------------------------
// INDUSTRIAL WORKSHOPS / HANDS-ON SESSIONS (LP-109)
// The workshop features 3 dedicated hands-on masterclasses:
// 1. MathWorks (HOS 1 - Day 1)
// 2. Noraxon (HOS 2 - Day 2)
// 3. Labellerr AI (HOS 3 - Day 2)
// All Hands-on Sessions take place in Workshop Lab LP-109.
// ---------------------------------------------------------------------------

export type Exhibitor = {
  name: string;
  sessionCode: string; // e.g. "HOS 1"
  day: string;         // e.g. "Day 1 (Friday, 30 Oct 2026)"
  timing: string;      // e.g. "14:00 – 18:00 (3–4 Hrs)"
  venue: string;       // "LP-109, TIET Patiala"
  instructor: string;  // e.g. "Dr. Pranav Lad & Mr. Rohit Bhattacharjee"
  focus: string;
  description: string;
  keyTopics: string[];
  logo: string;        // path in /public/images/logos/
  url?: string;
};

export const exhibitors: Exhibitor[] = [
  {
    name: "MathWorks",
    sessionCode: "HOS 1",
    day: "Day 1 · Friday, 30 Oct 2026",
    timing: "Afternoon Session (3–4 Hours)",
    venue: "LP-109, TIET Patiala",
    instructor: "Dr. Pranav Lad & Mr. Rohit Bhattacharjee",
    focus: "MATLAB & Simulink for Robotics, Autonomous Systems & Controls",
    description:
      "MathWorks develops MATLAB and Simulink, world-leading platforms for mathematical computing, simulation, and model-based design in robotics. This intensive masterclass provides practical training on modeling robotic manipulators, autonomous navigation algorithms, sensor fusion, and deploying control code to real-world embedded hardware.",
    keyTopics: [
      "Robotics System Toolbox & Simulink modeling",
      "Autonomous trajectory generation & control",
      "Hardware-in-the-loop (HIL) simulation",
      "Automated C/C++ code generation for controllers",
    ],
    logo: "/images/logos/mathworks.svg",
    url: "https://www.mathworks.com/",
  },
  {
    name: "Noraxon",
    sessionCode: "HOS 2",
    day: "Day 2 · Saturday, 31 Oct 2026",
    timing: "Afternoon Session",
    venue: "LP-109, TIET Patiala",
    instructor: "Mr. Saurabh Joshi",
    focus: "Biomechanics, Surface EMG & Human-Robot Interaction",
    description:
      "Noraxon produces research-grade hardware and software solutions for biomechanics, high-density surface electromyography (EMG), and motion capture analysis. This hands-on session demonstrates live acquisition of muscle activity, kinematic analysis of human movement, and how biological telemetry interfaces with rehabilitation robotics and assistive exoskeletons.",
    keyTopics: [
      "Wireless surface EMG signal capture & processing",
      "Kinematic & kinetic motion analysis",
      "Bio-signal integration with robotic controllers",
      "Applications in rehabilitation & assistive robotics",
    ],
    logo: "/images/logos/noraxon.svg",
    url: "https://www.noraxon.com/",
  },
  {
    name: "Labellerr AI",
    sessionCode: "HOS 3",
    day: "Day 2 · Saturday, 31 Oct 2026",
    timing: "Afternoon Session",
    venue: "LP-109, TIET Patiala",
    instructor: "Mr. Puneet Jindal",
    focus: "Computer Vision Data Pipelines & AI Model Training for Robotics",
    description:
      "Labellerr AI builds an automated training data pipeline platform that accelerates computer vision model development. In this interactive workshop, participants learn how to automate data annotation, curate high-fidelity datasets, and fine-tune computer vision models designed for robotic perception, object detection, and autonomous navigation.",
    keyTopics: [
      "Automated image & video annotation pipelines",
      "Dataset curation & active learning workflows",
      "Fine-tuning object detection models for robots",
      "Model deployment and performance validation",
    ],
    logo: "/images/logos/labellerr.svg",
    url: "https://www.labellerr.com/",
  },
];
