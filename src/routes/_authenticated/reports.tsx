import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileType2 } from "lucide-react";
import {
  Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip as RTooltip, XAxis, YAxis, Cell, Pie, PieChart,
} from "recharts";

export const Route = createFileRoute("/_authenticated/reports")({ component: ReportsPage });

const tenderPerf = [
  { m: "Jan", submitted: 8, won: 3 }, { m: "Feb", submitted: 11, won: 4 },
  { m: "Mar", submitted: 9, won: 5 }, { m: "Apr", submitted: 13, won: 6 },
  { m: "May", submitted: 10, won: 4 },
];
const conversion = [
  { m: "Jan", rate: 32 }, { m: "Feb", rate: 38 }, { m: "Mar", rate: 44 },
  { m: "Apr", rate: 47 }, { m: "May", rate: 41 },
];
const productivity = [
  { name: "Arjun", tasks: 24 }, { name: "Priya", tasks: 31 }, { name: "Rahul", tasks: 28 },
  { name: "Neha", tasks: 19 }, { name: "Vikram", tasks: 22 }, { name: "Aisha", tasks: 17 },
];
const split = [
  { name: "Won", value: 22 }, { name: "Lost", value: 18 }, { name: "Pending", value: 35 }, { name: "On Hold", value: 8 },
];
const COLORS = ["oklch(0.24 0.07 264)", "oklch(0.58 0.22 27)", "oklch(0.45 0.12 250)", "oklch(0.65 0.04 257)"];

function ReportsPage() {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, Inter" }}>Reports & Analytics</h1>
          <p className="text-sm text-muted-foreground">Performance, conversion and team productivity insights.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><FileSpreadsheet className="h-4 w-4 mr-2" />Export Excel</Button>
          <Button className="bg-brand-gradient text-brand-foreground"><FileType2 className="h-4 w-4 mr-2" />Export PDF</Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Tender performance</CardTitle><CardDescription>Submitted vs won</CardDescription></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={tenderPerf}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.015 255)" />
                <XAxis dataKey="m" fontSize={12} stroke="oklch(0.5 0.03 257)" />
                <YAxis fontSize={12} stroke="oklch(0.5 0.03 257)" />
                <RTooltip contentStyle={{ borderRadius: 8 }} />
                <Bar dataKey="submitted" fill="oklch(0.24 0.07 264)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="won" fill="oklch(0.58 0.22 27)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Conversion rate</CardTitle><CardDescription>Offer-to-PO conversion (%)</CardDescription></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={conversion}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.015 255)" />
                <XAxis dataKey="m" fontSize={12} stroke="oklch(0.5 0.03 257)" />
                <YAxis fontSize={12} stroke="oklch(0.5 0.03 257)" />
                <RTooltip contentStyle={{ borderRadius: 8 }} />
                <Line type="monotone" dataKey="rate" stroke="oklch(0.58 0.22 27)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Team productivity</CardTitle><CardDescription>Tasks completed (last 30 days)</CardDescription></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={productivity} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.015 255)" />
                <XAxis type="number" fontSize={12} stroke="oklch(0.5 0.03 257)" />
                <YAxis type="category" dataKey="name" fontSize={12} stroke="oklch(0.5 0.03 257)" width={70} />
                <RTooltip contentStyle={{ borderRadius: 8 }} />
                <Bar dataKey="tasks" fill="oklch(0.24 0.07 264)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Pipeline split</CardTitle><CardDescription>Status mix across opportunities</CardDescription></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={split} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={3}>
                  {split.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <RTooltip contentStyle={{ borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
