import React, {Component} from 'react';
import './App.css';
import Box from "./components/Box.js";
import {CompactPicker} from 'react-color';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickedColor: "#B3B3B3",
            width: 1,
            height: 2,
            stitchesWidth: [],
            stitchesHeight: [],
        };
    }


    handleChangeWidth = (event) => {
        this.setState({width: Number(event.target.value)});
    };

    handleChangeHeight = (event) => {
        this.setState({height: Number(event.target.value)});
    };

    handleChangeComplete = (color) => {
        this.setState({pickedColor: color.hex});
    };

    generateChart = (e) => {
        e.preventDefault();
        for (let i = 1; i <= this.state.width; i++) {
            this.state.stitchesWidth.push(i);
        }

        for (let i = 0; i < this.state.height; i++) {
            this.state.stitchesHeight.push(this.state.stitchesWidth);
        }
        console.log(this.state.stitchesHeight);
    }


    render() {
        let BoxList = this.state.stitchesWidth.map((elem, index) =>
            <Box color={this.state.pickedColor} key={index}/>
        );

        return (
            <div className="App">
                <h1>Type dimensions of knitting pattern</h1>
                <div className="inputBox">
                    <input type="number" className="input"
                           value={this.state.width}
                           onChange={this.handleChangeWidth}/>

                    <span>X</span>
                    <input type="number" className="input"
                           value={this.state.height}
                           onChange={this.handleChangeHeight}/>
                    <button
                        onClick={this.generateChart}>Ok!
                    </button>

                </div>
                <CompactPicker
                    color={this.state.pickedColor}
                    onChangeComplete={this.handleChangeComplete}/>


                <div className="knittingBox">
                    {BoxList}
                </div>
            </div>
        );
    }
}

export default App;
