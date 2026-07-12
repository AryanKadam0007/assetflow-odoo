import { 
  Lightbulb, 
  TrendingUp, 
  Cpu, 
  Settings, 
  AlertCircle,
  Zap,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const insights = [
  {
    id: 1,
    title: 'Resource Optimization',
    message: 'Marketing has 12 idle laptops that can be reallocated to Engineering.',
    icon: Lightbulb,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    action: 'Reallocate Now'
  },
  {
    id: 2,
    title: 'Capacity Forecast',
    message: 'Engineering requires 8 more high-performance workstations next quarter based on hiring trends.',
    icon: TrendingUp,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    action: 'View Forecast'
  },
  {
    id: 3,
    title: 'Cost Alert',
    message: 'Printer AF-009 has exceeded its annual maintenance cost threshold by 15%.',
    icon: AlertCircle,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    action: 'Review Asset'
  },
  {
    id: 4,
    title: 'Vendor Intelligence',
    message: 'Dell assets outperform HP by 18% in terms of maintenance costs over a 5-year lifecycle.',
    icon: Zap,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    action: 'Compare Vendors'
  }
];

const vendorData = [
  { year: 'Year 1', Dell: 200, HP: 250, Lenovo: 220 },
  { year: 'Year 2', Dell: 350, HP: 480, Lenovo: 400 },
  { year: 'Year 3', Dell: 500, HP: 750, Lenovo: 600 },
  { year: 'Year 4', Dell: 700, HP: 1100, Lenovo: 850 },
  { year: 'Year 5', Dell: 950, HP: 1500, Lenovo: 1200 },
];

const repairVsReplace = {
  assetId: 'HVAC-402',
  name: 'Industrial HVAC Unit (Zone 4)',
  assetCost: '$12,500',
  currentMaintenanceCost: '$4,200',
  downtime: '48 hours',
  residualValue: '$1,800',
  expectedLifetimeLeft: '1.2 years',
  roiReplace: '+22%',
  recommendation: 'Replace'
};

export function Intelligence() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" fill="currentColor" fillOpacity={0.2} />
          Enterprise Intelligence
        </h1>
        <p className="text-muted-foreground mt-2">
          AI-driven predictive insights, ROI analysis, and strategic recommendations.
        </p>
      </div>
      
      {/* Actionable Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <div key={insight.id} className="glass-card p-5 flex gap-4 items-start group hover:border-primary/30 transition-all">
              <div className={`p-3 rounded-xl shrink-0 ${insight.bg}`}>
                <Icon className={`h-6 w-6 ${insight.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground text-base">{insight.title}</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {insight.message}
                </p>
                <button className="mt-3 text-sm font-semibold text-primary hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                  {insight.action} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Repair vs Replace Engine */}
        <div className="glass-card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">Recommendation Engine</h3>
              <p className="text-sm text-muted-foreground">Repair vs. Replace Analysis</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              High Confidence
            </span>
          </div>

          <div className="bg-secondary/50 rounded-xl p-5 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-foreground">{repairVsReplace.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">ID: {repairVsReplace.assetId}</p>
              </div>
              <div className="bg-rose-500/10 text-rose-600 px-3 py-1.5 rounded-md font-bold text-sm flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4" />
                {repairVsReplace.recommendation}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Asset Cost</p>
                <p className="font-semibold text-foreground mt-0.5">{repairVsReplace.assetCost}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Maint. Cost (YTD)</p>
                <p className="font-semibold text-rose-500 mt-0.5">{repairVsReplace.currentMaintenanceCost}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Downtime</p>
                <p className="font-semibold text-foreground mt-0.5">{repairVsReplace.downtime}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Residual Value</p>
                <p className="font-semibold text-emerald-500 mt-0.5">{repairVsReplace.residualValue}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Expected Life Left</p>
                <p className="font-semibold text-foreground mt-0.5">{repairVsReplace.expectedLifetimeLeft}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Proj. ROI (Replace)</p>
                <p className="font-semibold text-emerald-500 mt-0.5">{repairVsReplace.roiReplace}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg text-sm font-semibold border border-border hover:bg-secondary transition-colors">
              Schedule Repair
            </button>
            <button className="py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
              Initiate Procurement
            </button>
          </div>
        </div>

        {/* Vendor Performance (Lifecycle Cost) */}
        <div className="glass-card p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground">Vendor Performance</h3>
            <p className="text-sm text-muted-foreground">Cumulative Maintenance Cost over 5 Years</p>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vendorData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" tickFormatter={(val) => `$${val}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 600 }}
                  formatter={(value) => [`$${value}`, '']}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Line type="monotone" dataKey="Dell" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="HP" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Lenovo" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
