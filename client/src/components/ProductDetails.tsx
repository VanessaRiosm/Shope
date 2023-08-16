import {Box, Button} from '@mui/material'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'

const product = {
  title: 'Jean Wide Leg con ruedo al corte',
  image:
    'https://nafnaf.vtexassets.com/arquivos/ids/953385-800-auto?v=638179413088170000&width=800&height=auto&aspect=true',
  price: '$45.98',
  description:
    'Jean de tiro súper alto. • Wide Leg fit. • Ajustable con botón y cierre. • Cinco bolsillos. • Ruedo al corte. • Largo cropped. • Perfecto para combinar con tus camisas coloridas favoritas. *Algunas pantallas pueden alterar el color real de la prenda. *La modelo usa un jean talla 6.',
}

export const ProductDetails = () => {
  return (
    <Box>
      <NavBar />
      <Box maxHeight='950px' display='flex' margin='10px 40px 10px 40px'>
        <img
          src={product.image}
          style={{
            width: '90%',
            height: '900px',
            border: '0.5px solid black',
          }}
        />

        <Box
          width='100%'
          padding='30px'
          maxHeight='500px'
          margin='20px'
          display='column'
        >
          <p style={{fontSize: '30px', fontWeight: 'bold'}}> {product.title}</p>
          <p style={{fontSize: '20px', fontWeight: 'bold'}}>{product.price}</p>
          <p style={{fontSize: '20px'}}> {product.description} </p>
          <Box>
            <Box>
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#4518D9 ',
                }}
              >
                Comprar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footerr />
    </Box>
  )
}
