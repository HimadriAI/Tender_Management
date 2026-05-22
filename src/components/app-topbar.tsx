import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell, Search, Plus, Moon, Sun, FileText, FileSignature, ListChecks } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NOTIFICATIONS } from "@/lib/mock-data";
import tuamanLogo from "@/assets/logo-tuaman.png";
import { useEffect, useState } from "react";

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/tenders": "Live Tenders",
  "/offers": "Live Offers",
  "/tasks": "Tasks",
  "/calendar": "Calendar",
  "/documents": "Forms & Document Repository",
  "/reports": "Reports & Analytics",
  "/team": "Team Management",
  "/notifications": "Notifications",
  "/settings": "Settings",
  "/profile": "Profile",
};

export function AppTopbar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  const unread = NOTIFICATIONS.filter((n) => n.unread).length;
  const title = TITLES[pathname] ?? "Workspace";

  return (
    <header className="sticky top-0 z-30 h-16 border-b bg-card/85 backdrop-blur-xl">
      <div className="flex h-full items-center gap-3 px-4 lg:px-6">
        <SidebarTrigger className="text-foreground/70" />

        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Workspace</span>
          <span className="font-semibold" style={{ fontFamily: "Sora, Inter" }}>{title}</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tenders, offers, tasks, people…"
              className="w-[320px] lg:w-[420px] h-9 pl-9 bg-secondary/60 border-transparent focus-visible:ring-1"
            />
            <kbd className="hidden lg:inline-flex absolute right-2 top-1/2 -translate-y-1/2 items-center rounded border bg-card px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">⌘K</kbd>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-brand-gradient text-brand-foreground hover:opacity-95 gap-1.5">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Create</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/tenders"><FileText className="h-4 w-4 mr-2" />New Tender</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/offers"><FileSignature className="h-4 w-4 mr-2" />New Offer</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/tasks"><ListChecks className="h-4 w-4 mr-2" />New Task</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative" aria-label="Notifications">
                <Bell className="h-4 w-4" />
                {unread > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 rounded-full bg-brand text-brand-foreground text-[10px] font-semibold grid place-items-center px-1">
                    {unread}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[360px] p-0">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="font-semibold text-sm">Notifications</div>
                <Link to="/notifications" className="text-xs text-brand hover:underline">View all</Link>
              </div>
              <div className="max-h-[360px] overflow-auto divide-y">
                {NOTIFICATIONS.slice(0, 5).map((n) => (
                  <div key={n.id} className={`p-3 text-sm hover:bg-accent transition ${n.unread ? "bg-brand/5" : ""}`}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium truncate">{n.title}</div>
                      <span className="text-[10px] text-muted-foreground shrink-0">{n.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{n.body}</p>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
