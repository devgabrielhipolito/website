import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";

const textVariants = cva("", {
  variants: {
    base: {},
    variant: {
      default: "text-base",
      heading: "text-5xl font-bold",
      subheading: "text-2xl font-semibold",
      body: "text-base",
      caption: "text-sm text-red-200 ",
      error: "text-sm text-red-500",
    },
    weight: {
      normal: "font-normal",
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
  className = "text-amber-950",
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
