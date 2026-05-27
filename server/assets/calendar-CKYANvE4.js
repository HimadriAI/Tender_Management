import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent, c as CardHeader, d as CardTitle } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { c as TENDERS, T as TASKS, O as OFFERS } from "./mock-data-Bbx1JVsp.js";
import { C as ChevronRight } from "./chevron-right-CML6Wxoa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const EVENTS = [...TENDERS.map((t) => ({
  id: t.id,
  title: t.name,
  date: t.dueDate,
  type: "tender"
})), ...TASKS.map((t) => ({
  id: t.id,
  title: t.title,
  date: t.dueDate,
  type: "task"
})), ...OFFERS.map((o) => ({
  id: o.id,
  title: o.name,
  date: o.validityDate,
  type: "offer"
}))];
function CalendarPage() {
  const [month, setMonth] = reactExports.useState(new Date(2026, 4, 1));
  const year = month.getFullYear();
  const m = month.getMonth();
  const first = new Date(year, m, 1);
  const last = new Date(year, m + 1, 0);
  const startWeekday = first.getDay();
  const days = last.getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, m, d));
  while (cells.length % 7 !== 0) cells.push(null);
  const evOn = (d) => EVENTS.filter((e) => {
    const ed = new Date(e.date);
    return ed.getFullYear() === d.getFullYear() && ed.getMonth() === d.getMonth() && ed.getDate() === d.getDate();
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Submissions, deadlines, milestones and meetings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: () => setMonth(new Date(year, m - 1, 1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold w-40 text-center", children: month.toLocaleString(void 0, {
          month: "long",
          year: "numeric"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: () => setMonth(new Date(year, m + 1, 1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 text-[10px] uppercase tracking-wider text-muted-foreground p-2", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2", children: d }, d)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: cells.map((d, i) => {
        const today = d && d.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
        const events = d ? evOn(d) : [];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-h-[110px] rounded-md p-1.5 text-xs ${d ? "bg-card border" : ""} ${today ? "ring-2 ring-brand" : ""}`, children: d && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-right text-[11px] font-semibold mb-1 ${today ? "text-brand" : "text-muted-foreground"}`, children: d.getDate() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            events.slice(0, 3).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `truncate rounded px-1.5 py-1 text-[10px] font-medium ${e.type === "tender" ? "bg-navy/10 text-navy" : e.type === "offer" ? "bg-blue-500/10 text-blue-700 dark:text-blue-300" : "bg-brand/10 text-brand"}`, children: e.title }, e.id)),
            events.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
              "+",
              events.length - 3,
              " more"
            ] })
          ] })
        ] }) }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Legend" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap gap-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-navy/10 text-navy border-navy/30", children: "Tender deadline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30", children: "Offer validity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-brand/10 text-brand border-brand/30", children: "Task due" })
      ] })
    ] })
  ] });
}
export {
  CalendarPage as component
};
