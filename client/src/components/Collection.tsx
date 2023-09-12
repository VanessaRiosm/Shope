import {Box, Skeleton, Typography} from '@mui/material'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import {BsCartPlusFill} from 'react-icons/bs'
import {useAppDispatch, useAppSelector} from '../hooks'
import {toast} from 'react-toastify'
import {Product} from '../types/types'
import {Link} from 'react-router-dom'
import {fetchAddToCart} from '../features/cart/cartSlice'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  extraLargeDesktop: {
    breakpoint: {max: 2300, min: 1891},
    items: 4,
  },

  superLargeDesktop: {
    breakpoint: {max: 1890, min: 1531},
    items: 4,
  },

  desktop: {
    breakpoint: {max: 1530, min: 1200},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1200, min: 700},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 700, min: 464},
    items: 1,
  },
}

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

  const addToCart = (data: any) => {
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

  return (
    <Box marginTop='60px'>
      <Box>
        <Hr title={title} />
      </Box>
      {products ? (
        <Box>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            additionalTransfrom={3}
            containerClass={`w-full`}
            ssr={true}
            infinite={true}
          >
            {products.map((product: Product) => (
              <div
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
                          productId: product.id,
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
              </div>
            ))}
          </Carousel>
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
        </Box>
      )}
    </Box>
  )
}
