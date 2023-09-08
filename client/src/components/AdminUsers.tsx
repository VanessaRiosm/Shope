import {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks'
import {fetchGetUsers, fetchDeleteUser} from '../features/users/userSlice'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import {FaPencilAlt} from 'react-icons/fa'
import {BsTrash3} from 'react-icons/bs'

export const AdminUsers = () => {
  const {usersList, refresh} = useAppSelector((state: any) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetUsers())
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [refresh])

  return (
    <Box
      marginTop='90px'
      marginLeft='25px'
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >
      {usersList &&
        usersList.map((user: any) => (
          <Box key={user.id}>
            <Card sx={{maxWidth: 320}}>
              <CardMedia
                component='img'
                alt='green iguana'
                height='140'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpWWQrAJpIR6Xy7FhzhCT00vzSmT7xw9S2Q&usqp=CAU'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {user.username}
                </Typography>
                <Typography variant='body1' color='black'>
                  Email: {user.email}
                </Typography>
                <Typography variant='body1' color='black'>
                  Role: {user.rol}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='medium'>
                  <FaPencilAlt />
                </Button>
                <Button
                  size='medium'
                  onClick={() => dispatch(fetchDeleteUser(user.id))}
                >
                  <BsTrash3 />
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
    </Box>
  )
}
