import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from './images/logo.svg'

import topImg from './images/booking/hero-bg-desktop.jpg'
import topImgTablet from './images/booking/hero-bg-tablet.jpg'
import topImgMob from './images/booking/hero-bg-mobile.jpg'

function TopReservation() {
    return (
        <div>
            <Grid container direction='row' className='top-reservation-cont'>

                <Grid item md={6} xs={12} className="text-col">
                    <img src={Logo} alt="dine" className="logo-top"/>
                    <h2>
                    Reservations</h2>
                    <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                   
                </Grid>
                <Grid item md={6} xs={12} className="img-col">
                    <img
                        src={topImg}
                        srcSet={`${topImgMob} 756w, ${topImg} 1500w, ${topImgTablet} 1280w`}
                        alt="presentation"/>
                </Grid>

            </Grid>
        </div>
    )
}

export default TopReservation
