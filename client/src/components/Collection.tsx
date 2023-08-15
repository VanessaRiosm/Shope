import {Box} from '@mui/material'
import {products} from '../products'
import {styled} from '@mui/material/styles'
import {useState} from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

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

export const Collection = ({title}: {title: string}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <Box marginTop='60px'>
      <Box>
        <Hr title={title} />
      </Box>

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
        {products.map((product: any) => (
          <Box key={product.id}>
            <img
              style={{width: 295, height: 430, margin: '5px'}}
              src={product.image}
            />
            <Box>{product.title}</Box>
            <Box>{product.price}</Box>
          </Box>
        ))}
      </ReactSimplyCarousel>
    </Box>
  )
}
