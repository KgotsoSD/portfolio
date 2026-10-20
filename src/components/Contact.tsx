import { Mail } from "lucide-react";
import { contact, site } from "../data/content";
import { btnPrimary, btnSecondary } from "../ui";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading}>
      <p className="max-w-xl text-lg leading-relaxed">{contact.body}</p>
      <p className="mt-6">
        <a href={`mailto:${site.email}`} className="font-serif text-2xl underline decoration-accent decoration-2 underline-offset-4 sm:text-3xl">
          {site.email}
        </a>
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className={btnPrimary}>
          <Mail size={16} aria-hidden="true" />
          Email me
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
          <LinkedInIcon width={16} height={16} />
          LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
          <GitHubIcon width={16} height={16} />
          GitHub
        </a>
      </div>
    </Section>
  );
}
