import type { NextPage } from 'next'
import React from 'react'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section.svg'
import heroSectionImage1 from 'public/assets/illustrations/hero-section-service.svg'

const Home: NextPage = () => {
  return (
    <>
      <div className="m-5 mt-24 w-full">
        <HeroSection
          showSubtitle={true}
          showDescription={true}
          showButton={true}
          title="Création de site web"
          subtitle="Prenez le meilleur"
          description={`Toin Development offre les fonctionnalité 
          les plus complète dans notre paquet de services. Il met 
          l'accent sur l'offre de solutions complètes pour réaliser 
          des projets web de haute qualité et de bonne performance.`}
          titleButton="demander un devis"
          ilustration={heroSectionImage}
          wIllustration={602}
          hIllustration={heroSectionImage.height}
        />
        <HeroSection
          showSubtitle={true}
          showDescription={true}
          showButton={true}
          title="Création de site web"
          subtitle="Prenez le meilleur"
          description={`Toin Development offre les fonctionnalité 
          les plus complète dans notre paquet de services. Il met 
          l'accent sur l'offre de solutions complètes pour réaliser 
          des projets web de haute qualité et de bonne performance.`}
          titleButton="demander un devis"
          ilustration={heroSectionImage1}
          wIllustration={602}
          hIllustration={heroSectionImage.height}
        />
      </div>
    </>
  )
}

export default Home
