export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  tone?: "light" | "dark";
};

export type SponsorTier = {
  tier: string;
  amount: string;
  sponsors: Sponsor[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    tier: "Gold Sponsors",
    amount: "$3000+",
    sponsors: [
      {
        name: "Optimist International",
        logo: "/images/sponsors/optimist.png",
        url: "https://www.optimist.org",
        tone: "light",
      },
      {
        name: "Gene Haas Foundation",
        logo: "/images/sponsors/haas.png",
        url: "https://www.ghaasfoundation.org",
        tone: "dark",
      },
      {
        name: "Hatch",
        logo: "/images/sponsors/hatch.png",
        url: "https://www.hatch.com",
        tone: "light",
      },
    ],
  },
  {
    tier: "Silver Sponsors",
    amount: "$1500+",
    sponsors: [
      {
        name: "JRoberts Defence",
        logo: "/images/sponsors/jroberts.png",
        url: "https://www.jrobertsdefence.com",
        tone: "dark",
      },
      {
        name: "Rotary Club of Etobicoke",
        logo: "/images/sponsors/rotary.png",
        url: "https://www.rotaryetobicoke.org/",
        tone: "light",
      },
      {
        name: "FIRST Canada",
        logo: "/images/sponsors/firstcanada.png",
        url: "https://www.firstcanada.org",
        tone: "light",
      },
      {
        name: "Studio Black Box",
        logo: "/images/sponsors/studioblackbox.png",
        url: "https://www.studioblackbox.com",
        tone: "dark",
      },
      {
        name: "HamiCo",
        logo: "/images/sponsors/hamico.png",
        url: "https://www.team854.org/sponsors",
        tone: "light",
      },
      {
        name: "Wellness Tree Therapy",
        logo: "/images/sponsors/wellnesstree.png",
        url: "https://wellnesstreetherapy.ca/",
        tone: "light",
      },
    ],
  },
  {
    tier: "Bronze Sponsors",
    amount: "$500+",
    sponsors: [
      {
        name: "Right Tech Auto Repair",
        logo: "/images/sponsors/righttech.png",
        url: "https://righttech.ca",
        tone: "light",
      },
      {
        name: "S&C Electric Canada",
        logo: "/images/sponsors/sandc.png",
        url: "https://www.sandc.com",
        tone: "light",
      },
      {
        name: "Milwaukee",
        logo: "/images/sponsors/milwaukee.png",
        url: "https://www.milwaukeetool.com",
        tone: "light",
      },
    ],
  },
];

export const additionalSponsors: Sponsor[] = [
  {
    name: "Frontier Metrology",
    logo: "/images/sponsors/frontier.png",
    url: "https://www.frontiermetrology.com",
    tone: "light",
  },
  {
    name: "Baskin Robbins",
    logo: "/images/sponsors/baskinrobbins.png",
    url: "https://www.baskinrobbins.com",
    tone: "light",
  },
  {
    name: "TDSB",
    logo: "/images/sponsors/tdsb.png",
    url: "https://www.tdsb.on.ca",
    tone: "light",
  },
  {
    name: "Martingrove Collegiate Institute",
    logo: "/images/sponsors/martingrove.png",
    url: "https://schoolweb.tdsb.on.ca/martingrove",
    tone: "dark",
  },
];
