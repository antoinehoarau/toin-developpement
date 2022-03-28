import Image from 'next/image'
import Logo from '../../public/bannière_toin_dev_black_none_bg.png'
import Logo1 from '../../public/icon_toin_dev_black_none_bg.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
  useCycle,
} from 'framer-motion'

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Nos services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Autres', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useCycle(false, true)
  return (
    <motion.nav className="border rounded-[35px] px-3 mt-3  max-w-8xl ease-in duration-300 shadow-md backdrop-blur-md backdrop-saturate-200 fixed">
      <div className="flex flex-col mx-auto">
        <div className=" relative flex flex-row items-center mx-2 pl-auto px-10 justify-between">
          <div className="">
            <div className="block sm:hidden lg:block">
              <Image
                src={Logo}
                alt="Toin developpement"
                placeholder="blur"
                layout="fixed"
                width={160}
                height={64}
              />
            </div>
            <div className="hidden sm:block lg:hidden">
              <Image
                src={Logo1}
                alt="Toin developpement"
                placeholder="blur"
                layout="fixed"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="hidden space-x-4 ml-5 sm:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white font-bold underline decoration-red decoration-3 uppercase'
                    : 'text-white duration-300 ',
                  `px-2 py-2 rounded-md text-sm font-medium 
                hover:font-bold hover:underline decoration-red 
                decoration-3 uppercase`
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" absolute right-0 flex items-center sm:hidden"
          >
            {isOpen ? (
              <XIcon className="text-white w-8 h-8" aria-hidden="true" />
            ) : (
              <MenuIcon
                className="text-white w-8 h-8"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: 'tween',
                stiffness: 100,
                duration: 0.5,
              }}
              className="overflow-hidden"
            >
              <div className="flex flex-col my-3 mx-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white font-bold underline decoration-red decoration-3 uppercase'
                        : 'text-white duration-300 ',
                      `px-3 py-2 rounded-md text-sm font-medium 
                    hover:font-bold hover:underline decoration-red 
                    decoration-3 uppercase`
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
