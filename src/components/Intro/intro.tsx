import React from "react";
import { useSpring, animated } from "react-spring";
import { FaGithub } from "react-icons/fa";
import "./intro.scss";

const Intro = () => {
  const textDiv = useSpring({
    transform: "translateX(0)",
    opacity: 1,
    from: { transform: "translateX(-80%", opacity: 0 },
  });
  const imgDiv = useSpring({
    transform: "translateX(0)",
    opacity: 1,
    from: { transform: "translateX(80%", opacity: 0 },
  });
  return (
    <div className="intro">
      <div className="sub-intro">
        <animated.div className="text" style={textDiv}>
          <h3>
            Hue Desktop Controller
            <FaGithub
              className="github"
              onClick={() =>
                window.open(
                  "https://github.com/MarcDwyer/electron-hue-controller"
                )
              }
            />
          </h3>
          <span>Control your Philips Hue lights with Hue Controller!</span>
          <div className="links">
            <a
              className="download button"
              href={`https://github.com/MarcDwyer/hue-desktop-controller/releases/download/1.3/Hue.Controller.0.0.1.msi`}
            >
              Download for Windows
            </a>
            <a
              className="donate button"
              href="https://github.com/MarcDwyer/hue-desktop-controller/releases/download/1.3/huecontroller_0.0.1_amd64.snap"
            >
              Download for Linux
            </a>
          </div>
        </animated.div>
        <animated.img
          src={
            "https://github.com/MarcDwyer/hue-desktop-controller/raw/master/icons/hue1.png"
          }
          alt="app"
          style={imgDiv}
        />
      </div>
    </div>
  );
};

export default Intro;
