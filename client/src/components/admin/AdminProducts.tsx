import {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../../hooks'
import {fetchGetProducts} from '../../features/products/productSlice'
import {Box, Grid} from '@mui/material'

export const AdminProducts = () => {
  const products = useAppSelector((state: any) => state.product.productsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <Box>
      {products &&
        products.map((product: any) => (
          <Grid key={product.id} xs={1}>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <img style={{maxWidth: 500, height: 500}} src={product.image} />

              <Box>{product.name}</Box>
              <Box>{product.price}</Box>
              <Box>{product.category}</Box>
              <Box>{product.description}</Box>
            </Box>
          </Grid>
        ))}
    </Box>
  )
}
