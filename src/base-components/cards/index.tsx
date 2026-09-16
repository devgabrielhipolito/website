import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";
import { Text } from "../text";
import { LucideIcon } from "lucide-react";

const variants = cva("", {
  variants: {
    base: {},
    variant: {
      default:
        "w-full md:w-[488px] px-[15px] py-4 p-8 flex bg-near-black flex-col  border border-primary gap-4 sm:gap-6 rounded-lg",
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
    rightIcon?: LucideIcon;
  };

export const Card: FC<CardProps> = ({
  variant = "default",
  bg,
  className,
  children,
  title,
  rightIcon: Icon,
  ...rest
}) => {
  return (
    <div className={cn(variants({ variant, bg }), className)} {...rest}>
      {title && (
        <div>
          <Text>{title}</Text>
          {Icon && <Icon size={18} />}
        </div>
      )}
      {children}
    </div>
  );
};
