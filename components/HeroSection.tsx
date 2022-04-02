import React from 'react'
import PropsTypes from 'prop-types'
import PrimaryButton from 'components/PrimaryButton'
import Image from 'next/image'

export default function HeroSection(props: {
  title: string
  subtitle: string
  description: string
  linkButton: string
  titleButton: string
  styleButton: string
  ilustration: string
  wIllustration: number
  hIllustration: number
  showSubtitle: boolean
  showDescription: boolean
  showButton: boolean
  invesers: boolean
}) {
  return (
    <div
      className={`flex flex-col mb-40 h-[95vh]
      w-full md:flex-row${
        props.invesers ? '-reverse' : ''
      } max-w-[1500px]`}
    >
      <div className="basis-1/2 md:px-2 py-10 h-full flex flex-col justify-around items-center">
        <div>
          <h2 className="text-5xl font-extrabold uppercase max-w-sm md:text-5xl lg:text-7xl lg:max-w-lg xl:text-7 xl:max-w-xl">
            {props.title}
          </h2>
          {props.showSubtitle ? (
            <h3 className="text-4xl font-bold text-yellow mt-2 max-w-sm md:text-4xl lg:text-5xl lg:max-w-lg xl:text-5xl">
              {props.subtitle}
            </h3>
          ) : (
            ''
          )}

          {props.showDescription ? (
            <p className="font-light mt-2 w-11/12 max-w-xs">
              {props.description}
            </p>
          ) : (
            ''
          )}

          {props.showButton ? (
            <PrimaryButton
              link={props.linkButton}
              title={props.titleButton}
              style={props.styleButton}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center sm:px-10 basis-1/2 h-full">
        <Image
          alt="Mountains"
          src={props.ilustration}
          layout="responsive"
          priority={true}
          width={props.wIllustration}
          height={props.hIllustration}
        />
      </div>
    </div>
  )
}

HeroSection.defaultProps = {
  title: 'Add a title',
  subtitle: 'Add a subtitle',
  description: `Add a description`,
  linkButton: '/',
  titleButton: 'add a text here',
  styleButton: 'text-xl mt-5',
  ilustration: {},
  wIllustration: null,
  hIllustration: null,
  showSubtitle: false,
  showDescription: false,
  showButton: false,
  invesers: false,
}

HeroSection.propType = {
  title: PropsTypes.string,
  subtitle: PropsTypes.string,
  description: PropsTypes.string,
  linkButton: PropsTypes.string,
  titleButton: PropsTypes.string,
  styleButton: PropsTypes.string,
  ilustration: PropsTypes.object,
  wIllustration: PropsTypes.number,
  hIllustration: PropsTypes.number,
  showSubtitle: PropsTypes.bool,
  showDescription: PropsTypes.bool,
  showButton: PropsTypes.bool,
  invesers: PropsTypes.bool,
}
