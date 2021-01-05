import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import profilePic from '../profilepic_with_styled_hair.jpg'
import PageFooter from './pageFooter'


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        {/*Set profile image on top*/}
                        <div style ={{textAlign: 'center'}}>
                            <img
                                src={profilePic}
                                alt='profileimg'
                                style={{height:'400px', borderRadius: '40%'}}
                            />
                        </div>

                        <div className='resume-right-col'>

                            {/* Set up inforamtion in the about me section with stylings */}
                            <hr style={{borderTop: '3px solid #e22947'}} />
                            <h2>About Me</h2>
                            <p>
                            Fady is a experienced IT professional and a graduate of Carleton University’s software engineering program.
                            He has an analytical mind and a passion for applying problem solving in his work.
                            Through his devotion to his projects Fady has gained the invaluable qualities of perseverance and self-starting.
                            He has returned from a 16-month contract at RBC, where he gained experience in managing and transforming big data streams to be used for business analytics. 
                            He also applied his expertise towards security and authentication of the company’s distributed systems. 
                            Fady envisions himself to be part of an active team working towards making an impact not only to the company, but to society at large through his software engineering skills.
                            </p>

                            {/* create a border line for the next section */}
                            <hr style={{borderTop: '3px solid #e22947'}} />    
                            <hr style={{borderTop: '3px solid #e22947'}} />    

                            {/* set hobbies section and with styles*/}
                            <h2>Hobbies</h2> 
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Spending time with family and friends
                            </p>
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Nature walks
                            </p>
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Video games (e.g Rocket League)
                            </p>
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Advancing my knowledge and experties of full-stack development
                            </p>
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Working on an MERN-stack application that allows users to play games online and explore the power of web sockets
                            </p>
                            <p>
                                <i className="fa fa-bug" aria-hidden="true"  style={{paddingRight: '1em'}}/>
                                Developing long-term and short-term strategies for investing in the stock market
                            </p>
                        </div>
                    </Cell>
                </Grid>

                <PageFooter isGrid={true}/>
            </div>
        )
    }
}

export default Resume 