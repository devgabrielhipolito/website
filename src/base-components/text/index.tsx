import { ElementType, FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";

const textVariants = cva("text-wrap max-w-[90%] text-snow-white", {
  variants: {
    variant: {
      default: "text-base sm:text-lg md:text-[17px] lg:text-[19.61px]",
      heading: "text-4xl font-bold md:text-6xl lg:text-7xl",
      subheading: "text-3xl w-full  font-semibold md:text-5xl xl:text-6xl",
      body: "lg:text-2xl text-1xl",
      caption: "text-sm font-light text-slate-gray",
    },
    weight: {
      normal: "font-normal",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    size: {
      lg: "text-4xl",
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

interface TextProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: ElementType;
  children: React.ReactNode;
}

export const Text: FC<TextProps> = ({
  variant,
  weight,
  align,
  children,
  size,
  className,
  as: Component = "p",
  ...props
}) => {
  return (
    <Component
      {...props}
      className={cn(textVariants({ variant, weight, size, align }), className)}>
      {children}
    </Component>
  );
};
