import {styled} from '@mui/material/styles'
import {Box, ButtonBase, Typography} from '@mui/material'
import {categoryImages} from '../categoryImages'
import {Link} from 'react-router-dom'

const ImageBackdrop = styled('div')(({theme}) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}))

const ImageIconButton = styled(ButtonBase)(({theme}) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.1,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}))

export const Categories = (props: any) => {
  return (
    <Box>
      {props.siP === 'si' ? (
        <Box
          margin='60px 20px 60px 20px'
          height={{xs: '450px', sm: '550px', md: '650px', xl: '700px'}}
        >
          <Box
            sx={{
              maxWidth: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            <Box width='59.9%' marginRight='5px' height='100%'>
              {/* Primera imagen */}

              <Link
                to={`/categories/coats`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 20%',
                      backgroundImage: `url(${categoryImages[2].url})`,
                    }}
                  />
                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}}}
                    >
                      Classical
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>
            </Box>

            {/* Box de segunda y tercera imagen */}
            <Box width='39.7%' maxHeight='100%'>
              <Link
                to={`/categories/dresses`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '50%',
                    marginBottom: '5px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${categoryImages[0].url})`,
                    }}
                  />
                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{fontSize: {xs: '10px', sm: '20px', md: '30px'}}}
                    >
                      Dresses
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>

              {/* tercer imagen */}
              <Link
                to={`/categories/tops`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '49.3%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${categoryImages[1].url})`,
                    }}
                  />
                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{fontSize: {xs: '10px', sm: '20px', md: '30px'}}}
                    >
                      Tops
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          margin='60px 20px 60px 20px'
          height={{xs: '450px', sm: '550px', md: '650px', xl: '750px'}}
        >
          <Box
            sx={{
              maxWidth: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            {/* Box de segunda y tercera imagen */}
            <Box width='39.7%' maxHeight='100%'>
              <Link
                to={`/categories/pants`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '50%',
                    marginBottom: '5px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${categoryImages[5].url})`,
                    }}
                  />

                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{fontSize: {xs: '10px', sm: '20px', md: '30px'}}}
                    >
                      Pants
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>

              {/* tercer imagen */}

              <Link
                to={`/categories/shoes`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '49.3%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 70%',
                      backgroundImage: `url(${categoryImages[3].url})`,
                    }}
                  />

                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{fontSize: {xs: '10px', sm: '20px', md: '30px'}}}
                    >
                      Shoes
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>
            </Box>

            <Box width='59.9%' marginLeft='5px' height='100%'>
              {/* Primera imagen */}

              <Link
                to={`/categories/jackets`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <ImageIconButton
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 60%',
                      backgroundImage: `url(${categoryImages[4].url})`,
                    }}
                  />
                  <ImageBackdrop className='imageBackdrop' />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component='h3'
                      variant='h6'
                      color='inherit'
                      className='imageTitle'
                      sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}}}
                    >
                      Coats
                      <div className='imageMarked' />
                    </Typography>
                  </Box>
                </ImageIconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
