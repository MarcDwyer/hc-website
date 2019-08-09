import React from 'react'
import { APP_IMAGE } from '../Main/main'
import { useSpring, animated } from 'react-spring'
import { FaGithub } from 'react-icons/fa'
import './intro.scss'

const Intro = () => {
    const textDiv = useSpring({
        transform: "translateX(0)",
        opacity: 1,
        from: { transform: "translateX(-80%", opacity: 0 }
    })
    const imgDiv = useSpring({
        transform: "translateX(0)",
        opacity: 1,
        from: { transform: "translateX(80%", opacity: 0 }
    })
    return (
        <div className="intro">
            <div className="sub-intro">
                <animated.div className="text" style={textDiv}>
                    <h3>Hue Controller
                        <FaGithub
                            className="github"
                            onClick={() => window.open('https://github.com/MarcDwyer/electron-hue-controller')}
                        />
                    </h3>
                    <span>Control your Philips Hue lights with Hue Controller!</span>
                    <div className="links">
                        <a
                            className="download button"
                            href="https://github.com/MarcDwyer/electron-hue-controller/releases/download/1.1.1/Hue.Controller.Setup.1.1.1.exe"
                        >Download for Windows</a>
                        <a
                            className="donate button"
                            href="https://paypal.me/marcdwyer1738?locale.x=en_US"
                            rel="noopener noreferrer"
                            target="_blank"
                        >Donate via Paypal</a>
                    </div>
                </animated.div>
                <animated.img src={APP_IMAGE} alt="app" style={imgDiv} />
            </div>
        </div>
    )
}


export default Intro