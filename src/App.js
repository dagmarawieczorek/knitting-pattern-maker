import React, {Component} from 'react';
import './App.css';
import Box from "./components/Box.js";
import { CompactPicker } from 'react-color';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickedColor: "#B3B3B3"
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Type dimensions of knitting pattern</h1>
                <div className="inputBox">
                    <input type="number" className="input"/>
                    <span>X</span>
                    <input type="number" className="input"/>
                    <button>Ok!</button>

                </div>
                <CompactPicker/>

                <Box color={this.state.pickedColor}/>
            </div>
        );
    }
}

export default App;
