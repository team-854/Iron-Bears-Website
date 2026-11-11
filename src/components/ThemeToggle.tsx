"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
const subscribe = (callback: () => void) => {
  window.addEventListener("iron-bears-theme", callback);
  return () => window.removeEventListener("iron-bears-theme", callback);
};
const getSnapshot = () => document.documentElement.dataset.theme !== "dark";
const getServerSnapshot = () => true;
export default function ThemeToggle() {
  const isLight = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  function toggle() {
    const theme = isLight ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("iron-bears-theme", theme);
    } catch {
      /* Keep theme usable without storage. */
    }
    window.dispatchEvent(new Event("iron-bears-theme"));
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      {isLight ? (
        <Moon size={20} aria-hidden="true" />
      ) : (
        <Sun size={20} aria-hidden="true" />
      )}
    </button>
  );
}
