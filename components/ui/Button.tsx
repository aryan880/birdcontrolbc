import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "dark" | "outline";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const buttonStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "border border-brand-navy bg-brand-navy text-white shadow-[0_12px_26px_rgba(19,43,37,0.16)] hover:border-brand-blue hover:bg-brand-blue hover:shadow-[0_16px_30px_rgba(19,43,37,0.22)]",
  light:
    "border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-white/16 hover:border-white/28",
  dark: "border border-brand-navy bg-brand-navy text-white shadow-[0_12px_28px_rgba(19,43,37,0.18)] hover:bg-brand-blue",
  outline:
    "border border-brand-navy/30 bg-transparent text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      {...props}
      className={cn(
        "inline-flex min-h-[3.25rem] items-center justify-center rounded-none px-6 py-3 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base",
        buttonStyles[variant],
        className
      )}
    >
      {children}
    </SmartLink>
  );
}
