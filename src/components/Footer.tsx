import { site } from "../data/content";
import { container, textLink } from "../ui";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between`}>
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <p className="flex gap-4">
          <a href={site.github} className={textLink} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <a href={site.linkedin} className={textLink} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className={textLink}>
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
