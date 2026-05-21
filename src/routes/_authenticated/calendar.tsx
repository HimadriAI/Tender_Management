import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TENDERS, TASKS, OFFERS } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/calendar")({ component: CalendarPage });

interface Ev { id: string; title: string; date: string; type: "tender" | "task" | "offer"; }

const EVENTS: Ev[] = [
  ...TENDERS.map((t): Ev => ({ id: t.id, title: t.name, date: t.dueDate, type: "tender" })),
  ...TASKS.map((t): Ev => ({ id: t.id, title: t.title, date: t.dueDate, type: "task" })),
  ...OFFERS.map((o): Ev => ({ id: o.id, title: o.name, date: o.validityDate, type: "offer" })),
];

function CalendarPage() {
  const [month, setMonth] = useState(new Date(2026, 4, 1)); // May 2026
  const year = month.getFullYear();
  const m = month.getMonth();
  const first = new Date(year, m, 1);
  const last = new Date(year, m + 1, 0);
  const startWeekday = first.getDay();
  const days = last.getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, m, d));
  while (cells.length % 7 !== 0) cells.push(null);

  const evOn = (d: Date) =>
    EVENTS.filter((e) => {
      const ed = new Date(e.date);
      return ed.getFullYear() === d.getFullYear() && ed.getMonth() === d.getMonth() && ed.getDate() === d.getDate();
    });

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Calendar</h1>
          <p className="text-sm text-muted-foreground">Submissions, deadlines, milestones and meetings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setMonth(new Date(year, m - 1, 1))}><ChevronLeft className="h-4 w-4" /></Button>
          <div className="font-semibold w-40 text-center">{month.toLocaleString(undefined, { month: "long", year: "numeric" })}</div>
          <Button variant="outline" size="icon" onClick={() => setMonth(new Date(year, m + 1, 1))}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-2">
          <div className="grid grid-cols-7 text-[10px] uppercase tracking-wider text-muted-foreground p-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d} className="px-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              const today = d && d.toDateString() === new Date().toDateString();
              const events = d ? evOn(d) : [];
              return (
                <div key={i} className={`min-h-[110px] rounded-md p-1.5 text-xs ${d ? "bg-card border" : ""} ${today ? "ring-2 ring-brand" : ""}`}>
                  {d && (
                    <>
                      <div className={`text-right text-[11px] font-semibold mb-1 ${today ? "text-brand" : "text-muted-foreground"}`}>{d.getDate()}</div>
                      <div className="space-y-1">
                        {events.slice(0, 3).map((e) => (
                          <div key={e.id} className={`truncate rounded px-1.5 py-1 text-[10px] font-medium ${e.type === "tender" ? "bg-navy/10 text-navy" : e.type === "offer" ? "bg-blue-500/10 text-blue-700 dark:text-blue-300" : "bg-brand/10 text-brand"}`}>
                            {e.title}
                          </div>
                        ))}
                        {events.length > 3 && <div className="text-[10px] text-muted-foreground">+{events.length - 3} more</div>}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base">Legend</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-3 text-xs">
          <Badge variant="outline" className="bg-navy/10 text-navy border-navy/30">Tender deadline</Badge>
          <Badge variant="outline" className="bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30">Offer validity</Badge>
          <Badge variant="outline" className="bg-brand/10 text-brand border-brand/30">Task due</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
