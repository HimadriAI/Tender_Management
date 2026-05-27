import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { T as Tabs, b as TabsList, c as TabsTrigger } from "./tabs-BlTkK7uB.js";
import { N as NOTIFICATIONS, p as priorityColor } from "./mock-data-Bbx1JVsp.js";
import { C as Check } from "./index-CoTb1q3P.js";
import { B as Bell } from "./bell-fnF5elPi.js";
import { T as TriangleAlert } from "./triangle-alert-BI38E47h.js";
import { F as FileText } from "./file-text-DBXylvpl.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Brq_I10j.js";
import "./router-BE7VNx6U.js";
import "./index-CQL5I3Uv.js";
import "./index-BNNqvDPE.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
];
const AtSign = createLucideIcon("at-sign", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
];
const FileUp = createLucideIcon("file-up", __iconNode);
const ICONS = {
  task: FileText,
  deadline: TriangleAlert,
  mention: AtSign,
  status: BadgeCheck,
  document: FileUp,
  approval: Bell
};
function NotificationsPage() {
  const [filter, setFilter] = reactExports.useState("all");
  const [items, setItems] = reactExports.useState(NOTIFICATIONS);
  const visible = items.filter((n) => filter === "all" || n.unread);
  const markAll = () => setItems((arr) => arr.map((n) => ({
    ...n,
    unread: false
  })));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Realtime updates across tenders, offers and tasks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: filter, onValueChange: (v) => setFilter(v), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "all", children: "All" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "unread", children: "Unread" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: markAll, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mr-2" }),
          "Mark all read"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 divide-y", children: [
      visible.map((n) => {
        const Icon = ICONS[n.type];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-4 p-4 ${n.unread ? "bg-brand/5" : ""} hover:bg-accent/40 transition`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-lg grid place-items-center shrink-0 ${n.unread ? "bg-brand/15 text-brand" : "bg-secondary text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: n.title }),
              n.priority && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(n.priority), children: n.priority }),
              n.unread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-brand ml-auto" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-0.5", children: n.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: n.time })
          ] })
        ] }, n.id);
      }),
      visible.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-sm text-muted-foreground", children: "You're all caught up." })
    ] }) })
  ] });
}
export {
  NotificationsPage as component
};
