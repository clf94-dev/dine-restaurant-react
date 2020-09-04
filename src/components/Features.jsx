import React from 'react'
import FeatureCard from './FeatureCard'
import {featuresData} from './featuresData'
import {Grid} from '@material-ui/core';

function Features() {
    return (
        <div>
            <Grid container className='feat-cont'>

                {featuresData.map(feature => {
                    return (<FeatureCard
                        classes={feature.classes}
                        key={feature.index}
                        index={feature.index}
                        imgAlt={feature.imgAlt}
                        title={feature.title}
                        text={feature.text}/>);
                })}

            </Grid>
        </div>
    )
}

export default Features;
