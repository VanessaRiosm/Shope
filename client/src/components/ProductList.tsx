import {Box, Grid, Typography} from '@mui/material'
import {NavBar} from './NavBar'
import {Product} from '../types/types'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchGetProducts} from '../features/products/productSlice'

export const ProductList = () => {
  const products = useAppSelector((state: any) => state.product.productsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <Box>
      <NavBar />
      <Box
        display='grid'
        justifyItems='center'
        marginTop='20px'
        marginBottom='20px'
      >
        <Typography variant='h6' fontWeight='bold'>
          Explore Shope's collection of knitwear that will give you a trendy and
          sophisticated touch to your days. Our colors and details special items
          will be the pop of color that your closet needs.
        </Typography>
      </Box>

      <Grid
        container
        columnSpacing={0}
        columns={{xs: 1, sm: 2, md: 3, lg: 4}}
        justifyContent='center'
      >
        {products &&
          products.map((product: Product) => (
            <Grid key={product.id} xs={1}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img style={{maxWidth: 500, height: 500}} src={product.image} />

                <Box>{product.name}</Box>
                <Box>{product.price}</Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
