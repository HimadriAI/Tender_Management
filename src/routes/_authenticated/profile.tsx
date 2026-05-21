import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Award } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { TASKS, TENDERS } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/profile")({ component: ProfilePage });

function ProfilePage() {
  const { user } = useAuth();
  if (!user) return null;

  const myTasks = TASKS.filter((t) => t.assignee === user.id);
  const myTenders = TENDERS.filter((t) => t.assignedMembers.includes(user.id));

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-5xl">
      <div className="relative rounded-2xl overflow-hidden bg-navy-gradient text-navy-foreground p-6 shadow-elevated">
        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative flex flex-wrap items-center gap-5">
          <div className="relative">
            <div className="h-20 w-20 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-2xl font-bold ring-4 ring-navy-foreground/20">
              {user.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
            </div>
            <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-navy-foreground text-navy grid place-items-center shadow-elevated">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>{user.name}</h1>
            <div className="text-navy-foreground/70">{user.designation} · {user.department}</div>
            <div className="text-sm text-navy-foreground/60 mt-0.5">{user.email}</div>
            <div className="flex gap-2 mt-3">
              <Badge className="bg-brand text-brand-foreground border-transparent">{user.role === "manager" ? "Business Manager" : "Team Member"}</Badge>
              <Badge variant="outline" className="border-navy-foreground/30 text-navy-foreground"><span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-1.5" />Available</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {[
          ["Active tenders", myTenders.length],
          ["My tasks", myTasks.length],
          ["Completed", myTasks.filter((t) => t.status === "Completed").length],
          ["Delayed", myTasks.filter((t) => t.status === "Delayed").length],
        ].map(([k, v]) => (
          <Card key={k as string} className="shadow-card">
            <CardContent className="p-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "Sora, Inter" }}>{v}</div>
              <div className="text-xs text-muted-foreground mt-1">{k}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base">Employee details</CardTitle></CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue={user.name} /></div>
          <div className="space-y-1.5"><Label>Email</Label><Input defaultValue={user.email} /></div>
          <div className="space-y-1.5"><Label>Designation</Label><Input defaultValue={user.designation} /></div>
          <div className="space-y-1.5"><Label>Department</Label><Input defaultValue={user.department} /></div>
          <div className="sm:col-span-2 flex justify-end"><Button className="bg-brand-gradient text-brand-foreground">Save changes</Button></div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base flex items-center gap-2"><Award className="h-4 w-4 text-brand" />Skills</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {["Tendering", "Cost Estimation", "Contracts", "EPC", "Negotiation", "BOQ", "Client Management", "Bid Strategy"].map((s) => (
            <Badge key={s} variant="outline" className="px-3 py-1">{s}</Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
