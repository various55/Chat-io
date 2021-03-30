import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppChat from './components/AppChat'
import Login from './components/Login'

const App = () => (
    <Router>
        <Route path='/' exact component={Login} />
        <Route path='/chat' exact component={AppChat} />
    </Router>
)

export default App