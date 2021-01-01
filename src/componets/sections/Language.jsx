import React from 'react';
import ReactDom from 'react-dom';
import '../../assets/styles/languaje.scss';

class Language extends React.Component{
    render(){
        this.props;
        return(
            <div className="languaje">
                <i className={this.props.nameClass}></i>
                <h6>{this.props.tecnologi}</h6>
            </div>
        );
    }
}

export default Language;