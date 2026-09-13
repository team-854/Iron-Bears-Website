"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./MotionToggle";

function snapshotHeroStyles(hero: HTMLElement | null) {
  if (!hero) return () => {};
  const layers = [
    hero,
    ...hero.querySelectorAll<HTMLElement | SVGElement>(
      ".hero-images, .hero-image-inner, .hero-orbit, .hero-grid, .hero-shade, .hero-content, .hero-scroll-cue, .hero-controls, .hero-finale, .hero-seam, .hero-sequence-progress, .hero-sequence-progress span",
    ),
  ];
  const snapshots = layers.map((element) => ({
    element,
    attributes: (element instanceof SVGElement
      ? ["style", "transform", "data-svg-origin"]
      : ["style"]
    ).map((name) => ({ name, value: element.getAttribute(name) })),
  }));

  return () => {
    snapshots.forEach(({ element, attributes }) => {
      attributes.forEach(({ name, value }) => {
        if (value === null) element.removeAttribute(name);
        else element.setAttribute(name, value);
      });
      // Re-read responsive CSS transforms the next time GSAP animates this layer.
      if (element._gsap) element._gsap.uncache = 1;
    });
  };
}

export default function MotionSystem() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const progress = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const routeChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    // Reset after the previous page's pins are removed, before measuring the new page.
    if (routeChanged && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    document.documentElement.dataset.motionState = reduced ? "reduced" : "full";
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    let disposed = false;
    let refreshFrame = 0;
    const media = gsap.matchMedia();
    const revealed = new WeakSet<Element>();
    let refreshElements = () => {};
    let syncParallax = () => {};
    const context = gsap.context(() => {
      gsap.to(progress.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 0.15,
        },
      });

      function revealNewElements() {
        document
          .querySelectorAll<HTMLElement>("[data-reveal], [data-line-reveal]")
          .forEach((element) => {
            if (revealed.has(element)) return;
            revealed.add(element);
            // Keep anything already above the fold visible, including hash destinations.
            if (element.getBoundingClientRect().bottom < 0) return;
            const isTitle = element.hasAttribute("data-line-reveal");
            gsap.fromTo(
              element,
              isTitle
                ? { clipPath: "inset(0 0 24% 0)", y: 26 }
                : { y: 34, opacity: 1 },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                duration: isTitle ? 0.9 : 0.75,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  once: true,
                },
              },
            );
          });
      }
      revealNewElements();
      refreshElements = () =>
        context.add(() => {
          revealNewElements();
          syncParallax();
        });

      media.add("(min-width: 900px) and (min-height: 620px)", () => {
        const restoreHeroStyles = snapshotHeroStyles(
          document.querySelector<HTMLElement>("[data-hero]"),
        );
        const parallaxTweens = new Map<HTMLElement, gsap.core.Tween>();
        syncParallax = () => {
          parallaxTweens.forEach((tween, frame) => {
            if (!frame.isConnected || !frame.hasAttribute("data-parallax")) {
              tween.scrollTrigger?.kill();
              tween.revert();
              parallaxTweens.delete(frame);
            }
          });
          document
            .querySelectorAll<HTMLElement>("[data-parallax]")
            .forEach((frame) => {
              if (parallaxTweens.has(frame)) return;
              const image = frame.querySelector("[data-parallax-image]");
              if (!image) return;
              const tween = gsap.fromTo(
                image,
                { yPercent: -5, scale: 1.12 },
                {
                  yPercent: 5,
                  scale: 1.12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                  },
                },
              );
              parallaxTweens.set(frame, tween);
            });
        };
        syncParallax();
        document
          .querySelectorAll<HTMLElement>("[data-drift]")
          .forEach((element) => {
            const direction = element.dataset.drift === "right" ? 1 : -1;
            gsap.fromTo(
              element,
              { xPercent: direction * -8 },
              {
                xPercent: direction * 8,
                ease: "none",
                scrollTrigger: {
                  trigger: element.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });

        const hero = document.querySelector<HTMLElement>("[data-hero]");
        if (hero) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top+=78",
              end: "+=140%",
              pin: true,
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          });
          timeline
            .to(
              ".hero-images",
              {
                clipPath: "circle(100% at 50% 50%)",
                duration: 1.35,
                ease: "power2.inOut",
              },
              0,
            )
            .to(
              ".hero-image-inner",
              { x: 0, xPercent: 0, scale: 1.12, duration: 2.1, ease: "none" },
              0,
            )
            .to(
              ".hero-orbit",
              {
                rotation: 110,
                scale: 1.7,
                autoAlpha: 0,
                duration: 1.3,
                ease: "power2.in",
              },
              0,
            )
            .to(".hero-grid", { scale: 1.2, opacity: 0, duration: 0.9 }, 0)
            .to(".hero-shade", { opacity: 1, duration: 0.8 }, 0.3)
            .to(
              ".hero-content",
              { xPercent: -8, autoAlpha: 0, duration: 0.6, ease: "power2.in" },
              0.55,
            )
            .to(".hero-scroll-cue", { autoAlpha: 0, y: 24, duration: 0.25 }, 0)
            .to(".hero-controls", { autoAlpha: 0, y: 40, duration: 0.35 }, 0.75)
            .fromTo(
              ".hero-finale",
              { y: 70, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.65, ease: "power3.out" },
              1.15,
            )
            .to(".hero-seam", { opacity: 1, duration: 0.65 }, 1.3)
            .to(
              ".hero-sequence-progress span",
              { scaleX: 1, duration: 2.1, ease: "none" },
              0,
            )
            .to(".hero-sequence-progress", { opacity: 0, duration: 0.3 }, 1.8);
        }

        const workshop = document.querySelector<HTMLElement>("[data-workshop]");
        if (workshop) {
          workshop.dataset.pinned = "true";
          const steps = gsap.utils.toArray<HTMLElement>(
            ".workshop-step",
            workshop,
          );
          const photos = gsap.utils.toArray<HTMLElement>(
            ".workshop-photo",
            workshop,
          );
          gsap.set(steps.slice(1), { opacity: 0, y: 50 });
          gsap.set(photos.slice(1), { clipPath: "inset(100% 0 0 0)" });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: workshop,
              start: "top top+=78",
              end: "+=170%",
              pin: true,
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          });
          steps.forEach((step, index) => {
            if (!index) return;
            const time = index - 0.25;
            timeline
              .to(
                steps[index - 1],
                { y: -45, opacity: 0, duration: 0.35 },
                time,
              )
              .fromTo(
                step,
                { y: 45, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                time + 0.1,
              )
              .to(
                photos[index],
                {
                  clipPath: "inset(0% 0 0 0)",
                  duration: 0.7,
                  ease: "power2.inOut",
                },
                time,
              )
              .fromTo(
                photos[index].querySelector("img"),
                { scale: 1.15 },
                { scale: 1, duration: 0.9, ease: "none" },
                time,
              );
          });
          timeline.to(
            ".workshop-progress",
            { scaleX: 1, duration: timeline.duration(), ease: "none" },
            0,
          );
        }
        return () => {
          if (workshop) delete workshop.dataset.pinned;
          parallaxTweens.forEach((tween) => {
            tween.scrollTrigger?.kill();
            tween.revert();
          });
          parallaxTweens.clear();
          syncParallax = () => {};
          // MatchMedia runs this after reverting its animations and pin styles.
          restoreHeroStyles();
        };
      });
    });

    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        if (disposed) return;
        refreshElements();
        ScrollTrigger.refresh();
      });
    };
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("iron-bears:refresh-motion", refresh);
    // Images have reserved frames; lazy image loads do not change layout.
    // Refreshing pinned sections on each load can interrupt an active scroll.
    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      window.removeEventListener("iron-bears:refresh-motion", refresh);
      media.revert();
      context.revert();
    };
  }, [pathname, reduced]);

  return <div className="reading-progress" ref={progress} aria-hidden="true" />;
}
