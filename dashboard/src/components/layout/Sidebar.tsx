import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  LogOut,
  Boxes,
  Users
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Intelligence', path: '/intelligence', icon: Lightbulb },
  ];

  const bottomNavItems = [
    { name: 'Settings', path: '#', icon: Settings },
    { name: 'Logout', path: '#', icon: LogOut },
  ];

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-card border-r border-border">
      {/* Brand */}
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <Boxes className="h-5 w-5 text-primary" />
          </div>
          AssetFlow
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
          Overview
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={twMerge(
                clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User / Bottom Nav */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 mb-4">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground leading-none">Jane Doe</span>
            <span className="text-xs text-muted-foreground mt-1">Executive</span>
          </div>
        </div>
        <nav className="space-y-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
