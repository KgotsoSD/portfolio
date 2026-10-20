import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { nav, site } from "../data/content";
import { container } from "../ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  const linkClass = "text-sm text-muted transition-colors hover:text-ink";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-3 font-serif text-lg font-semibold tracking-tight"
          aria-label={`${site.name}, home`}
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-sm text-paper"
          >
            KM
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.id} to={`/#${item.id}`} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <a
            href={site.cv}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm font-medium transition-colors hover:border-ink"
          >
            <Download size={14} aria-hidden="true" />
            CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <ul className={`${container} flex flex-col py-2`}>
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={close}
                  className="block border-b border-line py-3 text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.cv} download onClick={close} className="flex items-center gap-2 py-3 text-base font-medium">
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
