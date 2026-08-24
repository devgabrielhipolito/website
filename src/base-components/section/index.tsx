import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const variants = cva("", {
  variants: {
    variant: {},
    display: {
      flex: "flex",
    },
    padding: {
      sm: "p-4",
    },
    weight: { full: "w-full" },
    direction: {
      column: "flex-col",
    },
    space: { between: "justify-between" },
    borderColor: { defult: "border-white/10" },
    border: { "bottom-t": "border-b", "bottom-tb": "border-b border-t" },
    bg: { main: "bg-main" },
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
      variant,
      display,
      direction,
      title,
      weight = "full",
      space,
      padding = "sm",
      border,
      borderColor,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={variants({
          variant,
          display,
          direction,
          weight,
          padding,
          space,
          border,
          borderColor,
          className,
        })}
        {...rest}
      >
        <h1 className="text-title-page text-2xl mb-10">{title}</h1>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
