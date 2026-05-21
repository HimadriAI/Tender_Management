import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "manager" | "member";
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  designation: string;
  department: string;
  avatar?: string;
}

const SEED_USERS: Array<AuthUser & { password: string }> = [
  {
    id: "u-001",
    name: "Arjun Mehta",
    email: "manager@bdplatform.com",
    password: "Manager@123",
    role: "manager",
    designation: "Business Development Manager",
    department: "Business Development",
  },
  {
    id: "u-002",
    name: "Priya Sharma",
    email: "member@bdplatform.com",
    password: "Member@123",
    role: "member",
    designation: "BD Executive",
    department: "Proposals & Estimation",
  },
];

interface AuthCtx {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "bdp.auth.user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 500));
    const found = SEED_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    );
    if (!found) throw new Error("Invalid email or password");
    const { password: _pw, ...safe } = found;
    localStorage.setItem(KEY, JSON.stringify(safe));
    setUser(safe);
  };

  const signOut = () => {
    localStorage.removeItem(KEY);
    setUser(null);
  };

  return <Ctx.Provider value={{ user, loading, signIn, signOut }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}
