"use client";
import { useEffect } from "react";
import { useReducedMotion } from "./MotionToggle";
export default function MotionSystem() {
  const reduced = useReducedMotion();
  useEffect(() => {
    document.documentElement.dataset.motionState = reduced ? "reduced" : "full";
  }, [reduced]);
  return null;
}
