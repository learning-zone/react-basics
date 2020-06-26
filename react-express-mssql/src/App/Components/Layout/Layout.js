import React from 'react'

import NavBar from '../NavBar/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
