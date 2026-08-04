import { Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";



export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => setCurrentYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container-tight py-6 md:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <p className="font-heading text-lg font-semibold text-foreground">
              Nathaly Torres Romero
            </p>
            <p className="text-base text-muted-foreground">Ingeniera Civil Informática (EC)</p>
            <p className="max-w-md text-base text-subtle-foreground">
              Construyendo tecnología con propósito: robusta, intuitiva y escalable.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nathaly-torres-1383123b8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:nathaly.torres.1934@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Correo electrónico"
              >
                <Mail className="h-4 w-4" />
                <span>Correo</span>
              </a>
            </div>
            <Link
              to="/sobre-mi"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre mí
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border/50 pt-4 text-center text-sm text-muted-foreground md:text-left">
          © {currentYear ?? ""} Nathaly Torres Romero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
