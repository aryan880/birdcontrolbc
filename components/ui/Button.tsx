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
    "border border-brand-limeSoft/80 bg-gradient-to-b from-[#ecff9f] to-brand-lime text-brand-navy shadow-[0_18px_42px_rgba(169,216,79,0.3)] hover:from-[#f4ffbe] hover:to-brand-limeSoft",
  light:
    "border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-white/16",
  dark: "border border-brand-blue bg-brand-navy text-white shadow-[0_12px_28px_rgba(7,23,44,0.22)] hover:bg-brand-blue",
  outline:
    "border border-brand-line bg-white text-brand-navy shadow-soft hover:bg-brand-mist",
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
        "hover-glow inline-flex min-h-[3.2rem] items-center justify-center rounded-[1.15rem] px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base",
        buttonStyles[variant],
        className
      )}
    >
      {children}
    </SmartLink>
  );
}
