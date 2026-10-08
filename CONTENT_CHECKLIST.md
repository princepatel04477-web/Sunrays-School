# Sunrays Vidhyalaya · Client Content Checklist

This document catalogs every pending content item (`TODO_CLIENT`) in the codebase.
The website is currently 100% functional, static-compiled, and type-checked with safe, respectful placeholders. To replace any item below, update the corresponding field in the indicated file under `src/content/`.

---

## 1. Leadership Messages (`src/content/messages.ts`)

| Location | Key / Field | Current Placeholder | Description / What the School Needs to Provide |
| :--- | :--- | :--- | :--- |
| `/about/headmaster` | `headmaster.name` | `TODO_CLIENT: Headmaster / Principal Full Name` | Official name of the Principal / Headmaster |
| `/about/headmaster` | `headmaster.excerpt` | `TODO_CLIENT: Short 2-sentence opening summary...` | Two-sentence summary for card previews |
| `/about/headmaster` | `headmaster.body1` | `TODO_CLIENT: Opening paragraph...` | Opening paragraph on pedagogy, values, and student discipline |
| `/about/headmaster` | `headmaster.body2` | `TODO_CLIENT: Second paragraph regarding GSEB...` | Academic philosophy, GSEB preparation, and co-curricular balance |
| `/about/headmaster` | `headmaster.body3` | `TODO_CLIENT: Closing blessings...` | Concluding blessing and welcome to parents |

---

## 2. Institutional Statistics (`src/content/stats.ts`)

*Note: In accordance with editorial truthfulness, unverified numbers (such as template counts of 750+ teachers or 1,500+ prizes) have been eliminated. Only verified statistics will appear on the public site.*

| Location | Key / Field | Current Placeholder | Description / What the School Needs to Provide |
| :--- | :--- | :--- | :--- |
| Homepage, About | `stats.studentCount` | `TODO_CLIENT: Total student enrollment (e.g. 1,200)` | Total active student strength across Pre-Primary to 12th |
| Homepage, Academics | `stats.a1Count` | `TODO_CLIENT: Total A1 board results (banner indicates 41)` | Total A1 grade results achieved in GSEB 10th & 12th Board examinations |
| Homepage, Faculty | `stats.facultyCount` | `TODO_CLIENT: Exact faculty count (not 750)` | Exact number of qualified teachers and teaching assistants on staff |

---

## 3. Faculty Directory (`src/content/faculty.ts`)

All 13 authentic faculty portraits from the school's historical archives have been mapped to `/about/faculty`. The following 11 teachers need their names, subjects, qualifications, and teaching quotes confirmed:

| Portrait Asset | Department | Field | Needs Client Approval |
| :--- | :--- | :--- | :--- |
| `03.jpg` | Secondary | Name, Subject, Degrees, Quote | Teacher details for Portrait 03 |
| `04.jpg` | Science | Name, Subject, Degrees, Quote | Teacher details for Portrait 04 |
| `05.jpg` | Science | Name, Subject, Degrees, Quote | Teacher details for Portrait 05 |
| `06.jpg` | Commerce | Name, Subject, Degrees, Quote | Teacher details for Portrait 06 |
| `07.jpg` | Commerce | Name, Subject, Degrees, Quote | Teacher details for Portrait 07 |
| `08.jpg` | Primary | Name, Subject, Degrees, Quote | Teacher details for Portrait 08 |
| `09.jpg` | Primary | Name, Subject, Degrees, Quote | Teacher details for Portrait 09 |
| `10.jpg` | Pre-primary | Name, Subject, Degrees, Quote | Teacher details for Portrait 10 |
| `11.jpg` | Pre-primary | Name, Subject, Degrees, Quote | Teacher details for Portrait 11 |
| `12.jpg` | Secondary | Name, Subject, Degrees, Quote | Teacher details for Portrait 12 |
| `13.jpg` | Pre-primary | Name, Subject, Degrees, Quote | Teacher details for Portrait 13 |

*(Note: Portraits 01 — Jaysukh Kathiriya / Trustee, and 02 — Principal placeholder are already assigned).*

---

## 4. Laboratory Equipment Specifications (`src/content/labs.ts`)

| Laboratory | Equipment Key | Description |
| :--- | :--- | :--- |
| **Computer Lab** | `workstations` | Specific workstation count and CPU configuration (e.g., 40 Core-i5 PCs) |
| **Computer Lab** | `network` | Networking specs (Gigabit LAN, fibre internet bandwidth) |
| **Computer Lab** | `software` | Installed software environments (Python, C++, Scratch, LibreOffice) |
| **Computer Lab** | `ups` | Power backup capacity (e.g., 10kVA Online UPS) |
| **Physics Lab** | `optics` | Optical benches, prisms, sodium vapour lamp sets |
| **Physics Lab** | `electrical` | Galvanometers, potentiometers, resistance boxes, ammeters |
| **Physics Lab** | `mechanics` | Spherometers, screw gauges, helical springs, compound pendulums |
| **Physics Lab** | `safety` | Rubber matting, earthing certification, breaker isolation |
| **Chemistry Lab**| `stations` | Dedicated reagent tables, gas burners, water tap count |
| **Chemistry Lab**| `analytical` | Digital analytical balances, burettes, titration setups |
| **Chemistry Lab**| `fume` | Exhaust ventilation units and fume cupboards |
| **Chemistry Lab**| `safety` | Eye-wash basins, acid-neutralizing reagents, CO2 extinguishers |

---

## 5. Fee Structure (`src/content/fees.ts`)

*Note: If the trust decides not to publish fee schedules publicly, the `/admissions/fees` page displays a respectful notice: "Fee schedules are shared confidentially during campus counseling and orientation."*

| Standard / Section | Fee Type | Suggested Unit |
| :--- | :--- | :--- |
| Pre-Primary (Nursery, Jr. KG, Sr. KG) | Annual Tuition + Activity Fee | INR per annum |
| Primary (Std 1 to 5) | Annual Tuition + Computer Lab Fee | INR per annum |
| Upper Primary & Secondary (Std 6 to 10) | Annual Tuition + Lab & Exam Fee | INR per annum |
| Higher Secondary Science (Std 11 & 12) | Annual Tuition + Science Lab Fee | INR per annum |
| Higher Secondary Commerce (Std 11 & 12)| Annual Tuition + Computer Lab Fee | INR per annum |

---

## 6. Mandatory Public Disclosure (`src/content/disclosure.ts`)

Mandated under Gujarat State Education Department & Right to Education norms:

| Field | Description | Current Status |
| :--- | :--- | :--- |
| `indexNo` | GSEB School Index / Registration Number | Needs School Registration Number |
| `trustReg` | Public Trust Registration Number (Leo Institute) | Needs Trust Registration Number |
| `principal` | Principal Full Name & Academic Qualifications | Needs Principal details |
| `buildingSafety` | Municipal Corporation Building Safety Certificate No. & Date | Needs Safety Certificate Ref |
| `fireSafety` | Fire Safety NOC Certificate No. & Validity Date | Needs Fire NOC Ref |
| `landArea` | Total Campus Area in Square Metres | Needs Area in sq. metres |
| `classrooms` | Total Number of Classrooms | Needs Classroom count |
| `library` | Total Library Books / Reference Volumes | Needs Book collection count |

---

## How to Review and Update
1. Open the relevant file in `src/content/`.
2. Locate the `TODO_CLIENT` text.
3. Replace with approved copy.
4. Run `npm run content:todo` to check remaining items.
5. Run `npm run build` to re-generate the static site.
