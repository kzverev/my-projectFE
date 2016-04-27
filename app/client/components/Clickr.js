
import React from 'react';

export default class Clickr extends React.Component {

    state = {
        count: 0
    };

    handleClick = (increment) => {
      return (e) => {
        var { count } = this.state;

        var nextCount = count + increment;

        if (nextCount < -20) {
          this.setState({ count: -20});
        }

        if (nextCount > 20) {
          this.setState({ count: 20});
        }

        if (nextCount >= -20 && nextCount <= 20) {
          this.setState({ count: nextCount});
        }
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

         var { handleClick } = this;

        return (
            <div>
              <button style={buttonStyle} onClick={handleClick(-5)}>-5</button>
              <button style={buttonStyle} onClick={handleClick(-1)}>-1</button>
              <div style={counterStyle}>
                {count}
              </div>
              <button style={buttonStyle} onClick={handleClick(1)}>+1</button>
              <button style={buttonStyle} onClick={handleClick(5)}>+5</button>
            </div>
        );
    }
}
