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
      <div className="container">
        <header className={styles.intro}>
          <h1 className={styles.title} data-line-reveal>
            Our history.
            <br />
            <span>In robots.</span>
          </h1>
          <div className={styles.introDetail} data-reveal>
            <p className="body-copy">
              A different challenge every season. Explore the machines we have
              designed, built, and brought to the field, then visit The Blue
              Alliance for the full story of each season.
            </p>
            <a href="#season-archive" className={styles.archiveJump}>
              Explore the archive
              <ArrowDown size={20} aria-hidden="true" />
            </a>
          </div>
        </header>

        <section className={styles.feature} aria-labelledby="featured-season">
          <a
            className={styles.featureImage}
            data-parallax
            href={seasonUrl(featured.year)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Team 854's ${featured.year} ${featured.game} season on The Blue Alliance (opens in a new tab)`}
          >
            <Image
              src={featured.image}
              alt="Team 854's 2026 robot on the competition field with its red 854 bumper"
              fill
              sizes="(max-width: 1439px) calc(100vw - 48px), 1320px"
              className={styles.featurePhoto}
              data-parallax-image
              priority
              fetchPriority="high"
            />
            <span className={styles.imageArrow} aria-hidden="true">
              <ArrowUpRight size={28} weight="regular" />
            </span>
          </a>
          <div className={styles.featureCaption}>
            <h2
              id="featured-season"
              className={styles.featureHeading}
              data-line-reveal
            >
              <span className={styles.featureYear}>{featured.year}</span>
              <span className={styles.featureGame}>{featured.game}</span>
            </h2>
            <div className={styles.featureDetail} data-reveal>
              <p>
                Our latest chapter on the field. See Team 854&apos;s events,
                matches, and results from the {featured.year} season on The Blue
                Alliance.
              </p>
              <a
                className="text-link"
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

        <HistoryArchive />
      </div>
    </main>
  );
}
