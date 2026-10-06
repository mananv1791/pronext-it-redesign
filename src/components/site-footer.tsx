import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Network, ShieldCheck, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  "Custom Software & DevOps",
  "Cloud Migration",
  "Cybersecurity Audits",
  "IT Strategy Consulting",
];

const company = [
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/35">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1.1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="gradient-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-lg shadow-primary/20">
              <Network className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="text-lg font-extrabold">
              ProNext<span className="gradient-text"> IT</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Advanced IT solutions, software engineering, cloud infrastructure, and cybersecurity
            consulting for enterprises that need durable growth.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "X" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Core Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>
                <Link to="/services" className="transition hover:text-foreground">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan" />
            Monthly technical brief
          </div>
          <h4 className="mt-4 text-sm font-semibold text-foreground">Get enterprise IT insights</h4>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Cloud, security, product engineering, and modernization signals for technical leaders.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(event) => event.preventDefault()}>
            <Input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className="h-10 rounded-lg"
            />
            <Button
              type="submit"
              size="icon"
              className="gradient-primary h-10 w-10 shrink-0 rounded-lg text-white"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ProNext IT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
