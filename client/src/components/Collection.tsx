import {Box, Skeleton, Typography} from '@mui/material'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import {BsCartPlusFill} from 'react-icons/bs'
import {useAppDispatch, useAppSelector} from '../hooks'
import {toast} from 'react-toastify'
import {Product} from '../types/types'
import {Link} from 'react-router-dom'
import {fetchAddToCart} from '../features/cart/cartSlice'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useEffect} from 'react'
import {fetchGetProducts} from '../features/products/productSlice'
import {Navigation} from 'swiper'

const categoryFont = createTheme({
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
  },
})

const Hr = styled('hr')(({title}: {title: string}) => ({
  lineHeight: ' 0.2em',
  position: 'relative',
  outline: 0,
  border: 0,
  color: 'black',
  textAlign: 'center',
  fontSize: '30px',
  height: '1.5em',
  opacity: '1',
  fontWeight: 'bold',
  margin: '50px',

  '&:before': {
    content: '""',
    background: 'linear-gradient(to right, transparent, #4518D9, transparent)',
    position: 'absolute',
    left: '0',
    top: '50%',
    width: '100%',
    height: '1px',
  },

  '&:after': {
    content: `"${title}"`,
    flexwrap: 'wrap',
    position: ' relative',
    display: ' inline-block',
    color: 'black',
    padding: '0 .5em',
    lineHeight: '1.5em',
    backgroundColor: '#ffff',
  },
}))

interface Data {
  userId: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export const Collection = ({
  title,
  badg,
  products,
}: {
  title: string
  badg: string
  products: []
}) => {
  const {currentUser, rol} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const addToCart = (data: Data) => {
    if (rol === 'user' || rol === 'admin') {
      dispatch(fetchAddToCart(data))
      notifyAddedToCart()
    } else notifyRegister()
  }

  const notifyRegister = () => {
    toast.error('Please register!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const notifyAddedToCart = () => {
    toast.success('Added to cart!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <Box marginTop='60px'>
      <Box>
        <Hr title={title} />
      </Box>
      {products ? (
        <Box>
          <Swiper
            loop
            slidesPerView={1}
            breakpoints={{
              560: {slidesPerView: 2},
              900: {slidesPerView: 3},
              1200: {slidesPerView: 4},
              1900: {slidesPerView: 5},
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {products.map((product: Product) => (
              <SwiperSlide
                key={product.id}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  textAlign: 'center',
                }}
              >
                <ThemeProvider theme={categoryFont}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      style={{width: 370, height: 570}}
                      src={product.image}
                    />

                    <Box
                      width='40px'
                      height='20px'
                      bgcolor='#000'
                      padding='4px'
                      position='absolute'
                      color='white'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      top='3.9%'
                      left='9.8%'
                      style={{
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <Typography>{badg}</Typography>
                    </Box>
                  </Link>
                  <Box
                    style={{
                      transform: 'translate(-50%, -50%)',
                    }}
                    position='absolute'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    bottom='6.5%'
                    left='90%'
                  >
                    <BsCartPlusFill
                      fontSize='35px'
                      color='black'
                      cursor='pointer'
                      onClick={() =>
                        addToCart({
                          userId: currentUser.id,
                          productId: product.id!,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.image,
                        })
                      }
                    />
                  </Box>
                </ThemeProvider>

                <Link
                  to={`/product/${product.id}`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <Typography>{product.name}</Typography>
                  <Box>${product.price}</Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Box>
          <Box display={{xs: 'flex', md: 'none'}} justifyContent='center'>
            <Skeleton
              sx={{bgcolor: 'grey.900'}}
              variant='rectangular'
              width={370}
              height={570}
            />
          </Box>

          <Box
            justifyContent='center'
            gap='3px'
            display={{xs: 'none', md: 'flex'}}
          >
            <Skeleton
              sx={{bgcolor: 'grey.900'}}
              variant='rectangular'
              width={370}
              height={570}
            />
            <Skeleton
              sx={{bgcolor: 'grey.900'}}
              variant='rectangular'
              width={370}
              height={570}
            />
            <Skeleton
              sx={{bgcolor: 'grey.900'}}
              variant='rectangular'
              width={370}
              height={570}
            />
            <Skeleton
              sx={{bgcolor: 'grey.900'}}
              variant='rectangular'
              width={370}
              height={570}
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}
