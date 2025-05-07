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
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    {(this.props.taskone)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.props.taskone}</p> : null}
                    {(this.props.tasktwo)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}} />{this.props.tasktwo}</p> : null}
                    {(this.props.taskthree)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.props.taskthree}</p> : null}
                    {(this.taskfour)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.taskfour}</p> : null}
                    {(this.taskfive)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.taskfive}</p> : null}
                </Cell>
            </Grid>
        )
    }
}

export default Experience 