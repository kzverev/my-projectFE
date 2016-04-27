
import React from 'react';

export default class SpeedIndicator extends React.Component {

    static propTypes = {
        speed: React.PropTypes.number.isRequired,
    }



    render() {

        var { speed } = this.props;

        var { speedClicked } = this;

        var speedStyle = {
          backgroundColor: 'red',
          width: '30',
          height: '30',
          paddingTop: '5',
          textAlign: 'center',
        };



        if (speed <= 20) {
          speedStyle.backgroundColor = 'blue';
        } else if (speed <= 60) {
          speedStyle.backgroundColor = 'green';
        } else if (speed <= 80) {
          speedStyle.backgroundColor = 'yellow';
        }



        return (
            <div style={ speedStyle } onClick={speedClicked}>
                {speed}
            </div>
        );
    }

    speedClicked() {
      alert(this.props.speed);
    }
}
