import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id: "0",
    name: "William Stout"
},{
    id: "1",
    name: "Nail Gaiman"
},{
    id: "2",
    name: "Simon Bisley"
}]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const allUsers = state => state.users

export default userSlice.reducer