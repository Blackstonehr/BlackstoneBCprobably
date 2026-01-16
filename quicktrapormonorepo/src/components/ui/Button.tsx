import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  children: React.ReactNode;
};

type ButtonProps = ButtonBaseProps & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-lg hover:shadow-brand-accent/20 border border-transparent",
    secondary: "bg-white text-graphite hover:bg-gray-50 shadow-sm border border-gray-200",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-graphite",
    ghost: "bg-transparent text-brand-accent hover:bg-brand-accent/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // Check if it's an external link
    if (href.startsWith("http")) {
      return (
        <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    // Internal link
    return (
      <Link to={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
