import {Box, Grid, Skeleton} from '@mui/material'
import {NavBar} from './NavBar'
import {Product} from '../types/types'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {
  clearCategory,
  fetchGetCategories,
} from '../features/categories/categorySlice'
import {Footerr} from './Footer'

export const CategoryDetails = () => {
  const products = useAppSelector((state) => state.category.filterProducts)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(fetchGetCategories(params.category!))
    window.scrollTo({top: 0, behavior: 'smooth'})
    return () => {
      dispatch(clearCategory())
    }
  }, [params])

  return (
    <Box marginTop='80px'>
      <NavBar />
      {/* <Box
        display='grid'
        justifyItems='center'
        marginTop='20px'
        marginBottom='20px'
      >
        <Typography variant='h6' fontWeight='bold' mt='50px'>
          hola
        </Typography>
      </Box> */}

      {products[0] ? (
        <Box>
          <Grid
            container
            columnSpacing={0}
            columns={{xs: 1, sm: 2, md: 3, lg: 4}}
            justifyContent='center'
          >
            {products.map((product: Product) => (
              <Grid key={product.id} xs={1}>
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Link
                    to={`/product/${product.id}`}
                    style={{textDecoration: 'none', color: 'black'}}
                  >
                    <img
                      style={{maxWidth: 500, height: 550}}
                      src={product.image}
                    />

                    <Box>{product.name}</Box>
                    <Box>{product.price}</Box>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box display='flex' justifyContent='center' gap='3px'>
          <Skeleton
            sx={{bgcolor: 'grey.900'}}
            variant='rectangular'
            width={295}
            height={430}
          />
          <Skeleton
            sx={{bgcolor: 'grey.900'}}
            variant='rectangular'
            width={295}
            height={430}
          />
          <Skeleton
            sx={{bgcolor: 'grey.900'}}
            variant='rectangular'
            width={295}
            height={430}
          />
          <Skeleton
            sx={{bgcolor: 'grey.900'}}
            variant='rectangular'
            width={295}
            height={430}
          />
        </Box>
      )}

      <Box mt='70px'>
        <Footerr />
      </Box>
    </Box>
  )
}
