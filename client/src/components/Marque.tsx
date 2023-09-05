import {Box} from '@mui/material'
import Marquee from 'react-fast-marquee'

const anArray: string[] = [
  'SUMMER SALE UP TO 60% SELECTED REF.',
  'SHOPE SAFE BUY',
  'SHOPE FREE SHIPPING FOR PURCHASES EQUAL TO OR OVER $150,000',
]

const Marque = () => (
  <Box>
    <Marquee
      speed={80}
      autoFill={true}
      style={{
        backgroundColor: 'black',
        color: 'white',
        // top, right, bottom, left
        margin: '10px 0px 10px 0px',
      }}
    >
      {anArray.map((par: string) => (
        <Box key={par}>
          <p style={{marginLeft: '60px'}}>{par}</p>
        </Box>
      ))}
    </Marquee>
  </Box>
)

export default Marque
