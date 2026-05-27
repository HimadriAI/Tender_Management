import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { C as Card, a as CardContent } from "./card-BEoEiU2B.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { B as Badge } from "./badge-Bjn0AkQC.js";
import { R as REPO, u as userById } from "./mock-data-Bbx1JVsp.js";
import { U as Upload, D as Download } from "./upload-JxFrWSme.js";
import { F as FolderOpen } from "./folder-open-CKPeCWGG.js";
import { S as Search } from "./search-DPlBmtfY.js";
import { E as Eye } from "./eye-CDafVXW-.js";
import { H as History, F as FileArchive } from "./history-DWxN7FpL.js";
import { F as FileSpreadsheet, a as FileTypeCorner } from "./file-type-corner-hDblpJXK.js";
import { F as FileText } from "./file-text-DBXylvpl.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
];
const Presentation = createLucideIcon("presentation", __iconNode);
const FOLDERS = ["All", "Corporate", "Compliance", "Templates", "Vendors", "References"];
function Icon({
  t
}) {
  const c = "h-5 w-5";
  if (t === "xlsx") return /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: c + " text-blue-600" });
  if (t === "zip") return /* @__PURE__ */ jsxRuntimeExports.jsx(FileArchive, { className: c + " text-slate-600" });
  if (t === "pdf") return /* @__PURE__ */ jsxRuntimeExports.jsx(FileTypeCorner, { className: c + " text-destructive" });
  if (t === "pptx") return /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: c + " text-orange-600" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: c + " text-muted-foreground" });
}
function DocumentsPage() {
  const [folder, setFolder] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const files = REPO.filter((f) => (folder === "All" || f.category === folder) && (!q || f.name.toLowerCase().includes(q.toLowerCase())));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Forms & Document Repository" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Versioned company documents with audit trail." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-brand-gradient text-brand-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4 mr-2" }),
        "Upload files"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_1fr] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground px-2 py-2", children: "Folders" }),
        FOLDERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFolder(f), className: `w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm transition ${folder === f ? "bg-brand/10 text-brand font-medium" : "hover:bg-accent"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: f }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: f === "All" ? REPO.length : REPO.filter((r) => r.category === f).length })
        ] }, f))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 mx-auto text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-2", children: "Drag & drop files here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "PDF, DOCX, XLSX, ZIP — versioning is automatic" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search documents…", className: "pl-9 h-10" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 divide-y", children: [
          files.map((f) => {
            const u = userById(f.uploadedBy);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 hover:bg-accent/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-md bg-secondary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { t: f.type }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: f.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  f.category,
                  " · ",
                  f.size,
                  " · by ",
                  u?.name,
                  " on ",
                  f.uploadedAt
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: f.version }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }) })
            ] }, f.id);
          }),
          files.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No files found." })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  DocumentsPage as component
};
