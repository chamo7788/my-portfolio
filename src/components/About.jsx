import React from 'react';
import '../assets/styles/about.css'; // Make sure to create a CSS file for custom styling.

const About = () => {
    return (
        <div className="about animate__animated animate__fadeIn" id="about">
            <h2 className="section-header">Introduction</h2>
            <h1 className="about-title">About Me.</h1>
            <p className="about-description">
                A passionate and adaptable individual with strong leadership skills and a keen interest in new technologies like machine learning, AI, and data science. I thrive in team settings, actively engage in volunteering and sustainable projects, and am dedicated to making a positive impact while continuously expanding my knowledge.
            </p>
            <div className="card-grid">
                <div className="module-border-wrap">
                    <div className="card">
                        <div className="card-icon">
                            <img src="src/assets/images/AIM.png" alt="AI/ML"/>
                        </div>
                        <h3 className="card-title">AI/ML Enthusiast</h3>
                    </div>
                </div>
                <div className="module-border-wrap">
                    <div className="card">
                        <div className="card-icon">
                            <img src="src/assets/images/development.png" alt="Frontend"/>
                        </div>
                        <h3 className="card-title">Frontend Developer</h3>
                    </div>
                </div>
                <div className="module-border-wrap">
                    <div className="card">
                        <div className="card-icon">
                            <img src="src/assets/images/development.png" alt="Backend"/>
                        </div>
                        <h3 className="card-title">Backend Developer</h3>
                    </div>
                </div>
                <div className="module-border-wrap">
                    <div className="card">
                        <div className="card-icon">
                            <img src="src/assets/images/content.png" alt="Content Creator"/>
                        </div>
                        <h3 className="card-title">Content Creator</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
