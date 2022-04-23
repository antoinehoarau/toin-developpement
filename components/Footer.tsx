import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/logo/banniere_toin_dev_black_none_bg.png'
import Instagram from 'public/assets/logo/instagram.svg'
import Github from 'public/assets/logo/github.svg'
import Linkedin from 'public/assets/logo/linkedin.svg'
import { navigation } from './Menu'

const size = 1.3

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center w-full py-5 mt-44 sm:mt-0 border-t">
        <div className="flex flex-col w-full lg:flex-row justify-around">
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <div className=" w-72 lg:w-96">
              <Link href="/">
                <a>
                  <Image
                    src={Logo}
                    alt="Logo Toin developpement"
                    layout="responsive"
                    width={Logo.width}
                    height={Logo.height}
                  />
                </a>
              </Link>
            </div>
            <div className="flex flex-row space-x-4">
              <Link href="https://www.instagram.com/toin.developpement/">
                <a target="_blank">
                  <Image
                    src={Instagram}
                    alt="Logo Instagram"
                    layout="fixed"
                    width={Instagram.width / size}
                    height={Instagram.height / size}
                  />
                </a>
              </Link>
              <Link href="https://github.com/ToinDeveloppement">
                <a target="_blank">
                  <Image
                    src={Github}
                    alt="Logo Github"
                    layout="fixed"
                    width={Github.width / size}
                    height={Github.height / size}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/antoine-toin-d%C3%A9veloppement-20713422b/">
                <a target="_blank">
                  <Image
                    src={Linkedin}
                    alt="Logo Linkedin"
                    layout="fixed"
                    width={Linkedin.width / size}
                    height={Linkedin.height / size}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="basis-2/5 mt-10 flex items-center">
            <div className="flex flex-col w-full lg:flex-row justify-around lg:items-start">
              <div className="flex flex-col mt-5 lg:mt-0 items-center">
                <h3 className="text-3xl font-bold uppercase">Menu</h3>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-xl font-light mt-1 decoration-red hover:underline hover:font-bold">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col mt-5 lg:mt-0 items-center">
                <h3 className="text-3xl font-bold uppercase">Contact</h3>
                <a
                  className="text-xl font-light mt-1 decoration-red hover:underline hover:font-bold"
                  href="mailto:info@toin-developpement.fr"
                >
                  info@toin-developpement.fr
                </a>
                <a
                  className="text-xl font-light mt-1 decoration-red hover:underline hover:font-bold"
                  href="tel:+262692555756"
                >
                  0692 55.57.56
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p>Copyright © 2021 Toin Développement. Tous droits réservés.</p>
          <a className="text-xl font-light my-2 decoration-red hover:underline hover:font-bold hover:cursor-pointer">
            Mention Légales
          </a>
        </div>
      </div>
    </>
  )
}
