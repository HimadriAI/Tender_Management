import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent, c as CardHeader, d as CardTitle } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { D as Dialog, f as DialogTrigger, S as Select, i as SelectTrigger, j as SelectValue, g as SelectContent, h as SelectItem, P as Paperclip, a as DialogContent, d as DialogHeader, e as DialogTitle, b as DialogDescription, T as Textarea, c as DialogFooter } from "./textarea-CmcA5Djb.js";
import { S as Sheet, j as SheetContent, l as SheetHeader, m as SheetTitle, k as SheetDescription } from "./index-Dbe9qrGJ.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-BlTkK7uB.js";
import { c as TENDERS, p as priorityColor, d as tenderStatusColor, u as userById, b as TEAM, t as taskStatusColor } from "./mock-data-Bbx1JVsp.js";
import { u as useAuth, t as toast } from "./router-BE7VNx6U.js";
import { u as useTasks } from "./task-store-BT0hA9Mv.js";
import { P as Progress } from "./progress-CyeiCNet.js";
import { U as Upload, D as Download } from "./upload-JxFrWSme.js";
import { P as Plus } from "./plus-fgNjA42J.js";
import { S as Search } from "./search-DPlBmtfY.js";
import { F as Funnel, E as Ellipsis } from "./funnel-C_WVou1c.js";
import { F as FileText } from "./file-text-DBXylvpl.js";
import { E as Eye } from "./eye-CDafVXW-.js";
import { H as History, F as FileArchive } from "./history-DWxN7FpL.js";
import { M as MessageSquare } from "./message-square-BKt4QDNA.js";
import { F as FileSpreadsheet, a as FileTypeCorner } from "./file-type-corner-hDblpJXK.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Brq_I10j.js";
import "./index-BNNqvDPE.js";
import "./index-CZkg40wL.js";
import "./index-CoTb1q3P.js";
import "./index-Bs4P9np0.js";
import "./index-CQL5I3Uv.js";
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
];
const FileImage = createLucideIcon("file-image", __iconNode);
const STATUSES = ["All", "Draft", "Under Review", "Submitted", "Won", "Lost", "Delayed"];
const PRIORITIES = ["All", "Critical", "High", "Medium", "Low"];
function TendersPage() {
  const {
    user
  } = useAuth();
  const [items] = reactExports.useState(TENDERS);
  const [q, setQ] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("All");
  const [priority, setPriority] = reactExports.useState("All");
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const visible = reactExports.useMemo(() => {
    return items.filter((t) => {
      if (user?.role === "member" && !t.assignedMembers.includes(user.id)) return false;
      if (status !== "All" && t.status !== status) return false;
      if (priority !== "All" && t.priority !== priority) return false;
      if (q) {
        const s = q.toLowerCase();
        return t.name.toLowerCase().includes(s) || t.customer.toLowerCase().includes(s) || t.id.toLowerCase().includes(s);
      }
      return true;
    });
  }, [items, q, status, priority, user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Live Tenders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage active bids, supporting documents and assignments." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: user?.role === "manager" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => toast.info("Excel bulk import (demo)", {
          description: "Connect your spreadsheet to import."
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4 mr-2" }),
          "Bulk Import (Excel)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-brand-gradient text-brand-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Add Tender"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddTenderDialog, { onClose: () => setAddOpen(false) })
        ] })
      ] }) })
    ] }),
    user?.role === "manager" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-brand/10 text-brand grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "Upload tenders via Excel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Match columns from BD_Record_Keeping template. Drag & drop or browse." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
          "Template"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "bg-brand-gradient text-brand-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4 mr-2" }),
          "Choose file"
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search tender, client or ID…", className: "pl-9 h-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: setStatus, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[170px] h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: priority, onValueChange: setPriority, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[150px] h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 mr-2" }),
        "More filters"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-10 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
        "Export"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Tender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Customer / Sector" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Value (Cr)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Due" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Assigned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-4 py-3", children: "Docs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-4 py-3" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
        visible.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40 transition cursor-pointer", onClick: () => setSelected(t), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium max-w-[280px] truncate", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              t.id,
              " · ",
              t.location,
              ", ",
              t.state
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.customer }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              t.sector,
              " · ",
              t.jobType
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-semibold", children: [
            "₹ ",
            t.estimateValue.toFixed(1)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: new Date(t.dueDate).toLocaleDateString() }),
            t.revisedDueDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-brand", children: [
              "Rev: ",
              new Date(t.revisedDueDate).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(t.priority), children: t.priority }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: tenderStatusColor(t.status), children: t.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2", children: [
            t.assignedMembers.slice(0, 4).map((id) => {
              const u = userById(id);
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center ring-2 ring-card", title: u?.name, children: u?.initials }, id);
            }),
            t.assignedMembers.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-7 w-7 rounded-full bg-muted text-muted-foreground text-[10px] grid place-items-center ring-2 ring-card", children: [
              "+",
              t.assignedMembers.length - 4
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-3 w-3" }),
            t.documents
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }) }) })
        ] }, t.id)),
        visible.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "text-center py-12 text-sm text-muted-foreground", children: "No tenders match your filters." }) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "w-full sm:max-w-2xl overflow-y-auto", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(TenderDetail, { tender: selected }) }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    children
  ] });
}
function AddTenderDialog({
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Tender" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Capture all fields from the BD Record Keeping template." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[70vh] overflow-y-auto pr-1 space-y-5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Identification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sl. No.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Auto / Manual" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "TEL Tender Ref", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "TEL/26/008" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name of Work", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. EPC for Refinery Expansion" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Gujarat" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Vadodara" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Customer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. IOCL" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sector", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select sector" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["O&G", "Fertilizer", "Power", "Petrochem", "Steel"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Job Type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["EPC", "LSTK", "Service", "IR", "Supply"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Job Nature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Known", "Existing", "New"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Site", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Site description" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PMC", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. EIL / PDIL" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Dates & Approvals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tender Publish Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Original Due Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rev. Due Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Go / No Go", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Go", "No Go", "Pending"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bid / No Bid Meeting", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bid / No Bid Approval Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Internal Estimate Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Participants in Review", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Comma-separated names" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "BD Responsible Person", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Supporting Team Lead", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Estimate (Rs. in Cr. — Ex. GST)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Estimate Amount (Cr.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Supply", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "C&S", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mech.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E&I", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Job Duration (Months)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Escalation (Y/N)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Y", "N"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mode of Bid Submission", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Online", "Offline"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Bid Cost / Guarantees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cost of Tender (Rs.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "EMD (Rs.) Crs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "EMD Type (BG/ISB/Fund)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB", "Fund"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Validity (days)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PBG Amt", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PBG Type (BG/ISB)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ABG Amt", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ABG Type (BG/ISB)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB", "NA"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "RA", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Yes", "No"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Remarks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, placeholder: "Any internal notes…" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand-gradient text-brand-foreground", onClick: () => {
        toast.success("Tender saved (demo)");
        onClose();
      }, children: "Save tender" })
    ] })
  ] });
}
function FileIcon({
  ext
}) {
  const cls = "h-4 w-4";
  if (["xlsx", "xls"].includes(ext)) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: cls + " text-blue-600" });
  if (["png", "jpg", "jpeg"].includes(ext)) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileImage, { className: cls + " text-amber-600" });
  if (["zip", "rar"].includes(ext)) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileArchive, { className: cls + " text-slate-600" });
  if (["pdf"].includes(ext)) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileTypeCorner, { className: cls + " text-destructive" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: cls + " text-muted-foreground" });
}
function TenderDetail({
  tender
}) {
  const {
    user
  } = useAuth();
  const {
    tasksForTender,
    addTask
  } = useTasks();
  const tenderTasks = tasksForTender(tender.id);
  const [assignOpen, setAssignOpen] = reactExports.useState(false);
  const lead = userById(tender.bdResponsible);
  const supp = userById(tender.supportingLead);
  const docs = [{
    name: "Tender_Document.pdf",
    cat: "Tender Documents",
    by: "u-001",
    at: "2026-04-12",
    size: "3.4 MB",
    ext: "pdf"
  }, {
    name: "Technical_BOQ_Rev3.xlsx",
    cat: "BOQ Files",
    by: "u-003",
    at: "2026-05-18",
    size: "812 KB",
    ext: "xlsx"
  }, {
    name: "Site_Photos.zip",
    cat: "Drawings",
    by: "u-002",
    at: "2026-04-30",
    size: "26 MB",
    ext: "zip"
  }, {
    name: "Compliance_Matrix.docx",
    cat: "Compliance Documents",
    by: "u-002",
    at: "2026-05-20",
    size: "240 KB",
    ext: "docx"
  }, {
    name: "Client_Correspondence.pdf",
    cat: "Client Communication",
    by: "u-001",
    at: "2026-05-19",
    size: "1.8 MB",
    ext: "pdf"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "pr-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
        " ",
        tender.id,
        " · ",
        tender.ref
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-xl", children: tender.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetDescription, { children: [
        tender.customer,
        " · ",
        tender.sector,
        " · ",
        tender.location,
        ", ",
        tender.state
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(tender.priority), children: tender.priority }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: tenderStatusColor(tender.status), children: tender.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
          "₹ ",
          tender.estimateValue,
          " Cr"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
          "Probability: ",
          tender.probability
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-5 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tasks", children: [
          "Tasks (",
          tenderTasks.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "documents", children: [
          "Documents (",
          docs.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "team", children: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "activity", children: "Activity" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tasks", className: "space-y-3 mt-4", children: [
        user?.role === "manager" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: assignOpen, onOpenChange: setAssignOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "bg-brand-gradient text-brand-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Assign Task"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AssignTaskDialog, { tender, onClose: () => setAssignOpen(false), onAssign: (data) => {
            const created = addTask({
              ...data,
              linkedTo: tender.id
            });
            toast.success(`Task assigned: ${created.id}`, {
              description: `Assigned to ${userById(created.assignee)?.name}`
            });
            setAssignOpen(false);
          } })
        ] }) }),
        tenderTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center text-sm text-muted-foreground", children: [
          "No tasks for this tender yet. ",
          user?.role === "manager" && "Click Assign Task to create one."
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y border rounded-lg", children: tenderTasks.map((tk) => {
          const u = userById(tk.assignee);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex items-center gap-3 hover:bg-accent/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center", children: u?.initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: tk.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                tk.id,
                " · ",
                u?.name,
                " · Due ",
                new Date(tk.dueDate).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: tk.progress, className: "h-1 mt-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(tk.priority), children: tk.priority }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: taskStatusColor(tk.status), children: tk.status })
            ] })
          ] }, tk.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 grid sm:grid-cols-3 gap-4 text-sm", children: [["TEL Ref", tender.ref], ["State", tender.state], ["Location", tender.location], ["Sector", tender.sector], ["Job Type", tender.jobType], ["Job Nature", tender.jobNature], ["Publish Date", new Date(tender.publishDate).toLocaleDateString()], ["Original Due", new Date(tender.dueDate).toLocaleDateString()], ["Revised Due", tender.revisedDueDate ? new Date(tender.revisedDueDate).toLocaleDateString() : "—"], ["Bid Opening", tender.bidOpeningDate ? new Date(tender.bidOpeningDate).toLocaleDateString() : "—"], ["Mode of Bid", tender.modeOfBid], ["Duration", `${tender.duration} months`], ["Escalation", tender.escalation === "Y" ? "Yes" : "No"], ["EMD", `₹ ${tender.emd} Cr (${tender.emdType})`], ["PBG", `₹ ${tender.pbgAmt} Cr (${tender.pbgType})`], ["ABG", typeof tender.abgAmt === "number" ? `₹ ${tender.abgAmt} Cr (${tender.abgType})` : "NA"], ["Validity", `${tender.validity} days`], ["PMC", tender.pmc]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-0.5", children: v })
        ] }, k)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Estimate Breakdown (Cr.)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid grid-cols-5 gap-3 text-center", children: [["Supply", tender.supply], ["Service", tender.service], ["C&S", tender.cs], ["Mech", tender.mech], ["E&I", tender.ei]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-secondary/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1", children: v })
          ] }, k)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Remarks" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "text-sm text-muted-foreground", children: tender.remarks })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "documents", className: "space-y-3 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 mx-auto text-muted-foreground mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Drag & drop files here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "PDF, DOCX, XLSX, PPT, Images, ZIP up to 50 MB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "mt-3 bg-brand-gradient text-brand-foreground", children: "Browse files" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y border rounded-lg", children: docs.map((d, i) => {
          const u = userById(d.by);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 hover:bg-accent/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-secondary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileIcon, { ext: d.ext }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: d.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                d.cat,
                " · ",
                d.size,
                " · uploaded by ",
                u?.name,
                " on ",
                d.at
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }) })
          ] }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "team", className: "space-y-2 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: [lead, supp].filter(Boolean).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-xs font-semibold", children: u.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm truncate", children: u.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: u.designation })
          ] })
        ] }) }, u.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-4 mb-2", children: "Assigned members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: tender.assignedMembers.map((id) => {
          const u = userById(id);
          if (!u) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-secondary grid place-items-center text-xs font-semibold", children: u.initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm truncate", children: u.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: u.designation })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: u.availability })
          ] }) }, id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "space-y-3 mt-4", children: [{
        who: "u-002",
        what: "uploaded Compliance_Matrix.docx",
        at: "2 hrs ago"
      }, {
        who: "u-001",
        what: "changed status to Under Review",
        at: "Yesterday"
      }, {
        who: "u-005",
        what: "added comment on technical compliance",
        at: "2 days ago"
      }, {
        who: "u-003",
        what: "revised estimate value to 248.5 Cr",
        at: "3 days ago"
      }, {
        who: "u-001",
        what: "created this tender",
        at: "5 days ago"
      }].map((a, i) => {
        const u = userById(a.who);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-[10px] font-semibold shrink-0", children: u?.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: u?.name }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.what })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3" }),
              a.at
            ] })
          ] })
        ] }, i);
      }) })
    ] })
  ] });
}
function AssignTaskDialog({
  tender,
  onClose,
  onAssign
}) {
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [priority, setPriority] = reactExports.useState("High");
  const [assignee, setAssignee] = reactExports.useState(tender.assignedMembers[1] ?? tender.assignedMembers[0] ?? TEAM[1].id);
  const [dueDate, setDueDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  });
  const candidates = TEAM.filter((m) => m.role === "member");
  const submit = () => {
    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }
    onAssign({
      title: title.trim(),
      description: description.trim(),
      priority,
      assignee,
      dueDate
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Assign Task" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
        "Create and assign a task linked to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: tender.id }),
        " — ",
        tender.name,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Task title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "e.g. Prepare technical compliance matrix" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: candidates.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: m.id, children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Due date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: dueDate, onChange: (e) => setDueDate(e.target.value) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand-gradient text-brand-foreground", onClick: submit, children: "Assign Task" })
    ] })
  ] });
}
export {
  TendersPage as component
};
