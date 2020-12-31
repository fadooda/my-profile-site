import React, {Component} from 'react'
import {Grid,Cell, ProgressBar} from 'react-mdl'


class Skills extends Component{
    render(){
        return(
            <Grid>
                {/*Display the prop skill */}
                <Cell col={1}>
                    <div >
                        {this.props.skill}
                    </div>
                </Cell>

                {/*Display the progress bar and set the value to the prop progress  */}
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