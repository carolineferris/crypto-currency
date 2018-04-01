import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

var NumberFormat = require('react-number-format');


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptos: []
        };
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Crypto Current-cy Exchange Rates</h1>
                </header>
                {Object.keys(this.state.cryptos).map((key) => (
                    <div id="crypto-container">
                        <span className="left">{key}</span>
                        <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'}
                                                              decimalPrecision={2} thousandSeparator={true}
                                                              prefix={'$'}/></span>
                    </div>
                ))}
            </div>
        )
    }
}

export default App;
