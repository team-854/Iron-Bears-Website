import Image from "next/image";
const chapters = [
  { title: "Build.", copy: "Design parts in CAD, make them in the shop, then assemble and wire the robot.", image: "/images/about/assembly1.jpg", alt: "Iron Bears students and mentors assembling their robot", position: "48% 50%" },
  { title: "Code.", copy: "Write and test the software for driving, using cameras, and running autonomous routines.", image: "/images/about/demonstration.jpg", alt: "Team 854 demonstrating their robot at school", position: "50% 50%" },
  { title: "Lead.", copy: "Reach out to sponsors, organize outreach, and help keep the team running.", image: "/images/about/teamphoto.jpg", alt: "The Iron Bears team at Martingrove Collegiate Institute", position: "50% 40%" },
];
export default function WorkshopStory() {
  return (
    <section className="workshop-story section-space" aria-labelledby="workshop-title">
      <div className="container">
        <div className="workshop-heading">
          <div><p className="eyebrow">Inside Team 854</p><h2 className="section-title" id="workshop-title">This is our<br />kind of sport.</h2></div>
          <p className="body-copy">FIRST Robotics Competition gives high-school teams a new game each season. Getting ready takes mechanical work, programming, and plenty of planning.</p>
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
