import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

export default function Container(props: any) {
  return (
    <>
      <div className="flex flex-col justify-start items-center mx-3">
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </>
  )
}
