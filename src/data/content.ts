/**
 * All site content lives here. Edit this file to change what the site says.
 * Anything not in this file should not be claimed on the site.
 */

export const site = {
  name: "Kgotso Maduna",
  title: "Software Engineer | Full-Stack Development",
  location: "South Africa",
  email: "kgmaduna01@gmail.com",
  linkedin: "https://www.linkedin.com/in/kgotso-maduna-24a4641aa/",
  github: "https://github.com/KgotsoSD",
  cv: "/Kgotso-Maduna-CV.pdf",
  url: "https://sparkling-dango-fdba70.netlify.app",
  description:
    "Kgotso Maduna is a full-stack software engineer in South Africa working with React, C#/.NET and enterprise systems. Projects, experience and contact details.",
} as const;

export interface NavItem {
  label: string;
  id: string;
}

export const nav: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  headline: "Building software that solves real-world problems.",
  intro:
    "I'm a software engineer working across React and C#/.NET. I build and maintain web applications, develop APIs and integrate enterprise systems, with a focus on software that is reliable and easy to maintain.",
  glance: [
    { label: "Currently", value: "Software Engineer at Integrove" },
    { label: "Focus", value: "Full-stack web and enterprise applications" },
    { label: "Main stack", value: "C#/.NET, React, TypeScript" },
    { label: "Based in", value: "South Africa" },
    { label: "Looking for", value: "Permanent intermediate-level roles" },
  ],
} as const;

export const about: string[] = [
  "I'm a software engineer at Integrove, where I build and maintain web applications for clients. My work is split between React front ends and C# and .NET back ends, with Entity Framework and SQL underneath. I also work on APIs and on integrations between systems, including SAP BTP.",
  "My experience covers testing and support as well as development, and that shapes how I work: I care about whether a feature behaves well in use, not only whether it passes review. I review other people's code, have mine reviewed, and work closely with senior engineers and the rest of the team.",
  "Earlier in my career I worked with PHP, Laravel and Vue.js. I hold Microsoft's AZ-204 (Azure Developer Associate) and AZ-900 certifications. I'm now looking for a permanent intermediate-level role on a team that values reliable, maintainable software.",
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Integrove",
    role: "Junior Software Engineer",
    period: "2023 – Present",
    points: [
      "Build and maintain web applications, working on both React front ends and C#/.NET back ends.",
      "Develop and consume APIs and integrate with enterprise systems, including SAP BTP.",
      "Work with SQL databases through Entity Framework.",
      "Review code, have my own code reviewed, and work with senior engineers and the wider team.",
      "Currently contributing to an enterprise task-inbox digest system as a Software Engineer (see Task Center and Digest Email System).",
    ],
    stack: ["C#", ".NET", "Entity Framework", "React", "TypeScript", "SQL", "SAP BTP"],
  },
  {
    company: "Integrove",
    role: "Intern",
    period: "2022 – 2023",
    points: ["Internship that led into the junior software engineer role."],
    stack: [],
  },
  {
    company: "Teklink",
    role: "Software Tester, Support & Developer Intern",
    period: "Mar 2021 – Apr 2022",
    points: [
      "Tested and supported software applications alongside development work.",
      "Built application features with PHP, using Laravel and CodeIgniter, and Vue.js on the front end.",
    ],
    stack: ["PHP", "Laravel", "CodeIgniter", "Vue.js"],
  },
  {
    company: "Hosi Technologies",
    role: "Intern",
    period: "2016 – 2018",
    points: ["Internship working in Java."],
    stack: ["Java"],
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "SAP UI5", "Vue.js"],
  },
  {
    title: "Backend",
    items: ["C#", ".NET", "Node.js", "REST APIs", "Entity Framework", "Java", "PHP", "Laravel"],
  },
  {
    title: "Enterprise and cloud",
    items: ["SAP BTP", "SAP CAP", "Cloud integrations", "Microsoft Azure", "Cloudflare"],
  },
  {
    title: "Databases and tools",
    items: ["SQL", "MySQL", "PostgreSQL", "Git", "Azure DevOps", "Docker"],
  },
  {
    title: "Practices",
    items: ["Code review", "Unit testing", "OWASP secure coding"],
  },
];

export interface Credential {
  title: string;
  detail: string;
}

