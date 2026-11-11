"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { seasons, seasonUrl } from "@/data/seasons";
import styles from "./HistoryArchive.module.css";
import { useReducedMotion } from "./MotionSystem";

const eras = [
  { label: "All seasons", value: "all" },
  { label: "2020s", value: "2020" },
  { label: "2010s", value: "2010" },
  { label: "2000s", value: "2000" },
] as const;

type Era = (typeof eras)[number]["value"];

export default function HistoryArchive() {
  const [era, setEra] = useState<Era>("all");
  const reducedMotion = useReducedMotion();
  const gridRef = useRef<HTMLUListElement>(null);
  const previousBounds = useRef(new Map<string, DOMRect>());
  const animations = useRef<Animation[]>([]);
  const filterChanged = useRef(false);
  const visibleSeasons = seasons.filter(
    (season) =>
      era === "all" || Math.floor(season.year / 10) * 10 === Number(era),
  );

  function selectEra(nextEra: Era) {
    if (nextEra === era) return;
    const bounds = new Map<string, DOMRect>();
    gridRef.current
      ?.querySelectorAll<HTMLElement>("[data-season]")
      .forEach((item) => {
        bounds.set(item.dataset.season!, item.getBoundingClientRect());
      });
    previousBounds.current = bounds;
    animations.current.forEach((animation) => animation.cancel());
    animations.current = [];
    filterChanged.current = true;
    setEra(nextEra);
  }

  useLayoutEffect(() => {
    if (!filterChanged.current || !gridRef.current) return;
    filterChanged.current = false;
    const elements =
      gridRef.current.querySelectorAll<HTMLElement>("[data-season]");

    if (!reducedMotion) {
      elements.forEach((element) => {
        const next = element.getBoundingClientRect();
        if (next.bottom < 0 || next.top > window.innerHeight * 1.2) return;
        const previous = previousBounds.current.get(element.dataset.season!);
        const nearby =
          previous && Math.abs(previous.top - next.top) < window.innerHeight;
        const frames: Keyframe[] = nearby
          ? [
              {
                transform: `translate(${previous.left - next.left}px, ${previous.top - next.top}px) scale(${previous.width / next.width}, ${previous.height / next.height})`,
                transformOrigin: "top left",
              },
              { transform: "none", transformOrigin: "top left" },
            ]
          : [
              { opacity: 0.35, transform: "translateY(18px)" },
              { opacity: 1, transform: "none" },
            ];
        animations.current.push(
          element.animate(frames, {
            duration: nearby ? 420 : 300,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          }),
        );
      });
    }

    const refresh = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("iron-bears:refresh-motion"));
    });
    return () => cancelAnimationFrame(refresh);
  }, [era, reducedMotion]);

  useEffect(() => {
    if (reducedMotion)
      animations.current.forEach((animation) => animation.cancel());
  }, [reducedMotion]);

  useEffect(() => {
    return () => animations.current.forEach((animation) => animation.cancel());
  }, []);

  return (
    <section
      id="season-archive"
      className={styles.archive}
      aria-labelledby="season-archive-title"
    >
      <header className={styles.archiveHeading}>
        <div>
          <p className="eyebrow">Through the years</p>
          <h2 id="season-archive-title" className="section-title">
            The season archive.
          </h2>
        </div>
        <p className={styles.archiveNote}>
          Filter by decade to find a season.
        </p>
      </header>
      <div className={styles.toolbar}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Filter seasons by decade"
        >
          {eras.map((item) => {
            const count = seasons.filter(
              (season) =>
                item.value === "all" ||
                Math.floor(season.year / 10) * 10 === Number(item.value),
            ).length;
            return (
              <button
                key={item.value}
                className={styles.filter}
                type="button"
                aria-pressed={era === item.value}
                aria-controls="season-grid"
                onClick={() => selectEra(item.value)}
              >
                <span>{item.label}</span>
                <span className={styles.filterCount} aria-hidden="true">
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
        <div className={styles.archiveMeta}>
          <p
            className={styles.archiveCount}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing {visibleSeasons.length} seasons
            {era !== "all" ? ` from the ${era}s` : ""}
          </p>
          <p className={styles.archiveSource}>
            Season details on The Blue Alliance.
          </p>
        </div>
      </div>

      <ul id="season-grid" ref={gridRef} className={styles.grid}>
        {visibleSeasons.map((season) => (
          <li
            key={season.year}
            className={styles.record}
            data-season={season.year}
          >
            <a
              className={styles.season}
              href={seasonUrl(season.year)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Team 854's ${season.year} ${season.game} season on The Blue Alliance (opens in a new tab)`}
            >
              <div className={styles.seasonImage}>
                <Image
                  src={season.image}
                  alt={`Team 854 robot from the ${season.year} ${season.game} season`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 45vw, 30vw"
                  className={`${styles.seasonPhoto} ${season.preserveFrame ? styles.preserveFrame : ""}`}
                  style={
                    season.position
                      ? { objectPosition: season.position }
                      : undefined
                  }
                />
              </div>
              <div className={styles.seasonCaption}>
                <h3 className={styles.seasonHeading}>
                  <span className={styles.seasonYear}>{season.year}</span>
                  <span className={styles.seasonGame}>{season.game}</span>
                </h3>
                <ArrowUpRight
                  className={styles.seasonArrow}
                  size={24}
                  aria-hidden="true"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
