// ---------------------------------------------------------------------------
// DAY-WISE SCHEDULE / THEMES
// Add `sessions` entries per day once the detailed timetable is finalized.
// ---------------------------------------------------------------------------

export type Session = {
  time: string;
  title: string;
  speaker?: string;
};

export type ScheduleDay = {
  dayLabel: string;
  date: string;
  theme: string;
  room: string;
  sessions?: Session[];
};

export const scheduleDays: ScheduleDay[] = [
  {
    dayLabel: "Day 1",
    date: "30 October 2026",
    theme: "Robotics and AI in Healthcare",
    room: "LT-201, TIET Patiala",
    sessions: [
      { time: "09:00", title: "Registration & inaugural session" },
      { time: "10:00", title: "Keynote address" },
      { time: "12:00", title: "Industrial exhibitions open" },
      { time: "14:00", title: "Technical sessions" },
    ],
  },
  {
    dayLabel: "Day 2",
    date: "31 October 2026",
    theme: "Robotics and AI in Defence and Rescue Applications",
    room: "LT-202, TIET Patiala",
    sessions: [
      { time: "09:00", title: "Technical sessions" },
      { time: "12:00", title: "Industry panel" },
      { time: "15:00", title: "Closing & awards" },
    ],
  },
];
