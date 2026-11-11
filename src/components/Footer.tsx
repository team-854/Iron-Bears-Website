import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-identity">
            <Link
              className="brand"
              href="/"
              aria-label="Iron Bears FRC Team 854 home"
            >
              <Image src="/images/logo.png" width={52} height={52} alt="" />
              <span className="brand-type">
                IRON BEARS <span>FRC TEAM 854</span>
              </span>
            </Link>
            <p>
              Student-led robotics.
              <br />
              Martingrove Collegiate Institute.
              <br />
              Toronto, Ontario.
            </p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link href="/about">About the team</Link>
            <Link href="/history">Our robot history</Link>
            <Link href="/sponsors">Our sponsors</Link>
          </div>
          <div className="footer-links">
            <h2>Stay connected</h2>
            <a
              href="https://www.instagram.com/team854/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/team854"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <Link href="/contact">
              Contact the team <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Iron Bears Robotics</p>
          <p>Built on curiosity. Powered by teamwork.</p>
          <a href="mailto:mci.robotics@gmail.com">mci.robotics@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
