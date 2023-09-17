import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {Box, Button, FormGroup, Typography} from '@mui/material'
import {fetchAddProduct} from '../features/products/productSlice'
import {useAppDispatch} from '../hooks'
import {Product} from '../types/types'

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('required field')
    .max(50, 'maximum 50 characters'),

  image: Yup.string().required('required field'),

  price: Yup.string().required('required field').min(1, 'minimum 1 character'),

  category: Yup.string().required('required field'),

  description: Yup.string()
    .required('required field')
    .min(15, 'minimum 15 characters')
    .max(600, 'maximum 600 characters'),
})

export const AdminProductEdit = ({
  product: {name, image, category, price, description},
}: {
  product: Product
}) => {
  const dispatch = useAppDispatch()
  return (
    <Box>
      <Formik
        initialValues={{
          name,
          image: '',
          price,
          category,
          description,
        }}
        validationSchema={formSchema}
        onSubmit={(values: any, {resetForm}) => {
          try {
            dispatch(fetchAddProduct(values))
          } catch (err: any) {
            console.log(err.message)
          }

          resetForm()
        }}
      >
        <Form>
          {/* name */}
          <FormGroup>
            <label htmlFor='name' id='name'>
              Name:
            </label>

            <Field
              name='name'
              type='text'
              style={{
                margin: '5px 0px 0px 0px',
                padding: '7px',
                width: '100%',
                height: '20px',
              }}
            />

            <Typography color='red'>
              <ErrorMessage name='name' />
            </Typography>
          </FormGroup>

          <Box display='flex' justifyContent='center' margin='5px 0 5px 0'>
            <img src={image} height='200px' />
          </Box>

          {/* image */}
          <FormGroup>
            <label htmlFor='image' id='image' style={{marginTop: '10px'}}>
              Image:
            </label>
            <Field
              name='image'
              type='file'
              accept='image/*'
              style={{height: '30px', width: '100%'}}
            />
            <Typography color='red'>
              <ErrorMessage name='image' />
            </Typography>
          </FormGroup>

          {/* price */}
          <FormGroup>
            <label htmlFor='price' id='price' style={{marginTop: '10px'}}>
              Price:
            </label>
            <Field
              name='price'
              type='number'
              style={{height: '30px', width: '100%'}}
            />
            <Typography color='red'>
              <ErrorMessage name='price' />
            </Typography>
          </FormGroup>

          {/* Category */}
          <FormGroup>
            <label htmlFor='category' id='category' style={{marginTop: '10px'}}>
              Category:
            </label>
            <Field
              as='select'
              name='category'
              type='text'
              style={{height: '40px', width: '100%'}}
            >
              <option value='classical'>classical</option>
              <option value='dresses'>dresses</option>
              <option value='tops'>tops</option>
              <option value='pants'>pants</option>
              <option value='shoes'>shoes</option>
              <option value='coats'>coats</option>
              <option value='bigsale'>bigsale</option>
              <option value='threads'>threads</option>
            </Field>
            <Typography color='red'>
              <ErrorMessage name='category' />
            </Typography>
          </FormGroup>

          {/* Description */}
          <FormGroup>
            <label
              htmlFor='description'
              id='description'
              style={{marginTop: '10px'}}
            >
              Description:
            </label>
            <Field
              as='textarea'
              type='text'
              name='description'
              style={{minHeight: '120px', maxWidth: '120rem'}}
            />
            <Typography color='red'>
              <ErrorMessage name='description' />
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
            Add Product
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}
