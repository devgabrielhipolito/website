import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";

const variants = cva("", {
  variants: {
    base: {},
    variant: {
      default: "w-full flex flex-col  border-white/10  gap-6",
    },
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
  className,
  children,
  title,
  ...rest
}) => {
  return (
    <div className={cn(variants({ variant }), className)} {...rest}>
      <h2 className="text-5xl ">{title}</h2>
      {children}
    </div>
  );
};
