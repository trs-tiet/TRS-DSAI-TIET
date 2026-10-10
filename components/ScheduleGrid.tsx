// Full two-day programme grid. Edit cells directly here when the schedule
// changes. Styles live in app/globals.css under ".sched".

const times = [
  "9:00–10:00", "10:00–11:00", "11:00–11:30", "11:30–12:15", "12:15–13:00",
  "13:00–14:00", "14:00–14:55", "14:55–15:30", "15:30–16:00", "16:00–16:30",
  "16:30–17:15", "17:15–18:00",
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
              <td className="tk" colSpan={5}>Autonomous Systems (Auditorium)</td>
              <td className="br" rowSpan={3}>Lunch Break</td>
              <td className="tk" colSpan={6}>Robotics in Industry 4.0 (LP-109)</td>
            </tr>
            <tr>
              <td className="cer" rowSpan={2}>Inaugural Session</td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Tirthankar Bandyopadhyay" org="CSIRO, AUS" /></td>
              <td className="br" rowSpan={2}>High Tea</td>
              <td className="sp" rowSpan={2}><Sp name="Prof. Ashish Dutta" org="IIT Kanpur" /></td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Rajesh Kumar" org="Addverb" /></td>
              <td className="sp" rowSpan={2}><Sp name="Dr. Anubhav Dogra" org="Humanoid, UK" /></td>
              <td className="sp" rowSpan={2}><Sp name="Prof. S K Mohan" org="IIT Palakkad" /></td>
              <td className="sp" rowSpan={2}><Sp name="Edutech" /></td>
              <td className="br">Tea Break</td>
              <td className="sp"><Sp name="Prof. Hari Kumar" org="NITW" /></td>
              <td className="sp"><Sp name="TRS GBM" org="Prof. Ekta Singla" /></td>
            </tr>
            <tr>
              <td className="hos">PS1</td>
              <td className="hos" colSpan={2}>HOS 1: MathWorks (3–4 hrs)<br />Dr. Pranav Lad &amp; team</td>
            </tr>
            <tr className="sep"><td colSpan={13} /></tr>

            {/* ---------------- DAY 2 ---------------- */}
            <tr>
              <td className="day" rowSpan={4}><small>Day 2</small>Oct 31</td>
              <td className="tk" colSpan={5}>AI/ML in Robotics (LP-109)</td>
              <td className="br" rowSpan={4}>Lunch Break</td>
              <td className="tk" colSpan={6}>Robotics in Healthcare (LP-109)</td>
            </tr>
            <tr>
              <td className="sp" rowSpan={3}><Sp name="Prof. Tim Miller" org="UQ, AUS" /></td>
              <td className="sp" rowSpan={3}><Sp name="Dr. Madan Dabbeeru" org="Eizen, USA" /></td>
              <td className="br" rowSpan={2}>Tea Break</td>
              <td className="sp" rowSpan={3}><Sp name="Prof. S M Hazarika" org="IIT Guwahati" /></td>
              <td className="sp" rowSpan={3}><Sp name="Prof. Harish PM" org="IIT Gandhinagar" /></td>
              <td className="sp"><Sp name="Prof. Ahmed Chemori" org="LIRMM, France" /></td>
              <td className="sp"><Sp name="Dr. Nirav Patel" org="IIT Madras" /></td>
              <td className="sp"><Sp name="Dr. Pranav Lad" org="MathWorks" /></td>
              <td className="br">Tea Break</td>
              <td className="sp"><Sp name="Prof. S. Roy" org="IIT Delhi" /></td>
              <td className="cer" rowSpan={3}>Valedictory Session</td>
            </tr>
            <tr>
              <td className="hos" colSpan={5}>HOS 2: Noraxon (Dr. Abhishek &amp; team)</td>
            </tr>
            <tr>
              <td className="hos">PS2</td>
              <td className="hos" colSpan={2}>HOS 3: Nugenix (Mr. Aditya Marathe)</td>
              <td className="hos" colSpan={3}>HOS 4: Labellerr AI (Mr. Puneet Jindal)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[13px] text-steel mt-3">
        HOS: Hands-on Sessions (LP-108) · PS: Poster Session
        <span className="md:hidden"> · Scroll sideways to see the full day</span>
      </p>
    </div>
  );
}
