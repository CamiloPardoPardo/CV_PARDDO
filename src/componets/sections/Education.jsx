import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from './SectionOne'
import Card from './Card';

class Education extends React.Component {
    render(){
        return (
            <section className="container">
                <SectionOne  icoClass="fas fa-user-graduate icon-section"  tlite="Education" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                <div className="tlites">
                    <Card  url="https://platzi.com/karinabru/curso/1244-sass/diploma-og/og.jpeg" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                    <Card  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqM8ZPBiMK9QHMz5ZEA_PthZckcn8YhZeofg&usqp=CAU" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                    <Card  url="https://platzi.com/karinabru/curso/1244-sass/diploma-og/og.jpeg" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                    <Card  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqM8ZPBiMK9QHMz5ZEA_PthZckcn8YhZeofg&usqp=CAU" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corrupti fuga similique soluta deserunt molestiae, non esse velit aliquid iusto asperiores quaerat aspernatur labore, ex, odit dolorum nemo. Omnis, quaerat.</p>
                </div>
            </section>

        );
    }
}

export default Education;