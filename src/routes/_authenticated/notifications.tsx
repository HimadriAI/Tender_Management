import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NOTIFICATIONS, priorityColor } from "@/lib/mock-data";
import { Bell, Check, FileText, AtSign, AlertTriangle, FileUp, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/notifications")({ component: NotificationsPage });

const ICONS = {
  task: FileText, deadline: AlertTriangle, mention: AtSign,
  status: BadgeCheck, document: FileUp, approval: Bell,
};

function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [items, setItems] = useState(NOTIFICATIONS);

  const visible = items.filter((n) => filter === "all" || n.unread);
  const markAll = () => setItems((arr) => arr.map((n) => ({ ...n, unread: false })));

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Notifications</h1>
          <p className="text-sm text-muted-foreground">Realtime updates across tenders, offers and tasks.</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | "unread")}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" onClick={markAll}><Check className="h-4 w-4 mr-2" />Mark all read</Button>
        </div>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-0 divide-y">
          {visible.map((n) => {
            const Icon = ICONS[n.type];
            return (
              <div key={n.id} className={`flex items-start gap-4 p-4 ${n.unread ? "bg-brand/5" : ""} hover:bg-accent/40 transition`}>
                <div className={`h-10 w-10 rounded-lg grid place-items-center shrink-0 ${n.unread ? "bg-brand/15 text-brand" : "bg-secondary text-muted-foreground"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-sm">{n.title}</div>
                    {n.priority && <Badge variant="outline" className={priorityColor(n.priority)}>{n.priority}</Badge>}
                    {n.unread && <span className="h-2 w-2 rounded-full bg-brand ml-auto" />}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">{n.body}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{n.time}</div>
                </div>
              </div>
            );
          })}
          {visible.length === 0 && <div className="p-12 text-center text-sm text-muted-foreground">You're all caught up.</div>}
        </CardContent>
      </Card>
    </div>
  );
}
