import React, {Component} from 'react';

class Box extends Component {


    constructor(props) {
        super(props);

        this.state = {
            bgColor:  "rgba(246, 247, 255, 0.51)",
            defaultColor: "rgba(246, 247, 255, 0.51)",
            clicked: false,
            }
    }

    handleClickedBox=()=> {
        this.setState({bgColor: this.props.color,
        clicked:!this.state.clicked})
    }

    render() {


        return (
            <div className="box"
                 style={{background: this.state.clicked?this.state.bgColor:this.state.defaultColor}}
                 onClick={this.handleClickedBox}>

            </div>
        );
    }
}

export default Box;