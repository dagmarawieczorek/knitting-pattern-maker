import React, { Component } from 'react';

class Box extends Component {


    
    render() {
        return (
            <div className="box" style={{background:this.props.color}}>

            </div>
        );
    }
}

export default Box;