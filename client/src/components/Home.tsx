// import React from 'react'
import {Categories} from './Categories'
import {Collection} from './Collection'
import {Carousel} from './Carousel'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import Marque from './Marque'
import {Box} from '@mui/material'

export const Home = () => {
  return (
    <Box>
      <NavBar />
      <Carousel />
      <Marque />
      <Collection title={'NEW ARRIVALS'} badg={'NEW'} />
      <Categories siP={'si'} />
      <Collection title={'TOP SELLER'} badg={'TOP'} />
      <Categories siP={'no'} />
      <Footerr />
    </Box>
  )
}
