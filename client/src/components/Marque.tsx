import {Box} from '@mui/material'
import Marquee from 'react-fast-marquee'

const anArray: string[] = [
  'SUMMER SALE HASTA 60% REF. SELECCIONADAS ',
  'SHOPE COMPRA SEGURA',
  'SHOPE ENVÍO GRATIS POR COMPRAS IGUALES O SUPERIORES A $150.000',
]

const Marque = () => (
  <Box>
    <Marquee
      speed={80}
      autoFill={true}
      style={{
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        // top, right, bottom, left
        margin: '10px 0px 10px 0px',
      }}
    >
      {anArray.map((par: string) => (
        <p style={{marginLeft: '60px'}}>{par}</p>
      ))}
    </Marquee>
  </Box>
)

export default Marque
