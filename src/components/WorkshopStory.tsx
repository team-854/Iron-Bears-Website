import Image from "next/image";

const chapters = [
  {
    title: "BUILD.",
    copy: "Mechanical design, CAD, fabrication, and wiring. Make an idea into something real.",
    image: "/images/about/assembly1.jpg",
    position: "48% 50%",
  },
  {
    title: "CODE.",
    copy: "Controls, autonomy, vision, and strategy. Give the robot a way to see, think, and move.",
    image: "/images/about/demonstration.jpg",
    position: "50% 50%",
  },
  {
    title: "LEAD.",
    copy: "Outreach, sponsorships, teamwork, and impact. Take what we learn beyond the workshop.",
    image: "/images/about/teamphoto.jpg",
    position: "50% 50%",
  },
];

export default function WorkshopStory() {
  return (
    <section
      className="workshop-story"
      data-workshop
      aria-labelledby="workshop-title"
    >
      <div className="container">
        <header className="workshop-heading">
          <h2 className="section-title" id="workshop-title">
            THIS IS OUR
            <br />
            KIND OF SPORT.
          </h2>
          <p className="body-copy">
            FIRST Robotics Competition is a high-school robotics league where
            teams build large robots for a new game each season. Engineering
            meets competition.
          </p>
        </header>
        <div className="workshop-stage">
          <div className="workshop-visuals">
            {chapters.map((chapter, index) => (
              <div
                className="workshop-photo"
                key={chapter.title}
                aria-hidden={index > 0}
              >
                <Image
                  src={chapter.image}
                  alt={
                    index === 0
                      ? "Hands-on robot assembly with Iron Bears students and mentors"
                      : ""
                  }
                  fill
                  sizes="(max-width: 899px) 100vw, 60vw"
                  style={{ objectPosition: chapter.position }}
                />
              </div>
            ))}
            <div className="workshop-progress-track" aria-hidden="true">
              <div className="workshop-progress" />
            </div>
          </div>
          <div className="workshop-steps">
            {chapters.map((chapter) => (
              <article className="workshop-step" key={chapter.title}>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
