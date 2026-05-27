import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { a as Route, c as useNavigate, L as Link, t as toast } from "./router-BE7VNx6U.js";
import { d as createLucideIcon, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { B as Building2, L as LoaderCircle } from "./loader-circle-os6Ejert.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function ResetPage() {
  const {
    email
  } = Route.useSearch();
  const navigate = useNavigate();
  const [pw, setPw] = reactExports.useState("");
  const [pw2, setPw2] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (pw.length < 8) return toast.error("Password must be at least 8 characters");
    if (pw !== pw2) return toast.error("Passwords don't match");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setDone(true);
    setTimeout(() => navigate({
      to: "/login"
    }), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-navy-gradient grid place-items-center p-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md glass rounded-2xl shadow-elevated p-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-brand-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Tender Management" })
      ] }),
      done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-navy text-navy-foreground grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Password updated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Redirecting you to sign in…" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Reset password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          "Set a new password for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: email || "your account" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw", children: "New password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw", type: "password", value: pw, onChange: (e) => setPw(e.target.value), className: "h-11", placeholder: "At least 8 characters" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pw2", children: "Confirm password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pw2", type: "password", value: pw2, onChange: (e) => setPw2(e.target.value), className: "h-11" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: loading, className: "w-full h-11 bg-brand-gradient text-brand-foreground", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            "Updating…"
          ] }) : "Update password" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "block text-center mt-6 text-xs text-muted-foreground hover:text-foreground", children: "Back to sign in" })
      ] })
    ] })
  ] });
}
export {
  ResetPage as component
};
