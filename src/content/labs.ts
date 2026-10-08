import { markTodo } from "./todo";

export interface LabDetail {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  image: string;
  summary: string;
  equipment: string[];
}

export const laboratories: LabDetail[] = [
  {
    id: "computer-lab",
    slug: "computer",
    name: "Computer Science Laboratory",
    eyebrow: "Digital Literacy & Logic",
    image: "/legacy/lab/computer.jpg",
    summary:
      "Equipped with modern high-performance workstations and secure network infrastructure, our computer laboratory fosters computational thinking from primary standards upward. Students master foundational digital skills and advance to structured algorithm design in an environment engineered for focused enquiry.",
    equipment: [
      markTodo("computer.workstations", "labs.ts", "TODO_CLIENT: Modern Core-i5 Workstations (Count)"),
      markTodo("computer.network", "labs.ts", "TODO_CLIENT: Dedicated Gigabit Local Network"),
      markTodo("computer.software", "labs.ts", "TODO_CLIENT: Standard programming environments (Python, C++, Scratch)"),
      markTodo("computer.ups", "labs.ts", "TODO_CLIENT: Centralized UPS power backup"),
    ],
  },
  {
    id: "physics-lab",
    slug: "physics",
    name: "Physics Laboratory",
    eyebrow: "Empirical Investigation & Mechanics",
    image: "/legacy/lab/physics.jpg",
    summary:
      "The Physics laboratory bridges conceptual theory and physical reality through precision measurement apparatus and guided experimentation. Under faculty supervision, students observe optical phenomena, mechanics, and electrical circuits to develop rigorous scientific intuition.",
    equipment: [
      markTodo("physics.optics", "labs.ts", "TODO_CLIENT: Optical benches and spectrometry prisms"),
      markTodo("physics.electrical", "labs.ts", "TODO_CLIENT: Precision galvanometers, potentiometers & resistance boxes"),
      markTodo("physics.mechanics", "labs.ts", "TODO_CLIENT: Spherometers, screw gauges, and pendulum rigs"),
      markTodo("physics.safety", "labs.ts", "TODO_CLIENT: Certified standard safety containment"),
    ],
  },
  {
    id: "chemistry-lab",
    slug: "chemistry",
    name: "Chemistry Laboratory",
    eyebrow: "Analytical Chemistry & Safety",
    image: "/legacy/lab/chemistry.jpg",
    summary:
      "Designed to meet stringent safety and analytical guidelines, our Chemistry laboratory provides individual working stations for qualitative inorganic analysis and titration. Practical sessions ground textbook equations in hands-on observation, instilling lifelong laboratory discipline.",
    equipment: [
      markTodo("chemistry.stations", "labs.ts", "TODO_CLIENT: Dedicated student reagent counters with gas taps"),
      markTodo("chemistry.analytical", "labs.ts", "TODO_CLIENT: Digital analytical balances and titration apparatus"),
      markTodo("chemistry.fume", "labs.ts", "TODO_CLIENT: Exhaust ventilation and chemical safety cabinets"),
      markTodo("chemistry.safety", "labs.ts", "TODO_CLIENT: Emergency eye-wash stations and fire safety gear"),
    ],
  },
];
