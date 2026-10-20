import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import TaskCenterDemo from "../components/TaskCenterDemo";
import { useSeo } from "../components/useSeo";
import { projects, site } from "../data/content";
import { btnPrimary, container, tag } from "../ui";
import NotFound from "./NotFound";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((entry) => entry.slug === slug);

  useSeo(
    project ? `${project.title} | ${site.name}` : `Project not found | ${site.name}`,
    project ? project.summary : "This project could not be found.",
  );

  if (!project) return <NotFound />;

  return (
    <article className={`${container} py-12 sm:py-16`}>
      <Link
        to="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.kind}</p>
        <h1 className="mt-3 text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                {link.label}
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        {project.note && <p className="mt-6 rounded-md bg-accent-soft px-4 py-3 text-sm">{project.note}</p>}
      </header>

      <div className="mt-10 max-w-3xl">
        <Block title="The problem">
          <p className="text-lg leading-relaxed">{project.problem}</p>
        </Block>

        <Block title="My role and contribution">
          <p className="text-lg leading-relaxed">{project.role}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="Key technical decisions">
          <dl className="space-y-5">
            {project.decisions.map((decision) => (
              <div key={decision.title}>
                <dt className="font-serif text-lg font-semibold">{decision.title}</dt>
                <dd className="mt-1 leading-relaxed text-muted">{decision.body}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Technology">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((name) => (
              <li key={name} className={`${tag} text-sm text-ink`}>
                {name}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      {project.images && project.images.length > 0 && (
        <Block title="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg border border-line"
              />
            ))}
          </div>
        </Block>
      )}

      {project.demo === "task-center" && (
        <Block title="Demonstration (sample data)">
          <TaskCenterDemo />
        </Block>
      )}
    </article>
  );
}
