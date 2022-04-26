import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section-devis.svg'
import Input from 'components/Input'
import PrimaryButton from 'components/PrimaryButton'

const value = [
  { id: 1, name: 'Site Vitrine', unavailable: false },
  { id: 2, name: 'Site E-commerce', unavailable: false },
  { id: 3, name: 'Contenue de marque', unavailable: false },
  { id: 4, name: 'Pub réseaux sociaux', unavailable: true },
]

export default function devis() {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: 'mobile' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Demander un devis | Toin Développement</title>
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
            showDescription={false}
            showButton={false}
            title="Reflétez votre personnalité"
            subtitle="Prêt pour un devis ? Commençons"
            ilustration={heroSectionImage}
            wIllustration={heroSectionImage.width}
            hIllustration={heroSectionImage.height}
          />{' '}
        </div>
        <div data-aos="zoom-out" className="flex flex-col mx-auto mb-40">
          <h2 className="text-[33px] md:text-7xl font-extrabold uppercase max-w-3xl">
            JE FAIS LA DEMANDE DE MON DEVIS
          </h2>
          <form
            className="mx-auto mb-40 mt-10 flex flex-col items-center md:block"
            action=""
          >
            <div className="flex flex-col md:flex-row mb-5">
              <Input
                type="text"
                name="last_name"
                label="Nom :"
                placeholder="Dupond"
              />
              <Input
                type="text"
                name="first_name"
                label="Prénom :"
                placeholder="Jean"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-5">
              <Input
                type="email"
                label="Email :"
                placeholder="jean.dupond@gmail.com"
              />
              <Input
                type="tel"
                label="Télephone :"
                placeholder="0692 12 34 56"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-5">
              <Input
                input="listselect"
                name="select"
                label="Type de prestation :"
                value={value}
              />
              <Input
                type="num"
                name="number"
                label="Votre budget :"
                placeholder="1500€"
              />
            </div>
            <div className="flex flex-row mb-5">
              <Input
                type="textarea"
                label="Message :"
                placeholder="Je veux un site Web avec des caractéristiques uniques pour qu'il se
                distingue des autres et soit attrayant pour mes clients."
              />
            </div>
            <div className="flex flex-col mb-5">
              <div className="flex flex-row mb-1">
                <input
                  id="agree-checkbox"
                  name="agree-checkbox"
                  type="checkbox"
                  className="h-5 w-5 mx-2 text-yellow focus:ring-yellow border-yellow rounded hover:cursor-pointer"
                />
                <label
                  htmlFor="agree-checkbox"
                  className="block text-white max-w-md hover:cursor-pointer"
                >
                  En soumettant ce formulaire, j’accepte d’être contacté
                  dans le cadre de ma demande.
                </label>
              </div>
              <div className="flex flex-row items-center mb-5">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-5 w-5 mx-2 text-yellow focus:ring-yellow border-yellow rounded hover:cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="block text-white hover:cursor-pointer"
                >
                  J’accepte de recevoir la newsletter.
                </label>
              </div>
              <div className="flex flex-row mb-5 ml-2">
                <PrimaryButton title="Envoyer ma demande" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
