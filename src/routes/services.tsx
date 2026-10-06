import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Gauge,
  LockKeyhole,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - ProNext IT" },
      {
        name: "description",
        content:
          "Custom software, cloud migration, cybersecurity and IT strategy services delivered by senior engineers.",
      },
      { property: "og:title", content: "Services - ProNext IT" },
      {
        property: "og:description",
        content: "Deep-dive services across software, cloud, security and consulting.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Custom Software & DevOps Development",
    summary:
      "Design and build enterprise applications, APIs, internal platforms, and automated delivery pipelines with production-grade engineering discipline.",
    bestFor: "Product modernization, internal tools, API platforms, SaaS builds",
    benefits: [
      "React, TypeScript, Node, Python, Go, and cloud-native back ends",
      "CI/CD, test automation, release governance, and GitOps workflows",
      "Design-system driven interfaces with accessibility baked in",
      "Observability, error budgets, and production support from launch day",
    ],
    outcomes: [
      "2x faster release cadence",
      "35% lower defect leakage",
      "Audit-ready deployment history",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Migration & Infrastructure Management",
    summary:
      "Move, govern, and operate workloads across AWS, Azure, and GCP with resilient landing zones, IaC, cost controls, and platform automation.",
    bestFor: "Data center exits, scaling platforms, cost reduction, reliability work",
    benefits: [
      "Zero-downtime migration planning and phased cutover execution",
      "Terraform-first landing zones, IAM, networking, and backup strategy",
      "Kubernetes, serverless, edge, and managed data platform expertise",
      "FinOps dashboards with budget policies and utilization guardrails",
    ],
    outcomes: ["28% average cloud savings", "99.99% target uptime", "Multi-region resilience"],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance Audits",
    summary:
      "Find and close risk across infrastructure, applications, identity, and operating controls before auditors or attackers do.",
    bestFor: "SOC 2, ISO 27001, HIPAA, zero-trust, penetration readiness",
    benefits: [
      "Threat modeling, vulnerability management, and control mapping",
      "IAM hardening, MFA strategy, secrets management, and logging",
      "SOC 2 Type II, ISO 27001, HIPAA, and vendor risk evidence support",
      "Incident response planning and tabletop exercises for executives",
    ],
    outcomes: [
      "Zero-exception audits",
      "92% phishing risk reduction",
      "Continuous evidence capture",
    ],
  },
  {
    id: "strategy",
    icon: Compass,
    title: "IT Strategy & Digital Transformation Consulting",
    summary:
      "Align executive goals, architecture decisions, operating models, and delivery teams around a pragmatic modernization roadmap.",
    bestFor: "Fractional CTO support, M&A diligence, platform roadmaps, vendor selection",
    benefits: [
      "Current-state architecture audits and technical debt prioritization",
      "Board-ready transformation roadmaps and investment cases",
      "Vendor evaluation, RFP support, and integration planning",
      "Change enablement for technical and nontechnical teams",
    ],
    outcomes: [
      "90-day roadmap clarity",
      "Lower vendor waste",
      "Executive and engineering alignment",
    ],
  },
];

const deliveryModel = [
  {
    icon: Gauge,
    title: "Assess",
    text: "Baseline architecture, risks, cost, reliability, and delivery constraints.",
  },
  {
    icon: Workflow,
    title: "Engineer",
    text: "Ship production-ready systems with senior engineers and weekly outcome reviews.",
  },
  {
    icon: LockKeyhole,
    title: "Operate",
    text: "Monitor, secure, optimize, and continuously improve what we launch.",
  },
];

function ServicesPage() {
  return (
    <div className="relative">
      <section className="mesh-bg relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="gradient-text text-sm font-semibold">Services</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
                Deep engineering for the systems your business cannot outgrow.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Four integrated practices covering the full stack: software, cloud, security, and
                transformation strategy.
              </p>
            </div>
            <Card className="premium-card rounded-lg p-5">
              <p className="text-sm font-semibold">Engagement model</p>
              <div className="mt-4 grid gap-3">
                {deliveryModel.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-lg border border-border bg-background/45 p-3"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="rounded-full border border-border bg-surface/45 px-4 py-2 text-sm font-semibold data-[state=active]:gradient-primary data-[state=active]:border-transparent data-[state=active]:text-white"
              >
                {service.title.replace(" & ", " + ")}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <Card className="gradient-border premium-card overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
                <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
                  <div>
                    <div className="gradient-primary inline-flex h-14 w-14 items-center justify-center rounded-lg shadow-lg shadow-primary/30">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="mt-6 text-2xl font-extrabold sm:text-4xl">{service.title}</h2>
                    <p className="mt-4 leading-7 text-muted-foreground">{service.summary}</p>
                    <div className="mt-6 rounded-lg border border-border bg-background/45 p-4">
                      <p className="text-xs font-semibold uppercase text-muted-foreground">
                        Best for
                      </p>
                      <p className="mt-2 text-sm font-medium">{service.bestFor}</p>
                    </div>
                    <Button asChild className="gradient-primary mt-6 rounded-lg text-white">
                      <Link to="/contact">
                        Inquire About This Service <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase text-muted-foreground">
                      Core benefits
                    </h3>
                    <ul className="mt-4 grid gap-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 rounded-lg border border-border bg-background/45 p-4 text-sm leading-6"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {service.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="rounded-lg border border-primary/25 bg-primary/10 p-4"
                        >
                          <p className="text-sm font-semibold text-primary">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card className="premium-card hover-lift h-full rounded-lg p-6">
                <service.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
                >
                  Inquire About This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
