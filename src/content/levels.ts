import { markTodo } from "./todo";

export interface LearningStage {
  id: string;
  stageNumber: string;
  name: string;
  grades: string;
  medium: string;
  image: string;
  summary: string;
  description: string;
  href: string;
}

export const learningStages: LearningStage[] = [
  {
    id: "pre-primary",
    stageNumber: "01",
    name: "Pre-Primary",
    grades: "Nursery, Junior KG & Senior KG",
    medium: "English & Gujarati Medium",
    image: "/legacy/about/03.jpg",
    summary: markTodo(
      "pre-primary.summary",
      "levels.ts",
      "TODO_CLIENT: Brief summary of foundational early learning, sensory play, and phonics.",
      "2-line editorial overview of kindergarten"
    ),
    description: markTodo(
      "pre-primary.description",
      "levels.ts",
      "TODO_CLIENT: Detailed description of play-way pedagogy and social-emotional development.",
      "Extended paragraph on pre-primary programme"
    ),
    href: "/academics",
  },
  {
    id: "primary",
    stageNumber: "02",
    name: "Primary School",
    grades: "Standard 1 to Standard 5",
    medium: "English & Gujarati Medium",
    image: "/legacy/about/02.jpg",
    summary: markTodo(
      "primary.summary",
      "levels.ts",
      "TODO_CLIENT: Brief summary of conceptual numeracy, bilingual literacy, and enquiry-based learning.",
      "2-line editorial overview of primary education"
    ),
    description: markTodo(
      "primary.description",
      "levels.ts",
      "TODO_CLIENT: Detailed description of primary curriculum, core subjects, and formative habits.",
      "Extended paragraph on primary programme"
    ),
    href: "/academics",
  },
  {
    id: "secondary",
    stageNumber: "03",
    name: "Secondary School",
    grades: "Standard 6 to Standard 10 (GSEB SSC)",
    medium: "English & Gujarati Medium",
    image: "/legacy/lab/physics.jpg",
    summary: markTodo(
      "secondary.summary",
      "levels.ts",
      "TODO_CLIENT: Brief summary of rigorous board preparation, practical laboratory study, and analytical focus.",
      "2-line editorial overview of secondary education"
    ),
    description: markTodo(
      "secondary.description",
      "levels.ts",
      "TODO_CLIENT: Detailed description of standard 6-10 curriculum and board exam grounding.",
      "Extended paragraph on secondary programme"
    ),
    href: "/academics",
  },
  {
    id: "higher-secondary",
    stageNumber: "04",
    name: "Higher Secondary",
    grades: "Standard 11 & Standard 12 (Science & Commerce Streams)",
    medium: "English & Gujarati Medium",
    image: "/legacy/lab/chemistry.jpg",
    summary: markTodo(
      "higher-secondary.summary",
      "levels.ts",
      "TODO_CLIENT: Brief summary of disciplined specialization in Science (Medical/Engineering) and Commerce (Finance/Economics).",
      "2-line editorial overview of +2 streams"
    ),
    description: markTodo(
      "higher-secondary.description",
      "levels.ts",
      "TODO_CLIENT: Detailed description of Std 11-12 curriculum, entrance coaching support, and university pathways.",
      "Extended paragraph on higher secondary streams"
    ),
    href: "/academics/streams",
  },
];
