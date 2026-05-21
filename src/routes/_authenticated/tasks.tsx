import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus, Search, ListChecks, KanbanSquare, CalendarDays, MessageSquare, Paperclip,
  Link as LinkIcon, AlignLeft,
} from "lucide-react";
import {
  type Task, type Priority, TASK_STATUSES, taskStatusColor, priorityColor, userById, TENDERS, OFFERS, TEAM,
} from "@/lib/mock-data";
import { useAuth } from "@/lib/auth";
import { useTasks } from "@/lib/task-store";
import { toast } from "sonner";

function tenderName(id?: string) {
  if (!id) return null;
  const t = TENDERS.find((x) => x.id === id);
  return t ? `${t.id} · ${t.name}` : id;
}

export const Route = createFileRoute("/_authenticated/tasks")({ component: TasksPage });

function TasksPage() {
  const { user } = useAuth();
  const { tasks, addTask } = useTasks();
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Task | null>(null);
  const [newOpen, setNewOpen] = useState(false);

  const visible = useMemo(() => {
    return tasks.filter((t) => {
      if (user?.role === "member" && t.assignee !== user.id) return false;
      if (q) {
        const s = q.toLowerCase();
        return t.title.toLowerCase().includes(s) || t.id.toLowerCase().includes(s) || (tenderName(t.linkedTo) ?? "").toLowerCase().includes(s);
      }
      return true;
    });
  }, [tasks, q, user]);

  // Group by linked tender. For members: only tenders that actually have a task assigned to them.
  const byTender = useMemo(() => {
    const map = new Map<string, Task[]>();
    visible.forEach((t) => {
      if (!t.linkedTo) {
        if (user?.role === "member") return;
        const arr = map.get("__none__") ?? [];
        arr.push(t);
        map.set("__none__", arr);
        return;
      }
      const arr = map.get(t.linkedTo) ?? [];
      arr.push(t);
      map.set(t.linkedTo, arr);
    });
    return Array.from(map.entries());
  }, [visible, user]);

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Tasks</h1>
          <p className="text-sm text-muted-foreground">Plan, assign and track work across tenders and offers.</p>
        </div>
        {user?.role === "manager" && (
          <Dialog open={newOpen} onOpenChange={setNewOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brand-gradient text-brand-foreground">
                <Plus className="h-4 w-4 mr-2" />New Task
              </Button>
            </DialogTrigger>
            <NewTaskDialog
              onClose={() => setNewOpen(false)}
              onCreate={(data) => {
                const created = addTask(data);
                toast.success(`Task created: ${created.id}`, { description: `Assigned to ${userById(created.assignee)?.name}` });
                setNewOpen(false);
              }}
            />
          </Dialog>
        )}
      </div>

      <Card className="shadow-card">
        <CardContent className="p-4 flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tasks…" className="pl-9 h-10" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue={user?.role === "member" ? "tenders" : "board"}>
        <TabsList>
          <TabsTrigger value="board"><KanbanSquare className="h-4 w-4 mr-2" />Kanban</TabsTrigger>
          <TabsTrigger value="list"><ListChecks className="h-4 w-4 mr-2" />List</TabsTrigger>
          <TabsTrigger value="timeline"><CalendarDays className="h-4 w-4 mr-2" />Timeline</TabsTrigger>
          <TabsTrigger value="tenders"><LinkIcon className="h-4 w-4 mr-2" />By Tender</TabsTrigger>
        </TabsList>

        <TabsContent value="tenders" className="mt-4 space-y-4">
          {byTender.length === 0 && <div className="text-sm text-muted-foreground p-6 text-center">No tasks assigned to you yet.</div>}
          {byTender.map(([tid, list]) => {
            const t = TENDERS.find((x) => x.id === tid);
            return (
              <Card key={tid} className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t ? "Tender" : "Unlinked"}</div>
                      <div className="font-semibold text-sm truncate">{t ? t.name : "No linked tender"}</div>
                      {t && <div className="text-xs text-muted-foreground">{t.id} · {t.customer} · {t.location}, {t.state}</div>}
                    </div>
                    {t && <Badge variant="outline" className="shrink-0">{list.length} task{list.length > 1 ? "s" : ""}</Badge>}
                  </div>
                  <div className="divide-y border rounded-md">
                    {list.map((tk) => {
                      const u = userById(tk.assignee);
                      return (
                        <div key={tk.id} className="flex items-center gap-3 p-3 hover:bg-accent/40 cursor-pointer" onClick={() => setSelected(tk)}>
                          <div className="h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center">{u?.initials}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{tk.title}</div>
                            <div className="text-xs text-muted-foreground">{tk.id} · Due {new Date(tk.dueDate).toLocaleDateString()}</div>
                          </div>
                          <Badge variant="outline" className={priorityColor(tk.priority)}>{tk.priority}</Badge>
                          <Badge variant="outline" className={taskStatusColor(tk.status)}>{tk.status}</Badge>
                          <div className="w-28 hidden sm:block"><Progress value={tk.progress} className="h-1.5" /></div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>


        <TabsContent value="board" className="mt-4">
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${TASK_STATUSES.length}, minmax(260px, 1fr))` }}>
            {TASK_STATUSES.map((col) => {
              const items = visible.filter((t) => t.status === col);
              return (
                <div key={col} className="flex flex-col min-w-0">
                  <div className="flex items-center justify-between px-2 py-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${col === "Delayed" ? "bg-destructive" : col === "Completed" ? "bg-navy" : col === "Under Review" ? "bg-blue-500" : col === "In Progress" ? "bg-amber-500" : "bg-slate-400"}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider">{col}</span>
                      <Badge variant="outline" className="text-[10px]">{items.length}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {items.map((t) => {
                      const u = userById(t.assignee);
                      return (
                        <Card key={t.id} className="shadow-card hover:shadow-elevated cursor-pointer transition" onClick={() => setSelected(t)}>
                          <CardContent className="p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] text-muted-foreground">{t.id}</span>
                              <Badge variant="outline" className={`text-[10px] ${priorityColor(t.priority)}`}>{t.priority}</Badge>
                            </div>
                            <div className="font-medium text-sm leading-snug">{t.title}</div>
                            {t.linkedTo && <div className="inline-flex items-center gap-1 text-[10px] text-brand"><LinkIcon className="h-3 w-3" />{t.linkedTo}</div>}
                            <Progress value={t.progress} className="h-1.5" />
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-[9px] font-semibold" title={u?.name}>{u?.initials}</div>
                                <span className="text-[10px] text-muted-foreground">{new Date(t.dueDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                <span className="inline-flex items-center gap-0.5"><MessageSquare className="h-3 w-3" />{t.comments}</span>
                                <span className="inline-flex items-center gap-0.5"><Paperclip className="h-3 w-3" />{t.attachments}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                    {items.length === 0 && <div className="text-[10px] text-muted-foreground p-3 text-center border border-dashed rounded-md">No tasks</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          <Card className="shadow-card overflow-hidden">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-4 py-3">Task</th>
                    <th className="text-left font-medium px-4 py-3">Assignee</th>
                    <th className="text-left font-medium px-4 py-3">Linked</th>
                    <th className="text-left font-medium px-4 py-3">Status</th>
                    <th className="text-left font-medium px-4 py-3">Priority</th>
                    <th className="text-left font-medium px-4 py-3">Due</th>
                    <th className="text-left font-medium px-4 py-3">Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {visible.map((t) => {
                    const u = userById(t.assignee);
                    return (
                      <tr key={t.id} className="hover:bg-accent/40 cursor-pointer" onClick={() => setSelected(t)}>
                        <td className="px-4 py-3"><div className="font-medium">{t.title}</div><div className="text-xs text-muted-foreground">{t.id}</div></td>
                        <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center">{u?.initials}</div><span>{u?.name}</span></div></td>
                        <td className="px-4 py-3 text-xs text-brand">{t.linkedTo ?? "—"}</td>
                        <td className="px-4 py-3"><Badge variant="outline" className={taskStatusColor(t.status)}>{t.status}</Badge></td>
                        <td className="px-4 py-3"><Badge variant="outline" className={priorityColor(t.priority)}>{t.priority}</Badge></td>
                        <td className="px-4 py-3 whitespace-nowrap">{new Date(t.dueDate).toLocaleDateString()}</td>
                        <td className="px-4 py-3 w-[160px]"><Progress value={t.progress} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="mt-4">
          <Card className="shadow-card"><CardContent className="p-4 space-y-3">
            {visible.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()).map((t) => {
              const u = userById(t.assignee);
              return (
                <div key={t.id} className="grid grid-cols-[120px_1fr] gap-4 items-center">
                  <div className="text-xs text-right text-muted-foreground whitespace-nowrap">{new Date(t.dueDate).toLocaleDateString(undefined, { day: "2-digit", month: "short" })}</div>
                  <div className="flex items-center gap-3 p-3 rounded-md bg-secondary/40 border-l-2 border-brand cursor-pointer hover:bg-accent/40" onClick={() => setSelected(t)}>
                    <div className="h-8 w-8 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center">{u?.initials}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{t.title}</div>
                      <div className="text-xs text-muted-foreground">{t.id} · {u?.name}</div>
                    </div>
                    <Badge variant="outline" className={taskStatusColor(t.status)}>{t.status}</Badge>
                  </div>
                </div>
              );
            })}
          </CardContent></Card>
        </TabsContent>
      </Tabs>

      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selected && <TaskDetail task={selected} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function TaskDetail({ task }: { task: Task }) {
  const [subs, setSubs] = useState(task.subtasks);
  const toggle = (id: string) => setSubs((arr) => arr.map((s) => s.id === id ? { ...s, done: !s.done } : s));
  const pct = subs.length === 0 ? task.progress : Math.round((subs.filter((s) => s.done).length / subs.length) * 100);
  const u = userById(task.assignee);

  return (
    <>
      <SheetHeader className="pr-8">
        <div className="text-xs text-muted-foreground">{task.id}{task.linkedTo && <> · <span className="text-brand">{task.linkedTo}</span></>}</div>
        <SheetTitle>{task.title}</SheetTitle>
        <SheetDescription className="flex items-start gap-2"><AlignLeft className="h-4 w-4 mt-0.5" />{task.description}</SheetDescription>
        <div className="flex gap-2 pt-2">
          <Badge variant="outline" className={taskStatusColor(task.status)}>{task.status}</Badge>
          <Badge variant="outline" className={priorityColor(task.priority)}>{task.priority}</Badge>
        </div>
      </SheetHeader>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <div className="p-3 rounded-md bg-secondary/60">
          <div className="text-[10px] uppercase text-muted-foreground">Assignee</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-7 w-7 rounded-full bg-brand-gradient text-brand-foreground text-[10px] font-semibold grid place-items-center">{u?.initials}</div>
            <div className="text-xs font-medium truncate">{u?.name}</div>
          </div>
        </div>
        <div className="p-3 rounded-md bg-secondary/60">
          <div className="text-[10px] uppercase text-muted-foreground">Due</div>
          <div className="font-medium mt-1">{new Date(task.dueDate).toLocaleDateString()}</div>
        </div>
        <div className="p-3 rounded-md bg-secondary/60">
          <div className="text-[10px] uppercase text-muted-foreground">Progress</div>
          <div className="flex items-center gap-2 mt-1"><Progress value={pct} className="h-1.5" /><span className="text-xs font-semibold">{pct}%</span></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Subtasks ({subs.filter((s) => s.done).length}/{subs.length})</div>
        <div className="space-y-1.5">
          {subs.map((s) => {
            const su = userById(s.assignee);
            return (
              <label key={s.id} className="flex items-center gap-3 p-2.5 rounded-md hover:bg-accent/40 cursor-pointer border">
                <Checkbox checked={s.done} onCheckedChange={() => toggle(s.id)} />
                <span className={`flex-1 text-sm ${s.done ? "line-through text-muted-foreground" : ""}`}>{s.title}</span>
                <div className="h-6 w-6 rounded-full bg-secondary text-[10px] grid place-items-center font-semibold">{su?.initials}</div>
              </label>
            );
          })}
          {subs.length === 0 && <div className="text-xs text-muted-foreground p-3 border border-dashed rounded-md text-center">No subtasks yet</div>}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Attachments</div>
        <Card className="border-dashed"><CardContent className="p-4 text-center text-xs text-muted-foreground">
          <Paperclip className="h-5 w-5 mx-auto mb-1" />Drop files here or browse · {task.attachments} attached
        </CardContent></Card>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Comments</div>
        <Input placeholder="Write a comment, use @ to mention…" />
      </div>
    </>
  );
}
