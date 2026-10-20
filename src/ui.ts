/** Shared class strings so buttons and links look the same everywhere. */

export const container = "mx-auto w-full max-w-5xl px-5 sm:px-8";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors";

export const btnPrimary = `${buttonBase} bg-ink text-paper hover:bg-accent`;

export const btnSecondary = `${buttonBase} border border-line bg-paper text-ink hover:border-ink`;

export const textLink =
  "underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export const tag =
  "inline-block rounded border border-line bg-paper px-2 py-0.5 font-mono text-xs text-muted";
