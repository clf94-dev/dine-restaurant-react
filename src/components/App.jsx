import React from 'react'
import './styles/App.css'
import Top from './Top'
import Features from './Features'
import Highlights from './Highlights'
import Cta from './Cta'
import Footer from './Footer'
import Events from './Events'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home.jsx'
import Reservation from './pages/Reservation.jsx'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/reservation' component={Reservation}></Route>
                </Switch>

            </Router>

        </div>
    )
}

export default App
