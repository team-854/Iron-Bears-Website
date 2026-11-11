export type Season = {
  year: number;
  game: string;
  image: string;
  preserveFrame?: boolean;
  position?: string;
};

export const seasons: readonly Season[] = [
  {
    year: 2026,
    game: "REBUILT",
    image: "/images/2026/robot-field.jpg",
    position: "50% 66%",
  },
  {
    year: 2025,
    game: "REEFSCAPE",
    image: "/images/history/2025.jpg",
    position: "50% 65%",
  },
  { year: 2024, game: "CRESCENDO", image: "/images/history/2024.jpg" },
  {
    year: 2020,
    game: "Infinite Recharge",
    image: "/images/history/2020.jpg",
    preserveFrame: true,
  },
  {
    year: 2019,
    game: "Destination: Deep Space",
    image: "/images/history/2019.jpg",
    preserveFrame: true,
  },
  {
    year: 2018,
    game: "Power Up",
    image: "/images/history/2018.jpg",
    preserveFrame: true,
  },
  { year: 2017, game: "Steamworks", image: "/images/history/2017.jpg" },
  { year: 2016, game: "Stronghold", image: "/images/history/2016.jpg" },
  { year: 2015, game: "Recycle Rush", image: "/images/history/2015.jpg" },
  {
    year: 2012,
    game: "Rebound Rumble",
    image: "/images/history/2012.jpg",
    preserveFrame: true,
  },
  { year: 2009, game: "Lunacy", image: "/images/history/2009.jpg" },
  { year: 2007, game: "Rack 'n Roll", image: "/images/history/2007.jpg" },
  {
    year: 2003,
    game: "Stack Attack",
    image: "/images/history/2003.jpg",
    preserveFrame: true,
  },
];

export function seasonUrl(year: number) {
  return `https://www.thebluealliance.com/team/854/${year}`;
}
