import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
} from 'framer-motion'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <AnimateSharedLayout>
      <motion.ul
        className="bg-white w-92 flex"
        layout
        initial={{ borderRadius: 25 }}
      >
        <motion.li
          layout
          onClick={toggleOpen}
          initial={{ borderRadius: 10 }}
        >
          <motion.div className="avatar" layout />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="row" />
                <div className="row" />
                <div className="row" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
    </AnimateSharedLayout>
  )
}

export default Home
