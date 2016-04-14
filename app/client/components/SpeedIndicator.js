
import React from 'react';

export default class SpeedIndicator extends React.Component {

    static propTypes = {
        speed: React.PropTypes.number.isRequired,
    }

    static defaultProps = {
        speed: 'wer',
    }

    render() {
        var { speed } = this.props;

        var speedStyle = {
          backgroundColor: 'red',
          width: '30px',
          height: '30px',
          paddingTop: '5px',
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
            <div style={ speedStyle }>
                {speed}
            </div>
        );
    }
}
