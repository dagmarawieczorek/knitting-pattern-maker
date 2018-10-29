import React, {Component} from 'react';
import './App.css';
import Box from "./components/Box.js";
import {CirclePicker} from 'react-color';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickedColor: "#f44336",
            width: "",
            height: "",
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

        if (this.state.stitchesWidth.length > 0) {
            this.setState({
                stitchesWidth: [],
                stitchesHeight: [],
                width: "",
                height: "",
            });
        }

        for (let i = 1; i <= this.state.width; i++) {
            this.state.stitchesWidth.push(i);
        }

        for (let i = 0; i < this.state.height; i++) {
            this.state.stitchesHeight.push(this.state.stitchesWidth);
        }

        this.setState({});
        console.log()
    }


    render() {


let CounterColumns= this.state.stitchesWidth.map((elem, index) => {
    return <span className="counter rows"> {index + 1}</span>
});



        let AllStitches = this.state.stitchesHeight.map((elem, index) => {
            return <div className="rows" key={index}><span className="counter"> {index + 1}</span>
                {this.state.stitchesWidth.map((elem, index2) => {
                    return <div><Box color={this.state.pickedColor} key={index2}/></div>})}

                <span className="counter"> {index + 1}</span></div>
        });


        return (
            <div className="App">
                <div className="container">

                    <div className="navBox">
                        <h1 className="title">Knitting pattern generator</h1>
                        <h2>type in dimensions of your pattern:</h2>
                        <div className="inputBox">
                            <input type="number" className="input"
                                   value={this.state.width}
                                   onChange={this.handleChangeWidth}/>

                            <span className="multiply">X</span>
                            <input type="number" className="input"
                                   value={this.state.height}
                                   onChange={this.handleChangeHeight}/>
                            <button
                                className="button"
                                onClick={this.generateChart}>{this.state.stitchesWidth.length > 0 ? "Clear!" : "Ok!"}
                            </button>
                        </div>

                        <div className="picker">
                            <h3>pick a color:</h3>
                            <CirclePicker
                                width="400px"
                                circleSize={45}
                                color={this.state.pickedColor}
                                onChangeComplete={this.handleChangeComplete}/>
                        </div>


                    </div>

                    <div className="knittingBox">
                        <div className="columnBox">
                        {CounterColumns}
                        </div>
                        {AllStitches}
                        <div className="columnBox">
                            {CounterColumns}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
