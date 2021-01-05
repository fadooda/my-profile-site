import React, {Component} from 'react'
import {Tabs,Tab,Grid,Cell, Card, CardTitle,CardText, CardActions, Button} from 'react-mdl'
import TickTactToeImg from '../TictacToeGame.png'
import nodeJsImg from '../images/nodejsimg.jpg'
import profileProjectReact from '../profile_site_pic.png'

class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            activeTab: 0
        }
      }

      projectCardItem(text,github,livesite,img){
        return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'purple', height: '200px', background: `url(${img}) center / cover`}}/>
                    {/* Set up project information*/}
                    <CardText>
                        {text}
                    </CardText>

                    {/* Set up respective links to the github repository and the live site ---- game-site-github-repo && live-site*/}
                    <CardActions border>
                        {(github)? 
                            <a href={`${github}`}  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                            :
                            null
                        }
                        {(livesite)? 
                            <a href={`${livesite}`}  rel="noopener noreferrer" target="_blank">
                                <Button colored >live site</Button>
                            </a>
                            :
                            null
                        }
                    </CardActions>
                </Card>
        )
      }

      toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    {/*React Projects*/}
                    {this.projectCardItem('An interactive online gaming site to showcase the power of websockets!! Grab a friend come on over and play!',
                        'https://github.com/fadooda/game-site-react-app',
                        'https://free-games-online.netlify.app/',
                        TickTactToeImg)}
           
                    {this.projectCardItem('Want to know how to make a portfolio site?  Check out the github link below for the codebase repository - This portfolio website.',
                        'https://github.com/fadooda/my-profile-site',
                        null,
                        profileProjectReact)}
           

                    {/* set and style footer */}
                    <div className='footer'>
                        <p>
                            <strong>
                                Copyright © 2020 by Fady Ibrahim. All Rights Reserved.
                            </strong>
                        </p>
                    </div>
                </div>

            )
        }else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                    {/*NodeJS Projects*/}
                    {this.projectCardItem('Check out the node server for authenticating users!',
                        'https://github.com/fadooda/game-site-authenticate-users-app',
                        null,
                        nodeJsImg)}

                    {this.projectCardItem('Interested in finding out how the tictactoe websockets work? Check out this server!',
                        'https://github.com/fadooda/game-site-ticktactoe-app',
                        null,
                        nodeJsImg)}

                    {this.projectCardItem('Want to know how to make a facebook-messaging service replica? Look no further! Check out this server!',
                        'https://github.com/fadooda/game-site-chat-app',
                        null,
                        nodeJsImg)}

                    {/* set and style footer */}
                    <div className='footer'>
                        <p>
                            <strong>
                                Copyright © 2020 by Fady Ibrahim. All Rights Reserved.
                            </strong>
                        </p>
                    </div>
                </div>
            )

        }
      }
      

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className='content'> {this.toggleCategories()} </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Project 