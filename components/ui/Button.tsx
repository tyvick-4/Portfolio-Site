import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

type ButtonProps = CommonProps & (
  | ({ to: string; href?: never } & Omit<React.ComponentProps<typeof Link>, 'to' | 'className'>)
  | ({ href: string; to?: never } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>)
  | ({ to?: never; href?: never } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
);

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide rounded-lg border ' +
  'transition-all duration-250 ease-out hover:scale-105 active:scale-[0.98] cursor-pointer';

const sizes: Record<Size, string> = {
  md: 'px-7 py-3 text-small',
  lg: 'px-9 py-3.5 text-body',
};

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink border-transparent hover:bg-accent-hover hover:text-accent-ink hover:shadow-glow',
  secondary: 'bg-surface text-ink border-line hover:bg-surface-hover hover:text-ink',
  ghost: 'bg-transparent text-accent border-accent-border hover:bg-accent-soft hover:text-accent',
};

/** Design-system Button: primary (amber fill), secondary (surface), ghost (amber outline).
    Renders a router Link with `to`, an anchor with `href`, otherwise a button. */
const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...rest }) => {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if ('to' in rest && rest.to !== undefined) {
    return <Link {...(rest as React.ComponentProps<typeof Link>)} className={cls}>{children}</Link>;
  }
  if ('href' in rest && rest.href !== undefined) {
    return <a {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>{children}</a>;
  }
  return <button {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>{children}</button>;
};

export default Button;
