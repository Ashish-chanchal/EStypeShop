import React from "react";
import { Link } from "react-router-dom";
import LogoMark from "../../assets/brand-svg/logo-mark.svg";

const Logo = ({ className = "" }) => (
  <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="EStyle Shop home">
    <img src={LogoMark} alt="" className="h-9 w-9" />
    <span className="font-display text-xl font-extrabold tracking-tight">
      EStyle<span className="text-primary">Shop</span>
    </span>
  </Link>
);

export default Logo;
