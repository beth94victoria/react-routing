import React from 'react'
import ReactDOM from 'react-dom'
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import './index.css'
import App from './App'
import Users from './components/Users'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Notfound from './components/Notfound'

const routing = (

    <Router>
        <div>
            <Nav />
            <Switch>

                <Route exact path="/users" component={Users} />
                <Route path="/users/:userId" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" component={App} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'))