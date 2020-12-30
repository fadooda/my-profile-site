import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './landingPage'
import AboutMe from './aboutMe'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
const profileRoutes =()=>(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={AboutMe} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/contact" component={Contact} />
    </Switch>
)

export default profileRoutes