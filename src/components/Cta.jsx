import React from 'react'

import CtaBGD from './images/homepage/ready-bg-desktop.jpg'
import CtaBGT from './images/homepage/ready-bg-tablet.jpg'
import CtaBGM from './images/homepage/ready-bg-mobile.jpg'
import {Grid} from '@material-ui/core'

import './styles/App.css'

function Cta() {
    return (
        <div>
            <img
                src={CtaBGD}
                srcSet={`${CtaBGM} 756w, ${CtaBGD} 1500w, ${CtaBGT} 1280w`}
                alt="cta background"
                className='cta-bg'/>
            <Grid container direction='row' className='cta-cont'>
                <Grid item md={6} xs={12} className='text-col'>
                    <h2>Ready to make a reservation?</h2>
                </Grid>
                <Grid item md={6} xs={12} className='button-col'>
                    <button>Book a table</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cta
