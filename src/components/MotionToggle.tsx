"use client";

import { useSyncExternalStore } from "react";
import { Pause, Play } from "@phosphor-icons/react";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  window.addEventListener("iron-bears:motion", callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("iron-bears:motion", callback);
  };
}

function getSnapshot() {
  const preference = document.documentElement.dataset.motion;
  return (
    preference === "reduced" ||
    (preference !== "full" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  );
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

export default function MotionToggle() {
  const reduced = useReducedMotion();
  function toggle() {
    const value = reduced ? "full" : "reduced";
    document.documentElement.dataset.motion = value;
    try {
      localStorage.setItem("iron-bears-motion", value);
    } catch {
      /* Preference remains usable without storage. */
    }
    window.dispatchEvent(new Event("iron-bears:motion"));
  }
  return (
    <button
      className="motion-toggle"
      type="button"
      onClick={toggle}
      aria-label={reduced ? "Enable motion" : "Pause motion"}
      title={reduced ? "Enable motion" : "Pause motion"}
    >
      {reduced ? (
        <Play size={18} aria-hidden="true" />
      ) : (
        <Pause size={18} aria-hidden="true" />
      )}
    </button>
  );
}
