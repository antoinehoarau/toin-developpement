import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section-service.svg'
import PhoneCallImage from 'public/assets/illustrations/phone-call.svg'
import image1 from 'public/assets/illustrations/card1_image.svg'
import image2 from 'public/assets/illustrations/card2_image.svg'
import image3 from 'public/assets/illustrations/card3_image.svg'
import image4 from 'public/assets/illustrations/card4_image.svg'
import Card from 'components/Card'

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: 'mobile' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Nos services | Toin Développement</title>
        <meta name="description" content="Toin Développement ..." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-5 mt-24 w-full flex flex-col items-center">
        <div
          data-aos="fade"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          className="sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]"
        >
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
        </div>

        <div
          data-aos="zoom-out"
          className="flex flex-col justify-center mb-40 items-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-fit">
            <Card
              title="création de site vitrine"
              description={`Un site vitrine vous permet de commercialiser 
              votre entreprise auprès d'un nombre illimité d'utilisateurs, 
              de faire connaître votre marque et d'améliorer l'engagement 
              des clients.`}
              image={image1}
              price={545}
              detail={[
                { text: '3 Pages' },
                { text: 'Site responsive' },
                { text: 'Rédaction des Mention legales' },
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
              description={`Développer votre activité, même lorsque vous
              êtes en déplacement ou absent de votre magasin.
              Vous pourrez toucher plus
               de personnes et changer plus de vies.`}
              image={image2}
              price={1490}
              detail={[
                { text: '20 produits' },
                { text: 'Copyrighting' },
                { text: 'Rédaction des Mention legales' },
                { text: 'Tableau de bord' },
                { text: 'Rédaction des condition générale des ventes' },
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
              title="Contenue de marque"
              description={`Obtenez une visibilité pour votre entreprise
              qui se traduira par des prospects et des clients, grace
              à la création de contenue`}
              image={image3}
              price={150}
              detail={[
                { text: 'Création de maquette graphique' },
                { text: 'Création de logo' },
                { text: 'Création de carte de visite' },
                { text: "Création d'une charte graphique" },
                { text: 'Création de post instagram/ facebook' },
                { text: 'Création de story' },
                { text: "Possibiliter d'ajouter des options" },
              ]}
            />
            <Card
              title="pub réseaux sociaux"
              description={`Profitez d'un plus grand nombre de prospects,
              en exploitant la portée des réseaux pour répondre aux 
              besoins spécifiques de votre entreprise !`}
              image={image4}
              price={455}
              detail={[
                { text: 'Gestion de compte instagram' },
                { text: 'Gestion de compte facebook' },
                { text: 'Post de publication facebook et instagram' },
              ]}
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