export const education: Credential[] = [
  { title: "National Diploma in Information Technology", detail: "Tshwane University of Technology, 2017" },
  { title: "Microsoft Certified: Azure Developer Associate (AZ-204)", detail: "Microsoft" },
  { title: "Microsoft Certified: Azure Fundamentals (AZ-900)", detail: "Microsoft" },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  problem: string;
  role: string;
  contributions: string[];
  decisions: Decision[];
  stack: string[];
  links: ProjectLink[];
  /** Screenshots to show on the project page. Put files in /public/projects/. */
  images?: ProjectImage[];
  /** Shows the interactive sample-data demo on the project page. */
  demo?: "task-center";
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "task-center-digest",
    title: "Task Center and Digest Email System",
    kind: "Professional work · Integrove",
    summary:
      "A digest component for an enterprise task inbox. It ingests task and notification data and gives each user a scheduled email summary, with screens to configure it and monitor it.",
    problem:
      "People working in enterprise systems receive tasks and notifications from several places. The digest gathers them into one scheduled summary. The people running it need to configure what is sent and to see whether each ingestion ran correctly.",
    role: "Software Engineer on the project team, working alongside a senior engineer.",
    contributions: [
      "Implemented the ingest logic for the digest backend: receiving task and notification data, validating it, and keeping a retained raw archive of what came in.",
      "Built the Digest Configuration screen, aligning the delivery schedule with each user's notification-preference frequency and adding an email preview.",
      "Built the System Monitor screen: ingest runs (scheduled and manual), run details, connector reconciliation and exceptions.",
      "Built the screens with the project's existing React component library.",
    ],
    decisions: [
      {
        title: "SAP CAP on SAP BTP for the backend",
        body: "The digest backend is built with the SAP Cloud Application Programming Model on SAP BTP. The React interface is built separately on top of it.",
      },
      {
        title: "Validate on the way in, keep the raw data",
        body: "Incoming data is validated and the raw payload is archived, so a run can be inspected and reconciled against its source later.",
      },
      {
        title: "Reuse the team's component library",
        body: "New screens use the existing component library, so they look and behave like the rest of the product.",
      },
    ],
    stack: ["React", "SAP BTP", "SAP CAP", "Azure DevOps"],
    links: [],
    demo: "task-center",
    note: "This is proprietary client work, so there is no code or live link. The demo below is a fictional re-creation with sample data, not the client's system.",
  },
  {
    slug: "elovyn-online-store",
    title: "Elovyn Online Store",
    kind: "Online store · Built by me",
    summary:
      "An online store for the Elovyn brand, built in React. It started on Shopify and now uses Cloudflare for its database and deployment.",
    problem:
      "The Elovyn brand needed a storefront of its own that presents its products clearly and works well on phones as well as desktops.",
    role: "I built the store.",
    contributions: [
      "Built the storefront in React.",
      "The store originally ran on Shopify as the store platform, with a custom theme I built.",
      "Moved the store to Cloudflare, which now holds its database and is where it is deployed.",
    ],
    decisions: [
      {
        title: "Moving from Shopify to Cloudflare",
        body: "The store moved off Shopify. Its data now lives in a Cloudflare database and the site is deployed on Cloudflare, so hosting and data sit together.",
      },
    ],
    stack: ["React", "Cloudflare", "Shopify (earlier version)"],
    links: [{ label: "Visit the store", href: "https://elovyn.store" }],
  },
  {
    slug: "inventory-manager",
    title: "Inventory Manager",
    kind: "Personal project · Source on GitHub",
    summary:
      "A server-rendered CRUD application with form validation, built with ASP.NET Core MVC in C#.",
    problem:
      "Keeping a set of inventory records in one app instead of a spreadsheet: add, view, edit and delete items, with input checked before it is saved.",
    role: "Sole author.",
    contributions: [
      "Built the application in C# on ASP.NET Core MVC, targeting .NET Core 3.1.",
      "Implemented create, read, update and delete screens for inventory records.",
      "Added validation so that invalid input is checked before a record is saved.",
    ],
    decisions: [
      {
        title: "Standard MVC structure",
        body: "Controllers, models and views are kept separate, following the usual ASP.NET Core MVC layout, which keeps each part small and easy to find.",
      },
      {
        title: "Validation as a core feature",
        body: "Checking input is part of the design of the app and not an afterthought, so bad data is stopped at the form.",
      },
    ],
    stack: ["C#", "ASP.NET Core MVC", ".NET Core 3.1"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/KgotsoSD/Crud-app-with-validations-Asp.net-Core-MVC-",
      },
    ],
  },
];

export const contact = {
  heading: "Let's talk about a permanent role.",
  body: "I'm looking for a permanent intermediate-level software engineering role. If your team builds web or enterprise software, I'd be glad to hear from you.",
} as const;
