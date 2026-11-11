"use client";
import { useEffect, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

export default function MotionSystem() {
  const reduced = useReducedMotion();
  useEffect(() => {
    document.documentElement.dataset.motionState = reduced ? "reduced" : "full";
  }, [reduced]);
  return null;
}
