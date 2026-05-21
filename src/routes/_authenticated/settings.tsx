import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, ShieldCheck, KeyRound, Bell } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/settings")({ component: SettingsPage });

function SettingsPage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Settings & Preferences</h1>
        <p className="text-sm text-muted-foreground">Account security, notifications and active sessions.</p>
      </div>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base flex items-center gap-2"><KeyRound className="h-4 w-4" />Change password</CardTitle></CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-3">
          <div className="space-y-1.5"><Label>Current</Label><Input type="password" /></div>
          <div className="space-y-1.5"><Label>New</Label><Input type="password" /></div>
          <div className="space-y-1.5"><Label>Confirm</Label><Input type="password" /></div>
          <div className="sm:col-span-3 flex justify-end">
            <Button className="bg-brand-gradient text-brand-foreground" onClick={() => toast.success("Password updated (demo)")}>Update password</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Two-factor authentication</CardTitle><CardDescription>Add an extra layer of security to your account.</CardDescription></CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-sm">Authenticator app</div>
          <Switch />
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base flex items-center gap-2"><Bell className="h-4 w-4" />Notifications</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {[
            ["Email digests", "Daily summary of activity across your workspace"],
            ["Task assignments", "When someone assigns you a task"],
            ["Mentions", "When you are @-mentioned"],
            ["Deadline reminders", "24h before any deadline you own"],
            ["Status updates", "Tender or offer status changes"],
          ].map(([t, d], i) => (
            <div key={t} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
              <Switch defaultChecked={i !== 0} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="text-base">Active sessions</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { icon: Monitor, name: "MacBook Pro · Chrome", loc: "Mumbai, IN", time: "Current session" },
            { icon: Smartphone, name: "iPhone 15 · Safari", loc: "Mumbai, IN", time: "2 hours ago" },
            { icon: Monitor, name: "Windows 11 · Edge", loc: "Pune, IN", time: "Yesterday" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center"><s.icon className="h-5 w-5" /></div>
              <div className="flex-1">
                <div className="text-sm font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.loc} · {s.time}</div>
              </div>
              {i === 0 ? <Badge variant="outline">Active</Badge> : <Button variant="outline" size="sm">Sign out</Button>}
            </div>
          ))}
          <Separator />
          <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">Sign out all other sessions</Button>
        </CardContent>
      </Card>
    </div>
  );
}
