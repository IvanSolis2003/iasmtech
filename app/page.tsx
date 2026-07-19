import Script from 'next/script'
import { prisma } from '@/lib/prisma'
import Navbar from '@/components/layout/Navbar'

const BASE_URL = 'https://iasmtech.cl'

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iván Solís Manqueo',
  jobTitle: 'Full Stack Developer',
  url: BASE_URL,
  sameAs: [
    'https://github.com/IvanSolis2003',
    'https://www.linkedin.com/in/iv%C3%A1n-sol%C3%ADs-m',
  ],
  email: 'ivan.solis20.m@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Talca',
    addressRegion: 'Maule',
    addressCountry: 'CL',
  },
  knowsAbout: [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
    'React Native', 'n8n', 'Desarrollo Web', 'Apps Móviles',
  ],
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'iasmtech',
  url: BASE_URL,
  description: 'Desarrollo web, apps móviles y automatización para PYMES y emprendedores en Talca, Chile.',
  author: { '@id': BASE_URL },
}
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TechMarquee from '@/components/sections/TechMarquee'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import HowIWorkSection from '@/components/sections/HowIWorkSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import AboutSection from '@/components/sections/AboutSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import WhatsAppFab from '@/components/ui/WhatsAppFab'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TechBackground from '@/components/ui/TechBackground'

async function getProjects() {
  try {
    return await prisma.project.findMany({ orderBy: { order: 'asc' } })
  } catch {
    return []
  }
}

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    })
  } catch {
    return []
  }
}

export default async function Home() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()])

  return (
    <>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <TechBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <StatsSection />
        <ScrollReveal delay={0}>
          <ServicesSection />
        </ScrollReveal>
        <TechMarquee />
        <ScrollReveal delay={0}>
          <CapabilitiesSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <PortfolioSection projects={projects} />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <HowIWorkSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <FaqSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <CtaSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <BlogSection posts={posts} />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
