import {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks'
import {fetchGetProducts} from '../features/products/productSlice'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import {FaPencilAlt} from 'react-icons/fa'
import {BsTrash3} from 'react-icons/bs'

export const AdminProducts = () => {
  const products = useAppSelector((state: any) => state.product.productsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return (
    <Box
      marginTop='90px'
      marginLeft='25px'
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >
      {products &&
        products.map((product: any) => (
          <Box key={product.id}>
            <Card sx={{maxWidth: 320}}>
              <CardMedia
                component='img'
                alt='product image'
                height='160'
                image={product.image}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.name}
                </Typography>
                <Typography variant='body1' color='black'>
                  price: ${product.price}
                </Typography>
                <Typography variant='body1' color='black'>
                  category: {product.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='medium'>
                  <FaPencilAlt />
                </Button>
                <Button size='medium'>
                  <BsTrash3 />
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
    </Box>
  )
}
