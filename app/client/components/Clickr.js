
import React from 'react';

export default class Clickr extends React.Component {

    state = {
        count: 0
    };

    handleClickPlus1 = (e) => {
      var { count } = this.state;
      var nextCount = count + 1;

      if (nextCount <= 20) {
        this.setState({
          count: nextCount,
        });
      }
    }

    handleClickPlus5 = (e) => {
      var { count } = this.state;
      var nextCount = count + 5;

      if (nextCount > 20) {
        this.setState({
          count: 20,
        });
      } else {
        this.setState ({
          count: nextCount,
        });
      }
    }

    handleClickminus1 = (e) => {
      var { count } = this.state;
      var nextCount = count - 1;

      if (nextCount >= -20) {
        this.setState({
          count: nextCount,
        });
      }
    }

    handleClickminus5 = (e) => {
      var { count } = this.state;
      var nextCount = count - 5;

      if (nextCount < -20) {
        this.setState({
          count: -20,
        });
      } else {
        this.setState ({
          count: nextCount,
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
