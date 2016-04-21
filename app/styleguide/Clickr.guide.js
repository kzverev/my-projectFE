import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Clickr from 'components/Clickr';

export default class ClickrGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="Clickr - without properties">
                    <Clickr />
                </SGSection>

                <SGSection title="Clickr - with value property">
                    <Clickr value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
