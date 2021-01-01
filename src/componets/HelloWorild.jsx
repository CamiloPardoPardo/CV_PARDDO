import React from 'react';
import Cover from './Cover'
import SectionOne from '../componets/sections/SectionOne'
import AboutMe from '../componets/sections/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/app.scss'

const HelloWorld= () => (
    <div className="contair ">
        <Cover name="Camilo Pardo Pardo" />

        <AboutMe />

        

    </div>
    
);


export default HelloWorld;