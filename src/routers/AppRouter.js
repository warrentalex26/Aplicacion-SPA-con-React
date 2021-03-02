import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { LoginScreen } from '../components/login/LoginScreen'
import { Navbar } from '../components/ui/Navbar'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {

    return (
        <Router>
            <div>
                {/* <Navbar/> */}
                <Switch>
                    <Route exact path='/login' component={LoginScreen}></Route>
                    <Route path='/' component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}
