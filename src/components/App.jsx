import React from 'react'
import './styles/App.css'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home.jsx'
import Reservation from './pages/Reservation.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

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
