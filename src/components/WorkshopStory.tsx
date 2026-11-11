import Image from "next/image";
const chapters = [
  { title: "Build.", copy: "Mechanical design, CAD, fabrication, and wiring. Make an idea into something real.", image: "/images/about/assembly1.jpg", alt: "Iron Bears students and mentors assembling their robot", position: "48% 50%" },
  { title: "Code.", copy: "Controls, autonomy, vision, and strategy. Give the robot a way to see, think, and move.", image: "/images/about/demonstration.jpg", alt: "Team 854 demonstrating their robot at school", position: "50% 50%" },
  { title: "Lead.", copy: "Outreach, sponsorships, teamwork, and impact. Take what we learn beyond the workshop.", image: "/images/about/teamphoto.jpg", alt: "The Iron Bears team at Martingrove Collegiate Institute", position: "50% 40%" },
];
export default function WorkshopStory() {
  return (
    <section className="workshop-story section-space" aria-labelledby="workshop-title">
      <div className="container">
        <div className="workshop-heading">
          <div><p className="eyebrow">Inside Team 854</p><h2 className="section-title" id="workshop-title">This is our<br />kind of sport.</h2></div>
          <p className="body-copy">FIRST Robotics Competition is a high-school robotics league where teams build large robots for a new game each season. Engineering meets competition.</p>
        </div>
        <div className="workshop-grid">
          {chapters.map((chapter) => (
            <article className="workshop-card" key={chapter.title}>
              <div className="workshop-photo"><Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectPosition: chapter.position }} /></div>
              <div className="workshop-copy"><h3>{chapter.title}</h3><p>{chapter.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
