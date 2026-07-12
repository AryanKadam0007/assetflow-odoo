export interface Insight {
  id: string;
  title: string;
  description: string;
  type?: string;
}

export interface Recommendation {
  id: string;
  assetId: string;
  assetName?: string;
  action?: string;
  type: 'repair' | 'replace' | 'procure';
  reason?: string;
  confidence?: number;
  confidenceScore?: number;
  estimatedCost?: number | string;
  roi?: number | string;
}
