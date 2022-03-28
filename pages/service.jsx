import React from 'react'
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section.svg'

export default function service() {
  return (
    <>
      <div className="m-5 mt-24 w-full">
        <HeroSection
          showSubtitle={true}
          showDescription={true}
          showButton={true}
          title="Dynamiser votre empire"
          subtitle="d'une manière digital !"
          description={`Toin Development offre les fonctionnalité 
          les plus complète dans notre paquet de services. Il met 
          l'accent sur l'offre de solutions complètes pour réaliser 
          des projets web de haute qualité et de bonne performance.`}
          titleButton="demander un devis"
          ilustration={heroSectionImage}
          wIllustration={heroSectionImage.width}
          hIllustration={heroSectionImage.height}
        />
      </div>
    </>
  )
}
