const TEAM = [
  { id: "u-001", name: "Arjun Mehta", email: "manager@bdplatform.com", role: "manager", designation: "BD Manager", department: "Business Development", availability: "available", initials: "AM" },
  { id: "u-002", name: "Priya Sharma", email: "member@bdplatform.com", role: "member", designation: "BD Executive", department: "Proposals", availability: "busy", initials: "PS" },
  { id: "u-003", name: "Rahul Khanna", email: "rahul.k@bdplatform.com", role: "member", designation: "Estimation Lead", department: "Estimation", availability: "available", initials: "RK" },
  { id: "u-004", name: "Neha Iyer", email: "neha.i@bdplatform.com", role: "member", designation: "Proposal Engineer", department: "Proposals", availability: "away", initials: "NI" },
  { id: "u-005", name: "Vikram Singh", email: "vikram.s@bdplatform.com", role: "member", designation: "Technical Lead", department: "Engineering", availability: "available", initials: "VS" },
  { id: "u-006", name: "Aisha Khan", email: "aisha.k@bdplatform.com", role: "member", designation: "Document Controller", department: "Operations", availability: "available", initials: "AK" }
];
const TENDERS = [
  {
    id: "T-2026-001",
    ref: "TEL/26/001",
    name: "EPC Package — Hydrocracker Revamp",
    customer: "Indian Oil Corporation",
    sector: "O&G",
    state: "Gujarat",
    location: "Vadodara",
    jobType: "EPC",
    jobNature: "Existing",
    publishDate: "2026-01-12",
    dueDate: "2026-04-18",
    revisedDueDate: "2026-04-25",
    bidOpeningDate: "2026-04-26",
    estimateValue: 248.5,
    supply: 142,
    service: 38,
    cs: 22,
    mech: 36,
    ei: 10,
    duration: 24,
    escalation: "N",
    modeOfBid: "Online",
    emd: 1.2,
    emdType: "BG",
    validity: 180,
    pbgAmt: 12.4,
    pbgType: "BG",
    abgAmt: "NA",
    abgType: "NA",
    bdResponsible: "u-001",
    supportingLead: "u-003",
    pmc: "Engineers India Ltd",
    assignedMembers: ["u-001", "u-002", "u-003", "u-005"],
    priority: "Critical",
    status: "Under Review",
    probability: "High",
    documents: 18,
    remarks: "High-value strategic bid. Estimate under review.",
    createdBy: "u-001",
    updatedAt: "2026-05-18T10:20:00Z"
  },
  {
    id: "T-2026-002",
    ref: "TEL/26/002",
    name: "Mechanical Maintenance Services — Phase II",
    customer: "ONGC Mumbai High",
    sector: "O&G",
    state: "Maharashtra",
    location: "Mumbai",
    jobType: "Service",
    jobNature: "Known",
    publishDate: "2026-02-04",
    dueDate: "2026-05-22",
    estimateValue: 86,
    supply: 12,
    service: 60,
    cs: 4,
    mech: 8,
    ei: 2,
    duration: 36,
    escalation: "Y",
    modeOfBid: "Online",
    emd: 0.5,
    emdType: "ISB",
    validity: 120,
    pbgAmt: 4.3,
    pbgType: "BG",
    abgAmt: 2.1,
    abgType: "BG",
    bdResponsible: "u-001",
    supportingLead: "u-005",
    pmc: "—",
    assignedMembers: ["u-001", "u-004", "u-005"],
    priority: "High",
    status: "Draft",
    probability: "Medium",
    documents: 9,
    remarks: "BOQ pending from client.",
    createdBy: "u-001",
    updatedAt: "2026-05-19T08:00:00Z"
  },
  {
    id: "T-2026-003",
    ref: "TEL/26/003",
    name: "Urea Plant Revamp — LSTK",
    customer: "RCF Trombay",
    sector: "Fertilizer",
    state: "Maharashtra",
    location: "Trombay",
    jobType: "LSTK",
    jobNature: "Known",
    publishDate: "2026-01-30",
    dueDate: "2026-06-10",
    estimateValue: 412,
    supply: 240,
    service: 70,
    cs: 30,
    mech: 56,
    ei: 16,
    duration: 30,
    escalation: "N",
    modeOfBid: "Online",
    emd: 2,
    emdType: "BG",
    validity: 180,
    pbgAmt: 20.6,
    pbgType: "BG",
    abgAmt: 10.3,
    abgType: "BG",
    bdResponsible: "u-001",
    supportingLead: "u-003",
    pmc: "PDIL",
    assignedMembers: ["u-001", "u-002", "u-003"],
    priority: "Critical",
    status: "Submitted",
    probability: "High",
    documents: 26,
    remarks: "Awaiting bid opening on 18-Jun.",
    createdBy: "u-001",
    updatedAt: "2026-05-20T13:45:00Z"
  },
  {
    id: "T-2026-004",
    ref: "TEL/26/004",
    name: "E&I Package — Refinery Expansion",
    customer: "BPCL Kochi",
    sector: "O&G",
    state: "Kerala",
    location: "Kochi",
    jobType: "EPC",
    jobNature: "Existing",
    publishDate: "2026-03-02",
    dueDate: "2026-06-30",
    estimateValue: 138,
    supply: 78,
    service: 30,
    cs: 10,
    mech: 10,
    ei: 10,
    duration: 18,
    escalation: "N",
    modeOfBid: "Online",
    emd: 0.7,
    emdType: "BG",
    validity: 150,
    pbgAmt: 6.9,
    pbgType: "BG",
    abgAmt: "NA",
    abgType: "NA",
    bdResponsible: "u-001",
    supportingLead: "u-005",
    pmc: "EIL",
    assignedMembers: ["u-001", "u-002", "u-005"],
    priority: "High",
    status: "Under Review",
    probability: "Medium",
    documents: 12,
    remarks: "Tech bid clarifications.",
    createdBy: "u-001",
    updatedAt: "2026-05-15T09:30:00Z"
  },
  {
    id: "T-2026-005",
    ref: "TEL/26/005",
    name: "Coker Heater Replacement",
    customer: "HPCL Vizag",
    sector: "O&G",
    state: "Andhra Pradesh",
    location: "Visakhapatnam",
    jobType: "EPC",
    jobNature: "Existing",
    publishDate: "2025-12-15",
    dueDate: "2026-03-30",
    estimateValue: 72,
    supply: 40,
    service: 18,
    cs: 6,
    mech: 6,
    ei: 2,
    duration: 14,
    escalation: "N",
    modeOfBid: "Online",
    emd: 0.36,
    emdType: "BG",
    validity: 120,
    pbgAmt: 3.6,
    pbgType: "BG",
    abgAmt: "NA",
    abgType: "NA",
    bdResponsible: "u-001",
    supportingLead: "u-005",
    pmc: "—",
    assignedMembers: ["u-001", "u-002"],
    priority: "Medium",
    status: "Won",
    probability: "High",
    documents: 14,
    remarks: "LOI received.",
    createdBy: "u-001",
    updatedAt: "2026-04-30T11:00:00Z"
  },
  {
    id: "T-2026-006",
    ref: "TEL/26/006",
    name: "Pipeline Pigging Services",
    customer: "GAIL India",
    sector: "O&G",
    state: "Uttar Pradesh",
    location: "Auraiya",
    jobType: "Service",
    jobNature: "Known",
    publishDate: "2026-02-20",
    dueDate: "2026-04-10",
    estimateValue: 24,
    supply: 4,
    service: 18,
    cs: 1,
    mech: 1,
    ei: 0,
    duration: 12,
    escalation: "Y",
    modeOfBid: "Online",
    emd: 0.12,
    emdType: "ISB",
    validity: 90,
    pbgAmt: 1.2,
    pbgType: "BG",
    abgAmt: "NA",
    abgType: "NA",
    bdResponsible: "u-001",
    supportingLead: "u-003",
    pmc: "—",
    assignedMembers: ["u-001", "u-004"],
    priority: "Medium",
    status: "Lost",
    probability: "Low",
    documents: 7,
    remarks: "L2 by 3%.",
    createdBy: "u-001",
    updatedAt: "2026-04-22T08:00:00Z"
  },
  {
    id: "T-2026-007",
    ref: "TEL/26/007",
    name: "Sulphur Recovery Unit — EPC",
    customer: "Reliance Jamnagar",
    sector: "O&G",
    state: "Gujarat",
    location: "Jamnagar",
    jobType: "EPC",
    jobNature: "Existing",
    publishDate: "2026-03-12",
    dueDate: "2026-07-05",
    estimateValue: 322,
    supply: 190,
    service: 56,
    cs: 22,
    mech: 40,
    ei: 14,
    duration: 28,
    escalation: "N",
    modeOfBid: "Online",
    emd: 1.6,
    emdType: "BG",
    validity: 180,
    pbgAmt: 16.1,
    pbgType: "BG",
    abgAmt: 8.05,
    abgType: "BG",
    bdResponsible: "u-001",
    supportingLead: "u-003",
    pmc: "EIL",
    assignedMembers: ["u-001", "u-002", "u-003", "u-005", "u-006"],
    priority: "Critical",
    status: "Delayed",
    probability: "Medium",
    documents: 22,
    remarks: "Awaiting addendum on Section VI.",
    createdBy: "u-001",
    updatedAt: "2026-05-21T07:10:00Z"
  }
];
const OFFERS = [
  { id: "O-2026-001", ref: "OFR/26/001", name: "Annual Rate Contract — Mech Services", customer: "Tata Steel Jamshedpur", value: 18.5, proposalDate: "2026-04-12", validityDate: "2026-07-12", status: "Negotiation", priority: "High", assignedMembers: ["u-001", "u-005"], remarks: "Awaiting commercial discussion.", documents: 6, updatedAt: "2026-05-20T10:00:00Z" },
  { id: "O-2026-002", ref: "OFR/26/002", name: "Heat Exchanger Re-tubing", customer: "MRPL Mangalore", value: 6.2, proposalDate: "2026-05-02", validityDate: "2026-08-02", status: "Sent", priority: "Medium", assignedMembers: ["u-001", "u-004"], remarks: "Submitted online.", documents: 4, updatedAt: "2026-05-19T14:00:00Z" },
  { id: "O-2026-003", ref: "OFR/26/003", name: "Reactor Internals Replacement", customer: "CPCL Chennai", value: 11.8, proposalDate: "2026-03-18", validityDate: "2026-06-18", status: "Accepted", priority: "High", assignedMembers: ["u-001", "u-002"], remarks: "PO expected this week.", documents: 9, updatedAt: "2026-05-18T09:30:00Z" },
  { id: "O-2026-004", ref: "OFR/26/004", name: "Catalyst Loading Services", customer: "NRL Numaligarh", value: 3.4, proposalDate: "2026-04-25", validityDate: "2026-07-25", status: "Drafting", priority: "Low", assignedMembers: ["u-001", "u-004"], remarks: "Scope under finalization.", documents: 2, updatedAt: "2026-05-20T06:00:00Z" },
  { id: "O-2026-005", ref: "OFR/26/005", name: "Piping Fabrication Job", customer: "L&T Hydrocarbon", value: 9, proposalDate: "2026-04-08", validityDate: "2026-07-08", status: "Rejected", priority: "Medium", assignedMembers: ["u-001"], remarks: "Lost on price.", documents: 3, updatedAt: "2026-04-30T11:00:00Z" },
  { id: "O-2026-006", ref: "OFR/26/006", name: "Furnace Inspection Services", customer: "IOCL Panipat", value: 2.6, proposalDate: "2026-05-10", validityDate: "2026-08-10", status: "On Hold", priority: "Low", assignedMembers: ["u-001", "u-006"], remarks: "Client budget review.", documents: 2, updatedAt: "2026-05-12T08:00:00Z" }
];
const TASKS = [
  { id: "TSK-1001", title: "Prepare technical compliance matrix", description: "Section-wise compliance for Hydrocracker EPC.", status: "In Progress", priority: "Critical", assignee: "u-002", dueDate: "2026-05-25", linkedTo: "T-2026-001", progress: 65, subtasks: [{ id: "s1", title: "Process section", done: true, assignee: "u-002" }, { id: "s2", title: "Mech section", done: true, assignee: "u-005" }, { id: "s3", title: "E&I section", done: false, assignee: "u-005" }, { id: "s4", title: "Final review", done: false, assignee: "u-001" }], comments: 8, attachments: 4, updatedAt: "2026-05-20T10:00:00Z" },
  { id: "TSK-1002", title: "BOQ pricing — Urea LSTK", description: "Rate analysis for civil & structural items.", status: "Under Review", priority: "Critical", assignee: "u-003", dueDate: "2026-05-28", linkedTo: "T-2026-003", progress: 85, subtasks: [{ id: "s1", title: "Civil rates", done: true, assignee: "u-003" }, { id: "s2", title: "Structural rates", done: true, assignee: "u-003" }], comments: 12, attachments: 6, updatedAt: "2026-05-21T08:00:00Z" },
  { id: "TSK-1003", title: "Vendor quote consolidation — SRU", description: "Collate quotes from 6 vendors.", status: "Not Started", priority: "High", assignee: "u-004", dueDate: "2026-06-02", linkedTo: "T-2026-007", progress: 0, subtasks: [{ id: "s1", title: "Static equipment", done: false, assignee: "u-004" }, { id: "s2", title: "Rotating equipment", done: false, assignee: "u-005" }], comments: 2, attachments: 1, updatedAt: "2026-05-19T08:00:00Z" },
  { id: "TSK-1004", title: "Site visit report — Vizag", description: "Photos & site conditions write-up.", status: "Completed", priority: "Medium", assignee: "u-002", dueDate: "2026-05-10", linkedTo: "T-2026-005", progress: 100, subtasks: [], comments: 4, attachments: 11, updatedAt: "2026-05-09T16:00:00Z" },
  { id: "TSK-1005", title: "Commercial clarifications response", description: "Reply to client queries on Annual Rate Contract.", status: "In Progress", priority: "High", assignee: "u-002", dueDate: "2026-05-24", linkedTo: "O-2026-001", progress: 40, subtasks: [{ id: "s1", title: "Pricing queries", done: true, assignee: "u-002" }, { id: "s2", title: "Tax queries", done: false, assignee: "u-001" }], comments: 5, attachments: 2, updatedAt: "2026-05-20T12:30:00Z" },
  { id: "TSK-1006", title: "Bid bond preparation", description: "PBG of 4.3 Cr for ONGC tender.", status: "Delayed", priority: "Critical", assignee: "u-006", dueDate: "2026-05-18", linkedTo: "T-2026-002", progress: 50, subtasks: [{ id: "s1", title: "Bank coordination", done: true, assignee: "u-006" }, { id: "s2", title: "Format approval", done: false, assignee: "u-001" }], comments: 3, attachments: 2, updatedAt: "2026-05-19T09:00:00Z" },
  { id: "TSK-1007", title: "Pre-bid meeting attendance", description: "BPCL Kochi pre-bid at 11:00 AM.", status: "Not Started", priority: "High", assignee: "u-001", dueDate: "2026-05-26", linkedTo: "T-2026-004", progress: 0, subtasks: [], comments: 1, attachments: 0, updatedAt: "2026-05-21T07:00:00Z" },
  { id: "TSK-1008", title: "Proposal draft v2 — CPCL", description: "Incorporate client feedback.", status: "Under Review", priority: "Medium", assignee: "u-004", dueDate: "2026-05-23", linkedTo: "O-2026-003", progress: 90, subtasks: [{ id: "s1", title: "Technical section", done: true, assignee: "u-005" }, { id: "s2", title: "Commercial section", done: true, assignee: "u-002" }], comments: 7, attachments: 3, updatedAt: "2026-05-20T17:00:00Z" }
];
const NOTIFICATIONS = [
  { id: "n1", type: "task", title: "New task assigned", body: "Arjun assigned 'Prepare technical compliance matrix' to you.", time: "2 min ago", unread: true, priority: "Critical" },
  { id: "n2", type: "deadline", title: "Submission deadline approaching", body: "Tender T-2026-002 due in 36 hours.", time: "1 hr ago", unread: true, priority: "High" },
  { id: "n3", type: "mention", title: "Mentioned in a comment", body: "Neha mentioned you on TSK-1008.", time: "3 hrs ago", unread: true },
  { id: "n4", type: "status", title: "Tender status updated", body: "T-2026-005 moved to Won.", time: "Yesterday", unread: false },
  { id: "n5", type: "document", title: "Document uploaded", body: "Aisha uploaded BOQ_Rev3.xlsx to T-2026-003.", time: "Yesterday", unread: false },
  { id: "n6", type: "approval", title: "Approval requested", body: "PBG format approval pending on TSK-1006.", time: "2 days ago", unread: false, priority: "High" }
];
const REPO = [
  { id: "f1", name: "Company_Profile_2026.pdf", type: "pdf", category: "Corporate", size: "4.2 MB", uploadedBy: "u-001", uploadedAt: "2026-04-12", version: "v3.1" },
  { id: "f2", name: "ISO_9001_Certificate.pdf", type: "pdf", category: "Compliance", size: "1.1 MB", uploadedBy: "u-006", uploadedAt: "2026-03-08", version: "v1.0" },
  { id: "f3", name: "Standard_BOQ_Template.xlsx", type: "xlsx", category: "Templates", size: "320 KB", uploadedBy: "u-003", uploadedAt: "2026-02-22", version: "v2.4" },
  { id: "f4", name: "Technical_Proposal_Template.docx", type: "docx", category: "Templates", size: "780 KB", uploadedBy: "u-004", uploadedAt: "2026-01-30", version: "v5.0" },
  { id: "f5", name: "Vendor_Master_List.xlsx", type: "xlsx", category: "Vendors", size: "2.6 MB", uploadedBy: "u-001", uploadedAt: "2026-05-02", version: "v12" },
  { id: "f6", name: "Reference_Projects_Pack.zip", type: "zip", category: "References", size: "84 MB", uploadedBy: "u-005", uploadedAt: "2026-04-19", version: "v2" },
  { id: "f7", name: "Past_Performance_Deck.pptx", type: "pptx", category: "Corporate", size: "12 MB", uploadedBy: "u-001", uploadedAt: "2026-03-15", version: "v4" },
  { id: "f8", name: "Org_Chart_2026.pdf", type: "pdf", category: "Corporate", size: "640 KB", uploadedBy: "u-006", uploadedAt: "2026-04-01", version: "v1.2" }
];
function userById(id) {
  return TEAM.find((t) => t.id === id);
}
function priorityColor(p) {
  switch (p) {
    case "Critical":
      return "bg-destructive/15 text-destructive border-destructive/30";
    case "High":
      return "bg-orange-500/15 text-orange-700 border-orange-500/30 dark:text-orange-300";
    case "Medium":
      return "bg-amber-500/15 text-amber-700 border-amber-500/30 dark:text-amber-300";
    case "Low":
      return "bg-slate-500/15 text-slate-700 border-slate-500/30 dark:text-slate-300";
  }
}
function tenderStatusColor(s) {
  switch (s) {
    case "Won":
      return "bg-navy text-navy-foreground border-navy";
    case "Submitted":
      return "bg-blue-600/15 text-blue-700 dark:text-blue-300 border-blue-600/30";
    case "Under Review":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
    case "Draft":
      return "bg-slate-400/15 text-slate-700 dark:text-slate-300 border-slate-400/30";
    case "Lost":
      return "bg-destructive/15 text-destructive border-destructive/30";
    case "Delayed":
      return "bg-destructive/15 text-destructive border-destructive/30";
  }
}
function offerStatusColor(s) {
  switch (s) {
    case "Accepted":
      return "bg-navy text-navy-foreground border-navy";
    case "Sent":
      return "bg-blue-600/15 text-blue-700 dark:text-blue-300 border-blue-600/30";
    case "Negotiation":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
    case "Drafting":
      return "bg-slate-400/15 text-slate-700 dark:text-slate-300 border-slate-400/30";
    case "Rejected":
      return "bg-destructive/15 text-destructive border-destructive/30";
    case "On Hold":
      return "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30";
  }
}
function taskStatusColor(s) {
  switch (s) {
    case "Completed":
      return "bg-navy text-navy-foreground border-navy";
    case "Under Review":
      return "bg-blue-600/15 text-blue-700 dark:text-blue-300 border-blue-600/30";
    case "In Progress":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
    case "Not Started":
      return "bg-slate-400/15 text-slate-700 dark:text-slate-300 border-slate-400/30";
    case "Delayed":
      return "bg-destructive/15 text-destructive border-destructive/30";
  }
}
const TASK_STATUSES = ["Not Started", "In Progress", "Under Review", "Completed", "Delayed"];
export {
  NOTIFICATIONS as N,
  OFFERS as O,
  REPO as R,
  TASKS as T,
  TASK_STATUSES as a,
  TEAM as b,
  TENDERS as c,
  tenderStatusColor as d,
  offerStatusColor as o,
  priorityColor as p,
  taskStatusColor as t,
  userById as u
};
