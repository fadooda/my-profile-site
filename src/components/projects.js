import React, {Component} from 'react'
import {Tabs,Tab} from 'react-mdl'
class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            activeTab: 0
        }
      }
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Project 