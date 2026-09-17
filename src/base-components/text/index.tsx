import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";

const textVariants = cva("text-wrap max-w-[90%]", {
  variants: {
    variant: {
      default: "text-base sm:text-lg lg:text-[19.61px] md:text-md",
      heading: "text-4xl font-bold md:text-6xl xl:text-7xl",
      subheading: "text-3xl font-semibold",
      body: "text-base",
      caption: "text-sm font-light text-slate-gray",
    },
    weight: {
      normal: "font-normal",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "normal",
    align: "left",
  },
});

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {};

export const Text: FC<TextProps> = ({
  variant,
  weight,
  align,
  children,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(textVariants({ variant, weight, align }), className)}>
      {children}
    </p>
  );
};
