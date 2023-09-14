import {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks'
import {
  fetchDeleteProduct,
  fetchGetProducts,
} from '../features/products/productSlice'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material'
import {FaPencilAlt} from 'react-icons/fa'
import {BsTrash3} from 'react-icons/bs'
import {AdminProductForm} from './AdminProductForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const AdminProducts = () => {
  const {productsList, refresh} = useAppSelector((state: any) => state.product)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [refresh])

  return (
    <Box margin='60px 25px 25px 25px'>
      <Box width='94.8%' display='flex' justifyContent='right' padding='30px'>
        <Button
          variant='contained'
          sx={{bgcolor: '#4518D9'}}
          onClick={handleOpen}
        >
          Add Product
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <AdminProductForm />
          </Box>
        </Modal>
      </Box>
      <Box
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
        {productsList &&
          productsList.map((product: any) => (
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
                  <Button
                    size='medium'
                    onClick={() => dispatch(fetchDeleteProduct(product.id))}
                  >
                    <BsTrash3 />
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
      </Box>
    </Box>
  )
}
