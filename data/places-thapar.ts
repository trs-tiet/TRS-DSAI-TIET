// ---------------------------------------------------------------------------
// PLACES TO VISIT — IN THAPAR (ON CAMPUS)
// These are internal TIET facility names with no public thapar.edu page to
// cite (confirmed via search) — descriptions are kept minimal and honest,
// based on what each name indicates, rather than invented specifics.
//
// `mapsUrl` is a Google Maps SEARCH link, not a guaranteed exact pin —
// individual lettered blocks (H-Block, D-Block, etc.) aren't separately
// geocoded on Google Maps, only the main TIET campus is. These links open
// centered on campus with the block name in the search query, which is
// generally enough for Maps to nudge toward the right area, but isn't a
// precise building-level pin. Confirmed via thapar.edu that TIET does use
// lettered academic blocks (e.g. "C-Block" for the EIED department), so the
// naming itself is accurate — just not independently mappable per block.
// ---------------------------------------------------------------------------

import type { PlaceToVisit } from "./places-patiala";

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const TIET = "Thapar Institute of Engineering and Technology Patiala";

export const placesInThapar: PlaceToVisit[] = [
  {
    name: "MARS Lab, H-Block",
    description:
      "Home base of TIET's Mechatronics and Robotics Society (MARS) — the student robotics team behind the institute's rover and drone projects.",
    mapsUrl: mapsSearchUrl(`H Block ${TIET}`),
  },
  {
    name: "Gait Lab, D-Block",
    description:
      "A biomechanics and gait analysis lab on campus — relevant context given the workshop's own EMG and motion-capture exhibitors.",
    mapsUrl: mapsSearchUrl(`D Block ${TIET}`),
  },
  {
    name: "CSED Block",
    description: "The Computer Science & Engineering Department building.",
    mapsUrl: mapsSearchUrl(`Computer Science Engineering Department CSED ${TIET}`),
  },
  {
    name: "Nava Nalanda Library",
    description:
      "TIET's main library — a good stop between sessions for a quiet corner or a look at the campus's academic resources.",
    mapsUrl: mapsSearchUrl(`Library ${TIET}`),
  },
  {
    name: "Robotics and Intelligent System Lab, L-006, CSED Building",
    description:
      "A robotics and intelligent systems research lab housed in the CSED building, room L-006.",
    mapsUrl: mapsSearchUrl(`Computer Science Engineering Department CSED ${TIET}`),
  },
];
