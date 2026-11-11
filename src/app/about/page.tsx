import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About the Team | Iron Bears",
  description:
    "Meet the students and mentors of FRC Team 854 at Martingrove Collegiate Institute in Toronto, and see what goes into building our robots.",
};

const values = [
  {
    name: "Curiosity & learning",
    detail: "We learn by asking questions and trying things.",
  },
  {
    name: "Craftsmanship",
    detail: "We take care with the details, from design to assembly.",
  },
  {
    name: "Respect and inclusion",
    detail: "We listen to each other and make room for different ideas.",
  },
  {
    name: "Community service",
    detail: "We share what we know and use our skills to help others.",
  },
];

const activities = [
  {
    name: "CAD and fabrication",
    detail: "Design parts in CAD, then make and assemble them.",
  },
  {
    name: "Electronics and wiring",
    detail: "Wire the robot's power, sensors, and control systems.",
  },
  {
    name: "Programming and autonomy",
    detail: "Program driver controls and routines the robot can run on its own.",
  },
  {
    name: "Outreach and sponsorship",
    detail: "Introduce people to the team and talk with potential sponsors.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.intro}>
        <div className="container">
          <p className="eyebrow">About the team</p>
          <h1 className={`page-title ${styles.title}`}>
            The people<br />behind <span>854.</span>
          </h1>
          <p className={styles.introCopy}>
            A student-led team, with mentors to help us along the way.
          </p>
        </div>
      </header>

      <section className={`container ${styles.mission}`} aria-labelledby="mission-title">
        <figure className={styles.figure}>
          <Image
            src="/images/2026/team.jpg"
            alt="Iron Bears team members together at a 2026 robotics competition"
            width={2160}
            height={2880}
            sizes="(max-width: 800px) calc(100vw - 40px), 47vw"
            priority
            className={styles.teamImage}
          />
          <figcaption className={styles.caption}>
            <span>Team 854 / Iron Bears</span>
            <span>2026 competition season</span>
          </figcaption>
        </figure>
        <div className={styles.missionCopy}>
          <p className="eyebrow">Who we are</p>
          <h2 id="mission-title" className="section-title">
            Learning<br />by doing.
          </h2>
          <p className="body-copy">
            We&apos;re the Iron Bears, a robotics team at Martingrove Collegiate
            Institute in Toronto, Ontario. We design, build, and program robots
            for FIRST Robotics Competition.
          </p>
          <p className="body-copy">
            Working with mentors, we learn engineering through the problems in
            front of us. We also learn how to work as a team, take responsibility,
            and share what we know.
          </p>
          <Link href="/contact" className="text-link">
            Contact the team <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.valuesSection} aria-labelledby="values-title">
        <div className="container">
          <p className="eyebrow">Our values</p>
          <h2 id="values-title" className="section-title">What we believe</h2>
          <ul className={styles.values}>
            {values.map((value) => (
              <li key={value.name}>
                <h3>{value.name}</h3>
                <p>{value.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`container ${styles.build}`} aria-labelledby="build-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className="eyebrow">Hands-on learning</p>
            <h2 id="build-title" className="section-title">What we work on.</h2>
          </div>
          <p className="body-copy">
            There&apos;s plenty to do, from making parts and writing code to
            running outreach and finding sponsors.
          </p>
        </div>
        <div className={styles.buildGrid}>
          <figure className={styles.figure}>
            <Image
              src="/images/about/assembly1.jpg"
              alt="Iron Bears students and a mentor working together on the REEFSCAPE robot assembly"
              width={5184}
              height={3456}
              sizes="(max-width: 800px) calc(100vw - 40px), 47vw"
              className={styles.workshopImage}
            />
            <figcaption className={styles.caption}>
              <span>In the workshop</span>
              <span>REEFSCAPE robot assembly</span>
            </figcaption>
          </figure>
          <dl className={styles.activities}>
            {activities.map((activity) => (
              <div key={activity.name}>
                <dt>{activity.name}</dt>
                <dd>{activity.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.community} aria-labelledby="community-title">
        <div className={`container ${styles.communityGrid}`}>
          <div className={styles.communityCopy}>
            <p className="eyebrow">Outreach</p>
            <h2 id="community-title" className="section-title">Sharing what<br />we do.</h2>
            <p className="body-copy">
              We demonstrate our robots and share what we&apos;ve learned with
              our school and community. If you&apos;d like to work with us or
              invite the team to an event, get in touch.
            </p>
            <Link href="/contact" className="button button-primary">
              Contact the team <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/about/demonstration.jpg"
              alt="Team 854 demonstrating the CRESCENDO robot in a school hallway"
              width={1700}
              height={952}
              sizes="(max-width: 800px) calc(100vw - 40px), 52vw"
              className={styles.communityImage}
            />
            <figcaption className={styles.caption}>
              <span>At Martingrove</span>
              <span>CRESCENDO robot demonstration</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
