import React from 'react'
import Intro from '../Intro/intro'
import Features from '../Features/features'
import Footer from '../Footer/footer'
import './main.scss'

export const APP_IMAGE: string = "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/hue1.png"

const Main = () => {
    return (
        <div className="main">
            <Intro />
            <Features />
            <Footer />
        </div>
    )
}

export default Main