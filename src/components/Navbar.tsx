"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/history", label: "History" },
  { href: "/contact", label: "Contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuOpen = open && openedAt === pathname;
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Iron Bears FRC Team 854 home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={45}
            height={45}
            priority
          />
          <span className="brand-type">
            IRON BEARS <span>FRC TEAM 854</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact" className="header-contact">
            Get involved <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpenedAt(pathname);
              setOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <List size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav container"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
