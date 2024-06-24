import React from 'react'
import { useTextContext } from '../context/TextContext'

const About = () => {

    const {cntState, checkCnt} = useTextContext()

    return (
        <>
            <h1>This is about app.</h1>
            <h2>{cntState ? "Context State is Enabled" : "Context state is Disabled."}</h2>
            <button onClick={checkCnt}>Check Context API</button>
        </>
    )
}

export default About