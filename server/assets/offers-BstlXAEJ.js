import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent } from "./card-BEoEiU2B.js";
import { B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { D as Dialog, f as DialogTrigger, S as Select, i as SelectTrigger, j as SelectValue, g as SelectContent, h as SelectItem, P as Paperclip, a as DialogContent, d as DialogHeader, e as DialogTitle, b as DialogDescription, T as Textarea, c as DialogFooter } from "./textarea-CmcA5Djb.js";
import { S as Sheet, j as SheetContent, l as SheetHeader, m as SheetTitle, k as SheetDescription } from "./index-Dbe9qrGJ.js";
import { O as OFFERS, o as offerStatusColor, p as priorityColor, u as userById, b as TEAM } from "./mock-data-Bbx1JVsp.js";
import { u as useAuth, t as toast } from "./router-BE7VNx6U.js";
import { U as Upload, D as Download } from "./upload-JxFrWSme.js";
import { P as Plus } from "./plus-fgNjA42J.js";
import { S as Search } from "./search-DPlBmtfY.js";
import { F as Funnel, E as Ellipsis } from "./funnel-C_WVou1c.js";
import { F as FilePenLine } from "./file-pen-line-D4iZm1ah.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Brq_I10j.js";
import "./index-BNNqvDPE.js";
import "./index-CZkg40wL.js";
import "./index-CoTb1q3P.js";
import "./index-Bs4P9np0.js";
const STATUSES = ["All", "Drafting", "Negotiation", "Sent", "Accepted", "Rejected", "On Hold"];
function OField({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    children
  ] });
}
function AddOfferDialog({
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Offer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Capture all fields from the BD Live Offer template." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[70vh] overflow-y-auto pr-1 space-y-5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Identification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Sl. No.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "TEL Tender Ref", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "TEL/26/008" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Name of Work", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "State", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Customer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Sector", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["O&G", "Fertilizer", "Power", "Petrochem", "Steel"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Job Type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["EPC", "LSTK", "Service", "IR", "Supply"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Job Nature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Known", "Existing", "New"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Site", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "PMC", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Dates & Approvals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Tender Publish Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Original Due Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Revised Due Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Go / No Go", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Go", "No Go", "Pending"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Bid / No Bid Meeting", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Bid / No Bid Approval Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Internal Estimate Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Participants in Review", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Comma-separated names" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "BD Responsible Person", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Supporting Team Lead", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Estimate (Cr.)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Est. Value (Cr.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Supply", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "C&S", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Mech", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "E&I", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Job Duration (Months)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Escalation (Y/N)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Y", "N"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Mode of Bid Submission", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Online", "Offline"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Bid Cost / Guarantees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Cost of Tender (Rs.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "EMD Amt (Cr.)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "EMD Type (BG/ISB/Fund)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB", "Fund"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Validity (Days)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "PBG Amt", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "PBG Type (BG/ISB)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "ABG Amt", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "ABG Type (BG/ISB)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["BG", "ISB", "NA"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "RA", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Yes", "No"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Submission & Outcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Submitted on", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Expected Bid Opening Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "RA Review Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Status / Remarks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. L1, awaiting LOI" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Participating Bidders", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Comma-separated" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Probability", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["High", "Medium", "Low"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Lost Part Analysis", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, placeholder: "If lost, capture reasons / gap analysis…" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OField, { label: "Remarks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, placeholder: "Any internal notes…" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand-gradient text-brand-foreground", onClick: () => {
        toast.success("Offer saved (demo)");
        onClose();
      }, children: "Save offer" })
    ] })
  ] });
}
function OffersPage() {
  const {
    user
  } = useAuth();
  const [q, setQ] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("All");
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const visible = reactExports.useMemo(() => {
    return OFFERS.filter((o) => {
      if (user?.role === "member" && !o.assignedMembers.includes(user.id)) return false;
      if (status !== "All" && o.status !== status) return false;
      if (q) {
        const s = q.toLowerCase();
        return o.name.toLowerCase().includes(s) || o.customer.toLowerCase().includes(s) || o.id.toLowerCase().includes(s);
      }
      return true;
    });
  }, [q, status, user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Live Offers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Proposals & negotiations across all active accounts." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: user?.role === "manager" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => toast.info("Excel bulk import (demo)"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4 mr-2" }),
          "Bulk Import"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-brand-gradient text-brand-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Add Offer"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddOfferDialog, { onClose: () => setAddOpen(false) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search offer, client or ID…", className: "pl-9 h-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: setStatus, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[170px] h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 mr-2" }),
        "Filters"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-10 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
        "Export"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: [
      visible.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card hover:shadow-elevated transition cursor-pointer group", onClick: () => setSelected(o), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilePenLine, { className: "h-3.5 w-3.5" }),
            o.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: offerStatusColor(o.status), children: o.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold group-hover:text-brand transition", children: o.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: o.customer })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", style: {
            fontFamily: "Sora, Inter"
          }, children: [
            "₹ ",
            o.value,
            " Cr"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: priorityColor(o.priority), children: o.priority })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: o.assignedMembers.slice(0, 4).map((id) => {
            const u = userById(id);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center ring-2 ring-card", title: u?.name, children: u?.initials }, id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-3 w-3" }),
              o.documents
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Due ",
              new Date(o.validityDate).toLocaleDateString()
            ] })
          ] })
        ] })
      ] }) }, o.id)),
      visible.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center text-sm text-muted-foreground py-12", children: "No offers found." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "w-full sm:max-w-xl", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "pr-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          selected.id,
          " · ",
          selected.ref
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: selected.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: selected.customer })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 text-sm", children: [["Value", `₹ ${selected.value} Cr`], ["Status", selected.status], ["Priority", selected.priority], ["Proposal Date", new Date(selected.proposalDate).toLocaleDateString()], ["Validity", new Date(selected.validityDate).toLocaleDateString()], ["Documents", String(selected.documents)]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-md bg-secondary/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-0.5", children: v })
      ] }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-muted-foreground mb-2", children: "Remarks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-md bg-secondary/40 text-muted-foreground", children: selected.remarks })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4 mr-1" }),
          "More"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "bg-brand-gradient text-brand-foreground", children: "Update status" })
      ] })
    ] }) }) })
  ] });
}
export {
  OffersPage as component
};
