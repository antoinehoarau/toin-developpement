import React, { useEffect, useState, Fragment } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

//import des components
import HeroSection from 'components/HeroSection'
import heroSectionImage from 'public/assets/illustrations/hero-section-devis.svg'
import Input from 'components/Input'

const value = [
  { id: 1, name: 'Site Vitrine', unavailable: false },
  { id: 2, name: 'Site E-commerce', unavailable: false },
  { id: 3, name: 'Contenue de marque', unavailable: false },
  { id: 4, name: 'Pub réseaux sociaux', unavailable: true },
]

export default function Devis() {
  const [last_name, setLast_name] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [agree, setAgree] = useState('')
  const [newsletter, setNewsletter] = useState('')
  const [textbutton, setTextbutton] = useState('Envoyer ma demande')
  const [stylebutton, setStylebutton] = useState('hidden')
  const [selected, setSelected] = useState(value[0])
  const [errorMsg, setErrorMsg] = useState('hidden')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setTextbutton("En cours d'envoi")
    setStylebutton('')

    let templateParams = {
      last_name,
      first_name,
      email,
      phone,
      type: selected.name,
      budget,
      message,
      agree,
      newsletter: newsletter.toString(),
    }
    console.log(templateParams)
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_DEVIS
    const user_id = process.env.NEXT_PUBLIC_USER_ID

    if (agree == true) {
      emailjs.send(service_id, template_id, templateParams, user_id).then(
        function (response) {
          if (response.status == 200) {
            setTextbutton('Message bien envoyer')
            setStylebutton('hidden')
            setErrorMsg('hidden')
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          }
        },
        function (error) {
          setTextbutton("Erreur d'envoi")
          setStylebutton('hidden')
        }
      )
    } else {
      setErrorMsg('')
      setTextbutton("Erreur d'envoi")
      setStylebutton('hidden')
    }
  }

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
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row mb-5">
              <Input
                type="text"
                name="last_name"
                label="Nom :"
                placeholder="Dupond"
                data={last_name}
                change={(e) => setLast_name(e.target.value)}
              />
              <Input
                type="text"
                name="first_name"
                label="Prénom :"
                placeholder="Jean"
                data={first_name}
                change={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row mb-5">
              <Input
                type="email"
                label="Email :"
                placeholder="jean.dupond@gmail.com"
                data={email}
                change={(e) => setEmail(e.target.value)}
              />
              <Input
                type="tel"
                label="Télephone :"
                placeholder="0692 12 34 56"
                data={phone}
                change={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row mb-5">
              <div className="flex flex-col">
                <label className="ml-6">Type de prestation :</label>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative flex flex-col">
                    <Listbox.Button className="relative mx-2 py-2 pl-4 pr-10 w-60 h-11 text-left bg-black border rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                      <span className="block truncate">
                        {selected.name}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full py-1 mt-16 overflow-auto bg-black rounded-md border max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {value.map((value, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `cursor-default select-none relative
                            py-2 pl-10 pr-4 ${
                              active
                                ? 'text-amber-900 bg-amber-100'
                                : 'text-gray-900'
                            }`
                            }
                            value={value}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate 
                                hover:cursor-pointer ${
                                  selected ? 'font-bold' : 'font-light'
                                }
                                hover:font-bold
                                `}
                                >
                                  {value.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <Input
                type="tel"
                name="number"
                label="Votre budget :"
                placeholder="1500€"
                data={budget}
                change={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="flex flex-row mb-5">
              <Input
                type="textarea"
                label="Message :"
                placeholder="Je veux un site Web avec des caractéristiques uniques pour qu'il se
                distingue des autres et soit attrayant pour mes clients."
                data={message}
                change={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <a className={`${errorMsg} text-red`}>
                veuillez accepter les conditions
              </a>
              <div className="flex flex-row mb-1">
                <input
                  id="agree-checkbox"
                  name="agree-checkbox"
                  type="checkbox"
                  value={agree}
                  onChange={(e) => setAgree(e.target.checked)}
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
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
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
                <button
                  type="submit"
                  className={`flex flex-row font-nunito font-bold 
                  text-red uppercase justify-center items-center
                  border border-red rounded-full px-2 py-2 duration-300
                hover:text-white hover:bg-red
                  hover:-translate-y-1  hover:scale-105`}
                >
                  <svg
                    className={` ${stylebutton} animate-spin h-full 
                  flex w-8 mr-3 stroke-[4px] stroke-red`}
                    viewBox="0 0 50 50"
                  >
                    <circle
                      stroke="#e8eaf4ff"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                    ></circle>
                    <circle
                      strokeDasharray="35, 150"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                    ></circle>
                  </svg>
                  {textbutton}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
