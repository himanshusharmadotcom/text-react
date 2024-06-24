import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userSl',
    initialState: { userName: "" },
    reducers: {
        fullname: (state) => {
            state.userName = "John Doe";
        },
        addLine: (state) => {
            state.userName = "John Doe lives in Texas";
        }
    }
})

export const {fullname, addLine} = userSlice.actions
export default userSlice.reducer


// import redux toolkit
// then create slice
// then create store
// then give it to the app in index.js by installing react-redux
// and then use it in compoenent by using useDispatch and useSelector.


// a slice contains the function that will change the state