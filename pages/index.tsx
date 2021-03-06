import type { NextPage } from 'next'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import Head from 'next/head'
import { useTransition, animated } from 'react-spring'
import Aos from 'aos'
import 'aos/dist/aos.css'

//import des components
import HeroSection from 'components/HeroSection'
import HeroSectionUp from 'components/HeroSectionUp'
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
            'D??veloppement web',
            'Tunnel de vente',
            'Contenu de marque',
          ]),
        2000
      )
    )
    ref.current.push(
      setTimeout(
        () => set(['D??veloppement web', 'Contenu de marque']),
        5000
      )
    )
    ref.current.push(
      setTimeout(
        () =>
          set([
            'D??veloppement web',
            'R??seaux sociaux',
            'Contenu de marque',
          ]),
        8000
      )
    )
    ref.current.push(
      setTimeout(
        () => set(['D??veloppement web', 'R??seaux sociaux']),
        11000
      )
    )
    ref.current.push(
      setTimeout(
        () =>
          set(['D??veloppement web', 'R??seaux sociaux', 'R??f??rencement']),
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
        () => set1(['Responsive Design', 'S??curit??', 'UI / UX Design']),
        8000
      )
    )
    ref1.current.push(
      setTimeout(() => set1(['Responsive Design', 'S??curit??']), 11000)
    )
    ref1.current.push(
      setTimeout(
        () => set1(['Responsive Design', 'S??curit??', 'Identit?? visuelle']),
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
    Aos.init({ duration: 2000, disable: 'mobile' })
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
          Cr??ation de site web, application web, mobile | Toin
          D??veloppement
        </title>
        <meta name="description" content="Toin D??veloppement ..." />
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
          <HeroSectionUp
            showSubtitle={true}
            showDescription={true}
            showButton={true}
            subtitle="Prenez le meilleur"
            description={`Toin D??veloppement offre les fonctionnalit??s les
            plus compl??tes dans notre paquet de services. Il met l'accent 
            sur l'offre de solutions compl??tes pour r??aliser des projets 
            web de haute qualit?? et de bonne performance.`}
            titleButton="demander un devis"
            linkButton="/devis"
            ilustration={heroSectionImage}
            wIllustration={602}
            hIllustration={heroSectionImage.height}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          className="flex flex-col-reverse mb-40 h-[95vh] w-full lg:flex-row max-w-[1500px]"
        >
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
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          className="flex flex-col-reverse mb-40 h-[95vh] w-full lg:flex-row-reverse max-w-[1500px]"
        >
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
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          className="sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]"
        >
          <HeroSection
            showSubtitle={true}
            showDescription={true}
            showButton={true}
            invesers={true}
            title="Des services aberrants."
            subtitle="par des gens aberrants, pour tout le monde."
            description={`Un site Web est un atout dont toute entreprise
            a besoin pour moderniser votre pr??sence en ligne. 
            Que vous ayez besoin d'une boutique en ligne ou d'un blog
            informatif, notre ??quipe est l?? pour donner vie ?? toutes
            vos id??es et ?? votre vision.`}
            titleButton="demander un devis"
            linkButton="/devis"
            ilustration={EcommerceImage}
            wIllustration={602}
            hIllustration={EcommerceImage.height}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          className="sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]"
        >
          <HeroSection
            showSubtitle={true}
            showDescription={true}
            showButton={true}
            invesers={false}
            title="Nous contacter"
            subtitle="Quel que soit votre besoin, nous l'avons !"
            description={`Saisissez une id??e. Fais de cette id??e ta vie 
            - pense ?? elle, r??ve d'elle, vis sur cette id??e. 
            Laisse le cerveau, les muscles, les nerfs, toutes les parties 
            de ton corps, ??tre remplis de cette id??e, et laisse toutes les 
            autres id??es tranquilles. C'est la voie du succ??s. Une seule 
            rose peut ??tre mon jardin... un seul ami, mon monde.`}
            titleButton="nous contacter"
            linkButton="/devis"
            ilustration={Chat}
            wIllustration={602}
            hIllustration={Chat.height}
          />
        </div>
      </div>
    </>
  )
}

export default Home
