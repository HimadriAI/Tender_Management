import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText, Plus, Search, Upload, Filter, Download, MoreHorizontal, Eye,
  FileSpreadsheet, FileImage, FileArchive, FileType2, History, Paperclip, MessageSquare,
} from "lucide-react";
import {
  TENDERS, TEAM, type Tender, priorityColor, tenderStatusColor, taskStatusColor, userById,
} from "@/lib/mock-data";
import { useAuth } from "@/lib/auth";
import { useTasks } from "@/lib/task-store";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/tenders")({ component: TendersPage });

const STATUSES = ["All", "Draft", "Under Review", "Submitted", "Won", "Lost", "Delayed"] as const;
const PRIORITIES = ["All", "Critical", "High", "Medium", "Low"] as const;

function TendersPage() {
  const { user } = useAuth();
  const [items] = useState<Tender[]>(TENDERS);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("All");
  const [priority, setPriority] = useState<string>("All");
  const [selected, setSelected] = useState<Tender | null>(null);
  const [addOpen, setAddOpen] = useState(false);

  const visible = useMemo(() => {
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

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Live Tenders</h1>
          <p className="text-sm text-muted-foreground">Manage active bids, supporting documents and assignments.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {user?.role === "manager" && (
            <>
              <Button variant="outline" onClick={() => toast.info("Excel bulk import (demo)", { description: "Connect your spreadsheet to import." })}>
                <Upload className="h-4 w-4 mr-2" />Bulk Import (Excel)
              </Button>
              <Dialog open={addOpen} onOpenChange={setAddOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-brand-gradient text-brand-foreground">
                    <Plus className="h-4 w-4 mr-2" />Add Tender
                  </Button>
                </DialogTrigger>
                <AddTenderDialog onClose={() => setAddOpen(false)} />
              </Dialog>
            </>
          )}
        </div>
      </div>

      {/* Upload card */}
      {user?.role === "manager" && (
        <Card className="shadow-card border-dashed">
          <CardContent className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand grid place-items-center">
                  <Upload className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Upload tenders via Excel</div>
                  <div className="text-xs text-muted-foreground">Match columns from BD_Record_Keeping template. Drag & drop or browse.</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" />Template</Button>
                <Button size="sm" className="bg-brand-gradient text-brand-foreground"><Upload className="h-4 w-4 mr-2" />Choose file</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tender, client or ID…" className="pl-9 h-10" />
            </div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[170px] h-10"><SelectValue /></SelectTrigger>
              <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="w-[150px] h-10"><SelectValue /></SelectTrigger>
              <SelectContent>{PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
            <Button variant="outline" className="h-10"><Filter className="h-4 w-4 mr-2" />More filters</Button>
            <Button variant="outline" className="h-10 ml-auto"><Download className="h-4 w-4 mr-2" />Export</Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="shadow-card overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-4 py-3">Tender</th>
                  <th className="text-left font-medium px-4 py-3">Customer / Sector</th>
                  <th className="text-left font-medium px-4 py-3">Value (Cr)</th>
                  <th className="text-left font-medium px-4 py-3">Due</th>
                  <th className="text-left font-medium px-4 py-3">Priority</th>
                  <th className="text-left font-medium px-4 py-3">Status</th>
                  <th className="text-left font-medium px-4 py-3">Assigned</th>
                  <th className="text-left font-medium px-4 py-3">Docs</th>
                  <th className="text-right font-medium px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {visible.map((t) => (
                  <tr key={t.id} className="hover:bg-accent/40 transition cursor-pointer" onClick={() => setSelected(t)}>
                    <td className="px-4 py-3">
                      <div className="font-medium max-w-[280px] truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.id} · {t.location}, {t.state}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{t.customer}</div>
                      <div className="text-xs text-muted-foreground">{t.sector} · {t.jobType}</div>
                    </td>
                    <td className="px-4 py-3 font-semibold">₹ {t.estimateValue.toFixed(1)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div>{new Date(t.dueDate).toLocaleDateString()}</div>
                      {t.revisedDueDate && <div className="text-[10px] text-brand">Rev: {new Date(t.revisedDueDate).toLocaleDateString()}</div>}
                    </td>
                    <td className="px-4 py-3"><Badge variant="outline" className={priorityColor(t.priority)}>{t.priority}</Badge></td>
                    <td className="px-4 py-3"><Badge variant="outline" className={tenderStatusColor(t.status)}>{t.status}</Badge></td>
                    <td className="px-4 py-3">
                      <div className="flex -space-x-2">
                        {t.assignedMembers.slice(0, 4).map((id) => {
                          const u = userById(id);
                          return (
                            <div key={id} className="h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center ring-2 ring-card" title={u?.name}>
                              {u?.initials}
                            </div>
                          );
                        })}
                        {t.assignedMembers.length > 4 && (
                          <div className="h-7 w-7 rounded-full bg-muted text-muted-foreground text-[10px] grid place-items-center ring-2 ring-card">
                            +{t.assignedMembers.length - 4}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3"><span className="inline-flex items-center gap-1 text-xs"><Paperclip className="h-3 w-3" />{t.documents}</span></td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr><td colSpan={9} className="text-center py-12 text-sm text-muted-foreground">No tenders match your filters.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detail drawer */}
      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          {selected && <TenderDetail tender={selected} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function AddTenderDialog({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Add New Tender</DialogTitle>
        <DialogDescription>Capture the essentials — you can enrich the record later.</DialogDescription>
      </DialogHeader>
      <div className="grid sm:grid-cols-2 gap-4 py-2">
        <div className="space-y-1.5"><Label>Tender name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. EPC for Refinery Expansion" /></div>
        <div className="space-y-1.5"><Label>Customer</Label><Input value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="e.g. IOCL Panipat" /></div>
        <div className="space-y-1.5"><Label>Sector</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select sector" /></SelectTrigger>
            <SelectContent>{["O&G", "Fertilizer", "Power", "Petrochem", "Steel"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5"><Label>Job type</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>{["EPC", "LSTK", "Service", "IR", "Supply"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5"><Label>Estimated value (Cr)</Label><Input type="number" placeholder="0.00" /></div>
        <div className="space-y-1.5"><Label>Due date</Label><Input type="date" /></div>
        <div className="space-y-1.5"><Label>Bid opening</Label><Input type="date" /></div>
        <div className="space-y-1.5"><Label>Priority</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select priority" /></SelectTrigger>
            <SelectContent>{["Critical", "High", "Medium", "Low"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2 space-y-1.5"><Label>Remarks</Label><Textarea rows={3} placeholder="Any internal notes…" /></div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-brand-gradient text-brand-foreground" onClick={() => { toast.success("Tender saved (demo)"); onClose(); }}>Save tender</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function FileIcon({ ext }: { ext: string }) {
  const cls = "h-4 w-4";
  if (["xlsx", "xls"].includes(ext)) return <FileSpreadsheet className={cls + " text-blue-600"} />;
  if (["png", "jpg", "jpeg"].includes(ext)) return <FileImage className={cls + " text-amber-600"} />;
  if (["zip", "rar"].includes(ext)) return <FileArchive className={cls + " text-slate-600"} />;
  if (["pdf"].includes(ext)) return <FileType2 className={cls + " text-destructive"} />;
  return <FileText className={cls + " text-muted-foreground"} />;
}

function TenderDetail({ tender }: { tender: Tender }) {
  const { user } = useAuth();
  const { tasksForTender, addTask } = useTasks();
  const tenderTasks = tasksForTender(tender.id);
  const [assignOpen, setAssignOpen] = useState(false);
  const lead = userById(tender.bdResponsible);
  const supp = userById(tender.supportingLead);
  const docs = [
    { name: "Tender_Document.pdf", cat: "Tender Documents", by: "u-001", at: "2026-04-12", size: "3.4 MB", ext: "pdf" },
    { name: "Technical_BOQ_Rev3.xlsx", cat: "BOQ Files", by: "u-003", at: "2026-05-18", size: "812 KB", ext: "xlsx" },
    { name: "Site_Photos.zip", cat: "Drawings", by: "u-002", at: "2026-04-30", size: "26 MB", ext: "zip" },
    { name: "Compliance_Matrix.docx", cat: "Compliance Documents", by: "u-002", at: "2026-05-20", size: "240 KB", ext: "docx" },
    { name: "Client_Correspondence.pdf", cat: "Client Communication", by: "u-001", at: "2026-05-19", size: "1.8 MB", ext: "pdf" },
  ];
  return (
    <>
      <SheetHeader className="pr-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground"><FileText className="h-3.5 w-3.5" /> {tender.id} · {tender.ref}</div>
        <SheetTitle className="text-xl">{tender.name}</SheetTitle>
        <SheetDescription>{tender.customer} · {tender.sector} · {tender.location}, {tender.state}</SheetDescription>
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="outline" className={priorityColor(tender.priority)}>{tender.priority}</Badge>
          <Badge variant="outline" className={tenderStatusColor(tender.status)}>{tender.status}</Badge>
          <Badge variant="outline">₹ {tender.estimateValue} Cr</Badge>
          <Badge variant="outline">Probability: {tender.probability}</Badge>
        </div>
      </SheetHeader>

      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks ({tenderTasks.length})</TabsTrigger>
          <TabsTrigger value="documents">Documents ({docs.length})</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-3 mt-4">
          {user?.role === "manager" && (
            <div className="flex justify-end">
              <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-brand-gradient text-brand-foreground">
                    <Plus className="h-4 w-4 mr-2" />Assign Task
                  </Button>
                </DialogTrigger>
                <AssignTaskDialog
                  tender={tender}
                  onClose={() => setAssignOpen(false)}
                  onAssign={(data) => {
                    const created = addTask({ ...data, linkedTo: tender.id });
                    toast.success(`Task assigned: ${created.id}`, { description: `Assigned to ${userById(created.assignee)?.name}` });
                    setAssignOpen(false);
                  }}
                />
              </Dialog>
            </div>
          )}
          {tenderTasks.length === 0 ? (
            <Card className="border-dashed"><CardContent className="p-6 text-center text-sm text-muted-foreground">
              No tasks for this tender yet. {user?.role === "manager" && "Click Assign Task to create one."}
            </CardContent></Card>
          ) : (
            <div className="divide-y border rounded-lg">
              {tenderTasks.map((tk) => {
                const u = userById(tk.assignee);
                return (
                  <div key={tk.id} className="p-3 flex items-center gap-3 hover:bg-accent/40">
                    <div className="h-9 w-9 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center">{u?.initials}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{tk.title}</div>
                      <div className="text-xs text-muted-foreground">{tk.id} · {u?.name} · Due {new Date(tk.dueDate).toLocaleDateString()}</div>
                      <Progress value={tk.progress} className="h-1 mt-2" />
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <Badge variant="outline" className={priorityColor(tk.priority)}>{tk.priority}</Badge>
                      <Badge variant="outline" className={taskStatusColor(tk.status)}>{tk.status}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </TabsContent>


        <TabsContent value="overview" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                ["TEL Ref", tender.ref], ["State", tender.state], ["Location", tender.location],
                ["Sector", tender.sector], ["Job Type", tender.jobType], ["Job Nature", tender.jobNature],
                ["Publish Date", new Date(tender.publishDate).toLocaleDateString()],
                ["Original Due", new Date(tender.dueDate).toLocaleDateString()],
                ["Revised Due", tender.revisedDueDate ? new Date(tender.revisedDueDate).toLocaleDateString() : "—"],
                ["Bid Opening", tender.bidOpeningDate ? new Date(tender.bidOpeningDate).toLocaleDateString() : "—"],
                ["Mode of Bid", tender.modeOfBid], ["Duration", `${tender.duration} months`],
                ["Escalation", tender.escalation === "Y" ? "Yes" : "No"],
                ["EMD", `₹ ${tender.emd} Cr (${tender.emdType})`],
                ["PBG", `₹ ${tender.pbgAmt} Cr (${tender.pbgType})`],
                ["ABG", typeof tender.abgAmt === "number" ? `₹ ${tender.abgAmt} Cr (${tender.abgType})` : "NA"],
                ["Validity", `${tender.validity} days`], ["PMC", tender.pmc],
              ].map(([k, v]) => (
                <div key={k}><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div><div className="font-medium mt-0.5">{v}</div></div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Estimate Breakdown (Cr.)</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-5 gap-3 text-center">
              {[["Supply", tender.supply], ["Service", tender.service], ["C&S", tender.cs], ["Mech", tender.mech], ["E&I", tender.ei]].map(([k, v]) => (
                <div key={k as string} className="p-3 rounded-lg bg-secondary/60">
                  <div className="text-[10px] uppercase text-muted-foreground">{k}</div>
                  <div className="text-lg font-bold mt-1">{v}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Remarks</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">{tender.remarks}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-3 mt-4">
          <Card className="border-dashed">
            <CardContent className="p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <div className="font-medium">Drag & drop files here</div>
              <div className="text-xs text-muted-foreground">PDF, DOCX, XLSX, PPT, Images, ZIP up to 50 MB</div>
              <Button size="sm" className="mt-3 bg-brand-gradient text-brand-foreground">Browse files</Button>
            </CardContent>
          </Card>
          <div className="divide-y border rounded-lg">
            {docs.map((d, i) => {
              const u = userById(d.by);
              return (
                <div key={i} className="flex items-center gap-3 p-3 hover:bg-accent/40 transition">
                  <div className="h-9 w-9 rounded-md bg-secondary grid place-items-center"><FileIcon ext={d.ext} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{d.name}</div>
                    <div className="text-xs text-muted-foreground">{d.cat} · {d.size} · uploaded by {u?.name} on {d.at}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><History className="h-4 w-4" /></Button>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-2 mt-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Leads</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {[lead, supp].filter(Boolean).map((u) => (
              <Card key={u!.id}><CardContent className="p-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-xs font-semibold">{u!.initials}</div>
                <div className="min-w-0"><div className="font-medium text-sm truncate">{u!.name}</div><div className="text-xs text-muted-foreground">{u!.designation}</div></div>
              </CardContent></Card>
            ))}
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mt-4 mb-2">Assigned members</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {tender.assignedMembers.map((id) => {
              const u = userById(id);
              if (!u) return null;
              return (
                <Card key={id}><CardContent className="p-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-secondary grid place-items-center text-xs font-semibold">{u.initials}</div>
                  <div className="min-w-0 flex-1"><div className="font-medium text-sm truncate">{u.name}</div><div className="text-xs text-muted-foreground">{u.designation}</div></div>
                  <Badge variant="outline" className="text-[10px]">{u.availability}</Badge>
                </CardContent></Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-3 mt-4">
          {[
            { who: "u-002", what: "uploaded Compliance_Matrix.docx", at: "2 hrs ago" },
            { who: "u-001", what: "changed status to Under Review", at: "Yesterday" },
            { who: "u-005", what: "added comment on technical compliance", at: "2 days ago" },
            { who: "u-003", what: "revised estimate value to 248.5 Cr", at: "3 days ago" },
            { who: "u-001", what: "created this tender", at: "5 days ago" },
          ].map((a, i) => {
            const u = userById(a.who);
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-[10px] font-semibold shrink-0">{u?.initials}</div>
                <div className="flex-1 text-sm">
                  <div><span className="font-medium">{u?.name}</span> <span className="text-muted-foreground">{a.what}</span></div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2"><MessageSquare className="h-3 w-3" />{a.at}</div>
                </div>
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </>
  );
}
