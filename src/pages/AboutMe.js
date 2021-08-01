import React from 'react';
import myPic from "../images/picofme.jpg";

const AboutMe = () => {
    return (
        <div className="container card text-white bg-dark d-flex ">
            <img src={myPic} className="img-fluid mx-auto rounded-circle" alt="Pic Of Me" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center mx-4 p-4">About Me</h1>
                <p className="scroll mx-4 p-5">Future Full-Stack Web Developer with experience in web development tech like HTML, CSS, Bootstrap, JQuery, Javascript, and API's. My greatest strength in coding would be my ability to quickly and accurately fix errors and to break large projects into smaller more manageable pieces. I am a quick learner and passionate to display my coding skills in developing new and interesting websites</p>
            </div>
        </div>
    )
}
export default AboutMe;