import {Box, Typography} from '@mui/material'
import {NavBar} from './NavBar'
import {Product} from '../types/types'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchSearchProducts} from '../features/products/productSlice'
import {Link, useParams} from 'react-router-dom'
import gif from '../images/VAyR.gif'

export const Search = () => {
  const products = useAppSelector((state) => state.product.productsFilter)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(fetchSearchProducts(params.param))
  }, [params])

  return (
    <Box>
      <NavBar />

      {products && products.length ? (
        <Box marginTop='80px'>
          <Box
            display={{xs: 'grid', md: 'flex'}}
            justifyContent='center'
            justifyItems='center'
            flexWrap='wrap'
            gap='30px'
            maxWidth='200rem'
          >
            {products.map((product: Product) => (
              <Box key={product.id}>
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  textAlign='center'
                >
                  <Link
                    to={`/product/${product.id}`}
                    style={{textDecoration: 'none', color: 'black'}}
                  >
                    <img
                      style={{maxWidth: 500, height: 550}}
                      src={product.image}
                    />

                    <Typography>{product.name}</Typography>
                    <Typography>${product.price}</Typography>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box mt='18rem'>
          <img src={gif} alt='Loading' height={'70rem'} />
        </Box>
      )}
    </Box>
  )
}
