import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Building2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  validateSearch: (search: Record<string, unknown>) => ({ email: (search.email as string) || "" }),
  component: ResetPage,
});

function ResetPage() {
  const { email } = Route.useSearch();
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.length < 8) return toast.error("Password must be at least 8 characters");
    if (pw !== pw2) return toast.error("Passwords don't match");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setDone(true);
    setTimeout(() => navigate({ to: "/login" }), 1500);
  };

  return (
    <div className="min-h-screen bg-navy-gradient grid place-items-center p-6 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="w-full max-w-md glass rounded-2xl shadow-elevated p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center">
            <Building2 className="h-5 w-5 text-brand-foreground" />
          </div>
          <div className="font-semibold">Tender Management</div>
        </div>

        {done ? (
          <div className="text-center py-6">
            <div className="mx-auto h-14 w-14 rounded-full bg-navy text-navy-foreground grid place-items-center mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Password updated</h2>
            <p className="text-sm text-muted-foreground mt-1">Redirecting you to sign in…</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Reset password</h1>
            <p className="text-sm text-muted-foreground mt-1">Set a new password for <span className="font-medium text-foreground">{email || "your account"}</span>.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="pw">New password</Label>
                <Input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="h-11" placeholder="At least 8 characters" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pw2">Confirm password</Label>
                <Input id="pw2" type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} className="h-11" />
              </div>
              <Button disabled={loading} className="w-full h-11 bg-brand-gradient text-brand-foreground">
                {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Updating…</> : "Update password"}
              </Button>
            </form>
            <Link to="/login" className="block text-center mt-6 text-xs text-muted-foreground hover:text-foreground">
              Back to sign in
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
