import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-accent text-snow hover:bg-accent-strong",
        secondary: "bg-graphite text-snow shadow-card hover:shadow-card-hover",
        ghost: "bg-transparent text-platinum hover:text-snow",
        quiet: "bg-raised text-snow hover:bg-line",
      },
      size: {
        sm: "h-10 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function buttonClass({
  variant,
  size,
  className,
}: VariantProps<typeof buttonVariants> & { className?: string }) {
  return cn(buttonVariants({ variant, size }), className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClass({ variant, size, className })} {...props} />;
}
