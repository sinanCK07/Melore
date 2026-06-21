import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlavorScroll } from "@/components/FlavorScroll";
import { CoBrandedSection } from "@/components/CoBrandedSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { AboutSection } from "@/components/AboutSection";
import { WhySection } from "@/components/WhySection";
import { PackagingGallery } from "@/components/PackagingGallery";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink-950 text-ivory-100">
      <Navbar />
      <Hero />
      <FlavorScroll />
      <CoBrandedSection />
      <UseCasesSection />
      <IngredientsSection />
      <AboutSection />
      <WhySection />
      <PackagingGallery />
      <CtaSection />
      <Footer />
    </main>
  );
}
