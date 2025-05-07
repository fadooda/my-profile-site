import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import './CSS/experience.css'


class Experience extends Component{
    render(){
        return(
            <Grid>
                 {/*Display the props passed -- start-year and end-year  */}
                <Cell col={4}>
                    <div className='experienceDate'>
                            <p style={{fontStyle: 'italic'}}>{this.props.startYear} --- {this.props.endYear}</p>
                    </div>
                </Cell>

                 {/*Display the job experience content */}
                <Cell col={8}>
                <h4 style={{ marginTop: '0px' }}>{this.props.company}</h4>
                    {this.props.jobName && <h5>{this.props.jobName}</h5>}
                    {this.props.taskone && <p><i className="fa fa-star" aria-hidden="true" style={{ paddingRight: '1em' }} />{this.props.taskone}</p>}
                    {this.props.tasktwo && <p><i className="fa fa-star" aria-hidden="true" style={{ paddingRight: '1em' }} />{this.props.tasktwo}</p>}
                    {this.props.taskthree && <p><i className="fa fa-star" aria-hidden="true" style={{ paddingRight: '1em' }} />{this.props.taskthree}</p>}
                    {this.props.taskfour && <p><i className="fa fa-star" aria-hidden="true" style={{ paddingRight: '1em' }} />{this.props.taskfour}</p>}
                    {this.props.taskfive && <p><i className="fa fa-star" aria-hidden="true" style={{ paddingRight: '1em' }} />{this.props.taskfive}</p>}
                </Cell>
            </Grid>
        )
    }
}

export default Experience 