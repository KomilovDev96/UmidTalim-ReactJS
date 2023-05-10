import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: true
}
const OTHER = 'Others'
export const OthersSlice = createSlice({
    name: OTHER,
    initialState,
    reducers: {
        checkoutDark: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { checkoutDark } = OthersSlice.actions

export default OthersSlice.reducer