import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from './SectionOne';

class Skills extends React.Component {
    render(){
        return(
            <section className="container">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="My skills" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                <div>
                    
                    <div>
                        <h4><samp><i class="fab fa-js-square"></i> </samp> JavaScript <b>50%</b></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success tercera" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                    </div>
                    <br/>   
                    <div>
                        <h4><samp><i class="far fa-check-circle primary"></i></samp> Css</h4>
                        <div className="progress">
                            <div className="progress-bar tercera" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                    </div>
                    
                    
                </div>
            </section>

        );
    }
}

export default Skills;