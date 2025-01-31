import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import profilePic from '../ProfilePic.jpg'
import Education from './education'
import Experience from './experience'
import ContactInformationResume from './contactInfoResume'
import Skills from './skills'
import PageFooter from './pageFooter'


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

                        <Skills skill="JavaScript" progress={85} />
                        <Skills skill="React.js" progress={80} />
                        <Skills skill="Node.js" progress={75} />
                        <Skills skill="Scala" progress={70} />
                        <Skills skill="SQL" progress={80} />
                        <Skills skill="Kubernetes/Docker" progress={65} />
                        <Skills skill="DevOps" progress={70} />
                        <Skills skill="Palantir Foundry" progress={60} />

                        {/*Experience Section:::: Pass props containing STAR statements for the job experience*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Experience</h2>
                        <Experience 
                            startYear={'May 2017'}
                            endYear={'July 2019'}
                            company='FDM Group'
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
                            situation='Improved charge accuracy to client accounts by resolving a production issue that incorrectly rounded fee rates'
                            taskassigned='Delivered several SQL procedures to calculate pricing on client assets and balances'
                            actiontook='Generated reports through SQL procedures for the purpose of ensuring that interest rates conformed to both domestic and international journals from a Brexit-analysis system'
                            result='Created a Linux script to restructure the file system of both production and UAT servers resolving environment inconsistencies'
                        />

                        <Experience 
                            startYear={'May 2013'}
                            endYear={'September 2013'}
                            company='Employment and Social Development Canada'
                            jobName='University Co-op: C# Developer'
                            situation='Programmed the internal logic for a task scheduler that triggers any executable for a given date and time'
                            taskassigned='Integrated and designed a MVC scaffold in C# .NET that automated CRUD operations to streamline development of robust web pages'
                            actiontook='Utilized Log4Net to record all program execution information and any encountered bugs to the appropriate Oracle data table'
                            result='Converted several code repositories from visual basic to C#'
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
                </Grid>
                
                <PageFooter isGrid={true}/>
            </div>
        )
    }
}

export default Resume 