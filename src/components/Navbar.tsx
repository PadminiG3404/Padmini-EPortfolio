'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/padmini-gudavalli-226245259',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={18} />,
      href: 'https://github.com/PadminiG3404',
      label: 'GitHub',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:22211a6642@bvrit.ac.in',
      label: 'Email',
    },
    {
      icon: <FileText size={18} />,
      href: '/resume.pdf',
      label: 'CV',
    },
  ]

  return (
    <TooltipProvider>
      <nav className="w-full px-6 md:px-12 py-4 shadow-sm bg-gold/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo.png" // replace with actual PG logo
              alt="PG Logo"
              width={60}
              height={60}
            />
            <span className="text-xl font-bold text-charcoal ">Padmini</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-charcoal hover:underline underline-offset-4 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white hover:bg-lilac/30 transition shadow-sm"
                    >
                      {link.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{link.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="flex flex-col mt-4 gap-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal hover:underline underline-offset-4 px-4 py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 px-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white hover:bg-lilac/30 shadow-sm"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </TooltipProvider>
  )
}
