import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web";
import lottery from "./lottery";

class App extends React.Component {
  state = {
    manager:'',
    players:[],
    balance: '',
  };

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager, players, balance});
  }

  render() {
    return (
      <div>
        <h2>lottery contract</h2>
        <p>this contract is managed by {this.state.manager}
          There are currently {this.state.players} competing to win {web3.utils.fromWei(this.state.balance,'ether')} ether!</p>
      </div>
    );
  }
}
export default App;
