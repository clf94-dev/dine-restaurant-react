import React from 'react'
import {Grid} from '@material-ui/core'
import EnjoyableD from './images/homepage/enjoyable-place-desktop.jpg'
import LocallyD from'./images/homepage/locally-sourced-desktop.jpg'

import EnjoyableT from './images/homepage/enjoyable-place-tablet.jpg'
import LocallyT from'./images/homepage/locally-sourced-tablet.jpg'

import EnjoyableM from './images/homepage/enjoyable-place-mobile.jpg'
import LocallyM from'./images/homepage/locally-sourced-mobile.jpg'

import patternDiv from './images/patterns/pattern-divide.svg'


function FeatureCard(props) {
    const FeatImgD = [ EnjoyableD, LocallyD];
    const FeatImgT = [ EnjoyableT, LocallyT];
    const FeatImgM = [ EnjoyableM, LocallyM];
    return (
        <div>
            <Grid container direction='row' className={props.classes}>
                <Grid item md={6} xs={12} direction="column" className='img-col' data-aos="fade-up" data-aos-duration="1500">
                    <img src={FeatImgD[props.index]} srcset={`${FeatImgM[props.index]} 756w, ${FeatImgD[props.index]} 1500w, ${FeatImgT[props.index]} 1280w`} alt={props.imgAlt} className='feat-img'/>
                </Grid>
                <Grid item md={6} xs={12} direction="column" className='text-col' data-aos="fade-up" data-aos-duration="1800">
                    <img src={patternDiv} alt="divider" className='divider'/>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Grid>

            </Grid>
        </div>
    )
}

export default FeatureCard;
