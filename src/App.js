import React from 'react'
import './App.css'
import {Layout,Header,Navigation,Drawer,Content}  from 'react-mdl'
import ProfileRoutes from './components/profileRoutes'
import {Link} from 'react-router-dom'

class App extends React.Component {



  render()
  {
    return (
      <div className="App">
<div className="demo-big-content">
    <Layout>
    <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Fady Ibrahim</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Fady Ibrahim</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <ProfileRoutes/>
        </Content>
    </Layout>
</div>

      </div>
    );
  }

}

export default App;
