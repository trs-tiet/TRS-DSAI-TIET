// ---------------------------------------------------------------------------
// INDUSTRIAL EXHIBITION / HANDS-ON SESSIONS
// Order matches the final brochure. These same 6 companies are also listed
// as sponsors — see data/sponsors.ts.
// ---------------------------------------------------------------------------

export type Exhibitor = {
  name: string;
  focus: string;
  logo?: string; // path in /public/images/logos/
};

export const exhibitors: Exhibitor[] = [
  { name: "Delsys", focus: "Wearable EMG and human-robot interaction", logo: "/images/logos/delsys.svg" },
  { name: "MathWorks", focus: "MATLAB and Simulink applications", logo: "/images/logos/mathworks.svg" },
  { name: "Qualisys", focus: "Optical motion capture & analysis", logo: "/images/logos/qualisys.svg" },
  { name: "Noraxon", focus: "Biomechanics, EMG & human performance", logo: "/images/logos/noraxon.svg" },
  { name: "Nugenix", focus: "Robotic manipulation, ROS & intelligent systems", logo: "/images/logos/nugenix.svg" },
  { name: "Labellerr AI", focus: "Computer vision, AI data & model training", logo: "/images/logos/labellerr.svg" },
];
