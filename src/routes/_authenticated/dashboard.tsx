import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  FileText, FileSignature, Trophy, XCircle, Clock, AlertTriangle,
  TrendingUp, Activity, ArrowUpRight, Users2, Calendar as CalendarIcon, Sparkles,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip as RTooltip, XAxis, YAxis,
} from "recharts";
import { TENDERS, OFFERS, TASKS, TEAM, userById, tenderStatusColor, priorityColor } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_authenticated/dashboard")({ component: DashboardPage });

function useCounter(target: number, duration = 1200) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

const pipelineData = [
  { m: "Dec", value: 180 }, { m: "Jan", value: 240 }, { m: "Feb", value: 310 },
  { m: "Mar", value: 280 }, { m: "Apr", value: 420 }, { m: "May", value: 512 },
];
const sectorData = [
  { name: "O&G", value: 58 }, { name: "Fertilizer", value: 22 },
  { name: "Power", value: 12 }, { name: "Petrochem", value: 8 },
];
const workloadData = TEAM.slice(0, 6).map((t) => ({
  name: t.name.split(" ")[0],
  active: TASKS.filter((x) => x.assignee === t.id && x.status !== "Completed").length,
  done: TASKS.filter((x) => x.assignee === t.id && x.status === "Completed").length,
}));

const COLORS = ["oklch(0.24 0.07 264)", "oklch(0.45 0.12 250)", "oklch(0.58 0.22 27)", "oklch(0.65 0.04 257)"];

function StatCard({ icon: Icon, label, value, delta, accent }: {
  icon: typeof FileText; label: string; value: number; delta: string; accent?: "navy" | "brand" | "blue" | "amber";
}) {
  const n = useCounter(value);
  const accentClasses =
    accent === "brand" ? "bg-brand/10 text-brand"
    : accent === "blue" ? "bg-blue-500/10 text-blue-600 dark:text-blue-300"
    : accent === "amber" ? "bg-amber-500/10 text-amber-600 dark:text-amber-300"
    : "bg-navy/10 text-navy";
  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className={`h-10 w-10 rounded-lg grid place-items-center ${accentClasses}`}>
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="outline" className="text-[10px] font-medium gap-1">
            <ArrowUpRight className="h-3 w-3" />{delta}
          </Badge>
        </div>
        <div className="mt-4 text-3xl font-bold tracking-tight" style={{ fontFamily: "Sora, Inter" }}>{n}</div>
        <div className="text-xs text-muted-foreground mt-1">{label}</div>
      </CardContent>
    </Card>
  );
}

