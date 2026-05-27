import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { P as Progress } from "./progress-CyeiCNet.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-BlTkK7uB.js";
import { S as Sheet, j as SheetContent, l as SheetHeader, m as SheetTitle, k as SheetDescription } from "./index-Dbe9qrGJ.js";
import { D as Dialog, f as DialogTrigger, P as Paperclip, a as DialogContent, d as DialogHeader, e as DialogTitle, b as DialogDescription, T as Textarea, S as Select, i as SelectTrigger, j as SelectValue, g as SelectContent, h as SelectItem, c as DialogFooter } from "./textarea-CmcA5Djb.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { C as Checkbox } from "./checkbox-BA3gnYx-.js";
import { u as userById, c as TENDERS, p as priorityColor, t as taskStatusColor, a as TASK_STATUSES, b as TEAM, O as OFFERS } from "./mock-data-Bbx1JVsp.js";
import { u as useAuth, t as toast } from "./router-BE7VNx6U.js";
import { u as useTasks } from "./task-store-BT0hA9Mv.js";
import { P as Plus } from "./plus-fgNjA42J.js";
import { S as Search } from "./search-DPlBmtfY.js";
import { L as ListChecks } from "./list-checks-DNXu4r2r.js";
import { M as MessageSquare } from "./message-square-BKt4QDNA.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Brq_I10j.js";
import "./index-CQL5I3Uv.js";
import "./index-BNNqvDPE.js";
import "./index-CoTb1q3P.js";
import "./index-Bs4P9np0.js";
import "./index-CZkg40wL.js";
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
];
const SquareKanban = createLucideIcon("square-kanban", __iconNode$1);
const __iconNode = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
];
const TextAlignStart = createLucideIcon("text-align-start", __iconNode);
function tenderName(id) {
  if (!id) return null;
  const t = TENDERS.find((x) => x.id === id);
  return t ? `${t.id} · ${t.name}` : id;
}
function TasksPage() {
  const {
    user
  } = useAuth();
  const {
    tasks,
    addTask
  } = useTasks();
  const [q, setQ] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const [newOpen, setNewOpen] = reactExports.useState(false);
  const visible = reactExports.useMemo(() => {
    return tasks.filter((t) => {
      if (user?.role === "member" && t.assignee !== user.id) return false;
      if (q) {
        const s = q.toLowerCase();
        return t.title.toLowerCase().includes(s) || t.id.toLowerCase().includes(s) || (tenderName(t.linkedTo) ?? "").toLowerCase().includes(s);
      }
      return true;
    });
  }, [tasks, q, user]);
  const byTender = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    visible.forEach((t) => {
      if (!t.linkedTo) {
        if (user?.role === "member") return;
        const arr2 = map.get("__none__") ?? [];
        arr2.push(t);
        map.set("__none__", arr2);
        return;
      }
      const arr = map.get(t.linkedTo) ?? [];
      arr.push(t);
      map.set(t.linkedTo, arr);
    });
    return Array.from(map.entries());
  }, [visible, user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Tasks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Plan, assign and track work across tenders and offers." })
      ] }),
      user?.role === "manager" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: newOpen, onOpenChange: setNewOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-brand-gradient text-brand-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "New Task"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewTaskDialog, { onClose: () => setNewOpen(false), onCreate: (data) => {
          const created = addTask(data);
          toast.success(`Task created: ${created.id}`, {
            description: `Assigned to ${userById(created.assignee)?.name}`
          });
          setNewOpen(false);
        } })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search tasks…", className: "pl-9 h-10" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: user?.role === "member" ? "tenders" : "board", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "board", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SquareKanban, { className: "h-4 w-4 mr-2" }),
          "Kanban"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "list", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-4 w-4 mr-2" }),
          "List"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "timeline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 mr-2" }),
          "Timeline"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tenders", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "h-4 w-4 mr-2" }),
          "By Tender"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tenders", className: "mt-4 space-y-4", children: [
        byTender.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground p-6 text-center", children: "No tasks assigned to you yet." }),
        byTender.map(([tid, list]) => {
          const t = TENDERS.find((x) => x.id === tid);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t ? "Tender" : "Unlinked" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate", children: t ? t.name : "No linked tender" }),
                t && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  t.id,
                  " · ",
                  t.customer,
                  " · ",
                  t.location,
                  ", ",
                  t.state
                ] })
              ] }),
              t && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "shrink-0", children: [
                list.length,
                " task",
                list.length > 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y border rounded-md", children: list.map((tk) => {
              const u = userById(tk.assignee);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 hover:bg-accent/40 cursor-pointer", onClick: () => setSelected(tk), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center", children: u?.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: tk.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                    tk.id,
                    " · Due ",
                    new Date(tk.dueDate).toLocaleDateString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(tk.priority), children: tk.priority }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: taskStatusColor(tk.status), children: tk.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: tk.progress, className: "h-1.5" }) })
              ] }, tk.id);
            }) })
          ] }) }, tid);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "board", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", style: {
        gridTemplateColumns: `repeat(${TASK_STATUSES.length}, minmax(260px, 1fr))`
      }, children: TASK_STATUSES.map((col) => {
        const items = visible.filter((t) => t.status === col);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-2 py-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${col === "Delayed" ? "bg-destructive" : col === "Completed" ? "bg-navy" : col === "Under Review" ? "bg-blue-500" : col === "In Progress" ? "bg-amber-500" : "bg-slate-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider", children: col }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: items.length })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            items.map((t) => {
              const u = userById(t.assignee);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card hover:shadow-elevated cursor-pointer transition", onClick: () => setSelected(t), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: t.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${priorityColor(t.priority)}`, children: t.priority })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm leading-snug", children: t.title }),
                t.linkedTo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 text-[10px] text-brand", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "h-3 w-3" }),
                  t.linkedTo
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: t.progress, className: "h-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-[9px] font-semibold", title: u?.name, children: u?.initials }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(t.dueDate).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3" }),
                      t.comments
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-3 w-3" }),
                      t.attachments
                    ] })
                  ] })
                ] })
              ] }) }, t.id);
            }),
            items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground p-3 text-center border border-dashed rounded-md", children: "No tasks" })
          ] })
        ] }, col);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "list", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Task" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Assignee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Linked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Due" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Progress" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y", children: visible.map((t) => {
          const u = userById(t.assignee);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40 cursor-pointer", onClick: () => setSelected(t), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center", children: u?.initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: u?.name })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-brand", children: t.linkedTo ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: taskStatusColor(t.status), children: t.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(t.priority), children: t.priority }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap", children: new Date(t.dueDate).toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: t.progress }) })
          ] }, t.id);
        }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 space-y-3", children: visible.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()).map((t) => {
        const u = userById(t.assignee);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_1fr] gap-4 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-right text-muted-foreground whitespace-nowrap", children: new Date(t.dueDate).toLocaleDateString(void 0, {
            day: "2-digit",
            month: "short"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-md bg-secondary/40 border-l-2 border-brand cursor-pointer hover:bg-accent/40", onClick: () => setSelected(t), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center", children: u?.initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm truncate", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                t.id,
                " · ",
                u?.name
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: taskStatusColor(t.status), children: t.status })
          ] })
        ] }, t.id);
      }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "w-full sm:max-w-xl overflow-y-auto", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(TaskDetail, { task: selected }) }) })
  ] });
}
function TaskDetail({
  task
}) {
  const [subs, setSubs] = reactExports.useState(task.subtasks);
  const toggle = (id) => setSubs((arr) => arr.map((s) => s.id === id ? {
    ...s,
    done: !s.done
  } : s));
  const pct = subs.length === 0 ? task.progress : Math.round(subs.filter((s) => s.done).length / subs.length * 100);
  const u = userById(task.assignee);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "pr-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        task.id,
        task.linkedTo && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: task.linkedTo })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: task.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetDescription, { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextAlignStart, { className: "h-4 w-4 mt-0.5" }),
        task.description
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: taskStatusColor(task.status), children: task.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(task.priority), children: task.priority })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-md bg-secondary/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Assignee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center", children: u?.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", children: u?.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-md bg-secondary/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Due" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1", children: new Date(task.dueDate).toLocaleDateString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-md bg-secondary/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: pct, className: "h-1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", children: [
            pct,
            "%"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: [
        "Subtasks (",
        subs.filter((s) => s.done).length,
        "/",
        subs.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        subs.map((s) => {
          const su = userById(s.assignee);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-2.5 rounded-md hover:bg-accent/40 cursor-pointer border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: s.done, onCheckedChange: () => toggle(s.id) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 text-sm ${s.done ? "line-through text-muted-foreground" : ""}`, children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-secondary text-[10px] grid place-items-center font-semibold", children: su?.initials })
          ] }, s.id);
        }),
        subs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground p-3 border border-dashed rounded-md text-center", children: "No subtasks yet" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Attachments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 text-center text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-5 w-5 mx-auto mb-1" }),
        "Drop files here or browse · ",
        task.attachments,
        " attached"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Comments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Write a comment, use @ to mention…" })
    ] })
  ] });
}
function NewTaskDialog({
  onClose,
  onCreate
}) {
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [priority, setPriority] = reactExports.useState("High");
  const [assignee, setAssignee] = reactExports.useState(TEAM.find((t) => t.role === "member")?.id ?? TEAM[0].id);
  const [linkedTo, setLinkedTo] = reactExports.useState("__none__");
  const [dueDate, setDueDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  });
  const members = TEAM.filter((m) => m.role === "member");
  const submit = () => {
    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }
    onCreate({
      title: title.trim(),
      description: description.trim(),
      priority,
      assignee,
      dueDate,
      linkedTo: linkedTo === "__none__" ? void 0 : linkedTo
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Create New Task" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Assign work to a team member and optionally link it to a tender or offer." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-2 max-h-[70vh] overflow-y-auto pr-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Task title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "e.g. Prepare BOQ pricing sheet" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Scope, deliverables, references…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assign to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: assignee, onValueChange: setAssignee, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: m.id, children: [
              m.name,
              " — ",
              m.designation
            ] }, m.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: priority, onValueChange: (v) => setPriority(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Critical", "High", "Medium", "Low"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Link to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: linkedTo, onValueChange: setLinkedTo, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none__", children: "— None —" }),
              TENDERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.id, children: [
                "Tender · ",
                t.id,
                " — ",
                t.name
              ] }, t.id)),
              OFFERS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: o.id, children: [
                "Offer · ",
                o.id,
                " — ",
                o.name
              ] }, o.id))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Due date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: dueDate, onChange: (e) => setDueDate(e.target.value) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand-gradient text-brand-foreground", onClick: submit, children: "Create Task" })
    ] })
  ] });
}
export {
  TasksPage as component
};
