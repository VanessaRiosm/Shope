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
  }, [])

  return (
    // <Box
    //   margin='30px'
    //   bgcolor={{xs: 'green', sm: 'red', md: 'pink', lg: 'purple', xl: 'blue'}}
    //   sx={{
    //     display: 'grid',
    //     gap: 1,
    //     gridTemplateColumns: {
    //       xs: 'repeat(1, 1fr)',
    //       // sm: 'repeat(2, 1fr)',
    //       // md: 'repeat(2, 1fr)',
    //       lg: 'repeat(2, 1fr)',
    //     },
    //   }}
    // >
    //   {products &&
    //     products.map((product: any) => (
    //       <Grid key={product.id} xs={1}>
    //         <Box display='flex' flexDirection='column' alignItems='center'>
    //           <img style={{maxWidth: 500, height: 500}} src={product.image} />

    //           <Box>{product.name}</Box>
    //           <Box>{product.price}</Box>
    //           <Box>{product.category}</Box>
    //         </Box>
    //       </Grid>
    //     ))}
    // </Box>

    <Box
      margin='30px'
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
          <Box>
            <Card sx={{maxWidth: 320}}>
              <CardMedia
                component='img'
                alt='green iguana'
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
