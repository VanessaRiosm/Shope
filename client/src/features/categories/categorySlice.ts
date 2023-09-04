import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

interface categoriesState {
  filterProducts: any
  status: string
}

const initialState = {
  filterProducts: [],
  status: 'idle',
} as categoriesState

export const fetchGetCategories = createAsyncThunk(
  'category/fetchGetCategories',
  async (category) => {
    const response = await axios.get(`${URL}/categories/?category=${category}`)
    return response.data
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      //traer categoria
      .addCase(fetchGetCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetCategories.fulfilled, (state, action) => {
        state.filterProducts = action.payload
        state.status = 'success'
      })
  },
})

export const {} = categorySlice.actions
export default categorySlice.reducer
