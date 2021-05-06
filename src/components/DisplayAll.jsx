import React from 'react';
import Navigation from "./Navigation";
import Skills from "../containers/Skills";
import Greetings from "../containers/Greetings";
import Proficiency from '../containers/Proficiency';
import Education from "../containers/Education";
import Projects from '../containers/Projects';
import GithubProfile from '../containers/GithubProfile'



const DisplayAll = () => {
    return (
        <div>
            <Navigation/>
            <Greetings/>
            <Skills/>
            <Proficiency/>
            <Education/>
            <Projects/>
            <GithubProfile/>
        </div>
    );
}

export default DisplayAll;