import React from 'react'
import { useTextContext } from '../context/TextContext'

const About = () => {

    const {cntState, checkCnt} = useTextContext()

    return (
        <>
            <h1>To check git check out.</h1>
<<<<<<< HEAD
            <p>bhai ye pull ke liye hai</p>
=======
            <p>ye push check</p>
>>>>>>> 4a3a294a752ef902a5b64233aa61e3a0ba4042da
            <h2>{cntState ? "Context State is Enabled" : "Context state is Disabled."}</h2>
            <button onClick={checkCnt}>Check Context API</button>
        </>
    )
}

export default About