import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Executives from './components/Executives'
import About from './components/About'
import Reports from './components/Reports'
import Prescriptions from './components/Prescriptions'
import Doctors from './components/Doctors'
import AboutUs from './components/AboutUs'
const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/about" exact component={About} />
      <Route path="/reports" exact component={Reports} />
      <Route path="/prescriptions" exact component={Prescriptions} />
      <Route path="/executives" exact component={Executives} />
      <Route path="/doctors" exact component={Doctors } />
      <Route path="/aboutus" exact component={AboutUs } />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


