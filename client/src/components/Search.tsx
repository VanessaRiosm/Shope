import {Box, Grid} from '@mui/material'
import {NavBar} from './NavBar'
import {Product} from '../types/types'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchSearchProducts} from '../features/products/productSlice'
import {Link, useParams} from 'react-router-dom'
import noproduct from '../images/noproduct.png'

export const Search = () => {
  const products = useAppSelector((state: any) => state.product.productsFilter)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(fetchSearchProducts(params.param))
  }, [params])

  return (
    <Box>
      <NavBar />

      <Grid
        marginTop='80px'
        container
        columnSpacing={0}
        columns={{xs: 1, sm: 2, md: 3, lg: 4}}
        justifyContent='center'
      >
        {products.length ? (
          products.map((product: Product) => (
            <Grid key={product.id} xs={1}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Link
                  to={`/product/${product.id}`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <img
                    style={{maxWidth: 500, height: 500}}
                    src={product.image}
                  />

                  <Box>{product.name}</Box>
                  <Box>{product.price}</Box>
                </Link>
              </Box>
            </Grid>
          ))
        ) : (
          <Box>
            <img src={noproduct} alt='No hay productos asi' height={'300rem'} />
          </Box>
        )}
      </Grid>
    </Box>
  )
}
