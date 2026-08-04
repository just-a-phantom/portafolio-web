import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { site } from "../data/site";

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden pt-20 pb-10 md:min-h-[68vh]">
      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-subtle-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Disponible para práctica 2027
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-lg leading-relaxed text-foreground/90 md:text-xl"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="default" className="rounded-full px-5 text-sm">
                <Link to="/#proyectos">
                  Ver proyectos
                  <ArrowDown className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-full border-primary/50 px-5 text-sm text-foreground hover:bg-primary/10 hover:text-foreground"
              >
                <a href={site.cv} download>
                  <Download className="mr-1 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <a href={`mailto:${site.email}`} aria-label="Correo electrónico">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 text-base text-muted-foreground"
            >
              {site.institution}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-accent-subtle/20 to-transparent blur-3xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-border/50 bg-surface/50 p-8 backdrop-blur-sm">
                <AbstractTechIllustration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AbstractTechIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="1" stopColor="var(--accent-deep)" stopOpacity="0.35" />
        </linearGradient>
        <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle cx="200" cy="200" r="150" stroke="url(#heroGrad1)" strokeWidth="1.5" opacity="0.9" />
      <circle cx="200" cy="200" r="110" stroke="var(--primary)" strokeWidth="1.5" opacity="0.65" />
      <circle cx="200" cy="200" r="70" stroke="var(--primary)" strokeWidth="1.5" opacity="0.85" />
      <path
        d="M200 50 V130 M200 270 V350 M50 200 H130 M270 200 H350"
        stroke="var(--primary)"
        strokeWidth="1.5"
        opacity="0.75"
      />
      <rect x="155" y="155" width="90" height="90" rx="18" fill="var(--primary)" opacity="0.18" />
      <rect x="175" y="175" width="50" height="50" rx="12" fill="var(--primary)" opacity="0.3" />
      <circle cx="200" cy="200" r="10" fill="var(--primary)" opacity="0.9" filter="url(#heroGlow)" />
      <g opacity="0.85">
        <circle cx="115" cy="115" r="5" fill="var(--primary)" />
        <circle cx="285" cy="115" r="5" fill="var(--primary)" />
        <circle cx="115" cy="285" r="5" fill="var(--primary)" />
        <circle cx="285" cy="285" r="5" fill="var(--primary)" />
      </g>
    </svg>
  );
}
