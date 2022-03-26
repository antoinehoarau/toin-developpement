import Image from 'next/image'
import Logo from '../public/bannière_toin_dev_black_none_bg.png'
import Logo1 from '../public/icon_toin_dev_black_none_bg.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
} from 'framer-motion'
import React, { useState, useEffect } from 'react'

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Nos services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Autres', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        layout
        initial={{ borderRadius: 30 }}
        className="mt-3 border fixed min-w-[90%] rounded-[30px]"
      >
        <motion.div layout className="max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="relative flex items-center justify-between h-16"
          >
            <motion.div
              layout
              className="absolute inset-y-0 right-0 flex items-center sm:hidden"
            >
              <motion.div
                layout
                className=' className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XIcon
                    className="text-white w-8 h-8"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon
                    className="text-white w-8 h-8"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            </motion.div>
            <motion.div
              layout
              className="flex-1 items-center justify-center sm:items-stretch"
            >
              <motion.div layout className="flex-shrink-0 items-center">
                <div className="block w-auto sm:hidden lg:block">
                  <Image
                    src={Logo}
                    alt="Toin developpement"
                    placeholder="blur"
                    layout="intrinsic"
                    width={160}
                    height={64}
                  />
                </div>
                <div className="hidden sm:block lg:hidden">
                  <Image
                    src={Logo1}
                    alt="Toin developpement"
                    placeholder="blur"
                    layout="intrinsic"
                    width={64}
                    height={64}
                  />
                </div>
              </motion.div>
              <motion.div
                layout
                className="hidden sm:flex items-center sm:ml-6"
              >
                <motion.div layout className="flex space-x-1 lg:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white font-bold underline decoration-red decoration-3 uppercase'
                          : 'text-white duration-300 ',
                        'px-3 py-2 rounded-md text-sm font-medium hover:font-bold hover:underline decoration-red decoration-3 uppercase'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-2 pt-2 pb-3 space-y-1 flex flex-col"
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white font-bold underline decoration-red decoration-3 uppercase'
                        : 'text-white duration-300 ',
                      'px-3 py-2 rounded-md text-sm font-medium hover:font-bold hover:underline decoration-red decoration-3 uppercase'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  )
}
