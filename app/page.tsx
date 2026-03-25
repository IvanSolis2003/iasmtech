import { prisma } from '@/lib/prisma'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import HowIWorkSection from '@/components/sections/HowIWorkSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import AboutSection from '@/components/sections/AboutSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import WhatsAppFab from '@/components/ui/WhatsAppFab'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal delay={0}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <HowIWorkSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <PortfolioSection projects={projects} />
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
