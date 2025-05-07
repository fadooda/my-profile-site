import React, {Component} from 'react'
import './CSS/contactInfoResume.css'

class ContactInformationResume extends Component{
    render(){
        return(
            <div> 
                {/* set up the information for the contact on the left side of the resume page*/}                     
                <h2 >Fady Ibrahim</h2>
                <h4 style={{color: 'grey'}}>Software Developer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                
                {/* Summary of Qualifications */}
                <p><i className="fa fa-paper-plane" aria-hidden="true" style={{paddingRight: '1em'}}/>
                Results-oriented Full-Stack Engineer with over 5 years of experience in developing scalable applications and managing distributed systems.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" style={{paddingRight: '1em'}}/>
                Skilled in JavaScript, Scala, and SQL, with experience in React.js, Node.js, and DevOps.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" style={{paddingRight: '1em'}}/>
                Demonstrated success in enhancing system performance, achieving 99.99% server uptime, and developing data-driven solutions that have supported over $100 million in subscription-based service product reporting.
                </p>
                
                <p><i className="fa fa-paper-plane" aria-hidden="true" style={{paddingRight: '1em'}}/>
                Adept at collaborating within Agile teams, implementing data visualization tools for real-time insights, and optimizing SQL queries to improve business operations efficiency by over 70%.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" style={{paddingRight: '1em'}}/>
                Certified in DevOps, React.js, and Node.js, with a strong focus on automation, system reliability, and user experience enhancement.
                </p>

                {/* contact information */}
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Phone</h5>
                <p>(226)343-0749</p>
                <h5>Email</h5>
                <p>fadyibrahim37@gmail.com</p>
                <h5>Web</h5>
                <p>https://fadyibrahim.netlify.app/</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                
                <div style={{ margin: '20px 0' }}>
                    <a
                        href="/Fady_Ibrahim_Resume.pdf"
                        download="Fady_Ibrahim_Resume.pdf"
                        className="download-btn"
                    >
                        📄 Download Fady Ibrahim's PDF Resume
                    </a>
                </div>
            </div>
        )
    }
}

export default ContactInformationResume 