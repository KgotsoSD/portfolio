import { Link } from "react-router-dom";
import { useSeo } from "../components/useSeo";
import { btnPrimary, container } from "../ui";

export default function NotFound() {
  useSeo("Page not found | Kgotso Maduna", "This page could not be found.");

  return (
    <div className={`${container} py-24`}>
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">That page doesn't exist.</h1>
      <p className="mt-4 text-muted">The link may be wrong or the page may have moved.</p>
      <Link to="/" className={`${btnPrimary} mt-8`}>
        Back to the homepage
      </Link>
    </div>
  );
}
