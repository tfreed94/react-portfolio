import React from 'react';
import myPic from "../images/picofme.jpg";

const AboutMe = () => {
    return (
        <div className="container card text-dark bg-warning d-flex px-4 mt-4 ">
            <img src={myPic} className="img-fluid mx-auto rounded-circle" alt="Pic Of Me" />
            <div className="d-flex justify-content-center">
                <p className="scroll mx-4 p-5">Full-Stack Web Developer with experience in web development tech like HTML, CSS, Bootstrap, JQuery, Javascript, React.js, and API's. My greatest strength in coding would be my ability to quickly and accurately fix errors and to break large projects into smaller more manageable pieces. I am a quick learner and passionate to display my coding skills in developing new and interesting websites</p>
            </div>
        </div>
    )
}
export default AboutMe;