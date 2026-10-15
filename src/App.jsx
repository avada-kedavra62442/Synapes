import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import { TeamSections } from "./components/TeamSections.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navigation />
      <main>
        <Hero />
        <TeamSections />
      </main>
      <Footer />
    </>
  );
}
