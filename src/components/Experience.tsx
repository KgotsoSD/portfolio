import { experience } from "../data/content";
import { tag } from "../ui";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper sm:-left-[2.4rem]"
            />
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{item.period}</p>
            <h3 className="mt-1 font-serif text-xl font-semibold">
              {item.role} <span className="font-normal text-muted">· {item.company}</span>
            </h3>
            <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {item.stack.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {item.stack.map((name) => (
                  <li key={name} className={tag}>
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
