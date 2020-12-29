import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import profilePic from '../ProfilePic.jpg'
import Education from './education'
import Experience from './experience'
import ContactInformationResume from './contactInfoResume'
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
                        <ContactInformationResume/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>

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
                        <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            company='RBC'
                            jobName='Contractor: Data Engineer'
                            situation=' Configured Kerberos on a distributed cluster of Cassandra database servers for user authentication and enabling single sign-on across multiple interacting systems'
                            taskassigned=' Collaborated in scrum meetings to design, code and execute a script to remove expired client files from Hadoop’s distributed file system'
                            actiontook=' Programmed a frontend JavaScript feature to send client-related excel files to an internal server using REST'
                            result=' Produced readable datasets for business analysis by ingesting and transforming data files using Mesa code on Palantir’s Foundry system'
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2018}
                            company='Deutsche Bank'
                            jobName='Contractor: SQL Developer'
                            situation=' Improved charge accuracy to client accounts by resolving a production issue that incorrectly rounded fee rates.'
                            taskassigned=' Delivered several SQL procedures to calculate pricing on client assets and balances.'
                            actiontook=' Generated reports through SQL procedures for the purpose of ensuring that interest rates conformed to both domestic and international journals from a Brexit-analysis system.'
                            result=' Created a Linux script to restructure the file system of both production and UAT servers resolving environment inconsistencies'
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2019}
                            jobName='FDM IT Consultant'
                            situation='Consulted for RBC and Deutche Bank'
                            taskassigned=''
                            actiontook=''
                            result=''
                        />

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
                </Grid>
            </div>
        )
    }
}

export default Resume 