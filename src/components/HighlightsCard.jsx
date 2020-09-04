import React from 'react'

import Salmon from './images/homepage/salmon-desktop-tablet.jpg';
import Rosemary from './images/homepage/beef-desktop-tablet.jpg';
import Chocolate from './images/homepage/chocolate-desktop-tablet.jpg';
import {Grid} from '@material-ui/core';

import './styles/App.css';

function HighlightsCard(props) {
    const HighlightsImg = [Salmon, Rosemary, Chocolate];
    return (
        <div>
            <Grid container direction='row' className='card'>
                <Grid item md={3} xs={5} className='high-img-col'>
                    <img src={HighlightsImg[props.index]} alt=""/>
                </Grid>
                <Grid item md={9} xs={7} className='high-text-col'>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </Grid>
                <hr/>
            </Grid>
        </div>
    )
}

export default HighlightsCard
