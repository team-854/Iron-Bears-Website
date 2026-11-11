import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About the Team | Iron Bears",
  description:
    "Meet the Iron Bears: FRC Team 854, a student-led robotics team at Martingrove Collegiate Institute in Toronto. We build great robots and better people.",
};

const values = [
  {
    name: "Curiosity & learning",
    detail: "Ask questions. Try an idea. Learn from the result.",
  },
  {
    name: "Craftsmanship",
    detail: "Take care in the work, from the first sketch to the final assembly.",
  },
  {
    name: "Respect and inclusion",
    detail: "Make room for different perspectives and learn from each other.",
  },
  {
    name: "Community service",
    detail: "Share what we learn and put our skills to work for others.",
  },
];

const activities = [
  {
    name: "CAD and fabrication",
    detail: "Turn a design into parts, mechanisms, and a working robot.",
  },
  {
    name: "Electronics and wiring",
    detail: "Connect the power, sensors, and controls that bring it to life.",
  },
  {
    name: "Programming + autonomy",
    detail: "Write the code that turns a strategy into movement.",
  },
  {
    name: "Outreach + sponsorship",
    detail: "Tell our story, build relationships, and connect with our community.",
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
            Students, mentors, and a shared drive to make something that moves.
          </p>
        </div>
      </header>

      <section className={`container ${styles.mission}`} aria-labelledby="mission-title">
        <figure className={styles.figure}>
          <Image
            src="/images/about/teamphoto.jpg"
            alt="Iron Bears students and mentors gathered around their robot at Martingrove Collegiate Institute"
            width={4032}
            height={3024}
            sizes="(max-width: 800px) calc(100vw - 40px), 47vw"
            priority
            className={styles.teamImage}
          />
          <figcaption className={styles.caption}>
            <span>Team 854 / Iron Bears</span>
            <span>Martingrove Collegiate Institute</span>
          </figcaption>
        </figure>
        <div className={styles.missionCopy}>
          <p className="eyebrow">Who we are</p>
          <h2 id="mission-title" className="section-title">
            Great robots.<br />Better people.
          </h2>
          <p className="body-copy">
            We&apos;re the Iron Bears. A student-led robotics team from
            Martingrove Collegiate Institute in Toronto, Ontario, bringing ideas
            to life through FIRST Robotics Competition.
          </p>
          <p className="body-copy">
            Our mission is to build great robots and better people through
            teamwork, engineering, and competition. Each season is a chance to
            build new skills, learn alongside mentors, and use engineering to
            create a positive community impact.
          </p>
          <Link href="/contact" className="text-link">
            Get to know the team <ArrowUpRight size={18} aria-hidden="true" />
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
            <h2 id="build-title" className="section-title">Find your part<br />in the build.</h2>
          </div>
          <p className="body-copy">
            A competitive robot brings a lot of disciplines together.
            There&apos;s work to do at the drawing board, on the workbench, in
            the code, and out in the community.
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
            <p className="eyebrow">Beyond the workshop</p>
            <h2 id="community-title" className="section-title">Built here.<br />Shared beyond.</h2>
            <p className="body-copy">
              Robotics connects our school to a wider community. Through
              demonstrations, outreach, and mentorship, we share the excitement
              of engineering beyond the competition field.
            </p>
            <Link href="/contact" className="button button-primary">
              Connect with us <ArrowUpRight size={18} aria-hidden="true" />
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
              <span>Sharing the work</span>
              <span>CRESCENDO robot demonstration</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
