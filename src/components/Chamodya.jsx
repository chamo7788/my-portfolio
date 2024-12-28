import React from 'react';
import 'animate.css';
import '../assets/styles/chamodya.css';
import {ReactTyped} from "react-typed"; // Import the CSS file
import { Canvas } from '@react-three/fiber';
import ComputerModel from './ComputerModel';

const Home = () => {
    return (
        <div className="hero-section">
            <div className="backdrop"></div>

            <div className="intro">
                <h1>Hi, I'm <span className="purple-text">Chamodya</span></h1>
                <ReactTyped className="typed-text"
                    strings={["AI/ML enthusiast,", "Full-stack Developer,", "Software Engineering Undergraduate,"]}
                    typeSpeed={60}
                    backSpeed={80}
                    loop/>
            </div>
            <div className="images">
                {/* Add profile and desk images */}
                <img
                    src="src/assets/images/profile-image.png"
                    alt="Profile"
                    className="profile-image"
                />
            </div>

        </div>

    );
};

export default Home;