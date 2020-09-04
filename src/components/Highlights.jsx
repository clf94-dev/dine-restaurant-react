import React from 'react'
import {Grid} from '@material-ui/core'
import patternDiv from './images/patterns/pattern-divide.svg'
import HighlightsCard from './HighlightsCard';
import {highlightsData} from './highlightsData';


function Highlights() {
    return (
        <div>
            <Grid container direction='row' className='highlights-cont'>
                <Grid item md={6} xs={12} direction='column' className='text-left'>
                    <img src={patternDiv} alt="divider pattern"/>
                    <h2>A few highlights from our menu</h2>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our
                        diner’s favourites. Our menu is revamped every season.</p>
                </Grid>
                <Grid item md={6} xs={12} direction='column' className='cards-right'>
                    {highlightsData.map(item => {
                        return (<HighlightsCard
                            key={item.index}
                            index={item.index}
                            title={item.title}
                            text={item.text}/>);
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default Highlights
