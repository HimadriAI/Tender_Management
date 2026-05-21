import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Loader2, Shield, Sparkles, Building2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (user) navigate({ to: "/dashboard", replace: true }); }, [user, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      toast.success("Welcome back", { description: "You're signed in." });
      navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error("Sign in failed", { description: (err as Error).message });
    } finally { setLoading(false); }
  };

  const fillDemo = (role: "manager" | "member") => {
    if (role === "manager") { setEmail("manager@bdplatform.com"); setPassword("Manager@123"); }
    else { setEmail("member@bdplatform.com"); setPassword("Member@123"); }
  };

  return (
    <div className="min-h-screen w-full bg-navy-gradient relative overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative grid min-h-screen lg:grid-cols-2">
        {/* Left brand panel */}
        <div className="hidden lg:flex flex-col justify-between p-12 text-navy-foreground">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-brand-gradient grid place-items-center shadow-elevated">
              <Building2 className="h-6 w-6 text-brand-foreground" />
            </div>
            <div>
              <div className="font-semibold tracking-tight" style={{ fontFamily: "Sora, Inter" }}>BD Platform</div>
              <div className="text-xs text-navy-foreground/60">Enterprise Business Development</div>
            </div>
          </div>

          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight" style={{ fontFamily: "Sora, Inter" }}>
              Win more tenders.<br />
              <span className="text-brand">Move as one team.</span>
            </h1>
            <p className="text-navy-foreground/70 text-lg leading-relaxed">
              A premium command center for live tenders, offers, tasks and team collaboration —
              built for real corporate business development.
            </p>
            <ul className="grid gap-3 text-sm text-navy-foreground/80">
              <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-brand" /> Real-time pipeline & deadlines</li>
              <li className="flex items-center gap-3"><Shield className="h-4 w-4 text-brand" /> Role-based access & audit logs</li>
              <li className="flex items-center gap-3"><Building2 className="h-4 w-4 text-brand" /> Document repository & versioning</li>
            </ul>
          </div>

          <div className="text-xs text-navy-foreground/50">© 2026 BD Platform. All rights reserved.</div>
        </div>

        {/* Right login card */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md glass rounded-2xl shadow-elevated p-8">
            <div className="lg:hidden flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center">
                <Building2 className="h-5 w-5 text-brand-foreground" />
              </div>
              <div className="font-semibold">BD Platform</div>
            </div>

            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, Inter" }}>Welcome back</h2>
            <p className="text-sm text-muted-foreground mt-1">Sign in to your enterprise workspace.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" autoComplete="email" placeholder="you@company.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-xs font-medium text-brand hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Input id="password" type={show ? "text" : "password"} autoComplete="current-password"
                    placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required
                    className="h-11 pr-10" />
                  <button type="button" onClick={() => setShow((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Toggle password visibility">
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" checked={remember} onCheckedChange={(v) => setRemember(!!v)} />
                <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">Remember me on this device</Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-11 bg-brand-gradient text-brand-foreground hover:opacity-95 shadow-elevated">
                {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Signing in…</> : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 rounded-lg border bg-secondary/50 p-3">
              <div className="text-xs font-semibold text-foreground mb-2">Demo credentials</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button type="button" onClick={() => fillDemo("manager")} className="rounded-md border bg-card p-2 text-left hover:border-brand transition">
                  <div className="font-medium">Business Manager</div>
                  <div className="text-muted-foreground truncate">manager@bdplatform.com</div>
                  <div className="text-muted-foreground">Manager@123</div>
                </button>
                <button type="button" onClick={() => fillDemo("member")} className="rounded-md border bg-card p-2 text-left hover:border-brand transition">
                  <div className="font-medium">Team Member</div>
                  <div className="text-muted-foreground truncate">member@bdplatform.com</div>
                  <div className="text-muted-foreground">Member@123</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
