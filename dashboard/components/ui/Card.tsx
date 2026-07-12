import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  title,
  action,
  className = '' 
}: { 
  children?: React.ReactNode; 
  title?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) => (
  <div className={`p-4 border-b border-slate-100 flex justify-between items-center ${className}`}>
    <div>
      {title && (typeof title === 'string' ? <CardTitle>{title}</CardTitle> : title)}
      {children}
    </div>
    {action && <div>{action}</div>}
  </div>
);

export const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-bold text-slate-800 ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
