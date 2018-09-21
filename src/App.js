import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            text: ''
        })

        this.reverseText = this.reverseText.bind(this);
    }

    reverseText(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {

        const { text } = this.state;

        return (
            <div className="App">
                <div class="container">
                    <h1 className='mt-2'>Reverse the Text</h1>
                    <input type='text' placeholder='Enter Any Text' onChange={this.reverseText} className="form-control col-md-12 mt-5"/>
                    <h3 className="mt-5">Output : {text.split('').reverse()}</h3>
                </div>
            </div>
        );
    }
}

export default App;
