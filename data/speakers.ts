// ---------------------------------------------------------------------------
// SPEAKERS
// Order matches the final brochure exactly (row by row). Affiliations and
// bios sourced from TRS_DSAI_2026_Biographies.txt. `type` reflects that
// document's own Academic/Industry section grouping (a few — Mukherjee,
// Kumar, Harish PM, Singla — sit under "Academic & Research Speakers" there
// despite being industry-affiliated; kept as given).
//
// Note: Ekta Singla's designation uses the biography doc's recommended
// current title ("Associate Director, NAMTECH · Secretary, The Robotics
// Society, India") — the doc flags this as swappable back to the older
// "Director, SOR, NAMTECH" if the organizers prefer that instead.
// ---------------------------------------------------------------------------

export type Speaker = {
  name: string;
  affiliation: string;
  type: "Academic" | "Industrial";
  photo?: string;
  bio?: string;
};

export const speakers: Speaker[] = [
  {
    name: "Prof. Tim Miller",
    affiliation: "Professor of Artificial Intelligence, University of Queensland | UQ-TIET Chair in Data Science",
    type: "Academic",
    photo: "/images/speakers/tim-miller.jpg",
    bio: "Professor of Artificial Intelligence at the University of Queensland and the TIET-UQ Chair in Data Science. His research combines machine learning, reinforcement learning, AI planning, interaction design, and cognitive science. He leads research on human-centred AI, explainable AI, human-AI collaboration, and decision support, with a focus on developing AI systems that enhance human decision-making.",
  },
  {
    name: "Dr. Tirthankar Bandyopadhyay",
    affiliation: "Principal Research Scientist, CSIRO, Brisbane, Australia",
    type: "Academic",
    photo: "/images/speakers/tirthankar-bandyopadhyay.jpg",
    bio: "Principal Research Scientist and robotics researcher at CSIRO, Australia. His work focuses on robot-world interaction, mobile manipulation, autonomous navigation, and robotic mobility in complex environments. He has led projects involving climbing robots, modular field robots, autonomous vehicles, environmental monitoring, and legged robots, including research addressing robotics for search, rescue, inspection, and challenging outdoor environments.",
  },
  {
    name: "Prof. Ahmed Chemori",
    affiliation: "Senior CNRS Researcher, LIRMM, University of Montpellier, France",
    type: "Academic",
    photo: "/images/speakers/ahmed-chemori.jpg",
    bio: "Senior CNRS researcher in automatic control and robotics at LIRMM, University of Montpellier. His research focuses on nonlinear, adaptive, robust, and predictive control of complex robotic systems. His expertise spans parallel robots, marine robotics, humanoid robots, exoskeletons, and underactuated systems, with extensive contributions to international research, publications, supervision, and robotics-control education.",
  },
  {
    name: "Dr. Alok Mukherjee",
    affiliation: "TRS President · CEO, i4Marine Technologies | Former DRDO Scientist",
    type: "Industrial",
    photo: "/images/speakers/alok-mukherjee.jpg",
    bio: "Former DRDO scientist with a career focused on autonomous systems, robotics, and defence-oriented technology development. He holds an MSc in Physics with specialization in Electronics and an MTech in Computer Science. His professional work has included research and innovation in autonomous systems, while his current activities involve marine technologies and robotics applications through i4Marine Technologies.",
  },
  {
    name: "Dr. Rajesh Kumar",
    affiliation: "Head, Advanced Robotics, Addverb",
    type: "Industrial",
    photo: "/images/speakers/rajesh-kumar.jpg",
    bio: "Principal Scientist who leads Advanced Robotics and AI initiatives at Addverb. His work spans collaborative robots, humanoids, legged robotic platforms, haptics, robot intelligence, and human–robot interaction. A President's Gold Medalist with a PhD from IIT Delhi, he has worked across the robotics intelligence stack, from low-level control and signal processing to planning, learning, interaction, and autonomous robotic systems.",
  },
  {
    name: "Prof. Ashish Dutta",
    affiliation: "Professor, IIT Kanpur",
    type: "Academic",
    photo: "/images/speakers/ashish-dutta.jpg",
    bio: "Professor in the Department of Mechanical Engineering at IIT Kanpur, where his research focuses on robotics, intelligent control systems, microsensors and actuators, and bio-robotics. He holds a PhD from Akita University, Japan, and has extensive teaching and research experience in robot dynamics, control, automation, and mechanisms. He has also contributed significantly to robotics education and professional activities in India.",
  },
  {
    name: "Prof. Shyamanta M. Hazarika",
    affiliation: "Professor, IIT Guwahati",
    type: "Academic",
    photo: "/images/speakers/shyamanta-hazarika.jpg",
    bio: "Professor at IIT Guwahati working at the intersection of robotics and artificial intelligence. He leads the Biomimetic Robotics and Artificial Intelligence Laboratory, with research interests including robotic neurorehabilitation, machine learning, AI, and human-centred robotic systems. He holds an MTech in Robotics from IIT Kanpur and a PhD in Artificial Intelligence from the University of Leeds, UK.",
  },
  {
    name: "Prof. Harish PM",
    affiliation: "Professor, IIT Gandhinagar · Director, AB6 Robotics",
    type: "Academic",
    photo: "/images/speakers/harish-pm.jpg",
    bio: "Professor of Mechanical Engineering at IIT Gandhinagar and Director of AB6 Robotics. His research focuses on bimanual and humanoid robots, robotic grasping, robot learning, autonomous vehicles, and robotic interaction with uncertain physical environments. His work combines fundamental robotics research with practical development and entrepreneurship, contributing to the advancement of intelligent and adaptive robotic systems.",
  },
  {
    name: "Prof. Sitikantha Roy",
    affiliation: "Professor, IIT Delhi",
    type: "Academic",
    photo: "/images/speakers/sitikantha-roy.jpg",
    bio: "Professor in the Department of Applied Mechanics at IIT Delhi and works extensively in soft robotics and biomechanics. His research interests include soft actuators and sensors, biomechanics, bio-inspired engineering, smart structures, and AI-enabled healthcare technologies. He leads interdisciplinary research connecting mechanics, robotics, and human-centred systems, with applications in wearable robotics, rehabilitation, and assistive technologies.",
  },
  {
    name: "Dr. Nirav Patel",
    affiliation: "Associate Professor, IIT Madras",
    type: "Academic",
    photo: "/images/speakers/nirav-patel.jpg",
    bio: "Associate Professor in the Department of Engineering Design at IIT Madras and Director of the INSPIRELab. He specializes in medical robotics, robotic surgery, image-guided interventions, and minimally invasive surgical systems. His research experience includes MRI-guided robotic surgery, retinal procedures, surgical navigation, and robot-assisted healthcare. He previously conducted postdoctoral research at Johns Hopkins University and earned his PhD in Robotics Engineering from Worcester Polytechnic Institute.",
  },
  {
    name: "Dr. Ekta Singla",
    affiliation: "Director of School of Robotics (SoR) at NAMTECH · Secretary, The Robotics Society, India · Associate Professor, IIT Ropar",
    type: "Academic",
    photo: "/images/speakers/ekta-singla.jpg",
    bio: "Director of School of Robotics at NAMTECH and Associate Professor at IIT Ropar. Her research spans modular and reconfigurable robotics, wearable exoskeletons, rehabilitation systems, and robotics for Industry 4.0. With more than two decades of robotics experience, she has led major research collaborations and projects and currently serves as Secretary of The Robotics Society, India.",
  },
  {
    name: "Dr. Anubhav Dogra",
    affiliation: "Senior Software Engineer – Integration & Controls, Humanoid, London",
    type: "Industrial",
    photo: "/images/speakers/anubhav-dogra.jpg",
    bio: "Robotics engineer specializing in robotic systems, sensor processing, computer vision, and integration and controls for humanoid robots. He currently works with Humanoid in London, contributing to the development of wheeled and bipedal robotic platforms. Previously, he worked as a Research Fellow at the University of Warwick on medical robotics and autonomous manipulation systems, following a PhD in modular and reconfigurable robotics from IIT Ropar.",
  },
  {
    name: "Dr. Pranav Lad",
    affiliation: "Senior Engineer, MathWorks",
    type: "Industrial",
    photo: "/images/speakers/pranav-lad.jpg",
    bio: "Senior Engineer with MathWorks, working with engineering technologies including MATLAB and Simulink. His professional expertise includes mechanical engineering, dynamics and vibration analysis, modelling, and simulation. He has delivered technical workshops on robotics, UAVs, AI, and MATLAB/Simulink for academic and research audiences, helping engineers and researchers apply computational tools to complex engineering and robotics problems.",
  },
  {
    name: "Mr. Aditya Marathe",
    affiliation: "CEO, Nugenix Robotics",
    type: "Industrial",
    photo: "/images/speakers/aditya-marathe.jpg",
    bio: "CEO of Nugenix Robotics, an organization working with robotic manipulators, mobile robots, and robotics platforms for education and research. His work includes robotics demonstrations, application development, and deployment of robotic arms and mobile manipulation systems. Nugenix's technology ecosystem covers areas including Industry 4.0, AI, defence robotics, agricultural robotics, rehabilitation, disaster response, and advanced manufacturing.",
  },
  {
    name: "Mr. Puneet Jindal",
    affiliation: "Founder & CEO, Labellerr AI",
    type: "Industrial",
    photo: "/images/speakers/puneet-jindal.jpg",
    bio: "Founder and CEO of Labellerr AI, an AI technology company focused on data preparation and computer-vision workflows. He brings more than a decade of experience in data science and has previously led data science teams at organizations including Walmart, Delhivery, and RateGain. His technical expertise includes computer vision, NLP, LLMs, data pipelines, and scalable AI model development.",
  },
  {
    name: "Dr. Madan Dabbeeru",
    affiliation: "Founder & CEO, Eizen",
    type: "Industrial",
    photo: "/images/speakers/madan-dabbeeru.jpg",
    bio: "Founder and CEO of Eizen, an AI company developing systems that move from visual intelligence toward action intelligence. He holds a PhD in AI and has more than 15 years of experience in artificial intelligence. His research and professional interests include robotics, cognitive science, computer vision, medical imaging, reinforcement learning, and autonomous decision-making for intelligent systems.",
  },
  {
    name: "Prof. Santhakumar Mohan",
    affiliation: "Professor, IIT Palakkad",
    type: "Academic",
    photo: "/images/speakers/santhakumar-mohan.jpg",
    bio: "Professor of Mechanical Engineering at IIT Palakkad specializing in robotics and motion control. His research includes mechanism design, service and field robots, underwater vehicles, manipulators, nonlinear motion control, medical assistive devices, and rehabilitation robotics. He has also worked extensively on mobile robots, autonomous vehicles, agricultural robots, exoskeletons, and underwater robotic systems through multidisciplinary research projects.",
  },
  {
    name: "Prof. V. Hari Kumar",
    affiliation: "Professor, NIT Warangal",
    type: "Academic",
    photo: "/images/speakers/v-hari-kumar.jpg",
    bio: "Faculty member at NIT Warangal whose research spans shape and topology optimization, isogeometric analysis, finite-element methods, geometric modelling, CAD, and robotics. His robotics research includes kinematics, path planning, mobile-robot coverage planning, and industrial robot applications. He also works on AI for engineering design and has contributed to research on optimization-driven robotic systems.",
  },
];

export const academicSpeakers: Speaker[] = speakers.filter((s) => s.type === "Academic");
export const industrialSpeakers: Speaker[] = speakers.filter((s) => s.type === "Industrial");
export const allSpeakers: Speaker[] = speakers;
