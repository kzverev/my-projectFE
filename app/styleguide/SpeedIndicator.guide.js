import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import SpeedIndicator from 'components/SpeedIndicator';

export default class SpeedIndicatorGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="SpeedIndicator - without properties">
                    <SpeedIndicator />
                </SGSection>

                <SGSection title="SpeedIndicator - with value property">
                    <SpeedIndicator value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
