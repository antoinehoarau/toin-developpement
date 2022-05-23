import Image from 'next/image'
import PropsTypes from 'prop-types'
import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PrimaryButton from './PrimaryButton'

export default function Card(props: {
  title: string
  description: string
  price: number
  image: string
  detail: any
}) {
  const [isOpen, setIsOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={cancelButtonRef}
          onClose={setIsOpen}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative flex flex-col justify-center items-start align-bottom shadow-md backdrop-blur-md backdrop-saturate-150 backdrop-brightness-50 border border-gray px-2 py-5 sm:px-10 sm:py-10 rounded-lg sm:max-w-lg sm:w-full">
                <Dialog.Overlay />
                <Dialog.Title className="text-3xl font-bold text-center uppercase">
                  {props.title}
                </Dialog.Title>

                <Dialog.Description className="font-thin sm:w-3/4">
                  {props.description}
                </Dialog.Description>

                <div className="flex flex-col my-2 justify-between items-start w-full">
                  <div className="flex flex-col items-start">
                    <h2>Caractéristiques :</h2>
                    {props.detail.map((item: any) => (
                      <li key={item.text}>{item.text}</li>
                    ))}
                  </div>
                  <div className="my-5 mx-auto">
                    <Image
                      src={props.image}
                      alt="Icon"
                      layout="fixed"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <p className="font-semibold text-xl">
                  à partir de : {props.price}€
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-5">
                  <PrimaryButton title="Demander un devis" link="/devis" />
                  <button
                    className="border border-gray rounded-full mt-5 sm:mt-0 px-5 py-1 duration-200 hover:bg-white hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    fermer
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="h-96 w-64 px-4 py-6 border border-gray rounded-xl flex flex-col items-start justify-between duration-300 hover:border-white hover:cursor-default">
        <div>
          <h2 className="text-3xl font-bold uppercase">{props.title}</h2>
          <p className="font-thin">{props.description}</p>
          <p className="mt-3 font-semibold text-xl">
            à partir de : {props.price}€
          </p>
        </div>
        <div className="flex flex-row justify-center items-end space-x-2">
          <div className="">
            <button onClick={() => setIsOpen(true)}>
              <p
                className="text-xl font-medium duration-200 
                 hover:underline decoration-red 
                decoration-3 hover:cursor-pointer"
              >
                en savoir plus
              </p>
            </button>
          </div>
          <div className="">
            <Image
              src={props.image}
              alt="Icon"
              layout="fixed"
              width={85}
              height={85}
            />
          </div>
        </div>
      </div>
    </>
  )
}

Card.defaultProps = {
  title: 'création de site vitrine',
  description: `Permet d’indiquer aux clients potentiels
    ce que fait votre entreprise, qui vous êtes et comment
    vous le faites.`,
  price: 745,
  detail: [
    { text: 'details 1' },
    { text: 'details 2' },
    { text: 'details 3' },
    { text: 'details 4' },
    { text: 'details 5' },
  ],
}

Card.propType = {
  title: PropsTypes.string,
  description: PropsTypes.string,
  price: PropsTypes.number,
  image: PropsTypes.string,
  detail: PropsTypes.object,
}
