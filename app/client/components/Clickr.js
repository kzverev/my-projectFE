
import React from 'react';

export default class Clickr extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
    }

    handleClickPlus1 = (e) => {
      this.setState({
        count: this.state.count + 1
      });
    }

    handleClickPlus5 = (e) => {
      this.setState({
        count: this.state.count + 5
      });
    }

    handleClickminus1 = (e) => {
      this.setState({
        count: this.state.count - 1
      });
    }

    handleClickminus5 = (e) => {
      this.setState({
        count: this.state.count - 5
      });
    }

    render() {
        var { count } = this.state;

        var buttonStyle = {
          margin: '10',
        };

        return (
            <div>
              <button style={buttonStyle} onClick={this.handleClickminus5}>-5</button>
              <button style={buttonStyle} onClick={this.handleClickminus1}>-1</button>
                {count}
              <button style={buttonStyle} onClick={this.handleClickPlus1}>+1</button>
              <button style={buttonStyle} onClick={this.handleClickPlus5}>+5</button>
            </div>
        );
    }
}
