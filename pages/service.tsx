import React from 'react'
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section-service.svg'
import PhoneCallImage from 'public/assets/illustrations/phone-call.svg'
import image1 from 'public/assets/illustrations/card1_image.svg'
import image2 from 'public/assets/illustrations/card2_image.svg'
import image3 from 'public/assets/illustrations/card3_image.svg'
import image4 from 'public/assets/illustrations/card4_image.svg'
import Card from 'components/Card'

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
          linkButton="/devis"
          ilustration={heroSectionImage}
          wIllustration={heroSectionImage.width}
          hIllustration={heroSectionImage.height}
        />

        <div className=" flex flex-col justify-center mb-40 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-fit">
            <Card
              title="création de site vitrine"
              description={`Permet d’indiquer aux clients potentiels
              ce que fait votre entreprise, qui vous êtes et
              comment vous le faites.`}
              image={image1}
              price={745}
              detail={[
                { text: '5 Pages' },
                { text: 'Site responsive' },
                { text: 'Page Mention legales' },
                { text: 'Formulaire de contact' },
                { text: 'Intégration du logo' },
                { text: 'Hébergement du site en ligne' },
                {
                  text: 'Gestion des cookies + mise en conformité aux lois RGPD',
                },
                {
                  text: 'Attribution du nom de domaine au site web (www.exemple.com)',
                },
                { text: "Possibiliter d'ajouter des options" },
              ]}
            />
            <Card
              title="site Ecommerce"
              description={`Permet d’indiquer aux clients potentiels
              ce que fait votre entreprise, qui vous êtes et
              comment vous le faites.`}
              image={image2}
              price={1490}
            />
            <Card
              title="Contenue de marque"
              description={`Permet d’indiquer aux clients potentiels
              ce que fait votre entreprise, qui vous êtes et
              comment vous le faites.`}
              image={image3}
              price={150}
            />
            <Card
              title="pub réseaux sociaux"
              description={`Permet d’indiquer aux clients potentiels
              ce que fait votre entreprise, qui vous êtes et
              comment vous le faites.`}
              image={image4}
              price={455}
            />
          </div>
        </div>

        <HeroSection
          showSubtitle={true}
          showDescription={false}
          showButton={true}
          title="Parlons de vos besoins"
          subtitle="Pensez grand, nous le faisons"
          titleButton="demander un devis"
          linkButton="/devis"
          ilustration={PhoneCallImage}
          wIllustration={PhoneCallImage.width}
          hIllustration={PhoneCallImage.height}
        />
      </div>
    </>
  )
}
