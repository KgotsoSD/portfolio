import { about } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
