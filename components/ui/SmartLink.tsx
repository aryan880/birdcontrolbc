import Link from "next/link";

import { isInternalHref } from "@/lib/utils";

type SmartLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
