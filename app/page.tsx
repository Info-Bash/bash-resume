
import ScrollProgress from '@/app/ui/ScrollProgress';
import Navbar from '@/app/components/layout/Navbar';
import Hero from '@/app/section/Hero';
import About from '@/app/section/About';
import TechStackSection from '@/app/section/TechStack';
import Projects from '@/app/section/Projects';
import Experience from '@/app/section/Experience';
import GitHubSection from '@/app/section/GitHub';
import Contact from '@/app/section/Contact';
import Footer from './components/layout/Footer';
import styles from '@/app/components/home.module.css';

export default function Home() {
  return (
    <>
      {/* Scroll progress bar at top of viewport */}
      <ScrollProgress />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — first impression */}
        <Hero />

        {/* Divider */}
        <div className={`${styles.sectionDivider} mb-0`} />

        {/* 2. About — who I am */}
        <About />

        <div className={styles.sectionDivider} />

        {/* 3. Tech Stack — tools I use */}
        <TechStackSection />

        <div className={styles.sectionDivider} />

        {/* 4. Projects — what I've built */}
        <Projects />

        <div className={styles.sectionDivider} />

        {/* 5. Experience — my journey */}
        <Experience />

        <div className={styles.sectionDivider} />

        {/* 6. GitHub — open source activity */}
        <GitHubSection />

        <div className={styles.sectionDivider} />

        {/* 7. Contact — get in touch */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
