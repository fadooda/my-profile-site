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
                            I am a results-driven Full-Stack Engineer with over five years of experience designing and optimizing scalable, high-performance applications and distributed systems. I specialize in React.js, Node.js, SQL, Kubernetes, and DevOps, with a strong background in data analytics, reliability engineering, and cloud technologies.

I have successfully optimized SQL queries, achieving a 75% efficiency gain, and developed SQL-based reporting solutions supporting $100M+ in subscription analytics. Additionally, I have experience in DevOps, system monitoring, and security integration to enhance software reliability and performance. Currently, I am pursuing an AWS Developer Associate certification (exp. May 2025) to deepen my cloud expertise.

Key Achievements
✅ Full-Stack Development: At AppDirect, built a React.js/Redux-based search feature, improving selection speed by 70% and achieving 100% Jest test coverage for critical components.
✅ DevOps & Monitoring: Integrated Datadog for real-time visualization of 10K+ user interactions, enhancing system observability and troubleshooting.
✅ SQL Optimization: At Deutsche Bank, reduced SQL query execution time from 20 minutes to 5 minutes by refactoring 5M+ row reconciliation datasets and eliminating inefficient self-joins.
✅ Security & Authentication: Configured Kerberos authentication for LDAP integration in a distributed Cassandra cluster, ensuring secure single sign-on (SSO) access.

Core Competencies
🔹 Programming Languages: JavaScript, SQL, Scala
🔹 Frameworks & Tools: React.js, Node.js, Jest, Kafka
🔹 Databases: MySQL, Sybase, MongoDB
🔹 DevOps & Monitoring: Kubernetes, Docker, Datadog
🔹 Security & Infrastructure: UNIX scripting, LDAP authentication, Kerberos

I am passionate about designing scalable, efficient, and maintainable software solutions, collaborating with cross-functional teams, and leveraging data-driven insights to drive business impact. Let’s connect to explore opportunities where I can contribute my engineering expertise and problem-solving skills to cutting-edge projects.
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