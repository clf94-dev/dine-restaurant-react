import React from 'react'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

import Logo from './images/logo.svg'
import topImg from './images/homepage/hero-bg-desktop.jpg'
import topImgMob from './images/homepage/hero-bg-mobile.jpg'
import topImgTablet from './images/homepage/hero-bg-tablet@2x.jpg'

function Top() {
    return (
        <div>
            <Grid container direction='row' className='top-cont'>

                <Grid item md={6} xs={12} className="text-col">
                    <img src={Logo} alt="dine" className="logo-top"/>
                    <h1>
                        Exquisite dining since 1989</h1>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the
                        freshest produce from the comfort of our farmhouse.</p>
                    <a>
                        <Link to='/reservation'>
                            <button>
                                Book a table</button>
                        </Link>
                    </a>
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

export default Top;
