import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface ProductsState {
  productsList: any | null
  productsFilter: any | null
  refresh: boolean
  status: string
  productDetails: any | null
}

const initialState = {
  productsList: null,
  productsFilter: null,
  refresh: true,
  status: 'idle',
  productDetails: null,
} as ProductsState

export const fetchGetProducts: any = createAsyncThunk(
  'product/fetchGetProducts',
  async () => {
    try {
      const response = await axios.get(`${URL}/products/`)

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchGetProduct: any = createAsyncThunk(
  'product/fetchGetProduct',
  async (id) => {
    try {
      const response = await axios.get(`${URL}/products/details/${id}`)

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchSearchProducts: any = createAsyncThunk(
  'product/fetchSearchProduct',
  async (text) => {
    try {
      const response = await axios.get(`${URL}/products/search/?param=${text}`)

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchAddProduct: any = createAsyncThunk(
  'product/fetchAddProduct',
  async (data: any) => {
    try {
      const response = await axios.post(`${URL}/products/`, data)

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const fetchDeleteProduct: any = createAsyncThunk(
  'product/fetchDeleteProduct',
  async (pid: any) => {
    try {
      const token = window.localStorage.getItem('token')

      const response = await axios.delete(`${URL}/products/delete/${pid}`, {
        headers: {Authorization: `Bearer ${token}`},
      })

      return response.data
    } catch (err: any) {
      console.log(err.message)
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    clear(state) {
      state.productDetails = {}
    },
  },
  extraReducers: (builder) => {
    builder
      //Login
      .addCase(fetchGetProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetProducts.fulfilled, (state, action) => {
        state.productsList = action.payload
        state.status = 'success'
      })

      //traer info del producto
      .addCase(fetchGetProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetProduct.fulfilled, (state, action) => {
        state.productDetails = action.payload
        state.status = 'success'
      })

      //info de los productos buscados
      .addCase(fetchSearchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        let products = action.payload

        if (!products) products = 'no products found'

        state.productsFilter = action.payload
        state.status = 'success'
      })

      //add product
      .addCase(fetchAddProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAddProduct.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })

      //delete product
      .addCase(fetchDeleteProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDeleteProduct.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })
  },
})

export const {clear} = productSlice.actions
export default productSlice.reducer
