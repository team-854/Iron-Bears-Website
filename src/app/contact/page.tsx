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
    "Connect with Team 854 Iron Bears at Martingrove Collegiate Institute. Get in touch about sponsorship, mentoring, collaboration, or an event.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.intro}>
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h1 className={`page-title ${styles.title}`}>
            Let&apos;s build<br /><span>something.</span>
          </h1>
          <p className={styles.introCopy}>
            A partnership. A new skill. A connection with your community. Get in
            touch with the Iron Bears about sponsoring, mentoring,
            collaborating, or inviting us to your next event.
          </p>
        </div>
      </header>

      <section className={`container ${styles.contactRoutes}`} aria-label="Contact the Iron Bears">
        <a href="mailto:mci.robotics@gmail.com" className={styles.contactRoute}>
          <div className={styles.routeCopy}>
            <h2>Talk to the team</h2>
            <p>For robotics, sponsorship, mentorship, and event inquiries.</p>
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
              src="/images/about/teamphoto.jpg"
              alt="The Iron Bears students and mentors with their robot at Martingrove Collegiate Institute"
              width={4032}
              height={3024}
              sizes="(max-width: 800px) calc(100vw - 40px), 48vw"
              className={styles.teamImage}
            />
            <figcaption>
              <span>The team behind the robots.</span>
              <span>FRC Team 854 / Toronto, ON</span>
            </figcaption>
          </figure>
          <div className={styles.contactNote}>
            <p className="eyebrow">Get involved</p>
            <h2 id="get-involved-title" className="section-title">Interested<br />in robotics?</h2>
            <p className="body-copy">
              Students, sponsors, and community members: tell us a little about
              yourself and how you&apos;d like to get involved.
            </p>
            <a href="mailto:mci.robotics@gmail.com" className="button button-primary">
              Talk to the team <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className={`container ${styles.socialSection}`} aria-labelledby="social-title">
        <div className={styles.socialIntro}>
          <p className="eyebrow">Stay connected</p>
          <h2 id="social-title" className="section-title">Follow the build.</h2>
          <p className="body-copy">Find the Iron Bears beyond the workshop.</p>
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
          <a href="https://www.youtube.com/results?search_query=Martingrove+Robotics" target="_blank" rel="noopener noreferrer">
            <YoutubeLogo size={26} aria-hidden="true" />
            <span className={styles.socialName}>YouTube</span>
            <span className={styles.socialDetail}>Search for Martingrove Robotics</span>
            <ArrowUpRight size={22} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
