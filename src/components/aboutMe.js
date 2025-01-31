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
                                Fady Ibrahim is a software engineer with over 5 years of hands-on experience in developing scalable applications and managing distributed systems.
                                A graduate of Carleton University’s Software Engineering program, he brings a strong analytical mindset and a passion for problem-solving to his work.
                            </p>
                            <p>
                                Fady has contributed to key projects in both the financial and SaaS industries, where he gained experience in data transformation, SQL optimization, cloud infrastructure,
                                and improving system performance. At AppDirect, he applied DevOps best practices to maintain high service reliability and developed data-driven reporting solutions that
                                supported strategic business decisions.
                            </p>
                            <p>
                                His time at RBC and Deutsche Bank gave him valuable experience in handling large data streams, enhancing system security, and automating data management processes.
                                Fady enjoys working in collaborative Agile environments and continuously seeks opportunities to learn and apply new skills to create meaningful solutions.
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
                                Nature walks and exploring ancient ruins
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