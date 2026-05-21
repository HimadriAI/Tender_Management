import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Plus, Search } from "lucide-react";
import { TEAM, TASKS } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/team")({ component: TeamPage });

function TeamPage() {
  const [q, setQ] = useState("");
  const visible = TEAM.filter((t) => !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.designation.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Team Management</h1>
          <p className="text-sm text-muted-foreground">Roles, availability and workload across your BD team.</p>
        </div>
        <Button className="bg-brand-gradient text-brand-foreground"><Plus className="h-4 w-4 mr-2" />Invite member</Button>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search members…" className="pl-9 h-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((m) => {
          const active = TASKS.filter((t) => t.assignee === m.id && t.status !== "Completed").length;
          const done = TASKS.filter((t) => t.assignee === m.id && t.status === "Completed").length;
          return (
            <Card key={m.id} className="shadow-card hover:shadow-elevated transition">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center font-semibold">{m.initials}</div>
                    <span className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full ring-2 ring-card ${m.availability === "available" ? "bg-blue-500" : m.availability === "busy" ? "bg-brand" : "bg-amber-500"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold truncate">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.designation}</div>
                    <div className="text-xs text-muted-foreground">{m.department}</div>
                    <Badge variant="outline" className="mt-2 text-[10px]">{m.role === "manager" ? "Business Manager" : "Team Member"}</Badge>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-md bg-secondary/60">
                    <div className="text-lg font-bold">{active}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">Active tasks</div>
                  </div>
                  <div className="p-2 rounded-md bg-secondary/60">
                    <div className="text-lg font-bold">{done}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">Completed</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1"><Mail className="h-3.5 w-3.5 mr-1.5" />Email</Button>
                  <Button variant="outline" size="sm" className="flex-1"><Phone className="h-3.5 w-3.5 mr-1.5" />Call</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
