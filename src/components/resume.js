import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import profilePic from '../profilepic.jpg'
import Education from './education'
import Experience from './experience'
import ContactInformationResume from './contactInfoResume'
import Skills from './skills'


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                 {/* Set up the respective resume image and the styling */}
                 <Cell col={4}>
                        <div>
                            <img
                                src={profilePic}
                                alt='profileimg'
                                style={{height:'300px', borderRadius: '90%'}}
                            />
                        </div>
                        <ContactInformationResume style ={{textAlign: 'center'}}/>
                    </Cell>

                 
                 <Cell className='resume-right-col' col={8}>
                        {/*Skills Section:::: Set up skills with the progress bar*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills 
                        style={{margin: 'auto'}}
                        skill="JavaScript"
                        progress={77}
                        />

                        <Skills 
                        skill="NodeJS"
                        style={{margin: 'auto'}}
                        progress={70}
                        />
                        
                         <Skills 
                        skill="React"
                        style={{margin: 'auto'}}
                        progress={45}
                        />
                       
                        <Skills 
                        skill="HTML/CSS"
                        style={{margin: 'auto'}}
                        progress={30}
                        />

                        {/*Experience Section:::: Pass props containing STAR statements for the job experience*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Experience</h2>
                        <Experience 
                            startYear={'May 2017'}
                            endYear={'July 2019'}
                            jobName='FDM IT Consultant'
                            situation='Consulted for RBC and Deutsche Bank'
                            taskassigned=''
                            actiontook=''
                            result=''
                        />
                        
                        <Experience 
                            startYear={'April 2018'}
                            endYear={'July 2019'}
                            company='RBC'
                            jobName='Contractor: Data Engineer'
                            situation='Configured Kerberos on a distributed cluster of Cassandra database servers for user authentication and enabling single sign-on across multiple interacting systems'
                            taskassigned='Collaborated in scrum meetings to design, code and execute a script to remove expired client files from Hadoop’s distributed file system'
                            actiontook='Programmed a frontend JavaScript feature to send client-related excel files to an internal server using REST'
                            result='Produced readable datasets for business analysis by ingesting and transforming data files using Mesa code on Palantir’s Foundry system'
                        />

                        <Experience 
                            startYear={'July 2017'}
                            endYear={'March 2018'}
                            company='Deutsche Bank'
                            jobName='Contractor: SQL Developer'
                            situation='Improved charge accuracy to client accounts by resolving a production issue that incorrectly rounded fee rates.'
                            taskassigned='Delivered several SQL procedures to calculate pricing on client assets and balances.'
                            actiontook='Generated reports through SQL procedures for the purpose of ensuring that interest rates conformed to both domestic and international journals from a Brexit-analysis system.'
                            result='Created a Linux script to restructure the file system of both production and UAT servers resolving environment inconsistencies'
                        />


                        {/*Education Section:::: Pass props containing education information*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />      
                        <h2>Education</h2>
                        <Education 
                            startYear={2011}
                            endYear={2016}
                            schoolName='Carleton University'
                            schoolAddress='1125 Colonel By Dr, Ottawa, ON K1S 5B6'
                            degree='Bachelor of Engineering, Specialized in Software'
                        />
                                          
                    </Cell>

                    {/* set and style footer */}
                    <div className='gridfooter'>
                    <p>
                        <strong>
                            Copyright © 2020 by Fady Ibrahim. All Rights Reserved.
                        </strong>
                    </p>
                </div>
                </Grid>

            </div>
        )
    }
}

export default Resume 