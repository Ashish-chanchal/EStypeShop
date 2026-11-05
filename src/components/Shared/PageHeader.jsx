import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const PageHeader = ({ title, eyebrow, description, crumbs = [] }) => (
  <div className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white pt-24 dark:border-white/5 dark:from-ink-800 dark:to-ink-900">
    <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    <div className="container relative py-12 sm:py-16">
      <nav className="mb-4 flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link>
        {crumbs.map((c) => (
          <React.Fragment key={c.label}>
            <FiChevronRight />
            {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-ink-900 dark:text-white">{c.label}</span>}
          </React.Fragment>
        ))}
      </nav>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
      {description && <p className="mt-3 max-w-xl text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  </div>
);

export default PageHeader;
