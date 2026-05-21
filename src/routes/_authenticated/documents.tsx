import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FolderOpen, Upload, Search, Download, Eye, History, FileText, FileSpreadsheet, FileArchive, FileType2, Presentation,
} from "lucide-react";
import { REPO, userById } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/documents")({ component: DocumentsPage });

const FOLDERS = ["All", "Corporate", "Compliance", "Templates", "Vendors", "References"];

function Icon({ t }: { t: string }) {
  const c = "h-5 w-5";
  if (t === "xlsx") return <FileSpreadsheet className={c + " text-blue-600"} />;
  if (t === "zip") return <FileArchive className={c + " text-slate-600"} />;
  if (t === "pdf") return <FileType2 className={c + " text-destructive"} />;
  if (t === "pptx") return <Presentation className={c + " text-orange-600"} />;
  return <FileText className={c + " text-muted-foreground"} />;
}

function DocumentsPage() {
  const [folder, setFolder] = useState("All");
  const [q, setQ] = useState("");
  const files = REPO.filter((f) =>
    (folder === "All" || f.category === folder) && (!q || f.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Forms & Document Repository</h1>
          <p className="text-sm text-muted-foreground">Versioned company documents with audit trail.</p>
        </div>
        <Button className="bg-brand-gradient text-brand-foreground"><Upload className="h-4 w-4 mr-2" />Upload files</Button>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-4">
        <Card className="shadow-card h-fit">
          <CardContent className="p-3 space-y-1">
            <div className="text-xs uppercase tracking-wider text-muted-foreground px-2 py-2">Folders</div>
            {FOLDERS.map((f) => (
              <button
                key={f}
                onClick={() => setFolder(f)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm transition ${
                  folder === f ? "bg-brand/10 text-brand font-medium" : "hover:bg-accent"
                }`}
              >
                <FolderOpen className="h-4 w-4" />
                <span className="flex-1 text-left">{f}</span>
                <span className="text-xs text-muted-foreground">{f === "All" ? REPO.length : REPO.filter((r) => r.category === f).length}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="shadow-card border-dashed">
            <CardContent className="p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
              <div className="font-medium mt-2">Drag & drop files here</div>
              <div className="text-xs text-muted-foreground">PDF, DOCX, XLSX, ZIP — versioning is automatic</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…" className="pl-9 h-10" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-0 divide-y">
              {files.map((f) => {
                const u = userById(f.uploadedBy);
                return (
                  <div key={f.id} className="flex items-center gap-3 p-3 hover:bg-accent/40 transition">
                    <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center"><Icon t={f.type} /></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{f.category} · {f.size} · by {u?.name} on {f.uploadedAt}</div>
                    </div>
                    <Badge variant="outline" className="text-[10px]">{f.version}</Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><History className="h-4 w-4" /></Button>
                  </div>
                );
              })}
              {files.length === 0 && <div className="p-8 text-center text-sm text-muted-foreground">No files found.</div>}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
