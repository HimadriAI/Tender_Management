import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard, FileText, FileSignature, ListChecks, Calendar, FolderOpen,
  BarChart3, Users, Building2, User2, Settings as SettingsIcon, LogOut, ChevronUp,
} from "lucide-react";
import tenderLogo from "@/assets/logo-tender-management.png";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

const PRIMARY = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Live Tenders", url: "/tenders", icon: FileText },
  { title: "Live Offers", url: "/offers", icon: FileSignature },
  { title: "Tasks", url: "/tasks", icon: ListChecks },
  { title: "Calendar", url: "/calendar", icon: Calendar },
];

const SECONDARY = [
  { title: "Forms Repository", url: "/documents", icon: FolderOpen },
  { title: "Reports & Analytics", url: "/reports", icon: BarChart3 },
  { title: "Team Management", url: "/team", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const isActive = (p: string) => pathname === p || pathname.startsWith(p + "/");

  const handleSignOut = () => {
    signOut();
    toast.success("Signed out");
    navigate({ to: "/login" });
  };

  const renderItem = (item: { title: string; url: string; icon: typeof Building2 }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.url}>
        <SidebarMenuButton
          asChild
          isActive={active}
          tooltip={item.title}
          className={
            active
              ? "bg-brand/15 text-navy-foreground hover:bg-brand/20 data-[active=true]:bg-brand/15 border-l-2 border-brand rounded-l-none"
              : "text-navy-foreground/75 hover:bg-sidebar-accent hover:text-navy-foreground"
          }
        >
          <Link to={item.url} className="flex items-center gap-3">
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span className="text-sm">{item.title}</span>}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="h-9 w-9 rounded-lg bg-white grid place-items-center shrink-0 shadow-elevated overflow-hidden">
            <img src={tenderLogo} alt="Tender Management" className="h-8 w-8 object-contain" />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-navy-foreground truncate" style={{ fontFamily: "Sora, Inter" }}>
                BD Platform
              </div>
              <div className="text-[10px] uppercase tracking-wider text-navy-foreground/50">Enterprise</div>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-navy-foreground/40">Workspace</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{PRIMARY.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-navy-foreground/40">Manage</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{SECONDARY.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex items-center gap-3 rounded-md p-2 hover:bg-sidebar-accent transition text-left">
                <div className="h-8 w-8 rounded-full bg-brand-gradient grid place-items-center text-brand-foreground text-xs font-semibold shrink-0">
                  {user.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                {!collapsed && (
                  <>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-navy-foreground truncate">{user.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-navy-foreground/50 truncate">
                        {user.role === "manager" ? "Business Manager" : "Team Member"}
                      </div>
                    </div>
                    <ChevronUp className="h-4 w-4 text-navy-foreground/60 shrink-0" />
                  </>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="w-56">
              <DropdownMenuLabel>
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="text-xs text-muted-foreground font-normal">{user.email}</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/profile"><User2 className="h-4 w-4 mr-2" />Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/settings"><SettingsIcon className="h-4 w-4 mr-2" />Settings</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive">
                <LogOut className="h-4 w-4 mr-2" />Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
