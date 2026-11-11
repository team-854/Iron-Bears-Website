import Image from "next/image";
import styles from "./CompetitionGallery.module.css";

export default function CompetitionGallery() {
  return (
    <section className={`${styles.section} section-space`} aria-labelledby="competition-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">STEMley Cup</p>
            <h2 className="section-title" id="competition-title">Every match.<br />Together.</h2>
          </div>
          <p className="body-copy">The robot is only part of the story. Behind the controls and out on the field, it takes a team to bring it all together.</p>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.figure}>
            <Image
              className={styles.photo}
              src="/images/2026/stemleycup-13.jpg"
              alt="Three Iron Bears drive team members at the Team 854 driver station at STEMley Cup"
              width={1024}
              height={682}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1360px) 51vw, 658px"
            />
            <figcaption className={styles.caption}>
              <h3>Behind the controls.</h3>
              <p>Our drive team at the station, bringing focus, communication, and teamwork to every match.</p>
            </figcaption>
          </figure>
          <figure className={`${styles.figure} ${styles.robot}`}>
            <Image
              className={styles.photo}
              src="/images/2026/stemleycup-8.jpg"
              alt="Team 854's robot with blue bumpers carrying yellow game pieces on the STEMley Cup field"
              width={1024}
              height={683}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1360px) 46vw, 598px"
            />
            <figcaption className={styles.caption}>
              <h3>Built to compete.</h3>
              <p>Our REBUILT robot in action. An idea from the workshop, now wearing 854 on the field.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
