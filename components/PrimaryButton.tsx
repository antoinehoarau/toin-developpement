import React from 'react'
import PropsTypes from 'prop-types'
import Link from 'next/link'

export default function PrimaryButton(props: any) {
  return (
    <>
      <Link href={props.link}>
        <a>
          <button
            className={`font-nunito font-bold text-red uppercase
            border border-red rounded-full px-4 py-2 duration-300
            hover:text-white hover:bg-red
            hover:-translate-y-1  hover:scale-105
            ${props.style}
            `}
          >
            {props.title}
          </button>
        </a>
      </Link>
    </>
  )
}

PrimaryButton.defaultProps = {
  link: '/',
  title: 'title',
  style: 'text-xl',
}

PrimaryButton.propsTypes = {
  link: PropsTypes.string,
  title: PropsTypes.string,
  style: PropsTypes.string,
}
