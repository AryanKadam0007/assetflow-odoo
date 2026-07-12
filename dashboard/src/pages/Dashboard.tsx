import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Wrench, 
  AlertTriangle,
  Plus,
  FileText,
  CalendarDays,
  ArrowRightLeft,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const kpis = [
  {
    title: 'Total Assets',
    value: '12,450',
    change: '+12%',
    trend: 'up',
    icon: Package,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Asset Value',
    value: '$4.2M',
    change: '+5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Pending Maintenance',
    value: '142',
    change: '-2%',
    trend: 'down',
    icon: Wrench,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    title: 'Critical Alerts',
    value: '18',
    change: '+4',
    trend: 'up',
    icon: AlertTriangle,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  }
];

const quickActions = [
  { name: 'Add Asset', icon: Plus, color: 'bg-primary text-primary-foreground hover:bg-primary/90' },
  { name: 'Generate Report', icon: FileText, color: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border' },
  { name: 'Schedule Maintenance', icon: CalendarDays, color: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border' },
  { name: 'Initiate Transfer', icon: ArrowRightLeft, color: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border' },
];

const alerts = [
  { id: 1, type: 'warning', title: 'Overdue Return', description: 'MacBook Pro 16" (AF-1042) is 3 days overdue.', time: '2 hours ago' },
  { id: 2, type: 'critical', title: 'Maintenance Required', description: 'Industrial Printer (PR-009) engine failure reported.', time: '5 hours ago' },
  { id: 3, type: 'info', title: 'Upcoming Booking', description: 'Conference Room A booked for "Q3 Planning".', time: 'Tomorrow, 9:00 AM' },
];

const activities = [
  { id: 1, user: 'John Doe', action: 'approved transfer of', item: 'Dell XPS 15', time: '10 min ago', status: 'success' },
  { id: 2, user: 'Alice Smith', action: 'requested maintenance for', item: 'HVAC Unit 4', time: '1 hour ago', status: 'pending' },
  { id: 3, user: 'System', action: 'generated report', item: 'Q2 Asset Utilization', time: '3 hours ago', status: 'info' },
];

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Executive Overview</h1>
          <p className="text-muted-foreground mt-1">
            Real-time insights across your enterprise asset ecosystem.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button 
                key={action.name}
                className={twMerge("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm", action.color)}
              >
                <Icon className="h-4 w-4" />
                {action.name}
              </button>
            )
          })}
        </div>
      </div>
      
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          const isPositive = kpi.trend === 'up';
          return (
            <div key={kpi.title} className="glass-card p-6 flex flex-col gap-4 group hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start">
                <div className={twMerge("p-3 rounded-xl", kpi.bg)}>
                  <Icon className={twMerge("h-6 w-6", kpi.color)} />
                </div>
                <div className={twMerge(
                  "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full",
                  isPositive ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                )}>
                  {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {kpi.change}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground tracking-tight">{kpi.value}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">{kpi.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts & Inbox */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Action Required</h2>
            <button className="text-sm text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="p-2 flex-1 overflow-y-auto">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 hover:bg-secondary/50 rounded-lg transition-colors flex gap-4 items-start cursor-pointer group">
                <div className={twMerge(
                  "p-2 rounded-full mt-0.5",
                  alert.type === 'critical' ? 'bg-rose-500/10 text-rose-600' :
                  alert.type === 'warning' ? 'bg-amber-500/10 text-amber-600' :
                  'bg-blue-500/10 text-blue-600'
                )}>
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{alert.description}</p>
                  <span className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {alert.time}
                  </span>
                </div>
                <button className="px-3 py-1.5 text-xs font-semibold rounded-md border border-border hover:bg-secondary transition-colors">
                  Resolve
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
            <button className="text-sm text-primary font-medium hover:underline">View Log</button>
          </div>
          <div className="p-6 flex-1">
            <div className="relative border-l-2 border-border ml-3 space-y-8">
              {activities.map((activity) => (
                <div key={activity.id} className="relative pl-6">
                  <div className={twMerge(
                    "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-card",
                    activity.status === 'success' ? 'bg-emerald-500' :
                    activity.status === 'pending' ? 'bg-amber-500' : 'bg-blue-500'
                  )} />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">{activity.user}</span>{' '}
                      <span className="text-muted-foreground">{activity.action}</span>{' '}
                      <span className="font-semibold text-foreground">{activity.item}</span>
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
