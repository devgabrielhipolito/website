import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const variants = cva("", {
  variants: {
    display: {
      flex: "flex",
      block: "block",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    weight: {
      full: "w-full",
      auto: "w-auto",
    },
    height: {
      auto: "h-auto",
      full: "h-full",
      screen: "h-full",
      dvh: "h-dvh",
      min: "min-h-screen",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    space: {
      between: "justify-between",
      center: "items-center",
      "between-center": "justify-between items-center",
    },
    borderColor: {
      default: "border-white/10",
    },
    border: {
      none: "",
      "bottom-t": "border-b",
      "bottom-tb": "border-b border-t",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
    },
    bg: {
      none: "",
      main: "bg-main",
    },
    maxWidth: {
      none: "",
      sm: "max-w-screen-sm mx-auto",
      md: "max-w-screen-md mx-auto",
      lg: "max-w-screen-lg mx-auto",
      xl: "max-w-[90%] mx-auto",
      "2xl": "max-w-screen-2xl mx-auto",
    },
  },
  defaultVariants: {
    display: "flex",
    direction: "column",
    padding: "sm",
    weight: "full",
    height: "screen",
    border: "none",
    borderColor: "default",
    bg: "none",
    maxWidth: "xl",
  },
});

type SectionProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants> & {
    title?: string;
  };

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      display,
      direction,
      title,
      weight,
      height,
      space,
      padding,
      border,
      borderColor,
      bg,
      gap,
      maxWidth,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={variants({
          display,
          direction,
          weight,
          height,
          padding,
          space,
          border,
          borderColor,
          bg,
          gap,
          maxWidth,
          className,
        })}
        {...rest}
      >
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
