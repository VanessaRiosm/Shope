// import React from 'react'
import {Categories} from './Categories'
import {Collection} from './Collection'
// import {Carousel} from './Carousel'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import Marque from './Marque'
import {Box} from '@mui/material'

export const Home = () => {
  return (
    <Box>
      <NavBar />
      {/* <Carousel /> */}
      <Marque />
      <Collection title={'NUEVA COLECCIÓN'} />
      <Categories siP={'si'} />
      <Collection title={'MAS VENDIDO'} />
      <Categories siP={'no'} />
      <Footerr />
    </Box>
  )
}
