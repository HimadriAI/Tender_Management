import { L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent, c as CardHeader, d as CardTitle } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { u as useAuth } from "./router-BE7VNx6U.js";
import { T as TASKS, c as TENDERS } from "./mock-data-Bbx1JVsp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode);
function ProfilePage() {
  const {
    user
  } = useAuth();
  if (!user) return null;
  const myTasks = TASKS.filter((t) => t.assignee === user.id);
  const myTenders = TENDERS.filter((t) => t.assignedMembers.includes(user.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6 max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-navy-gradient text-navy-foreground p-6 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 h-60 w-60 rounded-full bg-brand/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-2xl font-bold ring-4 ring-navy-foreground/20", children: user.name.split(" ").map((p) => p[0]).join("").slice(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute bottom-0 right-0 h-8 w-8 rounded-full bg-navy-foreground text-navy grid place-items-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
            fontFamily: "Sora, Inter"
          }, children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-navy-foreground/70", children: [
            user.designation,
            " · ",
            user.department
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-navy-foreground/60 mt-0.5", children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-brand text-brand-foreground border-transparent", children: user.role === "manager" ? "Business Manager" : "Team Member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "border-navy-foreground/30 text-navy-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-400 mr-1.5" }),
              "Available"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-2 lg:grid-cols-4", children: [["Active tenders", myTenders.length], ["My tasks", myTasks.length], ["Completed", myTasks.filter((t) => t.status === "Completed").length], ["Delayed", myTasks.filter((t) => t.status === "Delayed").length]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold", style: {
        fontFamily: "Sora, Inter"
      }, children: v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: k })
    ] }) }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Employee details" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: user.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: user.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Designation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: user.designation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: user.department })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand-gradient text-brand-foreground", children: "Save changes" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-brand" }),
        "Skills"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-wrap gap-2", children: ["Tendering", "Cost Estimation", "Contracts", "EPC", "Negotiation", "BOQ", "Client Management", "Bid Strategy"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "px-3 py-1", children: s }, s)) })
    ] })
  ] });
}
export {
  ProfilePage as component
};
