import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { u as useAuth, c as useNavigate, L as Link, t as toast } from "./router-BE7VNx6U.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { C as Checkbox } from "./checkbox-BA3gnYx-.js";
import { B as Building2, L as LoaderCircle } from "./loader-circle-os6Ejert.js";
import { S as Sparkles } from "./sparkles-DujqbUFW.js";
import { E as Eye } from "./eye-CDafVXW-.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Brq_I10j.js";
import "./index-CZkg40wL.js";
import "./index-Bs4P9np0.js";
import "./index-CoTb1q3P.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function LoginPage() {
  const {
    signIn,
    user
  } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [remember, setRemember] = reactExports.useState(true);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (user) navigate({
      to: "/dashboard",
      replace: true
    });
  }, [user, navigate]);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      toast.success("Welcome back", {
        description: "You're signed in."
      });
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      toast.error("Sign in failed", {
        description: err.message
      });
    } finally {
      setLoading(false);
    }
  };
  const fillDemo = (role) => {
    if (role === "manager") {
      setEmail("manager@bdplatform.com");
      setPassword("Manager@123");
    } else {
      setEmail("member@bdplatform.com");
      setPassword("Member@123");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full bg-navy-gradient relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.05]", style: {
        backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
        backgroundSize: "44px 44px"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid min-h-screen lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-between p-12 text-navy-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-brand-gradient grid place-items-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-brand-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold tracking-tight", style: {
              fontFamily: "Sora, Inter"
            }, children: "Tender Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-navy-foreground/60", children: "Enterprise Business Development" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl xl:text-5xl font-bold leading-tight", style: {
            fontFamily: "Sora, Inter"
          }, children: [
            "Win more tenders.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Move as one team." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy-foreground/70 text-lg leading-relaxed", children: "A premium command center for live tenders, offers, tasks and team collaboration — built for real corporate business development." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid gap-3 text-sm text-navy-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-brand" }),
              " Real-time pipeline & deadlines"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-brand" }),
              " Role-based access & audit logs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-brand" }),
              " Document repository & versioning"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-navy-foreground/50", children: "© 2026 Tender Management. All rights reserved." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md glass rounded-2xl shadow-elevated p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-brand-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Tender Management" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", style: {
          fontFamily: "Sora, Inter"
        }, children: "Welcome back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sign in to your enterprise workspace." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Work email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", placeholder: "you@company.com", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "h-11" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-xs font-medium text-brand hover:underline", children: "Forgot password?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: show ? "text" : "password", autoComplete: "current-password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "h-11 pr-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "aria-label": "Toggle password visibility", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "remember", checked: remember, onCheckedChange: (v) => setRemember(!!v) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "remember", className: "text-sm font-normal text-muted-foreground", children: "Remember me on this device" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full h-11 bg-brand-gradient text-brand-foreground hover:opacity-95 shadow-elevated", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            "Signing in…"
          ] }) : "Sign in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-lg border bg-secondary/50 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground mb-2", children: "Demo credentials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => fillDemo("manager"), className: "rounded-md border bg-card p-2 text-left hover:border-brand transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Business Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground truncate", children: "manager@bdplatform.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Manager@123" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => fillDemo("member"), className: "rounded-md border bg-card p-2 text-left hover:border-brand transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Team Member" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground truncate", children: "member@bdplatform.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Member@123" })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  LoginPage as component
};
