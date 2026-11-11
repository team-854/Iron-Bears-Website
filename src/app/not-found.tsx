import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container page-intro"
      style={{ minHeight: "65vh" }}
    >
      <h1 className="page-title">Page not found.</h1>
      <p className="body-copy">
        This page may have moved, or the link may be incorrect. Check the
        address or head back to the homepage.
      </p>
      <Link
        href="/"
        className="button button-primary"
        style={{ marginTop: 28 }}
      >
        Back to home <ArrowRight size={20} aria-hidden="true" />
      </Link>
    </main>
  );
}
