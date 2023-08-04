import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:3000'

// como se remplaza el any en esta interfaz
interface UsersState {
  userList: any[]
  status: string
}

const initialState = {
  userList: [],
  status: 'idle',
} as UsersState

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(`${URL}/users`)
    return response.data
  } catch (err: any) {
    return err.message
  }
})

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        // Add user to the state array
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList.push(action.payload)
        state.status = 'success'
      })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
