import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from './SectionOne'

class Expiriece extends React.Component {
    render(){
        return(
            <section className="container">
                <SectionOne  icoClass="fas fa-laptop-code icon-section"  tlite="Experiencie" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                            
            </section>
        );
    }
}

export default Expiriece;