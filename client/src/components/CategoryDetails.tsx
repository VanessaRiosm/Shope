import {Box, Skeleton, Typography} from '@mui/material'
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

      {products[0] ? (
        <Box>
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
        <Box
          display={{xs: 'grid', md: 'flex'}}
          justifyContent='center'
          gap='3px'
        >
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
