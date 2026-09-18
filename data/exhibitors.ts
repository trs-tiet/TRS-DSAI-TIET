// ---------------------------------------------------------------------------
// INDUSTRIAL EXHIBITION / HANDS-ON SESSIONS
// Order matches the final brochure. These same 6 companies are also listed
// as sponsors — see data/sponsors.ts, which mirrors this file automatically.
// Descriptions are high-level and based on each company's public product
// category — edit freely with more specific/official copy if you have it.
// ---------------------------------------------------------------------------

export type Exhibitor = {
  name: string;
  focus: string;
  description: string;
  logo?: string; // path in /public/images/logos/
};

export const exhibitors: Exhibitor[] = [
  {
    name: "Delsys",
    focus: "Wearable EMG and human-robot interaction",
    description:
      "Delsys designs high-fidelity wearable EMG (electromyography) sensors used to measure muscle activity with research-grade precision. Their systems support biomechanics, rehabilitation science, and studies linking human muscle signals to robotic control. Expect a hands-on look at surface EMG acquisition and how it feeds into human-robot interaction research.",
    logo: "/images/logos/delsys.svg",
  },
  {
    name: "MathWorks",
    focus: "MATLAB and Simulink applications",
    description:
      "MathWorks makes MATLAB and Simulink, widely used platforms for numerical computing, algorithm development, and model-based design across engineering and robotics. The session will demonstrate how these tools apply to robotics workflows — from control system design through simulation to deployment on real hardware.",
    logo: "/images/logos/mathworks.svg",
  },
  {
    name: "Pukhya",
    focus: "Motion Capture Systems",
    description:
      "Pukhya provides advanced motion capture systems that track human and object movement with high spatial precision. Their technology is used in biomechanics, sports science, and robotics research that needs accurate 3D motion data. Expect a live demo of their motion capture setup and how the captured data is analyzed.",
    logo: "/images/logos/pukhya.jpg",
  },
  {
    name: "Aerobe",
    focus: "Biomechanics, EMG & human performance",
    description:
      "Aerobe provides wearable sensor systems for biomechanics, EMG, and human performance analysis, used across clinical research, sports science, and ergonomics. Their tools measure how the body moves and generates force. The session covers how these measurements inform human-centered robotics research.",
    logo: "/images/logos/aerobe.jpg",
  },
  {
    name: "Nugenix",
    focus: "Robotic manipulation, ROS & intelligent systems",
    description:
      "Nugenix Robotics works on robotic manipulation, ROS-based systems, and intelligent automation. Their session offers hands-on exposure to robotic arms and manipulation tasks built on the Robot Operating System (ROS) — a practical look at how manipulation pipelines come together.",
    logo: "/images/logos/nugenix.svg",
  },
  {
    name: "Labellerr AI",
    focus: "Computer vision, AI data & model training",
    description:
      "Labellerr AI builds tools for computer vision data annotation and AI model training pipelines, helping teams label, manage, and iterate on the datasets used to train vision models. The session walks through how quality data annotation supports robust computer vision systems for robotics.",
    logo: "/images/logos/labellerr.svg",
  },
];
