import Image from "next/image";
import styles from "./CompetitionGallery.module.css";

export default function CompetitionGallery() {
  return (
    <section className={`${styles.section} section-space`} aria-labelledby="competition-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">STEMley Cup</p>
            <h2 className="section-title" id="competition-title">At the<br />competition.</h2>
          </div>
          <p className="body-copy">A look at our drive team and 2026 robot at STEMley Cup.</p>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.figure}>
            <Image
              className={styles.photo}
              src="/images/2026/stemleycup-13.jpg"
              alt="Three Iron Bears drive team members at the Team 854 driver station at STEMley Cup"
              width={1024}
              height={682}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1360px) 46vw, 624px"
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              className={styles.photo}
              src="/images/2026/stemleycup-8.jpg"
              alt="Team 854's robot with blue bumpers carrying yellow game pieces on the STEMley Cup field"
              width={1024}
              height={683}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1360px) 46vw, 624px"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
