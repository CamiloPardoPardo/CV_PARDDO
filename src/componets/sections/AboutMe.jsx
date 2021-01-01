import React from 'react';
import ReactDom from 'react-dom';
import Language from './Language'
import SectionOne from './SectionOne'
import '../../assets/styles/aboutme.scss'

class AboutMe extends React.Component {
    render(){
        return (
            <section className="container">
                <SectionOne  icoClass="fas fa-user-check icon-section"  tlite="About Me" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                <div className="languajes">
                    <Language  nameClass="fab fa-js-square" tecnologi="JavaScript"/>
                    <Language  nameClass="fab fa-react" tecnologi="React"/>
                    <Language  nameClass="fab fa-npm" tecnologi="Npm"/>
                    <Language  nameClass="fab fa-laravel" tecnologi="Laravel"/>
                </div>
            </section>
        );
    }
}

export default AboutMe;