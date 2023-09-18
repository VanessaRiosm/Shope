import {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks'
import {fetchGetUsers, fetchDeleteUser} from '../features/users/userSlice'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material'
import {FaPencilAlt} from 'react-icons/fa'
import {BsTrash3} from 'react-icons/bs'
import {AdminUserForm} from './AdminUserForm'
import {AdminUserEdit} from './AdminUserEdit'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const AdminUsers = () => {
  const {usersList, refresh} = useAppSelector((state: any) => state.user)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [currentUser, setCurrentUser] = useState(usersList)
  const [openEditModal, setOpenEditModaln] = useState(false)
  const handleOpenEditModal = () => setOpenEditModaln(true)
  const handleCloseEditModal = () => setOpenEditModaln(false)
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    dispatch(fetchGetUsers())
  }, [refresh])

  return (
    <Box margin='60px 25px 25px 25px'>
      <Box width='94.8%' display='flex' justifyContent='right' padding='30px'>
        <Button
          variant='contained'
          sx={{bgcolor: '#4518D9'}}
          onClick={handleOpen}
        >
          Add User
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <AdminUserForm />
          </Box>
        </Modal>
      </Box>

      <Box
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
                  <Button
                    size='medium'
                    onClick={() => {
                      setCurrentUser(user)
                      handleOpenEditModal()
                    }}
                  >
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
        <Modal
          open={openEditModal}
          onClose={handleCloseEditModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <AdminUserEdit user={currentUser} />
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}
