// ---------------------------------------------------------------------------
// DAY-WISE SCHEDULE / THEMES
// Detailed session timing isn't finalized yet — each day instead supports an
// optional `image` (a schedule graphic you'll add later). Once you drop a
// file into /public/images/schedule/ and set `image` below, it replaces the
// "to be announced" placeholder automatically — no other code changes.
// ---------------------------------------------------------------------------

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
    theme: "Autonomous Systems · Robotics in Industry 4.0",
    room: "Auditorium & LP-109, TIET Patiala",
    // image: "/images/schedule/day1.jpg",
  },
  {
    dayLabel: "Day 2",
    date: "31 October 2026",
    theme: "AI/ML in Robotics · Robotics in Healthcare",
    room: "LP-109, TIET Patiala",
    // image: "/images/schedule/day2.jpg",
  },
];
