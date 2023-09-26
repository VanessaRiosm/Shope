import {Button, FormGroup, Box, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {fetchRegister} from '../features/users/userSlice'
import {useAppDispatch} from '../hooks'
import {User} from '../types/types'

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('required field')
    .min(3, 'minimum 3 characters')
    .max(25, 'maximum 15 characters'),

  email: Yup.string()
    .required('required field')
    .max(50, 'maximum 50 characters')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'invalid email address'),

  password: Yup.string()
    .required('required field')
    .min(8, 'minimum 8 characters')
    .max(15, 'maximum 15 characters'),

  confirmPassword: Yup.string()
    .required('required field')
    .oneOf([Yup.ref('password')], 'the password does not match'),

  rol: Yup.string().required('required field'),
})

export const AdminUserEdit = ({user}: any) => {
  const dispatch = useAppDispatch()
  return (
    <Box>
      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          password: '',
          confirmPassword: '',
          rol: 'user',
        }}
        validationSchema={formSchema}
        onSubmit={async (values: User, {resetForm}) => {
          try {
            dispatch(fetchRegister(values))
          } catch (error) {
            if (error instanceof Error) console.error('Error: ', error.message)
          }
          resetForm()
        }}
      >
        <Form>
          <FormGroup>
            <label htmlFor='username' id='username' style={{marginTop: '10px'}}>
              {' '}
              Username:
            </label>

            <Field
              name='username'
              type='user'
              style={{
                margin: '5px 0px 0px 0px',
                padding: '7px',
                width: '100%',
                height: '20px',
              }}
            />

            <Typography color='red'>
              <ErrorMessage name='username' />
            </Typography>
          </FormGroup>

          <FormGroup>
            <label htmlFor='email' id='email' style={{marginTop: '10px'}}>
              {' '}
              Email:
            </label>

            <Field
              name='email'
              type='email'
              style={{
                margin: '5px 0px 0px 0px',
                padding: '7px',
                width: '100%',
                height: '20px',
              }}
            />

            <Typography color='red'>
              <ErrorMessage name='email' />
            </Typography>
          </FormGroup>

          <FormGroup>
            <label htmlFor='password' id='password' style={{marginTop: '10px'}}>
              {' '}
              Change Password:
            </label>
            <Field
              name='password'
              type='password'
              style={{
                margin: '10px 0px 0px 0px',
                padding: '7px',
                width: '100%',
                height: '20px',
              }}
            />
            <Typography color='red'>
              <ErrorMessage name='password' />
            </Typography>
          </FormGroup>

          <FormGroup>
            <label
              htmlFor='confirmPassword'
              id='confirmPassword'
              style={{marginTop: '10px'}}
            >
              {' '}
              Confirm New Password:
            </label>
            <Field
              name='confirmPassword'
              type='password'
              style={{
                margin: '10px 0px 0px 0px',
                padding: '7px',
                width: '100%',
                height: '20px',
              }}
            />
            <Typography color='red'>
              <ErrorMessage name='confirmPassword' />
            </Typography>
          </FormGroup>

          <FormGroup>
            <label htmlFor='rol' id='rol' style={{marginTop: '10px'}}>
              Role:
            </label>
            <Field
              as='select'
              name='rol'
              type='text'
              style={{height: '40px', width: '100%'}}
            >
              <option defaultValue='true' value='user'>
                user
              </option>
              <option value='admin'>admin</option>
            </Field>
            <Typography color='red'>
              <ErrorMessage name='rol' />
            </Typography>
          </FormGroup>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            style={{
              backgroundColor: '#4518D9',
            }}
            sx={{mt: 3, mb: 2}}
          >
            {' '}
            Update User
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}
