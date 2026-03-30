import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const footerLinks = [
  { href: "#", label: "Support" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Research" },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo & Description */}
            <div className="max-w-sm">
              <Link href="/" className="flex items-center group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colored%20%28Transparent%29-i3BIGX38o1jOu8WEN9AsCy09XzplWy.png"
                  alt="AIMerge"
                  width={130}
                  height={32}
                  className="dark:hidden transition-transform duration-200 group-hover:scale-105"
                  style={{ height: 32, width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20%28Transparent%29-ch7lxVfW4eNHZNaDbk70Bpfil2XuOt.png"
                  alt="AIMerge"
                  width={130}
                  height={32}
                  className="hidden dark:block transition-transform duration-200 group-hover:scale-105"
                  style={{ height: 32, width: 'auto' }}
                  unoptimized
                />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-medium">
                The Inner Light Experience. Ten minutes. Five questions. A mirror to your best self.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-foreground/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} AIMerge. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground/10 text-muted-foreground hover:text-primary hover:border-primary hover:neu-shadow-primary-xs transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
