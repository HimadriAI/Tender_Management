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
