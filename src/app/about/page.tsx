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
    detail:
      "Take care in the work, from the first sketch to the final assembly.",
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
    detail:
      "Tell our story, build relationships, and connect with our community.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.intro} aria-labelledby="about-title">
        <div className={`container ${styles.introHeader}`}>
          <h1 id="about-title" className={`page-title ${styles.title}`}>
            <span data-line-reveal>The people</span>
            <span data-line-reveal>
              behind <em>854.</em>
            </span>
          </h1>
          <div className={styles.introAside} data-reveal>
            <p className={styles.introDetail}>
              Students, mentors, and a shared drive to make something that
              moves.
            </p>
            <Link href="/contact" className="text-link">
              Get to know the team <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className={`container ${styles.teamFigure}`}>
          <div className={styles.teamFrame}>
            <Image
              src="/images/about/teamphoto.jpg"
              alt="Iron Bears students and mentors gathered around their robot at Martingrove Collegiate Institute"
              width={4032}
              height={3024}
              sizes="(max-width: 900px) calc(100vw - 48px), 91vw"
              priority
              className={styles.teamImage}
            />
          </div>
          <figcaption className={styles.caption}>
            <span>Team 854 / Iron Bears</span>
            <span>Martingrove Collegiate Institute</span>
          </figcaption>
        </figure>
        <div className={`container ${styles.introStatement}`} data-reveal>
          <p className={styles.description}>
            We&apos;re the Iron Bears. A student-led robotics team from
            Martingrove Collegiate Institute in Toronto, Ontario, bringing ideas
            to life through FIRST Robotics Competition.
          </p>
          <span className={styles.teamNumber} aria-hidden="true">
            854
          </span>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="mission-title">
        <div className={`container ${styles.missionGrid}`}>
          <div className={styles.missionSticky}>
            <h2
              id="mission-title"
              className={`section-title ${styles.missionTitle}`}
            >
              <span data-line-reveal>Great robots.</span>
              <span data-line-reveal>Better people.</span>
            </h2>
            <p className="body-copy">
              Our mission is to build great robots and better people through
              teamwork, engineering, and competition. Each season is a chance to
              build new skills, learn alongside mentors, and use engineering to
              create a positive community impact.
            </p>
            <figure className={styles.workshopFigure}>
              <div className={styles.workshopFrame} data-parallax>
                <Image
                  src="/images/about/assembly1.jpg"
                  alt="Iron Bears students and a mentor working together on the REEFSCAPE robot assembly"
                  width={5184}
                  height={3456}
                  sizes="(max-width: 900px) calc(100vw - 48px), 42vw"
                  className={styles.workshopImage}
                  data-parallax-image
                />
              </div>
              <figcaption className={styles.caption}>
                <span>In the workshop</span>
                <span>REEFSCAPE robot assembly</span>
              </figcaption>
            </figure>
          </div>
          <div className={styles.values}>
            <h3 className="sr-only">What we believe</h3>
            <ul>
              {values.map((value) => (
                <li key={value.name} data-reveal>
                  <h4>{value.name}</h4>
                  <p>{value.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`container ${styles.build}`}
        aria-labelledby="build-title"
      >
        <div className={styles.buildHeader}>
          <h2 id="build-title" className={`section-title ${styles.buildTitle}`}>
            <span data-line-reveal>Find your part</span>
            <span data-line-reveal>in the build.</span>
          </h2>
          <p className="body-copy" data-reveal>
            A competitive robot brings a lot of disciplines together.
            There&apos;s work to do at the drawing board, on the workbench, in
            the code, and out in the community.
          </p>
        </div>
        <dl className={styles.activities}>
          {activities.map((activity) => (
            <div key={activity.name} data-reveal>
              <dt>{activity.name}</dt>
              <dd>{activity.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.community} aria-labelledby="community-title">
        <div className={`container ${styles.communityHeader}`}>
          <h2
            id="community-title"
            className={`section-title ${styles.communityTitle}`}
          >
            <span data-line-reveal>Built here.</span>
            <span data-line-reveal>Shared beyond.</span>
          </h2>
          <div className={styles.communityCopy} data-reveal>
            <p className="body-copy">
              Robotics connects our school to a wider community. Through
              demonstrations, outreach, and mentorship, we share the excitement
              of engineering beyond the competition field.
            </p>
            <Link href="/contact" className="button button-primary">
              Connect with us <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className={`container ${styles.communityFigure}`}>
          <div className={styles.communityFrame} data-parallax>
            <Image
              src="/images/about/demonstration.jpg"
              alt="Team 854 demonstrating the CRESCENDO robot in a school hallway"
              width={1700}
              height={952}
              sizes="(max-width: 900px) calc(100vw - 48px), 91vw"
              className={styles.communityImage}
              data-parallax-image
            />
          </div>
          <figcaption className={styles.caption}>
            <span>Sharing the work</span>
            <span>CRESCENDO robot demonstration</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
