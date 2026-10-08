export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  album: "Campus" | "Labs" | "Celebrations" | "Sports" | "Annual Day";
  caption: string;
  width: number;
  height: number;
}

export const galleryAlbums = [
  "All",
  "Campus",
  "Labs",
  "Celebrations",
  "Sports",
  "Annual Day",
] as const;

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-01",
    src: "/legacy/gallery/01.jpg",
    title: "School Assembly & Morning Gathering",
    album: "Campus",
    caption: "Students gathered in the main quadrangle for morning prayer and announcements.",
    width: 1200,
    height: 800,
  },
  {
    id: "gal-02",
    src: "/legacy/gallery/02.jpg",
    title: "Classroom Instruction",
    album: "Campus",
    caption: "Interactive teaching session fostering conceptual clarity and student participation.",
    width: 1200,
    height: 800,
  },
  {
    id: "gal-03",
    src: "/legacy/gallery/03.jpg",
    title: "Science Practical Demonstration",
    album: "Labs",
    caption: "Hands-on scientific demonstration in the secondary laboratory.",
    width: 1200,
    height: 800,
  },
  {
    id: "gal-04",
    src: "/legacy/gallery/04.jpg",
    title: "Cultural Festival Presentation",
    album: "Celebrations",
    caption: "Students performing traditional cultural dances during annual festivities.",
    width: 1200,
    height: 800,
  },
  {
    id: "gal-05",
    src: "/legacy/gallery/05.jpg",
    title: "Athletics & Track Events",
    album: "Sports",
    caption: "Annual athletics meet encouraging physical stamina and teamwork.",
    width: 1200,
    height: 800,
  },
  {
    id: "gal-06",
    src: "/legacy/gallery/06.jpg",
    title: "Annual Day Celebrations",
    album: "Annual Day",
    caption: "Award ceremony recognizing student excellence across scholastic domains.",
    width: 1200,
    height: 800,
  },
];
