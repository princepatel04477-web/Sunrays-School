import { markTodo } from "./todo";

export interface LeadershipMessage {
  author: string;
  role: string;
  title: string;
  organization: string;
  excerpt: string;
  fullMessage: string[];
  image?: string;
}

export const trusteeMessage: LeadershipMessage = {
  author: "Jaysukh Kathiriya",
  role: "Trustee",
  title: "A Message to Parents & Well-Wishers",
  organization: "Leo Institute of Education Trust",
  excerpt:
    "Dear Parents, I hope this message finds you and your family in good health and high spirits. As the trustee of Sunrays Vidhyalaya, I wanted to take a moment to convey my gratitude for your continued support and collaboration in our shared mission of providing the best possible education for our students.",
  fullMessage: [
    "Dear Parents, I hope this message finds you and your family in good health and high spirits.",
    "As the trustee of Sunrays Vidhyalaya, I wanted to take a moment to convey my gratitude for your continued support and collaboration in our shared mission of providing the best possible education for our students.",
    "Education is not solely an intellectual pursuit; it is a sacred foundation for building character, perseverance, and ethical values. Over the past decade, our commitment has been to establish an environment where every young learner feels valued, nurtured, and encouraged to strive toward their potential.",
    "Our classrooms, laboratories, and grounds are arranged to cultivate curiosity alongside discipline. With the trust of our parents and the tireless devotion of our educators, we look forward to nurturing generations of young minds who will carry honor, knowledge, and integrity into the wider world.",
  ],
  image: "/legacy/about/01.jpg",
};

export const headmasterMessage: LeadershipMessage = {
  author: markTodo(
    "headmaster.name",
    "messages.ts",
    "TODO_CLIENT: Headmaster / Principal Full Name",
    "Provide official name of the Principal"
  ),
  role: "Principal",
  title: "Academic Vision & Direction",
  organization: "Sunrays Vidhyalaya",
  excerpt: markTodo(
    "headmaster.excerpt",
    "messages.ts",
    "TODO_CLIENT: Short 2-sentence opening summary of the Principal's academic address.",
    "Short excerpt for previews"
  ),
  fullMessage: [
    markTodo(
      "headmaster.body1",
      "messages.ts",
      "TODO_CLIENT: Opening paragraph of Principal's message on school pedagogy and discipline.",
      "First paragraph"
    ),
    markTodo(
      "headmaster.body2",
      "messages.ts",
      "TODO_CLIENT: Second paragraph regarding GSEB curriculum, board preparation, and co-curricular balance.",
      "Second paragraph"
    ),
    markTodo(
      "headmaster.body3",
      "messages.ts",
      "TODO_CLIENT: Closing blessings and invitation to parents.",
      "Closing remarks"
    ),
  ],
  image: "/legacy/about/02.jpg",
};
