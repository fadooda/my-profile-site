import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    {(this.props.situation)? <p> <i className="fa fa-star" aria-hidden="true" />{this.props.situation}</p> : null}
                    {(this.props.taskassigned)? <p> <i className="fa fa-star" aria-hidden="true" />{this.props.taskassigned}</p> : null}
                    {(this.props.actiontook)? <p> <i className="fa fa-star" aria-hidden="true" />{this.props.actiontook}</p> : null}
                    {(this.props.result)? <p> <i className="fa fa-star" aria-hidden="true" />{this.props.result}</p> : null}
                </Cell>
            </Grid>
        )
    }
}

export default Experience 