import React from 'react';
import Cover from './Cover'
import SectionOne from '../componets/sections/SectionOne'
import AboutMe from '../componets/sections/AboutMe';
import Education from '../componets/sections/Education';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/app.scss';
import Profile from './Profile';
import Nabar from './Nabar';
import Expiriece from './sections/Experience';
import Skills from './sections/Skills';


const HelloWorld= () => (
    <div className="contend-main ">
        <div>
            <Profile />
        </div>
        <div className="main">
            <Nabar />
            <Cover name="Camilo Andres Pardo Pardo" />
            <AboutMe />
            <Education />
            <Expiriece />
            <Skills />
        </div>

    </div>
    
);


export default HelloWorld;