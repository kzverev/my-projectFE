
import React from 'react';

export default class Clickr extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
    }

    handleClick = (e) => {
      this.setState({
        count: this.state.count + 1
      });
    }



    render() {
        var { count } = this.state;
        console.log(count);
        return (
            <div onClick={this.handleClick}>
                {count}
            </div>
        );
    }
}
