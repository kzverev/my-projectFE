
import React from 'react';

export default class HelloWorld extends React.Component {

    static propTypes = {
        text: React.PropTypes.string,
    }

    static defaultProps = {
        text: 'i am text',
        name: 'Kristina',
    }

    render() {
        var { text, name } = this.props;

        var background = {
            backgroundColor: 'lime',
        };

        var nameStyle = {
            color: 'tomato',
            border: '2px solid blue'
        };
        return (
            <div>
                <div style={ background }>
                    { text } <br />
                </div>
                <div style={ nameStyle }>
                    { name }
                </div>
            </div>
        );
    }
}
