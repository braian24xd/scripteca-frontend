import { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/landingPage.css'
import PublicHeader from "@components/layout/PublicHeader";

import AtomicHero from "../components/HeroBanner";
import LearningExperience from "../components/LearningExperience";
import FeaturesImpact from "../components/FeaturesImpact";
import CourseSection from "../components/Coursesection";
import RoadmapSection from "../components/RoadmapSection";
import CommunitySection from "../components/ComunitySection";
import FaqSection from "../components/FaqSection";

import PublicFooter from "../components/layout/PublicFooter";

const LandingPage = () => {

  return (
    <>
      <PublicHeader />

      {/* Main Content */}
      <main className="landing__main">
        {/* Hero Banner */}
        {/* <section className="hero__banner">
          <h1 className="hero__banner__title">
            Aprende hoy:<br />Lidera mañana<span className="blinking-cursor"></span>
          </h1>
          <p>
            Educación a tu alcance, donde y cuando quieras.
            Impulsa tu carrera con nuestros cursos especializados
            por menos de un café al día.
          </p>
          <div className="btn-container">
            <a
                href="https://wa.me/525536647556/?text=Hola%deseo%recibir%informacion%sobre..."
                target="_blank">
                <Button variant="glow">
                  Contacto
                </Button>
              </a>
            <Button variant="sub" style={{ display: "inline-flex", fontWeight: 400 }}>
              Todos los cursos
            </Button>
          </div>
        </section> */}

        <AtomicHero />

        <FeaturesImpact />

        <CourseSection />

        <RoadmapSection />

        <CommunitySection />

        <LearningExperience />

        <FaqSection />
      </main>

      <PublicFooter />
    </>
  );
}

export default LandingPage;
