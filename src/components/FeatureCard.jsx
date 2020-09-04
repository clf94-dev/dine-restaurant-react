import React from 'react'
import {Grid} from '@material-ui/core'
import EnjoyableD from './images/homepage/enjoyable-place-desktop.jpg'
import LocallyD from'./images/homepage/locally-sourced-desktop.jpg'
import patternDiv from './images/patterns/pattern-divide.svg'


function FeatureCard(props) {
    const FeatImgD = [ EnjoyableD, LocallyD];
    return (
        <div>
            <Grid container direction='row' className={props.classes}>
                <Grid item md={6} xs={12} direction="column" className='img-col'>
                    <img src={FeatImgD[props.index]} alt={props.imgAlt}/>
                </Grid>
                <Grid item md={6} xs={12} direction="column" className='text-col'>
                    <img src={patternDiv} alt="divider" className='divider'/>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Grid>

            </Grid>
        </div>
    )
}

export default FeatureCard;