function DashboardPage() {
  const { user } = useAuth();

  const liveTenders = TENDERS.filter((t) => !["Won", "Lost"].includes(t.status)).length;
  const liveOffers = OFFERS.filter((o) => !["Accepted", "Rejected"].includes(o.status)).length;
  const won = TENDERS.filter((t) => t.status === "Won").length + OFFERS.filter((o) => o.status === "Accepted").length;
  const lost = TENDERS.filter((t) => t.status === "Lost").length + OFFERS.filter((o) => o.status === "Rejected").length;
  const pending = TENDERS.filter((t) => t.status === "Draft" || t.status === "Under Review").length;
  const delayed = TASKS.filter((t) => t.status === "Delayed").length;
  const upcoming = TENDERS
    .filter((t) => new Date(t.dueDate).getTime() > Date.now())
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-navy-gradient text-navy-foreground p-6 lg:p-8 shadow-elevated">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-navy-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> {user?.role === "manager" ? "Executive overview" : "My workspace"}
            </div>
            <h1 className="mt-2 text-3xl lg:text-4xl font-bold" style={{ fontFamily: "Sora, Inter" }}>
              Good to see you, {user?.name.split(" ")[0]}.
            </h1>
            <p className="mt-2 text-navy-foreground/70 max-w-2xl text-sm lg:text-base">
              You have <span className="text-brand font-semibold">{pending}</span> tenders pending submission and{" "}
              <span className="text-brand font-semibold">{delayed}</span> delayed tasks today.
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-brand-gradient text-brand-foreground hover:opacity-95">
              <Link to="/tenders">View live tenders</Link>
            </Button>
            <Button asChild variant="outline" className="border-navy-foreground/20 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground bg-transparent">
              <Link to="/tasks">My tasks</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard icon={FileText} label="Total Live Tenders" value={liveTenders} delta="+12%" accent="navy" />
        <StatCard icon={FileSignature} label="Total Live Offers" value={liveOffers} delta="+8%" accent="blue" />
        <StatCard icon={Trophy} label="Won Opportunities" value={won} delta="+24%" accent="navy" />
        <StatCard icon={XCircle} label="Lost Opportunities" value={lost} delta="-3%" accent="brand" />
        <StatCard icon={Clock} label="Pending Submissions" value={pending} delta="-2%" accent="amber" />
        <StatCard icon={AlertTriangle} label="Delayed Tasks" value={delayed} delta="+1" accent="brand" />
        <StatCard icon={Users2} label="Active Team Members" value={TEAM.length} delta="+1" accent="navy" />
        <StatCard icon={TrendingUp} label="Revenue Pipeline (Cr)" value={1248} delta="+18%" accent="blue" />
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Revenue pipeline</CardTitle>
              <CardDescription>Estimated value across active tenders & offers (Cr.)</CardDescription>
            </div>
            <Badge variant="outline" className="gap-1"><TrendingUp className="h-3 w-3 text-brand" /> +18% MoM</Badge>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={pipelineData}>
                <defs>
                  <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.58 0.22 27)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="oklch(0.58 0.22 27)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.015 255)" />
                <XAxis dataKey="m" stroke="oklch(0.5 0.03 257)" fontSize={12} />
                <YAxis stroke="oklch(0.5 0.03 257)" fontSize={12} />
                <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.9 0.015 255)" }} />
                <Area type="monotone" dataKey="value" stroke="oklch(0.58 0.22 27)" strokeWidth={2.5} fill="url(#pipe)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Sector mix</CardTitle>
            <CardDescription>Active pipeline by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={sectorData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                  {sectorData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.9 0.015 255)" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {sectorData.map((s, i) => (
                <div key={s.name} className="flex items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                  <span className="text-muted-foreground flex-1">{s.name}</span>
                  <span className="font-semibold">{s.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workload + deadlines + activity */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Team workload</CardTitle>
            <CardDescription>Active vs completed this month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={workloadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.015 255)" />
                <XAxis dataKey="name" fontSize={11} stroke="oklch(0.5 0.03 257)" />
                <YAxis fontSize={11} stroke="oklch(0.5 0.03 257)" />
                <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.9 0.015 255)" }} />
                <Bar dataKey="active" fill="oklch(0.24 0.07 264)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="done" fill="oklch(0.58 0.22 27)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Upcoming deadlines</CardTitle>
              <CardDescription>Next 5 submissions</CardDescription>
            </div>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-3">
            {upcoming.map((t) => {
              const days = Math.max(0, Math.ceil((new Date(t.dueDate).getTime() - Date.now()) / 86400000));
              return (
                <div key={t.id} className="flex items-center justify-between gap-3 group">
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium truncate group-hover:text-brand transition">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.customer} · {t.id}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-sm font-semibold ${days <= 3 ? "text-destructive" : "text-foreground"}`}>{days}d</div>
                    <div className="text-[10px] text-muted-foreground">{new Date(t.dueDate).toLocaleDateString()}</div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Activity feed</CardTitle>
              <CardDescription>Realtime team updates</CardDescription>
            </div>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { who: "u-002", what: "uploaded BOQ_Rev3.xlsx to", target: "T-2026-003", time: "2m" },
              { who: "u-001", what: "approved estimate for", target: "T-2026-001", time: "14m" },
              { who: "u-005", what: "completed subtask on", target: "TSK-1002", time: "1h" },
              { who: "u-004", what: "commented on", target: "TSK-1008", time: "2h" },
              { who: "u-006", what: "submitted bid for", target: "T-2026-003", time: "Yesterday" },
            ].map((a, i) => {
              const u = userById(a.who);
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-brand-gradient grid place-items-center text-brand-foreground text-[10px] font-semibold shrink-0">
                    {u?.initials}
                  </div>
                  <div className="flex-1 text-sm">
                    <div><span className="font-medium">{u?.name}</span> <span className="text-muted-foreground">{a.what}</span> <span className="font-medium text-brand">{a.target}</span></div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{a.time} ago</div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Recent tenders table */}
      <Card className="shadow-card">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Recent tenders</CardTitle>
            <CardDescription>Most recently updated bids</CardDescription>
          </div>
          <Button asChild variant="outline" size="sm"><Link to="/tenders">View all</Link></Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-4 py-3">Tender</th>
                  <th className="text-left font-medium px-4 py-3">Customer</th>
                  <th className="text-left font-medium px-4 py-3">Value</th>
                  <th className="text-left font-medium px-4 py-3">Due</th>
                  <th className="text-left font-medium px-4 py-3">Priority</th>
                  <th className="text-left font-medium px-4 py-3">Status</th>
                  <th className="text-left font-medium px-4 py-3">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {TENDERS.slice(0, 5).map((t) => (
                  <tr key={t.id} className="hover:bg-accent/50 transition">
                    <td className="px-4 py-3">
                      <div className="font-medium truncate max-w-[260px]">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.id} · {t.sector}</div>
                    </td>
                    <td className="px-4 py-3">{t.customer}</td>
                    <td className="px-4 py-3 font-semibold">₹ {t.estimateValue} Cr</td>
                    <td className="px-4 py-3 whitespace-nowrap">{new Date(t.dueDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3"><Badge variant="outline" className={priorityColor(t.priority)}>{t.priority}</Badge></td>
                    <td className="px-4 py-3"><Badge variant="outline" className={tenderStatusColor(t.status)}>{t.status}</Badge></td>
                    <td className="px-4 py-3 w-[140px]"><Progress value={t.status === "Won" ? 100 : t.status === "Submitted" ? 90 : t.status === "Under Review" ? 60 : 30} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
