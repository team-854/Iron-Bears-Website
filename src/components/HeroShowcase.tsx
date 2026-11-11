"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
const scenes = [
  { name: "Compete", image: "/images/2026/stemleycup-25.jpg", alt: "Team 854's 2026 REBUILT robot with red bumpers competing at STEMley Cup", caption: "Our 2026 REBUILT robot at STEMley Cup.", credit: "@jfreemanphotos", position: "50% 74%" },
  { name: "Build", image: "/images/about/assembly1.jpg", alt: "Iron Bears students and mentors assembling their robot in the workshop", caption: "From the first idea to the final assembly.", position: "60% 50%" },
  { name: "Connect", image: "/images/about/teamphoto.jpg", alt: "Iron Bears students and mentors together at Martingrove Collegiate Institute", caption: "The people behind every robot we build.", position: "50% 40%" },
];
export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  return (
    <section className="hero-showcase" aria-labelledby="hero-title">
      <div className="hero-images">
        {scenes.map((scene, index) => (
          <div key={scene.name} className={`hero-frame hero-frame-${scene.name.toLowerCase()} ${active === index ? "is-active" : ""}`}>
            <Image src={scene.image} alt={index === active ? scene.alt : ""}
              aria-hidden={index !== active} fill sizes={index === 0 ? "(max-width: 800px) 260vw, 180vw" : "100vw"} priority={index === 0}
              className="hero-photo" style={{ objectPosition: scene.position }} />
          </div>
        ))}
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">Toronto, Ontario · FRC Team 854</p>
        <h1 id="hero-title"><span>TEAM 854</span><span>IRON BEARS</span></h1>
        <p className="hero-tagline">We build real robots.</p>
        <p className="hero-description">Student-led. Hands-on. Team 854 turns curiosity into competitive robots and real engineering skills.</p>
        <div className="hero-actions">
          <Link href="/about" className="button button-primary">Meet the team <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="/sponsors" className="button hero-secondary">Sponsor us <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="hero-controls">
        <div className="container hero-controls-inner">
          <p className="hero-caption" aria-live="polite">
            <span>{scenes[active].caption}</span>
            {scenes[active].credit && <span className="hero-credit">Photo: {scenes[active].credit}</span>}
          </p>
          <div className="scene-switcher" role="group" aria-label="Explore the team in photos">
            {scenes.map((scene, index) => (
              <button key={scene.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{scene.name}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
