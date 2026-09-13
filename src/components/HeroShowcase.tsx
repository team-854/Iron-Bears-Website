"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
const scenes = [
  {
    name: "Compete",
    image: "/images/about/hero.jpg",
    alt: "Team 854's 2025 REEFSCAPE robot competing on the field",
    caption: "Our 2025 REEFSCAPE robot, in its element.",
    position: "48% 61%",
  },
  {
    name: "Build",
    image: "/images/about/assembly1.jpg",
    alt: "Iron Bears students and mentors assembling their robot in the workshop",
    caption: "From the first idea to the final assembly.",
    position: "60% 50%",
  },
  {
    name: "Connect",
    image: "/images/about/teamphoto.jpg",
    alt: "Iron Bears students and mentors together at Martingrove Collegiate Institute",
    caption: "The people behind every robot we build.",
    position: "70% 48%",
  },
];
export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  return (
    <section className="hero-showcase" aria-labelledby="hero-title" data-hero>
      <div className="hero-stage">
        <div className="hero-grid" aria-hidden="true" />
        <svg
          className="hero-orbit"
          viewBox="0 0 1000 1000"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="500" cy="500" r="478" className="orbit-hairline" />
          <circle cx="500" cy="500" r="408" className="orbit-hairline" />
          <circle cx="500" cy="500" r="338" className="orbit-inner" />
          <g className="orbit-ticks">
            {Array.from({ length: 60 }, (_, i) => (
              <path
                key={i}
                d={`M500 38V${i % 5 === 0 ? 68 : 48}`}
                transform={`rotate(${i * 6} 500 500)`}
              />
            ))}
          </g>
          <g className="orbit-segments">
            <path d="M500 92A408 408 0 0 1 908 500" />
            <path d="M500 908A408 408 0 0 1 92 500" />
          </g>
          <g className="orbit-crosshairs">
            <path d="M500 0V105M500 895V1000M0 500H105M895 500H1000" />
            <path d="M153 143V163M143 153H163M847 837V857M837 847H857" />
          </g>
        </svg>
        <div className="hero-images">
          <div className="hero-image-inner">
            {scenes.map((s, i) => (
              <Image
                key={s.name}
                src={s.image}
                alt={i === active ? s.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="100vw"
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                className={`hero-photo ${active === i ? "is-active" : ""}`}
                style={{ objectPosition: s.position }}
              />
            ))}
          </div>
        </div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <h1 id="hero-title">
            <span className="hero-title-line">WE BUILD</span>
            <span className="hero-title-line">REAL ROBOTS.</span>
          </h1>
          <div className="hero-description">
            <p>
              Student-led. Hands-on. Team 854 turns curiosity into competitive
              robots and real engineering skills.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="button button-primary">
                Meet the team <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <Link href="/sponsors" className="button hero-secondary">
                Sponsor us <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <a className="hero-scroll-cue" href="#our-team">
          <span className="hero-scroll-icon">
            <ArrowDown size={22} aria-hidden="true" />
          </span>
          <span>Scroll into our world</span>
        </a>
        <div className="hero-finale container" aria-hidden="true">
          <span>BUILT BY</span>
          <span>CURIOSITY.</span>
        </div>
        <div className="hero-seam" aria-hidden="true" />
        <div className="hero-controls">
          <div className="container hero-controls-inner">
            <p className="hero-caption" aria-live="polite">
              {scenes[active].caption}
            </p>
            <div
              className="scene-switcher"
              role="group"
              aria-label="Explore the team in photos"
            >
              {scenes.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  {s.name}
                  <span className="scene-progress" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-sequence-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
