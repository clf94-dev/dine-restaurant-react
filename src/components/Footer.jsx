import React from 'react'
import {Grid} from '@material-ui/core'
import Logo from './images/logo.svg'
import './styles/App.css'

function Footer() {
    return (
        <div>
            <Grid container direction='row' className='footer-cont'>
                <Grid item md={6} xs={12} className='item-cont'>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid container direction='row'>
                        <Grid item lg={6} md={12} xs={12}  className='item-cont'>
                            <h3>Marthwaite, Sedbergh</h3>
                            <h3>
                                Cumbria</h3>
                            <h3>
                                +00 44 123 4567</h3>
                        </Grid>
                        <Grid item lg={6} md={12} xs={12} className='item-cont'>
                            <h3>Open Times</h3>
                            <h3>
                                Mon - Fri: 09:00 AM - 10:00 PM</h3>
                            <h3>
                                Sat - Sun: 09:00 AM - 11:30 PM</h3>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

export default Footer
