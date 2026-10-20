import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { hero, site } from "../data/content";
import { btnPrimary, btnSecondary, container } from "../ui";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-line">
      <div className={`${container} grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end`}>
        <div>
          <p className="font-mono text-sm text-accent">
            {site.name} · {site.title}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#projects" className={btnPrimary}>
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={site.cv} download className={btnSecondary}>
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <GitHubIcon width={18} height={18} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <LinkedInIcon width={18} height={18} />
              LinkedIn
            </a>
          </p>
        </div>

        <dl className="rounded-lg border border-line bg-panel p-6 text-sm">
          {hero.glance.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col gap-0.5 py-3 sm:flex-row sm:gap-4 ${index === 0 ? "pt-0" : "border-t border-line"} ${index === hero.glance.length - 1 ? "pb-0" : ""}`}
            >
              <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">{row.label}</dt>
              <dd className="font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
