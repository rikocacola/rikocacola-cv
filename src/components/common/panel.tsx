import type { CSSProperties, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PanelElement = "section" | "article" | "div" | "aside";

export interface PanelProps {
  children: ReactNode;
  className?: string;
  /** Renders as this element. Use `section` for landmark regions. */
  as?: PanelElement;
  /**
   * Position in the page-load stagger. Panels resolve top-to-bottom in one
   * orchestrated pass; omit to render immediately.
   */
  index?: number;
  /** Removes the default inner padding for edge-to-edge content. */
  flush?: boolean;
  id?: string;
  "aria-labelledby"?: string;
}

const STAGGER_STEP_MS = 60;

/**
 * The single surface primitive. Every block on the dashboard sits in one of
 * these so elevation, border, and radius are decided in exactly one place.
 */
export function Panel({
  children,
  className,
  as = "div",
  index,
  flush = false,
  ...rest
}: PanelProps) {
  const Component = as as ElementType;
  const style =
    index === undefined
      ? undefined
      : ({ "--rise-delay": `${index * STAGGER_STEP_MS}ms` } as CSSProperties);

  return (
    <Component
      {...rest}
      style={style}
      className={cn(
        "border-brand-line bg-brand-surface rounded-xl border",
        !flush && "p-5 sm:p-6",
        index !== undefined && "rise",
        className,
      )}
    >
      {children}
    </Component>
  );
}
