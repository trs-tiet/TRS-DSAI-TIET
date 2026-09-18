// ---------------------------------------------------------------------------
// ORGANIZING COMMITTEE
// Bios sourced from TRS_DSAI_2026_Biographies.txt (provided directly for
// this site).
// ---------------------------------------------------------------------------

export type Organizer = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export const organizers: Organizer[] = [
  {
    name: "Prof. Padmakumar Nair",
    role: "Chief Patron · Vice Chancellor, TIET Patiala",
    photo: "/images/organizers/padmakumar-nair.jpg",
    bio: "Vice Chancellor of Thapar Institute of Engineering & Technology, with over three decades of experience spanning academia, industry, consulting, and advanced R&D. His expertise includes sustainability, leadership development, entrepreneurship, and nanomaterials. He has held academic and leadership positions internationally and has contributed extensively to institutional development, innovation, and sustainable enterprise.",
  },
  {
    name: "Prof. Ajay Batish",
    role: "Patron · Pro Vice Chancellor, TIET Patiala",
    photo: "/images/organizers/ajay-batish.jpg",
    bio: "Professor and Pro Vice Chancellor at Thapar Institute of Engineering & Technology. His academic and research interests include advanced manufacturing, process optimization, industrial engineering, ergonomics, and quality engineering. He has extensive experience in academia and industry, including earlier work in quality management, and has held several senior academic and administrative positions at TIET.",
  },
  {
    name: "Prof. Inderveer Chana",
    role: "Workshop Chair · Joint Director, DSAI, TIET Patiala",
    photo: "/images/organizers/inderveer-chana.jpg",
    bio: "Professor in the Department of Computer Science and Engineering at TIET and Joint Director of the Centre of Excellence in Data Science & AI. Her research expertise includes cloud computing, energy-aware computing, software engineering, and grid computing. She has served in several academic and administrative leadership roles and has contributed significantly to institutional research and technology initiatives.",
  },
  {
    name: "Prof. Ashish Singla",
    role: "Convener · Professor, TIET Patiala",
    photo: "/images/organizers/ashish-singla.jpg",
    bio: "Professor of Mechanical Engineering at TIET specializing in robotics, flexible manipulators, underactuated systems, exoskeletons, and wearable robotics. His research also covers multibody dynamics, control, medical robotics, and redundant manipulators. With extensive experience across academia, industry, and international research collaborations, he has supervised numerous researchers and contributed to several major robotics and control projects.",
  },
  {
    name: "Dr. Sachin Kansal",
    role: "Co-Convener · Associate Professor, TIET Patiala",
    photo: "/images/organizers/sachin-kansal.jpg",
    bio: "Associate Professor in the Department of Computer Science and Engineering at TIET, specializing in robotics, computer vision, and mechatronics. He earned his PhD from IIT Delhi and has contributed extensively to research in advanced automation, human–robot interaction, and AI-driven systems. He has authored numerous research publications and participated in government-funded research and innovation projects.",
  },
];
