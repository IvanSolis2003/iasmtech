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
        <ServicesSection />
        <HowIWorkSection />
        <PortfolioSection projects={projects} />
        <AboutSection />
        <FaqSection />
        <CtaSection />
        <BlogSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
