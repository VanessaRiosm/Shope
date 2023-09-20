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
  async (text: string) => {
    try {
      const response = await axios.get(`${URL}/categories/?category=${text}`)
      return response.data
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,

  reducers: {
    clearCategory(state) {
      state.filterProducts = []
    },
  },

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

export const {clearCategory} = categorySlice.actions
export default categorySlice.reducer
