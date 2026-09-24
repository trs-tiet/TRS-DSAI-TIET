// ---------------------------------------------------------------------------
// SPONSORS
// Tracked independently from data/exhibitors.ts (the Hands-on Experience
// page) — the two lists can differ in order, membership, or copy.
// Descriptions are high-level and based on each company's public product
// category — edit freely with more specific/official copy if you have it.
//
// NOTE: Edutech's description below is a generic best-effort placeholder —
// a web search for "Edutech" turned up dozens of unrelated companies with
// that name, so nothing could be confirmed against this specific sponsor.
// Swap in official copy if you have it.
// ---------------------------------------------------------------------------

export type SponsorTier = "Sponsor";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  focus: string;
  description: string;
  logo?: string;
  url?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "MathWorks",
    tier: "Sponsor",
    focus: "MATLAB and Simulink applications",
    description:
      "MathWorks makes MATLAB and Simulink, widely used platforms for numerical computing, algorithm development, and model-based design across engineering and robotics. The session will demonstrate how these tools apply to robotics workflows — from control system design through simulation to deployment on real hardware.",
    logo: "/images/logos/mathworks.svg",
  },
  {
    name: "Edutech",
    tier: "Sponsor",
    focus: "Educational robotics & STEM lab equipment",
    description:
      "Edutech supplies robotics and STEM lab equipment and kits used for hands-on technical education. Their offerings support skill-building in robotics, automation, and engineering fundamentals for students and early-career researchers.",
    logo: "/images/logos/edutech.jpg",
  },
  {
    name: "Delsys",
    tier: "Sponsor",
    focus: "Wearable EMG and human-robot interaction",
    description:
      "Delsys designs high-fidelity wearable EMG (electromyography) sensors used to measure muscle activity with research-grade precision. Their systems support biomechanics, rehabilitation science, and studies linking human muscle signals to robotic control.",
    logo: "/images/logos/delsys.svg",
  },
  {
    name: "Qualysis",
    tier: "Sponsor",
    focus: "Motion Capture Systems",
    description:
      "Pukhya provides advanced motion capture systems that track human and object movement with high spatial precision. Their technology is used in biomechanics, sports science, and robotics research that needs accurate 3D motion data.",
    logo: "/images/logos/pukhya.jpg",
  },
  {
    name: "Vicon",
    tier: "Sponsor",
    focus: "Optical motion capture systems",
    description:
      "Vicon is a long-established provider of optical motion capture technology, used across engineering, life sciences, and entertainment applications where precise 3D movement data matters. Their camera-based systems deliver sub-millimetre tracking accuracy for biomechanics and robotics research.",
    logo: "/images/logos/vicon.jpg",
  },
  {
    name: "Noraxon",
    tier: "Sponsor",
    focus: "Biomechanics, EMG & human performance",
    description:
      "Aerobe provides wearable sensor systems for biomechanics, EMG, and human performance analysis, used across clinical research, sports science, and ergonomics. Their tools measure how the body moves and generates force.",
    logo: "/images/logos/aerobe.jpg",
  },
  {
    name: "Nugenix",
    tier: "Sponsor",
    focus: "Robotic manipulation, ROS & intelligent systems",
    description:
      "Nugenix Robotics works on robotic manipulation, ROS-based systems, and intelligent automation, with hands-on exposure to robotic arms and manipulation tasks built on the Robot Operating System (ROS).",
    logo: "/images/logos/nugenix.svg",
  },
  {
    name: "Labellerr AI",
    tier: "Sponsor",
    focus: "Computer vision, AI data & model training",
    description:
      "Labellerr AI builds tools for computer vision data annotation and AI model training pipelines, helping teams label, manage, and iterate on the datasets used to train vision models.",
    logo: "/images/logos/labellerr.svg",
  },
];

export const sponsorTiers: SponsorTier[] = ["Sponsor"];
