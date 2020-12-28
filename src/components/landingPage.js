import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                        alt="avatar"
                        className='profile-img'
                        />
                        <div className="banner-text">
                            <h1 >
                                Full-Stack web developer
                            </h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/fady-ibrahim-b68b0a59/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/fadooda" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/fadyI" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-code" aria-hidden="true" />
          </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage 