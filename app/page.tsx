import { CallToAction } from '@/components/CallToAction';
import { CurriculumRoadmap } from '@/components/CurriculumRoadmap';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { Faq } from '@/components/Faq';
import { Hero } from '@/components/Hero';
import { ImmersionShowcase } from '@/components/ImmersionShowcase';
import { MilestonesTimeline } from '@/components/MilestonesTimeline';
import { Navbar } from '@/components/Navbar';
import { ResourcesGallery } from '@/components/ResourcesGallery';
import { StudyPlanner } from '@/components/StudyPlanner';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <CurriculumRoadmap />
        <MilestonesTimeline />
        <ImmersionShowcase />
        <ResourcesGallery />
        <StudyPlanner />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
