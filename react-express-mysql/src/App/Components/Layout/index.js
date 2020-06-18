import React from 'react'

import NavBar from '../NavBar'

const index = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default index
