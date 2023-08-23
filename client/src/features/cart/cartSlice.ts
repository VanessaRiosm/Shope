import {createSlice} from '@reduxjs/toolkit'
// import axios from 'axios'

// const URL = import.meta.env.VITE_APP_URL

interface cartState {
  cartItems: any | null
  cartTotalQuantity: number
  cartTotalAmount: number
  status: string
}

const initialState = {
  cartItems: null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  status: 'idle',
} as cartState

// export const fetchGetProducts: any = createAsyncThunk(
//   'users/fetchGetProducts',
//   async () => {
//     const response = await axios.get(`${URL}/products/`)

//     return response.data
//   }
// )

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {},
  // recibe por parametro el builder
  extraReducers: () => {
    // builder
    //   //Login
    //   .addCase(fetchGetProducts.pending, (state) => {
    //     state.status = 'loading'
    //   })
    //   .addCase(fetchGetProducts.fulfilled, (state, action) => {
    //     state.productsList = action.payload
    //     state.status = 'success'
    //   })
  },
})

export const {} = cartSlice.actions
export default cartSlice.reducer
