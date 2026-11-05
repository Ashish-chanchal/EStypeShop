import React from "react";
import { Link } from "react-router-dom";

const variants = { primary: "btn-primary", dark: "btn-dark", ghost: "btn-ghost", light: "btn-light" };

const Button = ({ text, children, to, variant = "primary", className = "", handler, ...rest }) => {
  const cls = `${variants[variant] || variants.primary} ${className}`;
  const content = children || text;
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  return <button onClick={handler} className={cls} {...rest}>{content}</button>;
};

export default Button;
