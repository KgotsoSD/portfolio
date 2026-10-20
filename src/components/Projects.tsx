import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { tag } from "../ui";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected projects">
      <ul className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="group relative flex flex-col rounded-lg border border-line bg-paper p-5 transition-colors hover:border-ink"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.kind}</p>
            <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
              <Link
                to={`/projects/${project.slug}`}
                className="after:absolute after:inset-0 after:content-[''] focus-visible:after:rounded-lg"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.stack.map((name) => (
                <li key={name} className={tag}>
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-accent">
              Read the details
              <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
