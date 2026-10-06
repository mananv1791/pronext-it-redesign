import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Layers3,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - ProNext IT" },
      {
        name: "description",
        content: "Our mission, values and technical philosophy for engineering enterprise IT.",
      },
      { property: "og:title", content: "About - ProNext IT" },
      { property: "og:description", content: "Meet the team behind ProNext IT." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Outcome over output",
    desc: "We measure the work in reliability gained, risk closed, cycle time reduced, and revenue enabled.",
  },
  {
    icon: Users,
    title: "Senior by default",
    desc: "Every engagement is led by specialists who have owned production systems at enterprise scale.",
  },
  {
    icon: Compass,
    title: "Pragmatic architecture",
    desc: "We choose proven technology unless the problem genuinely demands something newer.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership mindset",
    desc: "We teach as we ship so internal teams leave stronger than when the engagement began.",
  },
];

const philosophy = [
  "Automate repeatable work before it becomes institutional drag.",
  "Instrument every critical path before declaring a system production-ready.",
  "Treat security, accessibility, and maintainability as product requirements.",
  "Prefer small, reversible decisions until the system proves where complexity belongs.",
];

function AboutPage() {
  return (
    <div>
      <section className="mesh-bg relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="gradient-text text-sm font-semibold">About ProNext IT</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Senior engineers for enterprise IT decisions that have to hold up in production.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            ProNext IT is an engineering-led consulting firm helping organizations modernize
            software, cloud infrastructure, security posture, and technical operating models.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-cyan">Mission</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">
            Build systems that earn trust every day.
          </h2>
          <div className="mt-5 space-y-4 leading-8 text-muted-foreground">
            <p>
              Enterprises deserve technical partners who can move quickly without leaving
              architectural debt behind. We started ProNext IT to be that partner: a focused team of
              senior practitioners accountable for what ships, how it operates, and how it improves
              the business.
            </p>
            <p>
              Our work spans modern web platforms, cloud infrastructure, cybersecurity programs,
              data systems, and executive technology strategy. The common thread is durable
              engineering: systems that can be observed, secured, maintained, and evolved by the
              teams who depend on them.
            </p>
          </div>
        </div>

        <Card className="gradient-border premium-card rounded-lg p-6">
          <Layers3 className="h-7 w-7 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Technical philosophy</h3>
          <ul className="mt-5 grid gap-3">
            {philosophy.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-background/45 p-3 text-sm leading-6"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="border-y border-border bg-surface/25 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="gradient-text text-sm font-semibold">Values</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                How we show up on every engagement.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              The best technical work is calm, explicit, measurable, and designed for the teams who
              inherit it.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="premium-card hover-lift h-full rounded-lg p-6">
                  <value.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-base font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { value: "12+", label: "years delivering enterprise systems" },
            { value: "60", label: "senior engineers, architects, and consultants" },
            { value: "40+", label: "active enterprise clients" },
            { value: "3", label: "continents served by remote-first teams" },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="rounded-lg border-border bg-surface/45 p-5 shadow-none"
            >
              <div className="gradient-text text-3xl font-extrabold">{stat.value}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="gradient-border premium-card relative overflow-hidden rounded-lg p-8 sm:p-10">
          <div className="mesh-bg absolute inset-0 opacity-35" aria-hidden />
          <div className="relative">
            <p className="text-sm font-semibold text-cyan">Life at ProNext IT</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              A small team with a high bar and room to do careful work.
            </h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              We are remote-first, documentation-heavy, and protective of deep work. Designers,
              engineers, and consultants collaborate directly with clients while keeping delivery
              teams small enough to stay accountable.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Remote-first rhythm",
                "Protected focus blocks",
                "Direct client context",
                "Craft-led delivery reviews",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gradient-primary rounded-lg text-white">
                <Link to="/careers">
                  See open roles <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg">
                <Link to="/contact">Talk to our team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
