import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { u as useAuth, c as useNavigate } from "./router-BE7VNx6U.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Index() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (loading) return;
    navigate({
      to: user ? "/dashboard" : "/login",
      replace: true
    });
  }, [user, loading, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-navy-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-navy-foreground/80 text-sm tracking-wide", children: "Loading workspace…" }) });
}
export {
  Index as component
};
