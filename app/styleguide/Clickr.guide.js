import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Clickr from 'components/Clickr';

export default class ClickrGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="Clickr component">
                    <Clickr />
                </SGSection>

            </SGPage>
        );
    }
}
