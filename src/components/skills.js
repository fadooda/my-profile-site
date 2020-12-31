import React, {Component} from 'react'
import {Grid,Cell, ProgressBar} from 'react-mdl'


class Skills extends Component{
    render(){
        return(
            <Grid>
                {/* Set up the respective resume image and the styling */}
                <Cell col={1}>
                    <div >
                        {this.props.skill}
                    </div>
                </Cell>

                <Cell col={11}>
                    <div >
                        <ProgressBar style={{margin: 'auto', width:'75%'}}
                        progress={this.props.progress}/>
                    </div>
                </Cell>

            </Grid>
        )
    }
}

export default Skills 