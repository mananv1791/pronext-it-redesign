import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Clock, Globe2, Laptop2, MapPin, Send, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - ProNext IT" },
      {
        name: "description",
        content: "Join ProNext IT. Open roles in engineering, design and cloud.",
      },
      { property: "og:title", content: "Careers - ProNext IT" },
      { property: "og:description", content: "Life at ProNext IT and open positions." },
    ],
  }),
  component: CareersPage,
});

type Job = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

const jobs: Job[] = [
  {
    id: "ux",
    title: "UX/UI Designer",
    team: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    description:
      "Own product design across enterprise platforms, quote flows, dashboards, and design systems for technical users.",
    requirements: [
      "Complex B2B product experience",
      "Strong interaction design craft",
      "Design systems and prototyping depth",
    ],
  },
  {
    id: "fe",
    title: "Front-End Developer",
    team: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Build performant, accessible React applications that translate complex enterprise workflows into clear interfaces.",
    requirements: [
      "Deep TypeScript and React expertise",
      "Accessibility and performance mindset",
      "Comfort pairing with design and backend teams",
    ],
  },
  {
    id: "cloud",
    title: "Senior Cloud Engineer",
    team: "Cloud",
    location: "Hybrid / Remote",
    type: "Full-time",
    description:
      "Design AWS, Azure, and GCP landing zones, Terraform modules, and platform tooling for enterprise clients.",
    requirements: [
      "Terraform and networking depth",
      "Production Kubernetes experience",
      "Security-first cloud operations",
    ],
  },
  {
    id: "security",
    title: "Security Consultant",
    team: "Security",
    location: "Remote (US/EU)",
    type: "Contract",
    description:
      "Lead SOC 2, ISO 27001, and threat modeling engagements for fast-moving technical organizations.",
    requirements: [
      "Audit and control mapping experience",
      "IAM and vulnerability management",
      "Executive workshop facilitation",
    ],
  },
];

const life = [
  {
    icon: Globe2,
    title: "Remote-first",
    desc: "Async planning, clear writing, and high-trust collaboration across time zones.",
  },
  {
    icon: Laptop2,
    title: "Deep work protected",
    desc: "Fewer meetings, stronger briefs, and delivery cadences designed around maker time.",
  },
  {
    icon: Users,
    title: "Senior peers",
    desc: "Small teams of specialists with direct ownership and direct client context.",
  },
];

function CareersPage() {
  const [openJob, setOpenJob] = useState<Job | null>(null);

  return (
    <div>
      <section className="mesh-bg relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/65 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            Life at ProNext IT
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Do careful, high-impact work with senior people and serious clients.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Join a remote-first team building software, cloud, and security systems for enterprise
            teams that value craft and accountability.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {life.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Card className="premium-card hover-lift h-full rounded-lg p-6">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="border-y border-border bg-surface/25 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="gradient-text text-sm font-semibold">Open Roles</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Active job board</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              We keep hiring selective and transparent. Every open role is tied to real client work
              and product ownership.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {jobs.map((job) => (
              <Card key={job.id} className="premium-card hover-lift rounded-lg p-5">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <Badge variant="secondary" className="rounded-full">
                        {job.team}
                      </Badge>
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.team}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setOpenJob(job)}
                    className="gradient-primary rounded-lg text-white"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Drawer open={!!openJob} onOpenChange={(open) => !open && setOpenJob(null)}>
        <DrawerContent className="mx-auto max-h-[92dvh] max-w-3xl rounded-t-lg border-border bg-background">
          <DrawerHeader className="px-6 text-left sm:px-8">
            <DrawerTitle>Apply for {openJob?.title}</DrawerTitle>
            <DrawerDescription>{openJob?.description}</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto px-6 pb-2 sm:px-8">
            <div className="rounded-lg border border-border bg-surface/45 p-4">
              <p className="text-sm font-semibold">What we will look for</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {openJob?.requirements.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              id="career-application"
              className="mt-5 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                toast.success("Application received. We will be in touch.");
                setOpenJob(null);
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="career-name">Full name</Label>
                <Input id="career-name" required maxLength={100} className="rounded-lg" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="career-email">Email</Label>
                  <Input
                    id="career-email"
                    type="email"
                    required
                    maxLength={255}
                    className="rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="career-link">Portfolio or LinkedIn</Label>
                  <Input id="career-link" type="url" maxLength={300} className="rounded-lg" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="career-note">Why this role?</Label>
                <Textarea
                  id="career-note"
                  required
                  maxLength={1000}
                  rows={4}
                  className="rounded-lg"
                />
              </div>
            </form>
          </div>
          <DrawerFooter className="px-6 sm:px-8">
            <Button
              type="submit"
              form="career-application"
              className="gradient-primary rounded-lg text-white"
            >
              Submit application <Send className="ml-1 h-4 w-4" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
