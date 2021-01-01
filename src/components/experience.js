import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import './CSS/experience.css'
// <Cell col={1}>
// <p style={{fontStyle: 'italic'}}>{this.props.startYear} </p>
// </Cell>
// <Cell col={1}>
// <hr style={{borderTop: '3px solid #833fb2', width: '20px'}}/>
// </Cell>
// <Cell col={1}>
// <p style={{fontStyle: 'italic'}}> {this.props.endYear}</p>
// </Cell>

class Experience extends Component{
    render(){
        return(
            <Grid>
                 {/*Display the props passed -- start-year and end-year  */}
                <Cell col={4}>
                    <div className='experienceDate'>
                        <div>
                            <p style={{fontStyle: 'italic'}}>{this.props.startYear} </p>
                        </div>
                            <hr style={{borderTop: '3px solid #833fb2', width: '20px'}}/>
                        <div>
                            <p> {this.props.endYear}</p>
                        </div>
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