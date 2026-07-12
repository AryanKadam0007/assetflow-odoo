import React, { useEffect, useState } from 'react';
import { notificationApi, type ActivityLog, type Notification } from '../../api/api';
import { Loader2, RefreshCw } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'All' | 'Alerts' | 'Approvals' | 'Bookings'>('All');

  const load = async () => {
    setLoading(true);
    const [notifs, activity] = await Promise.all([
      notificationApi.getAll().catch(() => []),
      notificationApi.getLogs().catch(() => []),
    ]);
    setNotifications(notifs);
    setLogs(activity);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const notificationItems = notifications.map(notification => ({
    id: notification.id,
    type: notification.title.toLowerCase().includes('booking') ? 'Bookings' : notification.title.toLowerCase().includes('maintenance') || notification.title.toLowerCase().includes('approval') ? 'Approvals' : 'Alerts',
    title: notification.title,
    subtitle: notification.message,
    time: new Date(notification.createdAt).toLocaleString(),
    color: notification.isRead ? 'bg-slate-400' : 'bg-primary-500',
  }));

  const dynamicLogs = logs.map(log => ({
    id: log.id,
    type: log.action.includes('BOOK') ? 'Bookings' : log.action.includes('MAINTENANCE') || log.action.includes('APPROV') ? 'Approvals' : log.action.includes('AUDIT') ? 'Alerts' : 'All',
    title: log.description,
    subtitle: log.asset ? `Asset: ${log.asset.name}` : undefined,
    time: new Date(log.createdAt).toLocaleString(),
    color: 'bg-slate-400',
  }));

  const allItems = [...notificationItems, ...dynamicLogs];
  
  const filteredItems = activeTab === 'All' 
    ? allItems 
    : allItems.filter(item => item.type === activeTab);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Activity logs & Notifications</h2>
          <p className="text-sm text-slate-500">System events, approvals, and alerts.</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 text-sm bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-2 p-4 border-b border-slate-200 bg-slate-50 overflow-x-auto">
          {['All', 'Alerts', 'Approvals', 'Bookings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-primary-600 text-white shadow-sm' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="p-12 flex justify-center"><Loader2 className="animate-spin text-slate-400" /></div>
          ) : filteredItems.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">No activities found for this filter.</div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="flex items-start justify-between gap-3 p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3 min-w-0">
                  <div className={`mt-1.5 w-2.5 h-2.5 rounded-sm shrink-0 ${item.color}`}></div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-700">{item.title}</p>
                    {item.subtitle && <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>}
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400 shrink-0">{item.time}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

