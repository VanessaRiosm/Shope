import {Box, Typography, createTheme, ThemeProvider} from '@mui/material'
import {Link} from 'react-router-dom'

const category = [
  {
    title: 'vestidos',
    image:
      'https://www.studiof.com.co/arquivos/Categoria-Ropa-Pantalones-100423.jpg?v=638167331724970000',
  },
  {
    title: 'zapatos',
    image:
      'https://cdn.baguer.co/uploads/2023/10/zapatos-para-mujer-unicolor-con-cadena-derek-lovely-blanco-829408BL_A.jpg_yIJ5mwZbjntd70Bl7876FtOExMoPCV9qHrSh1gZCzDojWX0gsp.jpg',
  },
  {
    title: 'blusas',
    image:
      'https://studiofco.vteximg.com.br/arquivos/ids/1252434-1000-1071/-stfco-producto-Camisas-blusas-VERDENEON-S172728-1.jpg?v=637650670011070000',
  },
]

const categoryFont = createTheme({
  typography: {
    fontFamily: ['Dancing Script', 'cursive'].join(','),
  },
})

export const Categories = (props: any) => {
  return (
    <Box>
      {props.siP === 'si' ? (
        //box principal

        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px', xl: '800px'}}
          display='flex'
        >
          <ThemeProvider theme={categoryFont}>
            {/* primer imagen */}
            <Box
              marginRight='5px'
              width='60%'
              maxHeight='100%'
              position='relative'
              display='inline-block'
              textAlign='center'
            >
              <Link
                to={`/productlist`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <img
                  src={category[2].image}
                  style={{
                    maxHeight: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    width: '99.5%',
                  }}
                />

                <Typography
                  position='absolute'
                  fontFamily='monospace'
                  top='50%'
                  left='50%'
                  sx={{typography: {xs: 'h4', sm: 'h2', md: 'h1'}}}
                  style={{
                    transform: 'translate(-50%, -50%)',
                    WebkitTextStroke: '0.8px #4518d9',
                  }}
                >
                  Jackets
                </Typography>
              </Link>
            </Box>

            {/* Box de segunda y tercer imagen */}
            <Box width='40%' maxHeight='100%'>
              {/* Segunda imagen */}
              <Box
                height='49.5%'
                width='100%'
                position='relative'
                display='inline-block'
                textAlign='center'
              >
                <Link
                  to={`/productlist`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <img
                    src={category[0].image}
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      minWidth: '100%',
                      maxHeight: '100%',
                      minHeight: '100%',
                    }}
                  />
                  <Typography
                    position='absolute'
                    fontFamily='monospace'
                    top='50%'
                    left='50%'
                    sx={{typography: {xs: 'h4', sm: 'h2', md: 'h1'}}}
                    style={{
                      transform: 'translate(-50%, -50%)',
                      WebkitTextStroke: '0.8px #4518d9',
                    }}
                  >
                    Dresses
                  </Typography>
                </Link>
              </Box>

              {/* tercer imagen */}
              <Box
                height='50%'
                width='100%'
                paddingTop='4px'
                position='relative'
                display='inline-block'
                textAlign='center'
              >
                <Link
                  to={`/productlist`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <img
                    src={category[1].image}
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      minWidth: '100%',
                      maxHeight: '99%',
                      minHeight: '99%',
                    }}
                  />
                  <Typography
                    position='absolute'
                    fontFamily='monospace'
                    top='50%'
                    left='50%'
                    sx={{typography: {xs: 'h4', sm: 'h2', md: 'h1'}}}
                    style={{
                      transform: 'translate(-50%, -50%)',
                      WebkitTextStroke: '0.8px #4518d9',
                    }}
                  >
                    Jeans
                  </Typography>
                </Link>
              </Box>
            </Box>
          </ThemeProvider>
        </Box>
      ) : (
        //box principal
        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px', xl: '800px'}}
          display='flex'
        >
          <ThemeProvider theme={categoryFont}>
            {/* Box de segunda y tercer imagen */}
            <Box width='40%' maxHeight='100%'>
              {/* Segunda imagen */}
              <Box
                height='49.5%'
                width='100%'
                position='relative'
                display='inline-block'
                textAlign='center'
              >
                <Link
                  to={`/productlist`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <img
                    src={category[1].image}
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      minWidth: '100%',
                      maxHeight: '100%',
                      minHeight: '100%',
                    }}
                  />

                  <Typography
                    position='absolute'
                    fontFamily='monospace'
                    top='50%'
                    left='50%'
                    sx={{typography: {xs: 'h3', sm: 'h2', md: 'h1'}}}
                    style={{
                      transform: 'translate(-50%, -50%)',
                      WebkitTextStroke: '0.8px #4518d9',
                    }}
                  >
                    Shoes
                  </Typography>
                </Link>
              </Box>

              {/* tercer imagen */}
              <Box
                height='50%'
                width='100%'
                paddingTop='5px'
                position='relative'
                display='inline-block'
                textAlign='center'
              >
                <Link
                  to={`/productlist`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <img
                    src={category[0].image}
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      minWidth: '100%',
                      maxHeight: '99.10%',
                      minHeight: '99.10%',
                    }}
                  />
                  <Typography
                    position='absolute'
                    fontFamily='monospace'
                    top='50%'
                    left='50%'
                    sx={{typography: {xs: 'h4', sm: 'h2', md: 'h1'}}}
                    style={{
                      transform: 'translate(-50%, -50%)',
                      WebkitTextStroke: '0.8px #4518d9',
                    }}
                  >
                    Shirts
                  </Typography>
                </Link>
              </Box>
            </Box>
            {/* primer imagen */}
            <Box
              marginLeft='5px'
              width='60%'
              maxHeight='100%'
              position='relative'
              display='inline-block'
              textAlign='center'
            >
              <Link
                to={`/productlist`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <img
                  src={category[2].image}
                  style={{
                    maxHeight: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    width: '99.5%',
                  }}
                />
                <Typography
                  position='absolute'
                  fontFamily='monospace'
                  top='50%'
                  left='50%'
                  sx={{typography: {xs: 'h4', sm: 'h2', md: 'h1'}}}
                  style={{
                    transform: 'translate(-50%, -50%)',
                    WebkitTextStroke: '0.8px #4518d9',
                  }}
                >
                  Pants
                </Typography>
              </Link>
            </Box>
          </ThemeProvider>
        </Box>
      )}
    </Box>
  )
}
