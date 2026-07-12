import React from 'react';
import { Insight } from '../../types';

export const InsightCards = ({ insights, loading }: { insights?: Insight[]; loading?: boolean }) => {
  if (loading) return <div>Loading insights...</div>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {insights?.map(insight => (
        <div key={insight.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800">{insight.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{insight.description}</p>
        </div>
      ))}
    </div>
  );
};
