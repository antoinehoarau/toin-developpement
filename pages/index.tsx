import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section.svg'
import PersonaliseWebsite from 'public/assets/illustrations/personalise-website.svg'
import Website from 'public/assets/illustrations/website.svg'
import Chat from 'public/assets/illustrations/chat.svg'
import EcommerceImage from 'public/assets/illustrations/e-commer-image.svg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Création de site web, application web, mobile | Toin
          Développement
        </title>
        <meta name="description" content="Toin Développement ..." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-5 mt-24 w-full flex flex-col items-center">
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
          linkButton="/devis"
          ilustration={heroSectionImage}
          wIllustration={602}
          hIllustration={heroSectionImage.height}
        />
        <div className="flex flex-col-reverse mb-40 h-[95vh] w-full lg:flex-row max-w-[1500px]">
          <div className="flex flex-col justify-center sm:px-16 lg:px-2 basis-1/2 h-full">
            <Image
              alt="Site web e-commerce image"
              src={PersonaliseWebsite}
              layout="responsive"
              priority={true}
              width={PersonaliseWebsite.width}
              height={PersonaliseWebsite.height}
            />
          </div>
          <div className="basis-1/2 md:px-2 pb-10 h-full flex flex-col justify-around items-center">
            <div className="text-4xl font-bold uppercase lg:text-5xl xl:text-6xl">
              <h2 className="text-yellow">Application web</h2>
              <h2 className="text-red">Site vitrine</h2>
              <h2 className="text-yellow">Site ecommerce</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse mb-40 h-[95vh] w-full lg:flex-row-reverse max-w-[1500px]">
          <div className="flex flex-col justify-center sm:px-16 lg:px-2 basis-1/2 h-full">
            <Image
              alt="Site web e-commerce image"
              src={Website}
              layout="responsive"
              priority={true}
              width={Website.width}
              height={Website.height}
            />
          </div>
          <div className="basis-1/2 md:px-2 pb-10 h-full flex flex-col justify-around items-center">
            <div className="text-4xl font-bold uppercase lg:text-5xl xl:text-6xl">
              <h2 className="text-yellow">Contenu</h2>
              <h2 className="text-red">Pub instagram</h2>
              <h2 className="text-yellow">Logo</h2>
            </div>
          </div>
        </div>
        <HeroSection
          showSubtitle={true}
          showDescription={true}
          showButton={true}
          invesers={true}
          title="Des services aberrant."
          subtitle="par des gens aberrant, pour tout le monde."
          description={`Un site Web est un atout dont toute entreprise
            a besoin pour moderniser votre présence en ligne. 
            Que vous ayez besoin d'une boutique en ligne ou d'un blog
            informatif, notre équipe est là pour donner vie à toutes
            os idées et à votre vision.`}
          titleButton="demander un devis"
          linkButton="/devis"
          ilustration={EcommerceImage}
          wIllustration={602}
          hIllustration={EcommerceImage.height}
        />
        <HeroSection
          showSubtitle={true}
          showDescription={true}
          showButton={true}
          invesers={false}
          title="Nous contacter"
          subtitle="Quelle que soit votre besoin, nous l'avons !"
          description={`Saisissez une idée. Fais de cette idée ta vie 
            - pense à elle, rêve d'elle, vis sur cette idée. 
            Laisse le cerveau, les muscles, les nerfs, toutes les parties 
            de ton corps, être remplis de cette idée, et laisse toutes les 
            autres idées tranquilles. C'est la voie du succès. Une seule 
            rose peut être mon jardin... un seul ami, mon monde.`}
          titleButton="nous contacter"
          ilustration={Chat}
          wIllustration={602}
          hIllustration={Chat.height}
        />
      </div>
    </>
  )
}

export default Home
