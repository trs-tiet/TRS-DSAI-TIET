// ---------------------------------------------------------------------------
// DAY-WISE SCHEDULE / THEMES
// Edit the 4 themes below to update the cards on the homepage.
// You can change date, topic, and venue for each theme card directly here.
// ---------------------------------------------------------------------------

export type ScheduleTheme = {
  id: string;
  dayLabel?: string; // Optional: "Day 1", "Day 2", etc.
  date: string;     // e.g. "30 October 2026"
  topic: string;    // Theme / Topic title
  venue: string;    // Room or Venue name
};

export const scheduleThemes: ScheduleTheme[] = [
  {
    id: "theme-1",
    date: "30 October 2026",
    topic: "Intelligent Systems",
    venue: "Auditorium, TIET Patiala",
  },
  {
    id: "theme-2",
    date: "30 October 2026",
    topic: "Robotics in Industry 4.0",
    venue: "Lecture : LP-108, TIET Patiala\nHands-On : LP-109, TIET Patiala",
  },
  {
    id: "theme-3",
    date: "31 October 2026",
    topic: "AI/ML in Robotics",
    venue: "LP-108, TIET Patiala",
  },
  {
    id: "theme-4",
    date: "31 October 2026",
    topic: "Robotics in Healthcare",
    venue: "Lecture : LP-108, TIET Patiala\nHands-On : LP-109, TIET Patiala",
  },
];

export type ScheduleDay = {
  dayLabel: string;
  date: string;
  theme: string;
  room: string;
  image?: string;
};

export const scheduleDays: ScheduleDay[] = [
  {
    dayLabel: "Day 1",
    date: "30 October 2026",
    theme: "Intelligent Systems · Robotics in Industry 4.0",
    room: "Auditorium & LP-108 / LP-109, TIET Patiala",
    // image: "/images/schedule/day1.jpg",
  },
  {
    dayLabel: "Day 2",
    date: "31 October 2026",
    theme: "AI/ML in Robotics · Robotics in Healthcare",
    room: "LP-108 & LP-109, TIET Patiala",
    // image: "/images/schedule/day2.jpg",
  },
];

