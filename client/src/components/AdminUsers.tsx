import {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks'
import {fetchGetUsers} from '../features/users/userSlice'
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
  const users = useAppSelector((state: any) => state.user.usersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetUsers())
  }, [])

  return (
    <Box
      margin='30px'
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
      {users &&
        users.map((user: any) => (
          <Box>
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
                <Button size='medium'>
                  <BsTrash3 />
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
    </Box>
  )
}
