import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} href={props.href} className="font-medium text-small">
      {props.children}
    </a>
  );
}
