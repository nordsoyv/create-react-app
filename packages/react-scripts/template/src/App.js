import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectors, actionCreators} from './reducer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onIncrement = () => {
    this.props.increment();
  }
  onDecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React with ConfirmIT's create-react-template</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <button onClick={this.onDecrement}>-</button>{this.props.number}<button onClick={this.onIncrement}>+</button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: selectors.getNumber(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment: actionCreators.increment,
    decrement: actionCreators.decrement,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

