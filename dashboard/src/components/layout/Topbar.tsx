import { Bell, Search, Menu } from 'lucide-react';

export function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-border sticky top-0 z-20">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-muted-foreground hover:text-foreground">
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search assets, reports, or intelligence..." 
            className="w-full pl-9 pr-4 py-2 bg-secondary border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-destructive border-2 border-card"></span>
        </button>
      </div>
    </header>
  );
}
