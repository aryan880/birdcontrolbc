import Link from "next/link";

import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  currentClassName?: string;
  linkClassName?: string;
};

export function Breadcrumbs({
  items,
  className,
  currentClassName,
  linkClassName,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("overflow-x-auto", className)}>
      <ol className="flex min-h-10 items-center gap-2 whitespace-nowrap text-sm text-brand-slate">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-2 py-1 transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime",
                    linkClassName
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast ? "font-semibold text-brand-navy" : "px-2 py-1",
                    isLast && currentClassName
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
