import React from 'react'
import NavBar from './Navbar/Navbar'

export default function Container(props) {
  return (
    <>
      <div className="flex flex-col justify-start items-center mx-3">
        <NavBar />
        {props.children}
      </div>
    </>
  )
}
