// ---------------------------------------------------------------------------
// SPONSORS
// Tracked independently from data/exhibitors.ts (the Hands-on Experience
// page) — content can differ, but the order is kept in sync with it by
// request. If you reorder one, reorder the other to match.
// Descriptions are high-level and based on each company's public product
// category — edit freely with more specific/official copy if you have it.
// ---------------------------------------------------------------------------

export type SponsorTier = "Gold" | "Silver" | "Bronze" | "Technical Partner";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  focus: string;
  description: string;
  logo: string;
  url?: string;
};

export const goldSponsors: Sponsor[] = [
  {
    name: "Edutech",
    tier: "Gold",
    focus: "Education Technology & Digital Learning Solutions",
    description:
      "Edutech designs and builds hands-on STEAM learning spaces, engineering labs, and technology-based learning solutions for schools, universities, and industry, with a presence across the Middle East and India.",
    logo: "/images/logos/edutech.jpg",
    url: "https://www.edutech.com/",
  },
];

export const silverSponsors: Sponsor[] = [
  {
    name: "MathWorks",
    tier: "Silver",
    focus: "MATLAB and Simulink applications for Robotics & Controls",
    description:
      "MathWorks makes MATLAB and Simulink, widely used platforms for numerical computing, algorithm development, and model-based design across engineering and robotics.",
    logo: "/images/logos/mathworks.jpeg",
    url: "https://www.mathworks.com/",
  },
];

export const bronzeSponsors: Sponsor[] = [
  {
    name: "DELSYS",
    tier: "Bronze",
    focus: "Wearable EMG & Human-Robot Interaction",
    description:
      "Delsys designs high-fidelity wearable EMG (electromyography) sensors used to measure muscle activity with research-grade precision.",
    logo: "/images/logos/delsys.svg",
    url: "https://www.delsys.com/",
  },
  {
    name: "Qualisys",
    tier: "Bronze",
    focus: "Optical Motion Capture Systems",
    description:
      "Pukhya and Qualisys provide advanced optical motion capture systems that track human and object movement with high spatial precision.",
    logo: "/images/logos/pukhya.jpg",
    url: "https://www.qualisys.com/",
  },
  {
    name: "Vicon Texon",
    tier: "Bronze",
    focus: "Optical Motion Capture & Analysis Systems",
    description:
      "Vicon Texon provides industry-leading optical motion capture technology, delivering sub-millimetre tracking accuracy for biomechanics and robotics research.",
    logo: "/images/logos/vicon.jpg",
    url: "https://www.vicon.com/",
  },
  {
    name: "NORAXON",
    tier: "Bronze",
    focus: "Biomechanics, EMG & Human Performance",
    description:
      "Aerobe and Noraxon produce research-grade hardware and software solutions for biomechanics, high-density surface electromyography (EMG), and motion capture analysis.",
    logo: "/images/logos/aerobe.jpg",
    url: "https://www.noraxon.com/",
  },
  {
    name: "NUGENIX",
    tier: "Bronze",
    focus: "Robotic Manipulation, ROS & Intelligent Automation",
    description:
      "Nugenix Robotics works on robotic manipulation, ROS-based systems, and intelligent automation, with hands-on exposure to robotic arms and manipulation tasks.",
    logo: "/images/logos/nugenix.jpeg",
  },
  {
    name: "LABELLERR AI",
    tier: "Bronze",
    focus: "Computer Vision Data Pipelines & AI Model Training",
    description:
      "Labellerr AI builds tools for computer vision data annotation and AI model training pipelines, helping teams label, manage, and iterate on datasets for robotics perception.",
    logo: "/images/logos/labellerr.svg",
    url: "https://www.labellerr.com/",
  },
];

export const technicalPartners: Sponsor[] = [
  {
    name: "TRS",
    tier: "Technical Partner",
    focus: "The Robotics Society, India",
    description:
      "The premier professional robotics society in India advancing robotics research, education, and development.",
    logo: "/images/logos/trs.jpg",
    url: "https://rs-india.org/",
  },
  {
    name: "COE-DSAI",
    tier: "Technical Partner",
    focus: "Centre of Excellence in Data Science & AI, TIET",
    description:
      "TIET & UQ Centre of Excellence in Data Science & Artificial Intelligence, driving interdisciplinary research and education.",
    logo: "/images/logos/coe-dsai.png",
    url: "https://thapar.edu/",
  },
  {
    name: "MARS, TIET",
    tier: "Technical Partner",
    focus: "Mechatronics & Robotics Society, TIET",
    description:
      "Student mechatronics and robotics society at TIET developing autonomous rovers, drones, and competitive robotics systems.",
    logo: "/images/logos/mars.jpg",
  },
];

export const sponsors: Sponsor[] = [
  ...goldSponsors,
  ...silverSponsors,
  ...bronzeSponsors,
  ...technicalPartners,
];

export const sponsorTiers: SponsorTier[] = [
  "Gold",
  "Silver",
  "Bronze",
  "Technical Partner",
];
