import Image from 'next/image'
import Logo from '../public/bannière_toin_dev_black_none_bg.png'
import Logo1 from '../public/icon_toin_dev_black_none_bg.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

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
  return (
    <Disclosure
      as="div"
      className="mt-3 sm:mx-14 max-w-5xl border ease-in duration-300 shadow-md backdrop-blur-md backdrop-saturate-200 fixed min-w-[90%] rounded-[32px]"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Menu</span>
                  {open ? (
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
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="flex-shrink-0 flex items-center">
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
                </div>
                <div className="hidden sm:flex items-center sm:ml-6">
                  <div className="flex space-x-1 lg:space-x-4">
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
                  </div>
                </div>
              </div>
            </div>
            <Transition
              show={open}
              enter="transition duration-[400ms] ease-out"
              enterFrom="transform scale-y-0 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-white duration-300',
                        'block px-3 py-2 rounded-md text-base font-medium hover:font-bold hover:underline decoration-red decoration-3 uppercase'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  )
}
