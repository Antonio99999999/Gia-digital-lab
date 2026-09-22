import { AboutTeam } from "@/components/AboutTeam";
import { CaseStudy } from "@/components/CaseStudy";
import { ClientStrip } from "@/components/ClientStrip";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientStrip />
        <AboutTeam />
        <Method />
        <CaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
