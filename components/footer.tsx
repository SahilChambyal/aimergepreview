import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"

const footerLinks = [
  { href: "#", label: "Support" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Research" },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            {/* Logo & Description */}
            <div className="max-w-sm">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colored%20%28Transparent%29-i3BIGX38o1jOu8WEN9AsCy09XzplWy.png"
                  alt="AIMerge"
                  width={120}
                  height={28}
                  className="dark:hidden"
                  style={{ height: 28, width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20%28Transparent%29-ch7lxVfW4eNHZNaDbk70Bpfil2XuOt.png"
                  alt="AIMerge"
                  width={120}
                  height={28}
                  className="hidden dark:block"
                  style={{ height: 28, width: 'auto' }}
                  unoptimized
                />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The Inner Light Experience. Ten minutes. Five questions. A mirror to your best self.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-foreground/5 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AIMerge. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground/10 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
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
