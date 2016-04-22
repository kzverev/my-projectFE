
import React from 'react';

export default class Clickr extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
    }

    handleClickPlus1 = (e) => {
      if (this.state.count > 19) {
        this.setState({
          count: 20
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }

    handleClickPlus5 = (e) => {
      if(this.state.count > 15) {
        this.setState({
          count: 20
        });
      } else {
        this.setState({
          count: this.state.count + 5
        });
      }
    }

    handleClickminus1 = (e) => {
      if (this.state.count < -19) {
        this.setState({
          count: -20
        });
      } else {
        this.setState({
          count: this.state.count - 1
        });
      }
    }

    handleClickminus5 = (e) => {
      if(this.state.count < -15) {
        this.setState({
          count: -20
        });
      } else {
        this.setState({
          count: this.state.count - 5
        });
      }
    }

    render() {
        var { count } = this.state;

        var buttonStyle = {
          margin: '10',
          display: 'inline-block',
        };

        var counterStyle = {
          backgroundColor: 'black',
          display: 'inline-block',
          width: '30',
          height: '20',
          textAlign: 'center',
        };

        if (count > 0) {
          counterStyle.backgroundColor = 'green';
        } else if (count < 0) {
          counterStyle.backgroundColor = 'red'
        }

        return (
            <div>
              <button style={buttonStyle} onClick={this.handleClickminus5}>-5</button>
              <button style={buttonStyle} onClick={this.handleClickminus1}>-1</button>
              <div style={counterStyle}>
                {count}
              </div>
              <button style={buttonStyle} onClick={this.handleClickPlus1}>+1</button>
              <button style={buttonStyle} onClick={this.handleClickPlus5}>+5</button>
            </div>
        );
    }
}
