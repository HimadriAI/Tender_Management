import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search, Upload, Filter, Download, Paperclip, MoreHorizontal, FileSignature } from "lucide-react";
import { OFFERS, TEAM, type Offer, offerStatusColor, priorityColor, userById } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/offers")({ component: OffersPage });

const STATUSES = ["All", "Drafting", "Negotiation", "Sent", "Accepted", "Rejected", "On Hold"] as const;

function OffersPage() {
  const { user } = useAuth();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("All");
  const [selected, setSelected] = useState<Offer | null>(null);
  const [addOpen, setAddOpen] = useState(false);

  const visible = useMemo(() => {
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

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Live Offers</h1>
          <p className="text-sm text-muted-foreground">Proposals & negotiations across all active accounts.</p>
        </div>
        <div className="flex gap-2">
          {user?.role === "manager" && (
            <>
              <Button variant="outline" onClick={() => toast.info("Excel bulk import (demo)")}><Upload className="h-4 w-4 mr-2" />Bulk Import</Button>
              <Dialog open={addOpen} onOpenChange={setAddOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-brand-gradient text-brand-foreground"><Plus className="h-4 w-4 mr-2" />Add Offer</Button>
                </DialogTrigger>
                <AddOfferDialog onClose={() => setAddOpen(false)} />
              </Dialog>
            </>
          )}
        </div>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-4 flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search offer, client or ID…" className="pl-9 h-10" />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[170px] h-10"><SelectValue /></SelectTrigger>
            <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
          <Button variant="outline" className="h-10"><Filter className="h-4 w-4 mr-2" />Filters</Button>
          <Button variant="outline" className="h-10 ml-auto"><Download className="h-4 w-4 mr-2" />Export</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((o) => (
          <Card key={o.id} className="shadow-card hover:shadow-elevated transition cursor-pointer group" onClick={() => setSelected(o)}>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><FileSignature className="h-3.5 w-3.5" />{o.id}</div>
                <Badge variant="outline" className={offerStatusColor(o.status)}>{o.status}</Badge>
              </div>
              <div>
                <div className="font-semibold group-hover:text-brand transition">{o.name}</div>
                <div className="text-xs text-muted-foreground">{o.customer}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>₹ {o.value} Cr</div>
                <Badge variant="outline" className={priorityColor(o.priority)}>{o.priority}</Badge>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex -space-x-2">
                  {o.assignedMembers.slice(0, 4).map((id) => {
                    const u = userById(id);
                    return <div key={id} className="h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center ring-2 ring-card" title={u?.name}>{u?.initials}</div>;
                  })}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Paperclip className="h-3 w-3" />{o.documents}</span>
                  <span>Due {new Date(o.validityDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {visible.length === 0 && (
          <div className="col-span-full text-center text-sm text-muted-foreground py-12">No offers found.</div>
        )}
      </div>

      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-xl">
          {selected && (
            <>
              <SheetHeader className="pr-8">
                <div className="text-xs text-muted-foreground">{selected.id} · {selected.ref}</div>
                <SheetTitle>{selected.name}</SheetTitle>
                <SheetDescription>{selected.customer}</SheetDescription>
              </SheetHeader>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Value", `₹ ${selected.value} Cr`],
                  ["Status", selected.status], ["Priority", selected.priority],
                  ["Proposal Date", new Date(selected.proposalDate).toLocaleDateString()],
                  ["Validity", new Date(selected.validityDate).toLocaleDateString()],
                  ["Documents", String(selected.documents)],
                ].map(([k, v]) => (
                  <div key={k} className="p-3 rounded-md bg-secondary/60">
                    <div className="text-[10px] uppercase text-muted-foreground">{k}</div>
                    <div className="font-medium mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm">
                <div className="text-xs uppercase text-muted-foreground mb-2">Remarks</div>
                <div className="p-3 rounded-md bg-secondary/40 text-muted-foreground">{selected.remarks}</div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm"><MoreHorizontal className="h-4 w-4 mr-1" />More</Button>
                <Button size="sm" className="bg-brand-gradient text-brand-foreground">Update status</Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function OField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs">{label}</Label>
      {children}
    </div>
  );
}

function AddOfferDialog({ onClose }: { onClose: () => void }) {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>Add New Offer</DialogTitle>
        <DialogDescription>Capture all fields from the BD Live Offer template.</DialogDescription>
      </DialogHeader>
      <div className="max-h-[70vh] overflow-y-auto pr-1 space-y-5 py-2">
        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Identification</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <OField label="Sl. No."><Input /></OField>
            <OField label="TEL Tender Ref"><Input placeholder="TEL/26/008" /></OField>
            <OField label="Name of Work"><Input /></OField>
            <OField label="State"><Input /></OField>
            <OField label="Location"><Input /></OField>
            <OField label="Customer"><Input /></OField>
            <OField label="Sector">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["O&G", "Fertilizer", "Power", "Petrochem", "Steel"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Job Type">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["EPC", "LSTK", "Service", "IR", "Supply"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Job Nature">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Known", "Existing", "New"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Site"><Input /></OField>
            <OField label="PMC"><Input /></OField>
          </div>
        </section>

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Dates & Approvals</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <OField label="Tender Publish Date"><Input type="date" /></OField>
            <OField label="Original Due Date"><Input type="date" /></OField>
            <OField label="Revised Due Date"><Input type="date" /></OField>
            <OField label="Go / No Go">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Go", "No Go", "Pending"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Bid / No Bid Meeting"><Input type="date" /></OField>
            <OField label="Bid / No Bid Approval Date"><Input type="date" /></OField>
            <OField label="Internal Estimate Date"><Input type="date" /></OField>
            <OField label="Participants in Review"><Input placeholder="Comma-separated names" /></OField>
          </div>
        </section>

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Team</div>
          <div className="grid sm:grid-cols-2 gap-3">
            <OField label="BD Responsible Person">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{TEAM.map((m) => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Supporting Team Lead">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{TEAM.map((m) => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
          </div>
        </section>

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Estimate (Cr.)</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <OField label="Est. Value (Cr.)"><Input type="number" step="0.01" /></OField>
            <OField label="Supply"><Input type="number" step="0.01" /></OField>
            <OField label="Service"><Input type="number" step="0.01" /></OField>
            <OField label="C&S"><Input type="number" step="0.01" /></OField>
            <OField label="Mech"><Input type="number" step="0.01" /></OField>
            <OField label="E&I"><Input type="number" step="0.01" /></OField>
            <OField label="Job Duration (Months)"><Input type="number" /></OField>
            <OField label="Escalation (Y/N)">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Y", "N"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Mode of Bid Submission">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Online", "Offline"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
          </div>
        </section>

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Bid Cost / Guarantees</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <OField label="Cost of Tender (Rs.)"><Input type="number" /></OField>
            <OField label="EMD Amt (Cr.)"><Input type="number" step="0.01" /></OField>
            <OField label="EMD Type (BG/ISB/Fund)">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["BG", "ISB", "Fund"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="Validity (Days)"><Input type="number" /></OField>
            <OField label="PBG Amt"><Input type="number" step="0.01" /></OField>
            <OField label="PBG Type (BG/ISB)">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["BG", "ISB"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="ABG Amt"><Input type="number" step="0.01" /></OField>
            <OField label="ABG Type (BG/ISB)">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["BG", "ISB", "NA"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <OField label="RA">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Yes", "No"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
          </div>
        </section>

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Submission & Outcome</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <OField label="Submitted on"><Input type="date" /></OField>
            <OField label="Expected Bid Opening Date"><Input type="date" /></OField>
            <OField label="RA Review Date"><Input type="date" /></OField>
            <OField label="Status / Remarks"><Input placeholder="e.g. L1, awaiting LOI" /></OField>
            <OField label="Participating Bidders"><Input placeholder="Comma-separated" /></OField>
            <OField label="Probability">
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["High", "Medium", "Low"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </OField>
            <div className="sm:col-span-2 lg:col-span-3">
              <OField label="Lost Part Analysis"><Textarea rows={2} placeholder="If lost, capture reasons / gap analysis…" /></OField>
            </div>
          </div>
        </section>

        <section>
          <OField label="Remarks"><Textarea rows={3} placeholder="Any internal notes…" /></OField>
        </section>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-brand-gradient text-brand-foreground" onClick={() => { toast.success("Offer saved (demo)"); onClose(); }}>Save offer</Button>
      </DialogFooter>
    </DialogContent>
  );
}
