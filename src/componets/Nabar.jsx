import React from 'react';
import ReacDom from 'react-dom' 




class Nabar extends React.Component {
    render(){
        return(
            <section className="container">
                <nav className="navbar navbar-dark bg-primary ">
                  <a className="navbar-brand" href=""><b>ParDDo</b></a>
                  <button className="navbar-toggler" type="button" id="menu">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </nav>       
            </section>
         );
    }
}

export default Nabar;