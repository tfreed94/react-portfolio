import React from 'react';
import cryptoTracker from '../images/bitcoin.jpg'
import hueAreYou from '../images/hueareyoupicture.jpg'
import techBlog from '../images/mytechblog12.herokuapp.com_dashboard_new.jpg'
import quiz from '../images/quizpic.jpg'
import dayPlanner from '../images/mydayplannerpicture.jpg'
import readMEGen from '../images/screenshot.jpg'

const MyWork = () => {
    return (
        <div className="card-group">
            <div className="card">
                <a href="https://tfreed94.github.io/HueAreYou/" >
                    <img className="card-img-top" src={hueAreYou} alt="Pic Of Project" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">HueAreYou</h5>
                </div>
            </div>
            <div className="card">
                <a href="https://crypto-trackstar.herokuapp.com/">
                    <img className="card-img-top" src={cryptoTracker} alt="Pic Of Project" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">Crypto-Trackstar</h5>
                </div>
            </div>
            <div className="card">
                <a href="https://mytechblog12.herokuapp.com/">
                    <img className="card-img-top" src={techBlog} alt="Pic Of Project" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">Tech Blog</h5>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <a href="https://tfreed94.github.io/MyCodeQuiz/">
                        <img className="card-img-top" src={quiz} alt="Pic Of Project" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Javascript Code Quiz</h5>
                    </div>
                </div>
                <div className="card">
                    <a href="https://tfreed94.github.io/MyDayPlanner/">
                        <img className="card-img-top" src={dayPlanner} alt="Pic Of Project" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Day Planner</h5>
                    </div>
                </div>
                <div className="card">
                    <a href="https://github.com/tfreed94/MyReadMeGenerator">
                        <img className="card-img-top" src={readMEGen} alt="Pic Of Project" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">README Generator</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyWork