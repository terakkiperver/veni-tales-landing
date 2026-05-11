import Link from "next/link";
import type { ReactNode } from "react";

export type PillVariant = "primary" | "accent" | "outline" | "onPrimary";

type Props = {
  href: string;
  variant?: PillVariant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const variantClasses: Record<
  PillVariant,
  { front: string; shadow: string; focusRingOffset: string }
> = {
  /** Filled CTAs: light green face + dark green block shadow (AnimatedPillLgButton accent). */
  primary: {
    shadow: "bg-primary",
    front: "border border-primary bg-accent text-primary",
    focusRingOffset: "focus-visible:ring-offset-bg-cream",
  },
  accent: {
    shadow: "bg-primary",
    front: "border border-primary bg-accent text-primary",
    focusRingOffset: "focus-visible:ring-offset-bg-cream",
  },
  /**
   * Secondary: opaque warm yellow (#f9c365) face — neo pill reads cleanly over shadow.
   */
  outline: {
    shadow: "bg-primary",
    front:
      "border border-primary bg-[#f9c365] text-primary",
    focusRingOffset: "focus-visible:ring-offset-bg-cream",
  },
  /**
   * Same neo press animation as primary, but shadow reads on `bg-primary` surfaces
   * (default green shadow would disappear against the card).
   */
  onPrimary: {
    shadow: "bg-black/40",
    front: "border border-primary bg-accent text-primary",
    focusRingOffset: "focus-visible:ring-offset-primary",
  },
};

/**
 * Neo-brutalist animated pill — matches kaka_mobile AnimatedPillLgButton layout:
 * shadow must live inside the same box as pb-1 / pl-[2px] so the dark layer shows
 * in the 4px band below the face; press −2px/+4px ~90ms, spring on release.
 */
export default function AppPillButton({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
}: Props) {
  const v = variantClasses[variant];
  return (
    <span className={`inline-block ${className}`}>
      <Link
        href={href}
        className={`group relative inline-flex touch-manipulation rounded-full pb-1 pl-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${v.focusRingOffset}`}
        aria-label={ariaLabel}
      >
        <span
          className={`pointer-events-none absolute bottom-0 left-0 top-[4px] right-[2px] z-0 rounded-full ${v.shadow}`}
          aria-hidden
        />
        <span
          className={`relative z-[1] inline-flex min-h-[44px] items-center justify-center rounded-full px-[18px] py-2.5 text-[15px] font-semibold tracking-tight transition-[transform] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] active:-translate-x-0.5 active:translate-y-1 active:duration-[90ms] active:ease-out ${v.front}`}
        >
          {children}
        </span>
      </Link>
    </span>
  );
}
