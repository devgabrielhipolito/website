import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";

const variants = cva("", {
  variants: {
    base: {},
    variant: {
      default:
        "w-full md:w-[420px]    px-[15px] py-4 flex flex-col bg-black border-white/10 gap-4 sm:gap-6 rounded-lg",
    },
    bg: { primary: "bg-primary", "near-black": "bg-near-black" },
    defaultVariants: {
      variant: "default",
    },
  },
});

type CardProps = VariantProps<typeof variants> &
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    title?: string;
  };

export const Card: FC<CardProps> = ({
  variant,
  bg,
  className,
  children,
  title,
  ...rest
}) => {
  return (
    <div className={cn(variants({ variant, bg }), className)} {...rest}>
      <h2 className="text-5xl ">{title}</h2>
      {children}
    </div>
  );
};
