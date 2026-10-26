// Full two-day programme grid. Edit cells directly here when the schedule
// changes. Styles live in app/globals.css under ".sched".
// The download button serves public/images/schedule/trs-dsai-2026-schedule.png
// — replace that image too whenever the schedule changes.

const times = [
  "9:00–10:00", "10:00–10:45", "10:45–11:00", "11:00–11:30", "11:30–12:15", "12:15–13:00",
  "13:00–14:00", "14:00–14:45", "14:45–15:30", "15:30–16:00", "16:00–16:15",
  "16:15–17:00", "17:00–18:00", "18:00–20:00",
];

function Sp({ name, org }: { name: string; org?: string }) {
  return (
    <>
      <b>{name}</b>
      {org && <i>{org}</i>}
    </>
  );
}

export default function ScheduleGrid() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <a
          href="/images/schedule/trs-dsai-2026-schedule.png"
          download="TRS-DSAI-2026-Schedule.png"
          className="inline-flex items-center gap-2 bg-navy text-white px-5 py-3 text-[14px] font-semibold rounded-sm hover:bg-navy-deep transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          Download schedule (image)
        </a>
      </div>
      <div className="sched">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              {times.map((t) => (
                <th key={t}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* ---------------- DAY 1 ---------------- */}
            <tr>
              <td className="day" rowSpan={3}><small>Day 1</small>Oct 30</td>
              <td className="tk" colSpan={6}>Intelligent Systems (Auditorium / LP-108)</td>
              <td className="br" rowSpan={3}>Lunch Break</td>
              <td className="tk" colSpan={7}>Robotics in Industry (LP-108)</td>
            </tr>
            <tr>
              <td className="cer" rowSpan={2}>Inaugural Session</td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Rajesh Kumar" org="Addverb" /></td>
              <td className="br" rowSpan={2}>Group Photo</td>
              <td className="br" rowSpan={2}>High Tea</td>
              <td className="sp" rowSpan={2}><Sp name="Prof. Ashish Dutta" org="IIT Kanpur" /></td>
              <td className="sp" rowSpan={2}><Sp name="Prof. Harish PM" org="IIT Gandhinagar" /></td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Anubhav Dogra" org="Humanoid, UK" /></td>
              <td className="sp" rowSpan={2}><Sp name="Prof. S K Mohan" org="IIT Palakkad" /></td>
              <td className="sp" rowSpan={2}><Sp name="Mr. Muralikrishnan E" org="Edutech India" /></td>
              <td className="br">Tea Break</td>
              <td className="sp"><Sp name="Prof. Hari Kumar" org="NITW" /></td>
              <td className="sp"><Sp name="TRS GBM" org="Prof. Ekta Singla" /></td>
              <td className="hos" rowSpan={2}>HOS 1: MathWorks<br />(LP-109)</td>
            </tr>
            <tr>
              <td className="hos" colSpan={3}>HOS 1: MathWorks (Mr. Rohit Bhattacharjee, LP-109)</td>
            </tr>
            <tr className="sep"><td colSpan={15} /></tr>

            {/* ---------------- DAY 2 ---------------- */}
            <tr>
              <td className="day" rowSpan={3}><small>Day 2</small>Oct 31</td>
              <td className="tk" colSpan={6}>AI/ML in Robotics (LP-108)</td>
              <td className="br" rowSpan={3}>Lunch Break</td>
              <td className="tk" colSpan={7}>Robotics in Healthcare (LP-108)</td>
            </tr>
            <tr>
              <td className="sp" rowSpan={2}><Sp name="Dr. Madan Dabbeeru" org="Eizen, USA" /></td>
              <td className="sp" rowSpan={2}><Sp name="Prof. S M Hazarika" org="IIT Guwahati" /></td>
              <td className="br" rowSpan={2}>Group Photo</td>
              <td className="br" rowSpan={2}>Tea Break</td>
              <td className="sp" rowSpan={2}><Sp name="Prof. Tim Miller" org="UQ, AUS" /></td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Pranav Lad" org="MathWorks" /></td>
              <td className="sp"><Sp name="Prof. Ahmed Chemori" org="LIRMM, France" /></td>
              <td className="sp"><Sp name="Prof. Sitikantha Roy" org="IIT Delhi" /></td>
              <td className="sp"><Sp name="Mr. Aditya Marathe" org="Nugenix" /></td>
              <td className="br">Tea Break</td>
              <td className="sp"><Sp name="Prof. Nirav Patel" org="IIT Madras" /></td>
              <td className="cer" rowSpan={2} colSpan={2}>Valedictory Session</td>
            </tr>
            <tr>
              <td className="hos" colSpan={3}>HOS 2: Noraxon (Mr. Saurabh Joshi, LP-109)</td>
              <td className="hos" colSpan={2}>HOS 3: Labellerr AI (Mr. Puneet Jindal, LP-109)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[13px] text-steel mt-3">
        HOS: Hands-on Sessions (LP-109) · LP-108 &amp; Auditorium: Keynote Lectures
        <span className="md:hidden"> · Scroll sideways to see the full day</span>
      </p>
    </div>
  );
}
