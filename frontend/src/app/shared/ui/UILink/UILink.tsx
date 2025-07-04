import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type UILinkProps = {
  className?: string;
  variant?: string;
  children?: ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
} & LinkProps;

export default function UILink({ className, children, ...props }: UILinkProps) {
  return (
    <Link className={`${className}`} target={props.target} passHref {...props}>
      {children || (
        <span
          className={`text-blue-500 transition-all hover:text-blue-400`}
        >{`${props.href}`}</span>
      )}
    </Link>
  );
}
