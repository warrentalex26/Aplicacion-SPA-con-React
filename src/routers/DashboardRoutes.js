import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = ({history}) => {

    return (
        <>
            <Navbar history={history}/>
            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}></Route>
                    <Route exact path='/hero/:heroeId' component={HeroScreen}></Route>
                    <Route exact path='/dc' component={DcScreen}></Route>
                    <Route exact path='/search' component={SearchScreen}></Route>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
