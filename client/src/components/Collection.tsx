import {Box, Button, Skeleton, Typography} from '@mui/material'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import {useEffect, useState} from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import {BsCartPlusFill} from 'react-icons/bs'
import {useAppDispatch, useAppSelector} from '../hooks'
import {fetchGetProducts} from '../features/products/productSlice'
import {Product} from '../types/types'
import {Link} from 'react-router-dom'

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

export const Collection = ({title, badg}: {title: string; badg: string}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const products = useAppSelector((state: any) => state.product.productsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <Box marginTop='60px'>
      <Box>
        <Hr title={title} />
      </Box>
      {products ? (
        <ReactSimplyCarousel
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
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              height: 25,
              lineHeight: 1,
              textAlign: 'center',
              width: 20,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              height: 25,
              lineHeight: 0,
              textAlign: 'center',
              width: 20,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {minWidth: 1700, itemsToShow: 5},
            {minWidth: 1300, maxWidth: 1700, itemsToShow: 4},
            {maxWidth: 1299, itemsToShow: 3},
            {maxWidth: 1000, itemsToShow: 2},
            {maxWidth: 700, itemsToShow: 1},
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
                    style={{width: 295, height: 430, margin: '5px'}}
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
                  bottom='5%'
                  left='90%'
                >
                  <Button>
                    <BsCartPlusFill fontSize='35px' color='black' />
                  </Button>
                </Box>
              </ThemeProvider>

              <Box>{product.name}</Box>
              <Box>${product.price}</Box>
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
