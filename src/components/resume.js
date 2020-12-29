import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import profilePic from '../ProfilePic.jpg'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style ={{textAlign: 'center'}}>
                            <img
                                src={profilePic}
                                alt='profileimg'
                                style={{height:'200px', borderRadius: '90%'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Fady Ibrahim</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohelloh
                            ellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
                            hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohelloh
                            ellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohe
                            llohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohe
                            llohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohel
                            lohellohellohellohellohellohellohellohello
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Hacker way melo park, 94025</p>
                        <h5>Phone</h5>
                        <p>(226)779-4394</p>
                        <h5>Email</h5>
                        <p>fadyibrahim37@gmail.com</p>
                        <h5>Web</h5>
                        <p>fady-ibrahim.netlify.app</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2011}
                            endYear={2016}
                            schoolName='Carleton University'
                            schoolAddress='1125 Colonel By Dr, Ottawa, ON K1S 5B6'
                            degree='Bachelor of Engineering, specialized in Software'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            company='RBC'
                            jobName='Carleton University'
                            jobDescription='1125 Colonel By Dr, Ottawa, ON K1S 5B6'
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2018}
                            company='Deutsche Bank'
                            jobName='Carleton University'
                            jobDescription='1125 Colonel By Dr, Ottawa, ON K1S 5B6'
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2019}
                            jobName='FDM IT Consultant'
                            jobDescription='1125 Colonel By Dr, Ottawa, ON K1S 5B6'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume 