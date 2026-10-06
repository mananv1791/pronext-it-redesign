import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, Cloud, Code2, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies - ProNext IT" },
      {
        name: "description",
        content: "Enterprise cloud, software and security transformations delivered by ProNext IT.",
      },
      { property: "og:title", content: "Case Studies - ProNext IT" },
      { property: "og:description", content: "Real outcomes from real enterprise engagements." },
    ],
  }),
  component: CaseStudiesPage,
});

type Category = "All" | "Cloud" | "Software" | "Security";

type Study = {
  title: string;
  industry: string;
  category: Exclude<Category, "All">;
  problem: string;
  solution: string;
  metrics: string[];
  accent: string;
};

const studies: Study[] = [
  {
    title: "Enterprise Cloud Migration for FinTech Leader",
    industry: "Financial Services",
    category: "Cloud",
    problem:
      "Legacy VMware clusters were slowing product releases and creating compliance drift across environments.",
    solution:
      "Designed a multi-account AWS landing zone, automated network segmentation, and migrated 120+ services in phases.",
    metrics: ["40% lower latency", "28% lower infra cost", "Zero downtime cutover"],
    accent: "from-primary via-blue-500 to-cyan",
  },
  {
    title: "Custom Underwriting Platform",
    industry: "Insurance",
    category: "Software",
    problem:
      "Manual underwriting workflows created three-day quote turnaround and poor audit visibility.",
    solution:
      "Built an event-driven React platform with rules orchestration, approvals, and evidence capture.",
    metrics: ["3 days to 4 hours", "2.4x agent throughput", "WCAG AA interface"],
    accent: "from-cyan via-sky-500 to-primary",
  },
  {
    title: "SOC 2 Type II Readiness in 90 Days",
    industry: "HealthTech",
    category: "Security",
    problem:
      "A fast-growing platform needed evidence automation and stronger controls before enterprise procurement.",
    solution:
      "Mapped controls, hardened IAM, introduced continuous monitoring, and prepared audit evidence workflows.",
    metrics: ["Zero exceptions", "90-day readiness", "Continuous evidence"],
    accent: "from-primary via-indigo-500 to-cyan",
  },
  {
    title: "Global Data Platform Modernization",
    industry: "Retail",
    category: "Cloud",
    problem:
      "Analytics teams were blocked by slow warehouse jobs and inconsistent business definitions.",
    solution:
      "Delivered a governed lakehouse architecture with data contracts, lineage, and self-serve reporting.",
    metrics: ["55% lower query cost", "8x faster models", "400+ users enabled"],
    accent: "from-cyan via-teal-500 to-primary",
  },
  {
    title: "Zero-Trust IAM Rollout",
    industry: "Manufacturing",
    category: "Security",
    problem:
      "A distributed workforce had inconsistent access controls and rising phishing exposure.",
    solution:
      "Rolled out federated identity, hardware-backed MFA, conditional access, and privileged access controls.",
    metrics: ["92% fewer incidents", "12k users migrated", "PAM coverage complete"],
    accent: "from-blue-600 via-primary to-cyan",
  },
  {
    title: "AI-Powered Operations Copilot",
    industry: "Logistics",
    category: "Software",
    problem:
      "Dispatch operators were switching between telemetry, CRM, and support systems during incidents.",
    solution:
      "Built a retrieval-augmented copilot connected to dispatch events, fleet telemetry, and customer history.",
    metrics: ["35% throughput gain", "20% fewer escalations", "4-week pilot"],
    accent: "from-cyan via-blue-400 to-primary",
  },
];

const categories: { label: Category; icon: typeof BarChart3 }[] = [
  { label: "All", icon: BarChart3 },
  { label: "Cloud", icon: Cloud },
  { label: "Software", icon: Code2 },
  { label: "Security", icon: ShieldCheck },
];

function Thumbnail({ study }: { study: Study }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${study.accent}`}>
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <div className="absolute left-5 right-5 top-5 rounded-lg border border-white/20 bg-background/40 p-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div className="h-2 w-24 rounded-full bg-white/70" />
          <div className="h-2 w-10 rounded-full bg-cyan/80" />
        </div>
        <div className="mt-5 flex items-end gap-2">
          {[42, 64, 50, 78, 58, 88, 72].map((height, index) => (
            <span key={index} className="flex-1 rounded-sm bg-white/65" style={{ height }} />
          ))}
        </div>
      </div>
      <Badge
        variant="secondary"
        className="absolute bottom-4 left-4 rounded-full bg-background/75 backdrop-blur"
      >
        {study.category}
      </Badge>
    </div>
  );
}

function CaseStudiesPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? studies : studies.filter((study) => study.category === active);

  return (
    <div>
      <section className="mesh-bg relative border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-25" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="gradient-text text-sm font-semibold">Case Studies</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Enterprise outcomes engineered across cloud, software, and security.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A selection of representative client engagements showing how ProNext IT turns complex
            technical programs into measurable business wins.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2" role="list" aria-label="Case study filters">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              aria-pressed={active === label}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === label
                  ? "gradient-primary border-transparent text-white shadow-lg shadow-primary/30"
                  : "border-border bg-surface/45 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.div
                key={study.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="premium-card hover-lift group flex h-full flex-col overflow-hidden rounded-lg p-0">
                  <Thumbnail study={study} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-xs font-semibold uppercase text-muted-foreground">
                      {study.industry}
                    </div>
                    <h3 className="mt-2 text-xl font-bold leading-tight">{study.title}</h3>
                    <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Problem:</span>{" "}
                        {study.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Solution:</span>{" "}
                        {study.solution}
                      </p>
                    </div>
                    <div className="mt-5 grid gap-2">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-lg border border-border bg-background/45 px-3 py-2 text-sm font-semibold text-cyan"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-semibold text-primary">
                        View engagement brief
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="gradient-border premium-card mt-16 rounded-lg p-8 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Have a technical challenge worth solving?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted-foreground">
            Share the business outcome, the technical constraint, or the risk profile. We will help
            shape the right path forward.
          </p>
          <Button asChild size="lg" className="gradient-primary mt-6 rounded-lg text-white">
            <Link to="/contact">
              Start a conversation <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
