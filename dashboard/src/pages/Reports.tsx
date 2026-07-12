import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend
} from 'recharts';
import { Download, Filter, FileSpreadsheet, Printer } from 'lucide-react';

const utilizationData = [
  { month: 'Jan', utilization: 65, maintenance: 12 },
  { month: 'Feb', utilization: 72, maintenance: 15 },
  { month: 'Mar', utilization: 85, maintenance: 10 },
  { month: 'Apr', utilization: 82, maintenance: 18 },
  { month: 'May', utilization: 90, maintenance: 8 },
  { month: 'Jun', utilization: 95, maintenance: 5 },
];

const departmentData = [
  { name: 'Engineering', value: 400, color: '#3b82f6' },
  { name: 'Marketing', value: 300, color: '#10b981' },
  { name: 'Sales', value: 300, color: '#f59e0b' },
  { name: 'HR', value: 200, color: '#8b5cf6' },
];

const idleAssets = [
  { id: 'LAP-089', name: 'Dell Latitude 5520', department: 'Sales', daysIdle: 45, value: '$1,200' },
  { id: 'MON-102', name: 'LG 27" 4K Monitor', department: 'Engineering', daysIdle: 32, value: '$450' },
  { id: 'TAB-004', name: 'iPad Pro 12.9"', department: 'Marketing', daysIdle: 28, value: '$1,100' },
  { id: 'CAM-012', name: 'Sony A7III Camera', department: 'Marketing', daysIdle: 21, value: '$2,500' },
];

export function Reports() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Advanced Reports</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive analytics and data visualization across your fleet.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-sm">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
            <Download className="h-4 w-4" /> Export PDF
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-border">
        {['overview', 'utilization', 'lifecycle'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium capitalize border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Utilization Trend Chart */}
        <div className="glass-card p-6 lg:col-span-2 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground">Asset Utilization vs Maintenance</h3>
            <p className="text-sm text-muted-foreground">6-month trend analysis</p>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={utilizationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 600 }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Area type="monotone" name="Utilization %" dataKey="utilization" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" name="Maintenance Events" dataKey="maintenance" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Allocation */}
        <div className="glass-card p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground">Department Allocation</h3>
            <p className="text-sm text-muted-foreground">Distribution by value</p>
          </div>
          <div className="flex-1 min-h-[300px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-full grid grid-cols-2 gap-3 mt-4">
              {departmentData.map((dept) => (
                <div key={dept.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }} />
                  <span className="text-xs font-medium">{dept.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Idle Assets List */}
      <div className="glass-card flex flex-col">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Top Idle Assets</h3>
            <p className="text-sm text-muted-foreground">Assets unused for &gt; 20 days</p>
          </div>
          <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
            <FileSpreadsheet className="h-4 w-4" /> Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-secondary/50">
              <tr>
                <th className="px-6 py-3 font-medium">Asset ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Department</th>
                <th className="px-6 py-3 font-medium">Days Idle</th>
                <th className="px-6 py-3 font-medium">Est. Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {idleAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">{asset.id}</td>
                  <td className="px-6 py-4 font-medium">{asset.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{asset.department}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600">
                      {asset.daysIdle} Days
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{asset.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
