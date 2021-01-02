import React from 'react';
import ReactDom from 'react-dom';

class Card extends React.Component {
    render (){
        this.props;
        return (
            <div className="card carde-style" >
                <img className="card-img-top" src={this.props.url} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;