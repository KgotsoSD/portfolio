import { education, skills } from "../data/content";
import { tag } from "../ui";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className={`${tag} text-sm text-ink`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Education and certifications</h3>
        <ul className="mt-4 space-y-3">
          {education.map((entry) => (
            <li key={entry.title}>
              <p className="font-medium">{entry.title}</p>
              <p className="text-sm text-muted">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
