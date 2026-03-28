"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Calculator" },
  { href: "/services", label: "Services" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center justify-between py-5"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <Link href="/" aria-label="GrowthMe home">
        <Logo size={24} />
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition-colors duration-150"
            style={{
              color:
                pathname === link.href
                  ? "var(--text)"
                  : "var(--text-muted)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
