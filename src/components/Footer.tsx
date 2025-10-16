import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Padmini. All rights reserved.</p>

        <div className="flex gap-4">
          <Link href="https://github.com/YOUR_USERNAME" target="_blank" className="hover:text-primary">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" className="hover:text-primary">
            LinkedIn
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
