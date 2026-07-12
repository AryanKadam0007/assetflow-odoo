import React from 'react';

export const Badge = ({ children, className = '', variant = 'default' }: { children: React.ReactNode; className?: string; variant?: 'default' | 'success' | 'warning' | 'danger' | string }) => {
  const baseStyle = "px-2.5 py-0.5 rounded-full text-xs font-semibold inline-flex items-center";
  const variants: Record<string, string> = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-rose-100 text-rose-800",
  };
  return (
    <span className={`${baseStyle} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
