import {Box, Skeleton, Typography} from '@mui/material'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import {useState} from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import {BsCartPlusFill} from 'react-icons/bs'
import {useAppDispatch, useAppSelector} from '../hooks'
import {toast} from 'react-toastify'
import {Product} from '../types/types'
import {Link} from 'react-router-dom'
import {fetchAddToCart} from '../features/cart/cartSlice'

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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
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
        <ReactSimplyCarousel
          containerProps={{
            style: {
              position: 'relative',
            },
          }}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          infinite={true}
          disableSwipeByMouse={true}
          disableSwipeByTouch={true}
          // botones
          forwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'black',
              border: '1px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              height: 25,
              lineHeight: 0,
              textAlign: 'center',
              width: 23,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'black',
              border: '1px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              height: 25,
              lineHeight: 0,
              textAlign: 'center',
              width: 23,
              right: '25%',
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {minWidth: 2301, itemsToShow: 6},
            {minWidth: 1891, maxWidth: 2300, itemsToShow: 5},
            {minWidth: 1531, maxWidth: 1890, itemsToShow: 4},
            {minWidth: 1150, maxWidth: 1530, itemsToShow: 3},
            {minWidth: 800, maxWidth: 1149, itemsToShow: 2},
            {maxWidth: 799, itemsToShow: 1},
          ]}
          speed={400}
          easing='linear'
        >
          {products.map((product: Product) => (
            <Box
              key={product.id}
              position='relative'
              display='inline-block'
              textAlign='center'
            >
              <ThemeProvider theme={categoryFont}>
                <Link to={`/product/${product.id}`}>
                  <img
                    style={{width: 360, height: 550, margin: '3px'}}
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
            </Box>
          ))}
        </ReactSimplyCarousel>
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
    </Box>
  )
}
