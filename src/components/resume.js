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
                        <Skills skill="React.js" progress={70} />
                        <Skills skill="Node.js" progress={65} />
                        <Skills skill="Scala" progress={40} />
                        <Skills skill="SQL" progress={80} />
                        <Skills skill="Kubernetes/Docker" progress={47} />
                        <Skills skill="DevOps" progress={44} />

                        {/*Experience Section:::: Pass props containing STAR statements for the job experience*/}
                        <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Experience</h2>
                        
                        <Experience 
                            startYear={'June 2024'}
                            endYear={'April 2025'}
                            company='Career Break'
                            taskone='Took a planned career break to attend to personal matters. During this time I’ve earned an SQL (Advanced) and JavaScript (Intermediate) certifications from HackerRank; completed 100+ LeetCode challenges to refine data structures, SQL and algorithms skills'
                        />
                        
                        <Experience
                            startYear={'FEBRUARY 2021'}
                            endYear={'MAY 2024'}
                            company="APPDIRECT"
                            jobName="Full-Stack Engineer"
                            taskone="Software Development: Built React.js/Redux-based search feature, enabling users to make selections 70% faster than with the previous dropdown approach. Achieved 100% Jest test coverage for critical components."
                            tasktwo="Business Analytics Reporting: Developed SQL-based 'Bookings Report' for $100M+ subscription analytics (MRR/GMV metrics)."
                            taskthree="Data Visualization & Monitoring: Integrated Datadog API for real-time visualization of 10K+ user interaction metrics."
                            taskfour="DevOps Integration: Implemented Kubernetes and Docker best practices to improve system reliability, contributing to the team’s goal of reaching 99.9% uptime (Three Nines reliability)."
                            taskfive="Database Configuration: Updated the database connection to use an AWS Aurora-compatible driver for improved compatibility and performance."
                        />
                        
                        <Experience 
                            startYear={'April 2018'}
                            endYear={'July 2019'}
                            company='RBC'
                            jobName='Contractor - Data Engineer'
                            taskone='Security and Authentication: Configured Kerberos for LDAP integration on Cassandra cluster; enabled secure single sign-on.'
                            tasktwo='Data Transformation and Analysis: Processed 100GB+ Avro files into structured datasets using Palantir Foundry.'
                            taskthree='Data Management Automation: Co-developed UNIX scripts to automate HDFS file expiration, optimizing storage by 15%.'
                        />

                        <Experience 
                            startYear={'July 2017'}
                            endYear={'March 2018'}
                            company='Deutsche Bank'
                            jobName='Contractor - SQL Developer'
                            taskone='SQL Production Issue Resolution: Fixed SQL report issue, saving $100K+ by correcting rounded fee rate calculations.'
                            tasktwo='Query Optimization: Optimized Sybase SQL procedure for a 5M+ row reconciliation dataset; reduced query time from 20 minutes to 5 by replacing self-joins with CASE-based pivoting.'
                        />

                        <Experience 
                            startYear={'May 2013'}
                            endYear={'September 2013'}
                            company='Employment and Social Development Canada'
                            jobName='University Co-op - C# Developer'
                            taskone='MVC Automation: Designed and integrated an MVC scaffold in C# .NET to automate CRUD operations, streamlining robust web page development.'
                            tasktwo='Task Scheduling Logic: Programmed internal logic for a task scheduler to trigger any executable at a specified date and time.'
                            taskthree='Logging and Monitoring: Utilized Log4Net to capture execution logs and errors, directing them to the appropriate Oracle database tables.'
                            taskfour='Code Modernization: Migrated multiple legacy Visual Basic repositories to C# to improve maintainability and integration with modern development workflows.'
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