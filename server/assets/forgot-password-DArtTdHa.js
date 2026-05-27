import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { c as useNavigate, L as Link, t as toast } from "./router-BE7VNx6U.js";
import { d as createLucideIcon, a as cn, B as Button } from "./createLucideIcon-stNnoR0e.js";
import { I as Input } from "./input-CUJkaEtq.js";
import { L as Label } from "./label-Co6ldxv6.js";
import { B as Building2, L as LoaderCircle } from "./loader-circle-os6Ejert.js";
import { S as ShieldCheck } from "./shield-check-6wwif9fV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
];
const MailCheck = createLucideIcon("mail-check", __iconNode$1);
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
var Bt = Object.defineProperty, At = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable;
var vt = (r, s, e) => s in r ? Bt(r, s, { enumerable: true, configurable: true, writable: true, value: e }) : r[s] = e, St = (r, s) => {
  for (var e in s || (s = {})) gt.call(s, e) && vt(r, e, s[e]);
  if (Y) for (var e of Y(s)) Et.call(s, e) && vt(r, e, s[e]);
  return r;
}, bt = (r, s) => At(r, kt(s));
var Pt = (r, s) => {
  var e = {};
  for (var u in r) gt.call(r, u) && s.indexOf(u) < 0 && (e[u] = r[u]);
  if (r != null && Y) for (var u of Y(r)) s.indexOf(u) < 0 && Et.call(r, u) && (e[u] = r[u]);
  return e;
};
function ht(r) {
  let s = setTimeout(r, 0), e = setTimeout(r, 10), u = setTimeout(r, 50);
  return [s, e, u];
}
function _t(r) {
  let s = reactExports.useRef();
  return reactExports.useEffect(() => {
    s.current = r;
  }), s.current;
}
var Ot = 18, wt = 40, Gt = `${wt}px`, xt = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Tt({ containerRef: r, inputRef: s, pushPasswordManagerStrategy: e, isFocused: u }) {
  let [P, D] = reactExports.useState(false), [G, H] = reactExports.useState(false), [F, W] = reactExports.useState(false), Z = reactExports.useMemo(() => e === "none" ? false : (e === "increase-width" || e === "experimental-no-flickering") && P && G, [P, G, e]), T = reactExports.useCallback(() => {
    let f = r.current, h = s.current;
    if (!f || !h || F || e === "none") return;
    let a = f, B = a.getBoundingClientRect().left + a.offsetWidth, A = a.getBoundingClientRect().top + a.offsetHeight / 2, z = B - Ot, q = A;
    document.querySelectorAll(xt).length === 0 && document.elementFromPoint(z, q) === f || (D(true), W(true));
  }, [r, s, F, e]);
  return reactExports.useEffect(() => {
    let f = r.current;
    if (!f || e === "none") return;
    function h() {
      let A = window.innerWidth - f.getBoundingClientRect().right;
      H(A >= wt);
    }
    h();
    let a = setInterval(h, 1e3);
    return () => {
      clearInterval(a);
    };
  }, [r, e]), reactExports.useEffect(() => {
    let f = u || document.activeElement === s.current;
    if (e === "none" || !f) return;
    let h = setTimeout(T, 0), a = setTimeout(T, 2e3), B = setTimeout(T, 5e3), A = setTimeout(() => {
      W(true);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(a), clearTimeout(B), clearTimeout(A);
    };
  }, [s, u, e, T]), { hasPWMBadge: P, willPushPWMBadge: Z, PWM_BADGE_SPACE_WIDTH: Gt };
}
var jt = reactExports.createContext({}), Lt = reactExports.forwardRef((A, B) => {
  var z = A, { value: r, onChange: s, maxLength: e, textAlign: u = "left", pattern: P, placeholder: D, inputMode: G = "numeric", onComplete: H, pushPasswordManagerStrategy: F = "increase-width", pasteTransformer: W, containerClassName: Z, noScriptCSSFallback: T = Nt, render: f, children: h } = z, a = Pt(z, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]);
  var X, lt, ut, dt, ft;
  let [q, nt] = reactExports.useState(typeof a.defaultValue == "string" ? a.defaultValue : ""), i = r != null ? r : q, I = _t(i), x = reactExports.useCallback((t) => {
    s == null || s(t), nt(t);
  }, [s]), m = reactExports.useMemo(() => P ? typeof P == "string" ? new RegExp(P) : P : null, [P]), l = reactExports.useRef(null), K = reactExports.useRef(null), J = reactExports.useRef({ value: i, onChange: x, isIOS: typeof window != "undefined" && ((lt = (X = window == null ? void 0 : window.CSS) == null ? void 0 : X.supports) == null ? void 0 : lt.call(X, "-webkit-touch-callout", "none")) }), V = reactExports.useRef({ prev: [(ut = l.current) == null ? void 0 : ut.selectionStart, (dt = l.current) == null ? void 0 : dt.selectionEnd, (ft = l.current) == null ? void 0 : ft.selectionDirection] });
  reactExports.useImperativeHandle(B, () => l.current, []), reactExports.useEffect(() => {
    let t = l.current, o = K.current;
    if (!t || !o) return;
    J.current.value !== t.value && J.current.onChange(t.value), V.current.prev = [t.selectionStart, t.selectionEnd, t.selectionDirection];
    function d() {
      if (document.activeElement !== t) {
        L(null), N(null);
        return;
      }
      let c = t.selectionStart, b = t.selectionEnd, mt = t.selectionDirection, v = t.maxLength, C = t.value, _ = V.current.prev, g = -1, E = -1, w;
      if (C.length !== 0 && c !== null && b !== null) {
        let Dt = c === b, Ht = c === C.length && C.length < v;
        if (Dt && !Ht) {
          let y = c;
          if (y === 0) g = 0, E = 1, w = "forward";
          else if (y === v) g = y - 1, E = y, w = "backward";
          else if (v > 1 && C.length > 1) {
            let et = 0;
            if (_[0] !== null && _[1] !== null) {
              w = y < _[1] ? "backward" : "forward";
              let Wt = _[0] === _[1] && _[0] < v;
              w === "backward" && !Wt && (et = -1);
            }
            g = et + y, E = et + y + 1;
          }
        }
        g !== -1 && E !== -1 && g !== E && l.current.setSelectionRange(g, E, w);
      }
      let pt = g !== -1 ? g : c, Rt = E !== -1 ? E : b, yt = w != null ? w : mt;
      L(pt), N(Rt), V.current.prev = [pt, Rt, yt];
    }
    if (document.addEventListener("selectionchange", d, { capture: true }), d(), document.activeElement === t && Q(true), !document.getElementById("input-otp-style")) {
      let c = document.createElement("style");
      if (c.id = "input-otp-style", document.head.appendChild(c), c.sheet) {
        let b = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        $(c.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), $(c.sheet, `[data-input-otp]:autofill { ${b} }`), $(c.sheet, `[data-input-otp]:-webkit-autofill { ${b} }`), $(c.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), $(c.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let R = () => {
      o && o.style.setProperty("--root-height", `${t.clientHeight}px`);
    };
    R();
    let p = new ResizeObserver(R);
    return p.observe(t), () => {
      document.removeEventListener("selectionchange", d, { capture: true }), p.disconnect();
    };
  }, []);
  let [ot, rt] = reactExports.useState(false), [j, Q] = reactExports.useState(false), [M, L] = reactExports.useState(null), [k, N] = reactExports.useState(null);
  reactExports.useEffect(() => {
    ht(() => {
      var R, p, c, b;
      (R = l.current) == null || R.dispatchEvent(new Event("input"));
      let t = (p = l.current) == null ? void 0 : p.selectionStart, o = (c = l.current) == null ? void 0 : c.selectionEnd, d = (b = l.current) == null ? void 0 : b.selectionDirection;
      t !== null && o !== null && (L(t), N(o), V.current.prev = [t, o, d]);
    });
  }, [i, j]), reactExports.useEffect(() => {
    I !== void 0 && i !== I && I.length < e && i.length === e && (H == null || H(i));
  }, [e, H, I, i]);
  let O = Tt({ containerRef: K, inputRef: l, pushPasswordManagerStrategy: F, isFocused: j }), st = reactExports.useCallback((t) => {
    let o = t.currentTarget.value.slice(0, e);
    if (o.length > 0 && m && !m.test(o)) {
      t.preventDefault();
      return;
    }
    typeof I == "string" && o.length < I.length && document.dispatchEvent(new Event("selectionchange")), x(o);
  }, [e, x, I, m]), at = reactExports.useCallback(() => {
    var t;
    if (l.current) {
      let o = Math.min(l.current.value.length, e - 1), d = l.current.value.length;
      (t = l.current) == null || t.setSelectionRange(o, d), L(o), N(d);
    }
    Q(true);
  }, [e]), ct = reactExports.useCallback((t) => {
    var g, E;
    let o = l.current;
    if (!W && (!J.current.isIOS || !t.clipboardData || !o)) return;
    let d = t.clipboardData.getData("text/plain"), R = W ? W(d) : d;
    t.preventDefault();
    let p = (g = l.current) == null ? void 0 : g.selectionStart, c = (E = l.current) == null ? void 0 : E.selectionEnd, v = (p !== c ? i.slice(0, p) + R + i.slice(c) : i.slice(0, p) + R + i.slice(p)).slice(0, e);
    if (v.length > 0 && m && !m.test(v)) return;
    o.value = v, x(v);
    let C = Math.min(v.length, e - 1), _ = v.length;
    o.setSelectionRange(C, _), L(C), N(_);
  }, [e, x, m, i]), It = reactExports.useMemo(() => ({ position: "relative", cursor: a.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [a.disabled]), it = reactExports.useMemo(() => ({ position: "absolute", inset: 0, width: O.willPushPWMBadge ? `calc(100% + ${O.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: O.willPushPWMBadge ? `inset(0 ${O.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: u, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [O.PWM_BADGE_SPACE_WIDTH, O.willPushPWMBadge, u]), Mt = reactExports.useMemo(() => reactExports.createElement("input", bt(St({ autoComplete: a.autoComplete || "one-time-code" }, a), { "data-input-otp": true, "data-input-otp-placeholder-shown": i.length === 0 || void 0, "data-input-otp-mss": M, "data-input-otp-mse": k, inputMode: G, pattern: m == null ? void 0 : m.source, "aria-placeholder": D, style: it, maxLength: e, value: i, ref: l, onPaste: (t) => {
    var o;
    ct(t), (o = a.onPaste) == null || o.call(a, t);
  }, onChange: st, onMouseOver: (t) => {
    var o;
    rt(true), (o = a.onMouseOver) == null || o.call(a, t);
  }, onMouseLeave: (t) => {
    var o;
    rt(false), (o = a.onMouseLeave) == null || o.call(a, t);
  }, onFocus: (t) => {
    var o;
    at(), (o = a.onFocus) == null || o.call(a, t);
  }, onBlur: (t) => {
    var o;
    Q(false), (o = a.onBlur) == null || o.call(a, t);
  } })), [st, at, ct, G, it, e, k, M, a, m == null ? void 0 : m.source, i]), tt = reactExports.useMemo(() => ({ slots: Array.from({ length: e }).map((t, o) => {
    var c;
    let d = j && M !== null && k !== null && (M === k && o === M || o >= M && o < k), R = i[o] !== void 0 ? i[o] : null, p = i[0] !== void 0 ? null : (c = D == null ? void 0 : D[o]) != null ? c : null;
    return { char: R, placeholderChar: p, isActive: d, hasFakeCaret: d && R === null };
  }), isFocused: j, isHovering: !a.disabled && ot }), [j, ot, e, k, M, a.disabled, i]), Ct = reactExports.useMemo(() => f ? f(tt) : reactExports.createElement(jt.Provider, { value: tt }, h), [h, tt, f]);
  return reactExports.createElement(reactExports.Fragment, null, T !== null && reactExports.createElement("noscript", null, reactExports.createElement("style", null, T)), reactExports.createElement("div", { ref: K, "data-input-otp-container": true, style: It, className: Z }, Ct, reactExports.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Mt)));
});
Lt.displayName = "Input";
function $(r, s) {
  try {
    r.insertRule(s);
  } catch (e) {
    console.error("input-otp could not insert CSS rule:", s);
  }
}
var Nt = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const InputOTP = reactExports.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Lt,
  {
    ref,
    containerClassName: cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    ),
    className: cn("disabled:cursor-not-allowed", className),
    ...props
  }
));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center", className), ...props }));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = reactExports.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = reactExports.useContext(jt);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = reactExports.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, {}) }));
InputOTPSeparator.displayName = "InputOTPSeparator";
function ForgotPage() {
  const [step, setStep] = reactExports.useState(1);
  const [email, setEmail] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setStep(2);
    toast.success("Verification code sent", {
      description: `Use 123456 for this demo.`
    });
  };
  const verify = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Enter the 6-digit code");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    navigate({
      to: "/reset-password",
      search: {
        email
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-navy-gradient grid place-items-center p-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md glass rounded-2xl shadow-elevated p-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-brand-gradient grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-brand-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Tender Management" })
      ] }),
      step === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Forgot password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter your registered email and we'll send a verification code." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: sendOtp, className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Work email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "h-11", placeholder: "you@company.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: loading, className: "w-full h-11 bg-brand-gradient text-brand-foreground", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            "Sending…"
          ] }) : "Send verification code" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs text-brand font-medium mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MailCheck, { className: "h-4 w-4" }),
          " Code sent to ",
          email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
          fontFamily: "Sora, Inter"
        }, children: "Verify your email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter the 6-digit code we just sent." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: verify, className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTP, { maxLength: 6, value: otp, onChange: setOtp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPGroup, { children: Array.from({
            length: 6
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPSlot, { index: i }, i)) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: loading, className: "w-full h-11 bg-brand-gradient text-brand-foreground", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            "Verifying…"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 mr-2" }),
            "Verify & continue"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(1), className: "w-full text-xs text-muted-foreground hover:text-foreground", children: "Didn't get the code? Try again" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " Back to sign in"
      ] })
    ] })
  ] });
}
export {
  ForgotPage as component
};
