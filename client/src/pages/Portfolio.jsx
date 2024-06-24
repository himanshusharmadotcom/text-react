import React from 'react'
import { addLine, fullname } from '../redux/user/userSlice'
import {useSelector, useDispatch} from 'react-redux'

const Portfolio = () => {
    const username = useSelector((state) => state.userSl.userName )
    const dispatch = useDispatch()
    return (
        <>
            <h1>This is portfolio app by {username}.</h1>
            <button onClick={() => dispatch(fullname())}>Click me to check redux toolkit for fullname</button>
            <button onClick={() => dispatch(addLine())}>Click me to check redux toolkit for addLine</button>
        </>
    )
}

export default Portfolio