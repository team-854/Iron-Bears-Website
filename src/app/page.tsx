import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import HeroShowcase from "@/components/HeroShowcase";
import WorkshopStory from "@/components/WorkshopStory";
import { sponsorTiers } from "@/data/sponsors";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroShowcase />
      <section className="home-story" id="our-team">
        <div className="container">
          <div className="story-heading" data-line-reveal>
            <h2 className="section-title">
              GREAT ROBOTS.
              <br />
              <span className="accent-text">EVEN BETTER PEOPLE.</span>
            </h2>
            <ArrowUpRight size={76} weight="thin" aria-hidden="true" />
          </div>
          <div className="story-grid">
            <div className="story-copy" data-reveal>
              <p className="body-copy">
                We are the Iron Bears, a student-led robotics team at
                Martingrove Collegiate Institute in Toronto, Ontario.
              </p>
              <p className="body-copy">
                We design, build, and program competitive robots while
                developing real engineering skills, leadership, and community
                impact. Every season is a chance to learn something new,
                together.
              </p>
              <Link href="/about" className="text-link">
                Our team. Our story.{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </div>
            <figure className="story-photo" data-reveal>
              <div className="story-photo-frame" data-parallax>
                <Image
                  data-parallax-image
                  src="/images/about/teamphoto.jpg"
                  alt="Iron Bears students and mentors at Martingrove Collegiate Institute"
                  fill
                  sizes="(max-width: 800px) 100vw, 65vw"
                />
              </div>
              <figcaption>Different skills. One team.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="kinetic-divider" aria-hidden="true">
        <div data-drift="left">
          DESIGN. BUILD. COMPETE. <span>REPEAT.</span>
        </div>
      </div>
      <WorkshopStory />
      <section className="home-archive container">
        <div className="section-heading-row" data-line-reveal>
          <h2 className="section-title">
            EVERY ROBOT
            <br />
            HAS A STORY.
          </h2>
          <Link href="/history" className="text-link">
            Explore our history <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="archive-preview">
          <a
            href="https://www.thebluealliance.com/team/854/2026"
            target="_blank"
            rel="noopener noreferrer"
            className="robot-feature"
            data-reveal
            aria-label="View Team 854's 2026 REBUILT season on The Blue Alliance"
          >
            <div className="robot-feature-image">
              <Image
                src="/images/history/2026.jpg"
                alt="Team 854's 2026 REBUILT robot"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
            <div className="robot-feature-caption">
              <span className="robot-year">2026</span> <span>REBUILT</span>
              <ArrowUpRight size={30} aria-hidden="true" />
            </div>
          </a>
          <a
            href="https://www.thebluealliance.com/team/854/2025"
            target="_blank"
            rel="noopener noreferrer"
            className="robot-feature"
            data-reveal
            aria-label="View Team 854's 2025 REEFSCAPE season on The Blue Alliance"
          >
            <div className="robot-feature-image">
              <Image
                src="/images/history/2025.jpg"
                alt="Team 854's 2025 REEFSCAPE robot"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
            <div className="robot-feature-caption">
              <span className="robot-year">2025</span> <span>REEFSCAPE</span>
              <ArrowUpRight size={30} aria-hidden="true" />
            </div>
          </a>
        </div>
      </section>
      <section className="home-supporters">
        <div className="container supporters-layout">
          <div className="supporters-intro" data-reveal>
            <h2 className="section-title">
              BUILT
              <br />
              <span className="accent-text">TOGETHER.</span>
            </h2>
            <p className="body-copy">
              Our sponsors make the season possible, supporting the tools,
              parts, funding, and outreach behind every robot.
            </p>
            <Link href="/sponsors" className="text-link">
              Meet all our supporters{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-logo-strip">
            {sponsorTiers[0].sponsors.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`home-sponsor-logo logo-tone-${s.tone || "light"}`}
                data-reveal
                aria-label={`Visit ${s.name}`}
              >
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={260}
                  height={94}
                  sizes="(max-width: 600px) 65vw, 28vw"
                />
                <ArrowUpRight size={24} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="home-invitation">
        <div className="container invitation-inner">
          <h2 className="section-title" data-line-reveal>
            THERE’S A PLACE
            <br />
            FOR YOU HERE.
          </h2>
          <div className="invitation-bottom" data-reveal>
            <p>
              Bring your curiosity, share your expertise, or help make our next
              robot possible.
            </p>
            <Link href="/contact" className="invitation-link">
              Let’s connect <ArrowUpRight size={42} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
