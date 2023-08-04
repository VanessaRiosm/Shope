import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {fetchUsers} from '../features/users/userSlice'
import {RootState} from '../redux/store'
import {Box, Grid, Typography} from '@mui/material'
import {NavBar} from './NavBar'
import {products} from '../products'
import {Product} from '../types/types'
import {AppDispatch} from '../redux/store'

export const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const getUsers = useSelector((state: RootState) => state.user.userList)
  const getStatus = useSelector((state: RootState) => state.user.status)

  useEffect(() => {
    if (getStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [])

  return (
    <Box>
      <NavBar />
      <Box
        display='grid'
        justifyItems='center'
        marginTop='20px'
        marginBottom='20px'
      >
        <Typography variant='h6' fontWeight='bold'>
          Explora la colección de prendas tejidas de Shope que van a darle un
          toque trendy y sofisticado a tus días. Nuestros colores y detalles
          especiales serán the pop of color que tu clóset necesita.
        </Typography>
      </Box>

      <Grid
        container
        columnSpacing={0}
        columns={{xs: 1, sm: 2, md: 3, lg: 4}}
        justifyContent='center'
      >
        {products &&
          products.map((product: Product) => (
            <Grid key={product.id} xs={1}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img style={{maxWidth: 500, height: 500}} src={product.image} />

                <Box>{product.title}</Box>
                <Box>{product.price}</Box>
              </Box>
            </Grid>
          ))}
      </Grid>
      {/* <Box
        display='grid'
        justifyItems='center'
        marginTop='20px'
        marginBottom='20px'
      >
        {getUsers &&
          getUsers.map((user: any) => (
            <Box key={user.name}>
              <div>
                <img src={user.picture} />
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </Box>
          ))}
      </Box> */}
    </Box>
  )
}
