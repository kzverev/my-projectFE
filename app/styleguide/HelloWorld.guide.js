import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import HelloWorld from 'components/HelloWorld';

export default class HelloWorldGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="HelloWorld - with default properties">
                    <HelloWorld />
                </SGSection>

                <SGSection title="HelloWorld - with new properties">
                    <HelloWorld name={'New name'} text={'New text'} />
                </SGSection>

            </SGPage>
        );
    }
}
