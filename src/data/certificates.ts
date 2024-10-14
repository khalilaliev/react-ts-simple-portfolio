interface ICertificates {
  id: number;
  title: string;
  school: string;
  issued: string;
  credential: string;
  cerId: number;
}

export const certificates: ICertificates[] = [
  {
    id: 1,
    title: "Front-End Basic",
    school: "Hillel IT School",
    issued: "Nov 2023",
    credential: "https://certificate.ithillel.ua/view/77103560",
    cerId: 77103560,
  },
  {
    id: 2,
    title: "JavaScript",
    school: "Hillel IT School",
    issued: "Feb 2024",
    credential: "https://certificate.ithillel.ua/view/60702782",
    cerId: 60702782,
  },
  {
    id: 3,
    title: "Front-End Pro",
    school: "Hillel IT School",
    issued: "Jun 2024",
    credential: "https://certificate.ithillel.ua/view/25861834",
    cerId: 25861834,
  },
  {
    id: 4,
    title: "React",
    school: "Hillel IT School",
    issued: "Jul 2024",
    credential: "https://certificate.ithillel.ua/view/94365887",
    cerId: 94365887,
  },
  {
    id: 5,
    title: "TypeScript",
    school: "Hillel IT School",
    issued: "Oct 2024",
    credential: "https://certificate.ithillel.ua/view/25754293",
    cerId: 25754293,
  },
];
