import React from 'react'
import {Grid} from '@material-ui/core'
import Logo from './images/logo.svg'

function Top() {
    return (
        <div>
            <Grid container direction='column'>
<img src={Logo} alt="dine" className="logo-top"/>


            </Grid>
        </div>
    )
}

export default Top;
