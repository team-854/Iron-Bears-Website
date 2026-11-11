import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Iron Bears",
  description:
    "Contact the Iron Bears about sponsorship, mentoring, or an event. Find email addresses for Team 854 and Martingrove Collegiate Institute.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.intro}>
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h1 className={`page-title ${styles.title}`}>
            Talk to<br /><span>the Iron Bears.</span>
          </h1>
          <p className={styles.introCopy}>
            Have a question or an idea for the team? Send us an email.
          </p>
        </div>
      </header>

      <section className={`container ${styles.contactRoutes}`} aria-label="Contact the Iron Bears">
        <a href="mailto:mci.robotics@gmail.com" className={styles.contactRoute}>
          <div className={styles.routeCopy}>
            <h2>Email the team</h2>
            <p>For questions about robotics, sponsorship, mentoring, or events.</p>
          </div>
          <div className={styles.routeAction}>
            <span>mci.robotics@gmail.com</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
        </a>
        <a href="mailto:Martingrove@tdsb.on.ca" className={styles.contactRoute}>
          <div className={styles.routeCopy}>
            <h2>Contact our school</h2>
            <p>Martingrove Collegiate Institute<br />Toronto, Ontario</p>
          </div>
          <div className={styles.routeAction}>
            <span>Martingrove@tdsb.on.ca</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
        </a>
      </section>

      <section className={styles.connection} aria-labelledby="get-involved-title">
        <div className={`container ${styles.connectionGrid}`}>
          <figure className={styles.teamFigure}>
            <Image
              src="/images/2026/team.jpg"
              alt="The Iron Bears team gathered at a 2026 robotics competition"
              width={2160}
              height={2880}
              sizes="(max-width: 800px) calc(100vw - 40px), 48vw"
              className={styles.teamImage}
            />
            <figcaption>
              <span>Iron Bears Robotics</span>
              <span>FRC Team 854 / 2026 season</span>
            </figcaption>
          </figure>
          <div className={styles.contactNote}>
            <p className="eyebrow">Get involved</p>
            <h2 id="get-involved-title" className="section-title">Interested<br />in robotics?</h2>
            <p className="body-copy">
              Whether you&apos;re a student, a potential sponsor, or a mentor,
              tell us a little about yourself and what you&apos;d like to do.
            </p>
            <a href="mailto:mci.robotics@gmail.com" className="button button-primary">
              Email the team <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className={`container ${styles.socialSection}`} aria-labelledby="social-title">
        <div className={styles.socialIntro}>
          <p className="eyebrow">Stay connected</p>
          <h2 id="social-title" className="section-title">Find us online.</h2>
          <p className="body-copy">Team updates, robot code, and videos.</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/team854/" target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={26} aria-hidden="true" />
            <span className={styles.socialName}>Instagram</span>
            <span className={styles.socialDetail}>@team854</span>
            <ArrowUpRight size={22} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="https://github.com/team854" target="_blank" rel="noopener noreferrer">
            <GithubLogo size={26} aria-hidden="true" />
            <span className={styles.socialName}>GitHub</span>
            <span className={styles.socialDetail}>github.com/team854</span>
            <ArrowUpRight size={22} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="https://www.youtube.com/@Team854" target="_blank" rel="noopener noreferrer">
            <YoutubeLogo size={26} aria-hidden="true" />
            <span className={styles.socialName}>YouTube</span>
            <span className={styles.socialDetail}>@Team854</span>
            <ArrowUpRight size={22} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
