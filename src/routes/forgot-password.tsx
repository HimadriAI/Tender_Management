import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Loader2, MailCheck, ShieldCheck, Building2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({ component: ForgotPage });

function ForgotPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setStep(2);
    toast.success("Verification code sent", { description: `Use 123456 for this demo.` });
  };

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) { toast.error("Enter the 6-digit code"); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    navigate({ to: "/reset-password", search: { email } });
  };

  return (
    <div className="min-h-screen bg-navy-gradient grid place-items-center p-6 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="w-full max-w-md glass rounded-2xl shadow-elevated p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center">
            <Building2 className="h-5 w-5 text-brand-foreground" />
          </div>
          <div className="font-semibold">BD Platform</div>
        </div>

        {step === 1 ? (
          <>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Forgot password</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your registered email and we'll send a verification code.</p>
            <form onSubmit={sendOtp} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" placeholder="you@company.com" />
              </div>
              <Button disabled={loading} className="w-full h-11 bg-brand-gradient text-brand-foreground">
                {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending…</> : "Send verification code"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 text-xs text-brand font-medium mb-3">
              <MailCheck className="h-4 w-4" /> Code sent to {email}
            </div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Verify your email</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter the 6-digit code we just sent.</p>

            <form onSubmit={verify} className="mt-6 space-y-5">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button disabled={loading} className="w-full h-11 bg-brand-gradient text-brand-foreground">
                {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Verifying…</> : <><ShieldCheck className="h-4 w-4 mr-2" />Verify & continue</>}
              </Button>
              <button type="button" onClick={() => setStep(1)} className="w-full text-xs text-muted-foreground hover:text-foreground">
                Didn't get the code? Try again
              </button>
            </form>
          </>
        )}

        <Link to="/login" className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
        </Link>
      </div>
    </div>
  );
}
