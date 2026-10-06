import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote - ProNext IT" },
      {
        name: "description",
        content:
          "Request a quote or reach ProNext IT directly. Multi-step quote builder for enterprise engagements.",
      },
      { property: "og:title", content: "Contact ProNext IT" },
      { property: "og:description", content: "Start a project or schedule a consultation." },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  {
    value: "Custom Software & DevOps",
    icon: Code2,
    text: "Platforms, APIs, apps, delivery pipelines",
  },
  { value: "Cloud Migration", icon: Cloud, text: "Landing zones, migrations, cloud operations" },
  {
    value: "Cybersecurity & Compliance",
    icon: ShieldCheck,
    text: "Audits, controls, IAM, incident readiness",
  },
  { value: "IT Strategy Consulting", icon: Compass, text: "Roadmaps, diligence, vendor strategy" },
];

const budgets = ["Less than $25k", "$25k - $75k", "$75k - $200k", "$200k - $500k", "$500k+"];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
});

function ContactPage() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const canContinue =
    (step === 1 && services.length > 0) ||
    (step === 2 && Boolean(budget) && details.trim().length >= 10) ||
    step === 3;

  const submit = () => {
    const parsed = contactSchema.safeParse(contact);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitted(true);
    toast.success("Quote request sent.");
  };

  return (
    <div>
      <section className="mesh-bg relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/65 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            Response from a senior engineer within one business day
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Scope your next IT, cloud, software, or security initiative.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Use the quote builder or contact us directly. We will translate your goals into a clear
            engagement path, budget range, and next technical steps.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <Card className="premium-card rounded-lg p-6">
            <h2 className="text-xl font-bold">Direct contact</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Prefer to talk first? Reach our team directly and we will route you to the right
              technical lead.
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:hello@pronext.it"
                  className="font-semibold transition hover:text-primary"
                >
                  hello@pronext.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+15551234567" className="font-semibold transition hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-muted-foreground">
                  HQ: 245 Market Street
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </Card>

          <Card className="grid-bg premium-card relative overflow-hidden rounded-lg p-0">
            <div className="mesh-bg absolute inset-0 opacity-55" aria-hidden />
            <div className="relative flex aspect-[4/3] items-center justify-center p-6">
              <div className="w-full rounded-lg border border-border bg-background/65 p-5 text-center backdrop-blur">
                <div className="gradient-primary mx-auto flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-primary/40">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <p className="mt-3 text-sm font-bold">San Francisco HQ</p>
                <p className="mt-1 text-xs text-muted-foreground">Map preview placeholder</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="gradient-border premium-card overflow-hidden rounded-lg p-6 sm:p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center py-16 text-center"
            >
              <div className="gradient-primary flex h-16 w-16 items-center justify-center rounded-full shadow-xl shadow-primary/40">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold">Request received</h2>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                Thanks {contact.name.split(" ")[0] || "there"}. A senior engineer will review your
                project and respond within one business day.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8 rounded-lg"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setServices([]);
                  setBudget("");
                  setDetails("");
                  setContact({ name: "", email: "", company: "" });
                }}
              >
                Start another request
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <div
                  className="flex items-center gap-2"
                  aria-label={`Quote builder step ${step} of 3`}
                >
                  {[1, 2, 3].map((number) => (
                    <div key={number} className="flex flex-1 items-center gap-2">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                          step >= number
                            ? "gradient-primary text-white shadow-lg shadow-primary/30"
                            : "border border-border text-muted-foreground"
                        }`}
                      >
                        {step > number ? <Check className="h-4 w-4" /> : number}
                      </div>
                      {number < 3 && (
                        <div
                          className={`h-px flex-1 ${step > number ? "bg-primary" : "bg-border"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 text-xs font-semibold text-muted-foreground">
                  <span>Services</span>
                  <span className="text-center">Scope</span>
                  <span className="text-right">Contact</span>
                </div>
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-extrabold">Which services do you need?</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Select all that apply. We will route your request to the right technical lead.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {serviceOptions.map((option) => {
                      const active = services.includes(option.value);
                      return (
                        <label
                          key={option.value}
                          className={`group flex cursor-pointer gap-4 rounded-lg border p-4 transition ${
                            active
                              ? "border-primary bg-primary/10"
                              : "border-border bg-background/45 hover:border-primary/50"
                          }`}
                        >
                          <Checkbox
                            checked={active}
                            onCheckedChange={() => toggleService(option.value)}
                            aria-label={option.value}
                          />
                          <span>
                            <span className="flex items-center gap-2 text-sm font-bold">
                              <option.icon className="h-4 w-4 text-primary" />
                              {option.value}
                            </span>
                            <span className="mt-2 block text-xs leading-5 text-muted-foreground">
                              {option.text}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-extrabold">Tell us about the project.</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      A short brief helps us estimate the right team, timeline, and discovery path.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="budget">Budget range</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger id="budget" className="rounded-lg">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="details">Project details</Label>
                    <Textarea
                      id="details"
                      rows={6}
                      maxLength={1200}
                      value={details}
                      onChange={(event) => setDetails(event.target.value)}
                      placeholder="Goals, current stack, timeline, compliance needs, blockers..."
                      className="rounded-lg"
                    />
                    <p className="text-xs text-muted-foreground">Minimum 10 characters.</p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-2xl font-extrabold">How can we reach you?</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Use a work email so we can keep procurement and security follow-ups clean.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-name">Full name</Label>
                    <Input
                      id="contact-name"
                      value={contact.name}
                      onChange={(event) => setContact({ ...contact, name: event.target.value })}
                      maxLength={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">Work email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contact.email}
                      onChange={(event) => setContact({ ...contact, email: event.target.value })}
                      maxLength={255}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-company">Company</Label>
                    <Input
                      id="contact-company"
                      value={contact.company}
                      onChange={(event) => setContact({ ...contact, company: event.target.value })}
                      maxLength={150}
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  disabled={step === 1}
                  onClick={() => setStep((current) => current - 1)}
                  className="rounded-lg"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
                {step < 3 ? (
                  <Button
                    type="button"
                    disabled={!canContinue}
                    onClick={() => setStep((current) => current + 1)}
                    className="gradient-primary rounded-lg text-white"
                  >
                    Continue <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={submit}
                    className="gradient-primary rounded-lg text-white"
                  >
                    Submit request <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          )}
        </Card>
      </section>
    </div>
  );
}
