import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import HeroShowcase from "@/components/HeroShowcase";
import WorkshopStory from "@/components/WorkshopStory";
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
          <div><p className="eyebrow">Who we are</p><h2 className="section-title">Great robots.<br />Even better people.</h2></div>
          <div className="story-copy">
            <p className="body-copy">We are the Iron Bears, a student-led robotics team at Martingrove Collegiate Institute in Toronto, Ontario.</p>
            <p className="body-copy">We design, build, and program competitive robots while developing real engineering skills, leadership, and community impact. Every season is a chance to learn something new, together.</p>
            <Link href="/about" className="text-link">Our team. Our story. <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <WorkshopStory />
      <section className="home-archive section-space">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">On the field</p><h2 className="section-title">Every robot has a story.</h2></div>
            <Link href="/history" className="text-link">Explore our history <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="archive-preview">
            {[{ year: 2026, game: "REBUILT" }, { year: 2025, game: "REEFSCAPE" }].map((season) => (
              <a key={season.year} href={`https://www.thebluealliance.com/team/854/${season.year}`} target="_blank" rel="noopener noreferrer" className="robot-feature" aria-label={`View Team 854's ${season.year} ${season.game} season on The Blue Alliance`}>
                <div className="robot-feature-image"><Image src={`/images/history/${season.year}.jpg`} alt={`Team 854's ${season.year} ${season.game} robot`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectPosition: season.year === 2025 ? "50% 65%" : "50% 50%" }} /></div>
                <div className="robot-feature-caption"><div><span className="robot-year">{season.year}</span><h3>{season.game}</h3></div><ArrowUpRight size={26} aria-hidden="true" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="home-supporters section-space">
        <div className="container">
          <div className="supporters-intro"><p className="eyebrow">Our supporters</p><h2 className="section-title">Built together.</h2><p className="body-copy">Our sponsors make the season possible, supporting the tools, parts, funding, and outreach behind every robot.</p></div>
          <div className="home-logo-strip">
            {sponsorTiers[0].sponsors.map((sponsor) => (
              <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`home-sponsor-logo logo-tone-${sponsor.tone || "light"}`} aria-label={`Visit ${sponsor.name}`}>
                <Image src={sponsor.logo} alt={sponsor.name} width={260} height={94} sizes="(max-width: 700px) 70vw, 28vw" />
              </a>
            ))}
          </div>
          <Link href="/sponsors" className="text-link">Meet all our supporters <ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="home-invitation">
        <div className="container invitation-inner">
          <div><h2 className="section-title">There’s a place for you here.</h2><p>Bring your curiosity, share your expertise, or help make our next robot possible.</p></div>
          <Link href="/contact" className="button button-dark">Let’s connect <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
