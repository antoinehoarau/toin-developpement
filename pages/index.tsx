import type { NextPage } from 'next'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import Head from 'next/head'
import { useTransition, animated } from 'react-spring'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section.svg'
import PersonaliseWebsite from 'public/assets/illustrations/personalise-website.svg'
import Website from 'public/assets/illustrations/website.svg'
import Chat from 'public/assets/illustrations/chat.svg'
import EcommerceImage from 'public/assets/illustrations/e-commer-image.svg'
import Image from 'next/image'

const Home: NextPage = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const ref1 = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const [items1, set1] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#E8EAF4',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        color: '#F8C630',
      },
    ],
    leave: [
      { color: '#F40000' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#F8C630' },
  })

  const transitions1 = useTransition(items1, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#E8EAF4',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        color: '#F8C630',
      },
    ],
    leave: [
      { color: '#F40000' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#F8C630' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(
        () =>
          set([
            'Développement web',
            'Tunnel de vente',
            'Contenu de marque',
          ]),
        2000
      )
    )
    ref.current.push(
      setTimeout(
        () => set(['Développement web', 'Contenu de marque']),
        5000
      )
    )
    ref.current.push(
      setTimeout(
        () =>
          set([
            'Développement web',
            'Réseaux sociaux',
            'Contenu de marque',
          ]),
        8000
      )
    )
    ref.current.push(
      setTimeout(
        () => set(['Développement web', 'Réseaux sociaux']),
        11000
      )
    )
    ref.current.push(
      setTimeout(
        () =>
          set(['Développement web', 'Réseaux sociaux', 'Référencement']),
        14000
      )
    )
  }, [])

  const reset1 = () => {
    ref1.current.forEach(clearTimeout)
    ref1.current = []
    set1([])
    ref1.current.push(
      setTimeout(
        () =>
          set1([
            'Responsive Design',
            'Optimisation SEO',
            'UI / UX Design',
          ]),
        2000
      )
    )
    ref1.current.push(
      setTimeout(() => set1(['Responsive Design', 'UI / UX Design']), 5000)
    )
    ref1.current.push(
      setTimeout(
        () => set1(['Responsive Design', 'Sécurité', 'UI / UX Design']),
        8000
      )
    )
    ref1.current.push(
      setTimeout(() => set1(['Responsive Design', 'Sécurité']), 11000)
    )
    ref1.current.push(
      setTimeout(
        () => set1(['Responsive Design', 'Sécurité', 'Identié visuelle']),
        14000
      )
    )
  }

  const loopAnimation = () => {
    setTimeout(() => {
      reset1()
      reset()
      loopAnimation()
    }, 18000)
  }

  useEffect(() => {
    reset1()
    reset()
    loopAnimation()
    return () => (
      ref.current.forEach(clearTimeout), ref1.current.forEach(clearTimeout)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <div>
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div
                  className="flex flex-col w-full justify-start items-center text-[32px] font-extrabold uppercase leading-[30px] cursor-pointer whitespace-nowrap will-change-transform overflow-hidden lg:text-6xl"
                  style={rest}
                  onClick={reset}
                >
                  <animated.div
                    style={{ overflow: 'hidden', height: innerHeight }}
                  >
                    {item}
                  </animated.div>
                </animated.div>
              ))}
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
            <div>
              {transitions1(({ innerHeight, ...rest }, item) => (
                <animated.div
                  className="flex flex-col w-full justify-start items-center text-[32px] font-extrabold uppercase leading-[30px] cursor-pointer whitespace-nowrap will-change-transform overflow-hidden lg:text-6xl"
                  style={rest}
                  onClick={reset1}
                >
                  <animated.div
                    style={{ overflow: 'hidden', height: innerHeight }}
                  >
                    {item}
                  </animated.div>
                </animated.div>
              ))}
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
