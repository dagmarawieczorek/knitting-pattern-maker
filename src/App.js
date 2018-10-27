import React, {Component} from 'react';
import './App.css';
import Box from "./components/Box.js";

class App extends Component {
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

                <Box/>
            </div>
        );
    }
}

export default App;
