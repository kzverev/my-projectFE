import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import SpeedIndicator from 'components/SpeedIndicator';

export default class SpeedIndicatorGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="SpeedIndicator - with low speed property">
                    <SpeedIndicator speed={18} />
                </SGSection>

                <SGSection title="SpeedIndicator - with normal speed property">
                    <SpeedIndicator speed={33} />
                </SGSection>

                <SGSection title="SpeedIndicator - with high speed property">
                    <SpeedIndicator speed={72} />
                </SGSection>

                <SGSection title="SpeedIndicator - with dangerous speed property">
                    <SpeedIndicator speed={100} />
                </SGSection>

            </SGPage>
        );
    }
}
