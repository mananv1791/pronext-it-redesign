import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseZap,
  LockKeyhole,
  Network,
  ServerCog,
  Shield,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProNext IT - Next-Gen IT Solutions for Enterprise Growth" },
      {
        name: "description",
        content:
          "Custom software, cloud infrastructure and cybersecurity built for scale. Partner with ProNext IT to architect your next chapter.",
      },
    ],
  }),
  component: Home,
});

const partners = [
  "NOVA BANK",
  "KINETIC",
  "APEXSYS",
  "STRATUM",
  "FORTA",
  "HELIOGRID",
  "CORTEX",
  "MERIDIAN",
  "VANTIQ",
  "ASCEND",
];

const pillars = [
  {
    icon: ServerCog,
    title: "Managed IT Services",
    desc: "Proactive monitoring, endpoint governance, incident response, and executive reporting for always-on operations.",
    metric: "15 min",
    metricLabel: "P1 response target",
    bullets: ["NOC coverage", "Patch automation", "SLA dashboards"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Secure AWS, Azure, and GCP environments designed around resilience, cost controls, and audit-ready operations.",
    metric: "28%",
    metricLabel: "typical cloud savings",
    bullets: ["Landing zones", "Terraform IaC", "FinOps controls"],
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    desc: "Enterprise platforms, internal tools, and APIs built by senior product engineers with DevOps discipline.",
    metric: "2x",
    metricLabel: "release velocity lift",
    bullets: ["React apps", "API platforms", "CI/CD pipelines"],
  },
];

const stats = [
  { value: "99.99%", label: "Infrastructure uptime engineered across managed environments" },
  { value: "200+", label: "Projects delivered across software, cloud, and security" },
  { value: "24/7/365", label: "Dedicated monitoring and incident response coverage" },
  { value: "40+", label: "Enterprise clients supported across regulated sectors" },
];

const networkNodes = [
  { x: 16, y: 28, delay: 0 },
  { x: 36, y: 18, delay: 0.5 },
  { x: 64, y: 22, delay: 1.1 },
  { x: 82, y: 42, delay: 0.2 },
  { x: 58, y: 56, delay: 0.8 },
  { x: 28, y: 62, delay: 1.4 },
  { x: 44, y: 82, delay: 0.3 },
  { x: 74, y: 76, delay: 1.2 },
];

const networkLines = [
  { x: 17, y: 29, width: 22, rotate: -24 },
  { x: 37, y: 19, width: 28, rotate: 8 },
  { x: 64, y: 23, width: 25, rotate: 38 },
  { x: 58, y: 56, width: 27, rotate: -152 },
  { x: 29, y: 63, width: 24, rotate: -56 },
  { x: 45, y: 82, width: 30, rotate: -12 },
  { x: 59, y: 57, width: 22, rotate: 52 },
];

function HeroNetwork() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-border bg-surface/45 p-5 shadow-2xl shadow-primary/10 backdrop-blur md:min-h-[480px]">
      <div className="mesh-bg animate-mesh absolute inset-0 opacity-80" aria-hidden />
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 backdrop-blur">
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Enterprise Command Layer</p>
          <p className="mt-1 text-sm font-semibold">Cloud, software, security telemetry</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-lg shadow-cyan/60" />
          Live
        </span>
      </div>

      <div className="absolute inset-8 top-24" aria-hidden>
        {networkLines.map((line) => (
          <span
            key={`${line.x}-${line.y}`}
            className="absolute h-px origin-left bg-gradient-to-r from-primary/70 via-cyan/70 to-transparent"
            style={{
              left: `${line.x}%`,
              top: `${line.y}%`,
              width: `${line.width}%`,
              transform: `rotate(${line.rotate}deg)`,
            }}
          />
        ))}
        {networkNodes.map((node) => (
          <motion.span
            key={`${node.x}-${node.y}`}
            className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-cyan shadow-[0_0_32px_rgba(6,182,212,0.6)]"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{ scale: [1, 1.35, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.6, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </motion.span>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {[
          { icon: Shield, label: "Risk", value: "Zero-trust ready" },
          { icon: DatabaseZap, label: "Data", value: "Observable by design" },
          { icon: Network, label: "Scale", value: "Multi-cloud native" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border bg-background/72 p-3 backdrop-blur"
          >
            <item.icon className="h-4 w-4 text-cyan" />
            <p className="mt-2 text-[11px] font-semibold uppercase text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-xs font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mesh-bg animate-mesh absolute inset-0 opacity-70" aria-hidden />
        <div className="grid-bg absolute inset-0 opacity-35" aria-hidden />
        <div
          className="absolute left-0 top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan/16 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-cyan" />
              Advanced IT systems for high-growth enterprises
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Architecting Next-Gen IT Solutions for Enterprise Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              ProNext IT designs, builds, and secures the software platforms, cloud infrastructure,
              and digital operating models that enterprise teams rely on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gradient-primary rounded-lg font-semibold text-white shadow-xl shadow-primary/30 hover:opacity-95"
              >
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg border-border bg-surface/55 backdrop-blur"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {["SOC2-ready delivery", "Senior teams only", "Cloud cost governance"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-surface/25 py-8">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by industry innovators
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-14 pr-14">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="text-base font-extrabold tracking-normal text-muted-foreground/60 sm:text-lg"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="gradient-text text-sm font-semibold">Core Pillars</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">
            One senior team for the systems behind growth.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Strategy, implementation, and operating support stay connected, so your roadmap does not
            dissolve at handoff.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="premium-card hover-lift gradient-border group h-full overflow-hidden rounded-lg p-6">
                <div className="gradient-primary mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg shadow-lg shadow-primary/30">
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <div className="text-right">
                    <div className="gradient-text text-2xl font-extrabold">{pillar.metric}</div>
                    <div className="text-[11px] font-medium text-muted-foreground">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.desc}</p>
                <ul className="mt-5 grid gap-2 text-sm">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/25 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <Card
              key={stat.value}
              className="rounded-lg border-border bg-background/45 p-6 text-center shadow-none"
            >
              <div className="gradient-text text-4xl font-extrabold sm:text-5xl">{stat.value}</div>
              <p className="mx-auto mt-3 max-w-56 text-sm leading-6 text-muted-foreground">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="gradient-border premium-card relative overflow-hidden rounded-lg p-8 sm:p-10 lg:p-12">
          <div className="mesh-bg absolute inset-0 opacity-45" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-cyan">Technical scoping in 30 minutes</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
                Know exactly what to modernize first.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Bring us your current stack, roadmap, risk register, or cost problem. We will map
                the fastest path to a credible plan and the team needed to execute it.
              </p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Senior architect on every call",
                  "Cloud, security, and product lens",
                  "Roadmap before retainer",
                  "NDA available before discovery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                asChild
                size="lg"
                className="gradient-primary rounded-lg font-semibold text-white shadow-xl shadow-primary/30"
              >
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-lg">
                <Link to="/case-studies">See client outcomes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
