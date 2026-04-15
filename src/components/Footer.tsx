import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservation" },
  { href: "/about", label: "About" },
  { href: "/contcat", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-amber-500/10 bg-[#0f0f23] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-amber-400">About</h2>
            <p className="text-sm leading-relaxed text-white/70">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold text-amber-400">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 transition-colors hover:text-amber-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold text-amber-400">
              Contact Info
            </h2>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              <p>123 Flavor Street, Foodville, NY 10001</p>
              <p className="mt-2">
                <a
                  href="tel:+1555123456"
                  className="transition-colors hover:text-amber-400"
                >
                  (555) 123-456
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:hello@tastebite.example"
                  className="transition-colors hover:text-amber-400"
                >
                  hello@tastebite.example
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-amber-400"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-amber-400"
            >
              Twiter
            </a>
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-amber-400"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} TasteBite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
