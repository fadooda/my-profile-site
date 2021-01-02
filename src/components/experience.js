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
                    {(this.props.situation)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.props.situation}</p> : null}
                    {(this.props.taskassigned)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}} />{this.props.taskassigned}</p> : null}
                    {(this.props.actiontook)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.props.actiontook}</p> : null}
                    {(this.props.result)? <p> <i className="fa fa-star" aria-hidden="true" style={{paddingRight: '1em'}}/>{this.props.result}</p> : null}
                </Cell>
            </Grid>
        )
    }
}

export default Experience 