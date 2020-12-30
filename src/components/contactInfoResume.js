import React, {Component} from 'react'

class ContactInformationResume extends Component{
    render(){
        return(
            <div>                        
                <h2 style={{paddingTop: '2em'}}>Fady Ibrahim</h2>
                <h4 style={{color: 'grey'}}>Software Developer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                <p><i className="fa fa-paper-plane" aria-hidden="true" />
                Detail-oriented software developer with 2 years of experience in financial firms managing client data and building big data infrastructure.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" />
                Conducted data migration from on-premise Hadoop systems to cloud AWS S3.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" />
                Optimized the execution time of an SQL procedure that calculates client pricing by up to 70%.
                </p>
                
                <p><i className="fa fa-paper-plane" aria-hidden="true" />
                Eliminated the need for business to manually correct client charges from an incorrectly rounded interest fee rate.
                </p>

                <p><i className="fa fa-paper-plane" aria-hidden="true" />
                Resolved environment inconsistencies allowing for a seamless transition from UAT to production
                </p>

                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Phone</h5>
                <p>(226)779-4394</p>
                <h5>Email</h5>
                <p>fadyibrahim37@gmail.com</p>
                <h5>Web</h5>
                <p>https://fadyibrahim.netlify.app/</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
        )
    }
}

export default ContactInformationResume 