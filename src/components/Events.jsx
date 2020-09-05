import React, {useState} from 'react'
import {Grid} from '@material-ui/core';
import {EventsData} from './EventsData'
import './styles/App.css'
import {Link} from 'react-router-dom'

import FamilyD from './images/homepage/family-gathering-desktop.jpg'
import SpecialD from './images/homepage/special-events-desktop.jpg'
import SocialD from './images/homepage/social-events-desktop.jpg'

import FamilyT from './images/homepage/family-gathering-tablet.jpg'
import SpecialT from './images/homepage/special-events-tablet.jpg'
import SocialT from './images/homepage/social-events-tablet.jpg'

import FamilyM from './images/homepage/family-gathering-mobile.jpg'
import SpecialM from './images/homepage/special-events-mobile.jpg'
import SocialM from './images/homepage/social-events-mobile.jpg'

function Events() {
    const [event,
        setEvent] = useState(0);

    const handleClick1 = () => setEvent(0);
    const handleClick2 = () => setEvent(1);
    const handleClick3 = () => setEvent(2);

    const eventsImgD = [FamilyD, SpecialD, SocialD];
    const eventsImgT = [FamilyT, SpecialT, SocialT];
    const eventsImgM = [FamilyM, SpecialM, SocialM];

    return (
        <div>
            <Grid container direction='row' className='events-cont' data-aos="fade-left" data-aos-duration="1500">
                <Grid item lg={6} md={12} className='img-col'>
                    <img
                        src={eventsImgD[event]}
                        srcSet={`${eventsImgM[event]} 756w, ${eventsImgD[event]} 1500w, ${eventsImgT[event]} 1280w`}
                        alt="event"/>
                </Grid>
                <Grid item lg={6} md={12} className='text-col'>
                    <Grid container direction='row' className='events-btns'>
                        <Grid
                            item
                            md={4}
                            xs={12}
                            style={{
                            borderBottom: event === 0
                                ? '3px solid #9e7f66'
                                : 'none'
                        }}
                            className='btn'
                            onClick={handleClick1}>
                            <h3>{EventsData[0].title}</h3>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                            style={{
                            borderBottom: event === 1
                                ? '3px solid #9e7f66'
                                : 'none'
                        }}
                            className='btn'
                            onClick={handleClick2}>
                            <h3>{EventsData[1].title}</h3>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                            style={{
                            borderBottom: event === 2
                                ? '3px solid #9e7f66'
                                : 'none'
                        }}
                            className='btn'
                            onClick={handleClick3}>
                            <h3>{EventsData[2].title}</h3>
                        </Grid>
                    </Grid>
                    <h2>{EventsData[event].title}</h2>
                    <p>{EventsData[event].text}</p>
                    <Link to='/reservation'>
                        <button>BOOK A TABLE</button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Events;
