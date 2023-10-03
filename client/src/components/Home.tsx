import {useEffect} from 'react'
import {Collection} from './Collection'
import {Carousel} from './Carousel'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import Marque from './Marque'
import {Box} from '@mui/material'
import {Categories} from './Categories'
import {useAppDispatch, useAppSelector} from '../hooks'
import {fetchGetProducts} from '../features/products/productSlice'
import {Promotion} from './Promotion'

export const Home = () => {
  const products = useAppSelector((state) => state.product.productsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <Box>
      <NavBar />
      <Carousel />
      <Marque />
      <Collection
        title={'NEW ARRIVALS'}
        badg={'NEW'}
        products={products && products[0] && products.slice(8, 18)}
      />
      <Promotion knit={'no'} />
      <Categories siP={'si'} />

      <Collection
        title={'TOP SELLER'}
        badg={'TOP'}
        products={products && products[0] && products.slice(8, 18)}
      />
      <Promotion knit={'si'} />
      <Categories siP={'no'} />

      <Footerr />
    </Box>
  )
}
