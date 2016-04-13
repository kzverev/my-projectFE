import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import HelloWorld from 'components/HelloWorld';

export default class HelloWorldGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="HelloWorld - without properties">
                    <HelloWorld />
                </SGSection>

                <SGSection title="HelloWorld - with value property">
                    <HelloWorld value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
