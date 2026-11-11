import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import HistoryArchive from "@/components/HistoryArchive";
import styles from "@/components/HistoryArchive.module.css";
import { seasons, seasonUrl } from "@/data/seasons";

export const metadata: Metadata = {
  title: "History | Iron Bears",
  description:
    "Explore the robots of FRC Team 854, Iron Bears Robotics, with a season archive from 2003 to 2026.",
};

export default function HistoryPage() {
  const featured = seasons[0];

  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.intro}>
        <div className="container">
          <p className="eyebrow">Team 854 / The robot archive</p>
          <h1 className={`page-title ${styles.title}`}>
            Our history. <span>In robots.</span>
          </h1>
          <div className={styles.introDetail}>
            <p>
              A different challenge every season. Explore the machines we have
              designed, built, and brought to the field, then visit The Blue
              Alliance for the full story of each season.
            </p>
            <a href="#season-archive" className={styles.archiveJump}>
              Explore the archive
              <ArrowDown size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <div className="container">
        <section className={styles.feature} aria-labelledby="featured-season">
          <figure className={styles.featureFigure}>
            <a
              className={styles.featureImage}
              href={seasonUrl(featured.year)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Team 854's ${featured.year} ${featured.game} season on The Blue Alliance (opens in a new tab)`}
            >
              <Image
                src="/images/2026/stemleycup-49.jpg"
                alt="Team 854's 2026 robot collecting yellow balls at STEMley Cup, with its blue 854 bumpers"
                fill
                sizes="(max-width: 760px) calc(100vw - 48px), 58vw"
                className={styles.featurePhoto}
                style={{ objectPosition: "100% 60%" }}
                priority
                fetchPriority="high"
              />
              <span className={styles.imageArrow} aria-hidden="true">
                <ArrowUpRight size={28} weight="regular" />
              </span>
            </a>
            <figcaption className={styles.photoCredit}>STEMley Cup · Photo: @jfreemanphotos</figcaption>
          </figure>
          <div className={styles.featureCaption}>
            <p className="eyebrow">Latest robot / {featured.year}</p>
            <h2 id="featured-season" className={styles.featureHeading}>
              <span className={styles.featureYear}>{featured.year}</span>
              <span className={styles.featureGame}>{featured.game}</span>
            </h2>
            <div className={styles.featureDetail}>
              <p>
                Our latest chapter on the field. See Team 854&apos;s events,
                matches, and results from the {featured.year} season on The Blue
                Alliance.
              </p>
              <a
                className="button button-primary"
                href={seasonUrl(featured.year)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${featured.year} season on The Blue Alliance (opens in a new tab)`}
              >
                View {featured.year} season
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.archiveBand}>
        <div className="container">
          <HistoryArchive />
        </div>
      </div>
    </main>
  );
}
