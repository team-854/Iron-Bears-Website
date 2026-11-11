import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import HeroShowcase from "@/components/HeroShowcase";
import WorkshopStory from "@/components/WorkshopStory";
import CompetitionGallery from "@/components/CompetitionGallery";
import { sponsorTiers } from "@/data/sponsors";
export default function HomePage() {
  return (
    <main id="main-content">
      <HeroShowcase />
      <div className="team-banner" aria-label="Our approach">
        <div className="container team-banner-inner"><span>Design. Build.</span><span>Compete. Repeat.</span><span>Different skills. One team.</span></div>
      </div>
      <section className="home-story section-space" id="our-team">
        <div className="container story-grid">
          <div><p className="eyebrow">Who we are</p><h2 className="section-title">Meet the<br />Iron Bears.</h2></div>
          <div className="story-copy">
            <p className="body-copy">We’re based at Martingrove Collegiate Institute in Toronto. Students lead the work, with mentors helping us learn along the way.</p>
            <p className="body-copy">There’s a lot of trying, testing, and figuring things out. Whether we’re working on the robot or talking to sponsors, we learn by doing.</p>
            <Link href="/about" className="text-link">More about the team <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="container">
          <figure className="team-portrait">
            <Image src="/images/2026/stemleycup-117.jpg" alt="The Iron Bears team gathered for a group photo at STEMley Cup" width={1024} height={683} sizes="(max-width: 800px) calc(100vw - 48px), (max-width: 1360px) calc(100vw - 80px), 1280px" />
            <figcaption><span>Iron Bears, together at STEMley Cup.</span><span>2026 season</span></figcaption>
          </figure>
        </div>
      </section>
      <WorkshopStory />
      <CompetitionGallery />
      <section className="home-archive section-space">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">Recent seasons</p><h2 className="section-title">Our robots.</h2></div>
            <Link href="/history" className="text-link">Browse past seasons <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="archive-preview">
            {[
              { year: 2026, game: "REBUILT", image: "/images/2026/robot-blue.jpg", position: "50% 45%" },
              { year: 2025, game: "REEFSCAPE", image: "/images/history/2025.jpg", position: "50% 65%" },
            ].map((season) => (
              <a key={season.year} href={`https://www.thebluealliance.com/team/854/${season.year}`} target="_blank" rel="noopener noreferrer" className="robot-feature" aria-label={`View Team 854's ${season.year} ${season.game} season on The Blue Alliance`}>
                <div className="robot-feature-image"><Image src={season.image} alt={`Team 854's ${season.year} ${season.game} robot`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectPosition: season.position }} /></div>
                <div className="robot-feature-caption"><div><span className="robot-year">{season.year}</span><h3>{season.game}</h3></div><ArrowUpRight size={26} aria-hidden="true" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="home-supporters section-space">
        <div className="container">
          <div className="supporters-intro"><p className="eyebrow">Our supporters</p><h2 className="section-title">Thanks for backing us.</h2><p className="body-copy">Our sponsors help pay for parts and tools, and support our outreach. We’re grateful for their help each season.</p></div>
          <div className="home-logo-strip">
            {sponsorTiers[0].sponsors.map((sponsor) => (
              <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`home-sponsor-logo logo-tone-${sponsor.tone || "light"}`} aria-label={`Visit ${sponsor.name}`}>
                <Image src={sponsor.logo} alt={sponsor.name} width={260} height={94} sizes="(max-width: 700px) 70vw, 28vw" />
              </a>
            ))}
          </div>
          <Link href="/sponsors" className="text-link">See all our sponsors <ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="home-invitation">
        <div className="container invitation-inner">
          <div><h2 className="section-title">Want to get involved?</h2><p>Ask us about joining the team, mentoring, or becoming a sponsor.</p></div>
          <Link href="/contact" className="button button-dark">Contact the team <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
