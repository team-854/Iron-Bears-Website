import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  additionalSponsors,
  sponsorTiers,
  type Sponsor,
} from "@/data/sponsors";
import styles from "./sponsors.module.css";

export const metadata: Metadata = {
  title: "Sponsors | Team 854 Iron Bears",
  description:
    "Meet the sponsors and community supporters behind Iron Bears Robotics, and learn how to support Team 854.",
};

function SponsorMark({ sponsor }: { sponsor: Sponsor }) {
  const mark = sponsor.logo.split("/").pop()?.replace(".png", "");

  return (
    <li className={styles.sponsor}>
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name} website (opens in a new tab)`}
        className={styles.sponsorLink}
        data-mark={mark}
      >
        <div className={styles.logoPlate} data-tone={sponsor.tone ?? "light"}>
          <div className={styles.logoFrame}>
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              fill
              sizes="(max-width: 599px) 78vw, (max-width: 899px) 36vw, 28vw"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.sponsorCaption}>
          <span>{sponsor.name}</span>
          <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
        </div>
      </a>
    </li>
  );
}

export default function SponsorsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.intro}>
        <div className="container">
        <p className="eyebrow">The community behind Team 854</p>
        <h1 className={`page-title ${styles.heading}`}>
          Powered by <span>our sponsors.</span>
        </h1>
        <div className={styles.introBottom}>
          <p>
            Thank you to the businesses and organizations that support our
            students with funding, tools, and parts.
          </p>
          <a href="#become-a-sponsor" className="button button-primary">
            Become a sponsor
            <ArrowUpRight size={20} weight="regular" aria-hidden="true" />
          </a>
        </div>
        </div>
      </header>
      <div className={styles.navigationBand}>
        <div className="container">
        <nav className={styles.tierNavigation} aria-label="Sponsorship tiers">
          {sponsorTiers.map((tier, index) => (
            <a key={tier.tier} href={`#sponsor-tier-${index}`}>
              {tier.tier}
              <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
            </a>
          ))}
          <a href="#additional-supporters">
            Additional Supporters
            <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
          </a>
        </nav>
        </div>
      </div>

      <div className="container">
        <div className={styles.sponsorProgramme}>
          {sponsorTiers.map((tier, index) => (
            <section
              key={tier.tier}
              id={`sponsor-tier-${index}`}
              className={styles.tier}
              aria-labelledby={`sponsor-tier-${index}-title`}
            >
              <div className={styles.tierHeading}>
                <h2 id={`sponsor-tier-${index}-title`}>
                  {tier.tier}
                </h2>
                <p className={styles.amount}>{tier.amount}</p>
              </div>
              <ul className={styles.sponsorGrid}>
                {tier.sponsors.map((sponsor) => (
                  <SponsorMark key={sponsor.name} sponsor={sponsor} />
                ))}
              </ul>
            </section>
          ))}

          <section
            id="additional-supporters"
            className={styles.tier}
            aria-labelledby="additional-supporters-title"
          >
            <div className={styles.tierHeading}>
              <h2 id="additional-supporters-title">
                Additional Supporters
              </h2>
            </div>
            <ul className={styles.sponsorGrid}>
              {additionalSponsors.map((sponsor) => (
                <SponsorMark key={sponsor.name} sponsor={sponsor} />
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section
        id="become-a-sponsor"
        className={styles.partner}
        aria-labelledby="partner-title"
      >
        <div className={`container ${styles.partnerLayout}`}>
        <figure className={styles.partnerFigure}>
          <div className={styles.partnerImage}>
            <Image
              src="/images/about/assembly1.jpg"
              alt="Team members working together on a robot assembly"
              fill
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </div>
          <figcaption>
            Build season at Team 854.
          </figcaption>
        </figure>
        <div className={styles.partnerCopy}>
          <p className="eyebrow">Support Team 854</p>
          <h2 id="partner-title" className="section-title">
            Become a sponsor.
          </h2>
          <div className={styles.partnerInvitation}>
            <p>
              Email us for our sponsorship package to learn how you can help
              and what we offer sponsors.
            </p>
            <p>
              You can also help as a mentor. Tell us about your experience and
              how you&apos;d like to work with our students.
            </p>
            <a
              href="mailto:mci.robotics@gmail.com"
              className="button button-primary"
            >
              Request the sponsorship package
              <ArrowUpRight size={20} weight="regular" aria-hidden="true" />
            </a>
            <a href="mailto:mci.robotics@gmail.com" className={styles.email}>
              mci.robotics@gmail.com
            </a>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
