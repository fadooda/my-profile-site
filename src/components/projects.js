import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Tabs,Tab,Grid,Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'
class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            activeTab: 0
        }
      }

      toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project: game-site</CardTitle>
                        
                        <CardText>
                            An interactive online gaming site to showcase the power of websockets!! Grab a friend come on over and play!
                        </CardText>

                        <CardActions border>
                            <a href="https://github.com/fadooda/game-site-react-app"  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                            <a href="https://free-games-online.netlify.app/"  rel="noopener noreferrer" target="_blank">
                                <Button colored >live site</Button>
                            </a>
                        </CardActions>

                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:  'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project: profile-site</CardTitle>
                        
                        <CardText>
                            An interactive online gaming site to showcase the power of websockets!! Grab a friend come on over and play!
                        </CardText>
                        
                        <CardActions border>
                            <a href="https://github.com/fadooda/my-profile-site"  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                            <a href="/">
                                <Button colored >live site</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                </div>

            )
        }else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>NodeJS Project: Authentication-Server</CardTitle>
                        <CardText>
                            Check out the node server for authenticating users!
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/fadooda/game-site-authenticate-users-app"  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:  'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>NodeJS Project: TicTacToe-Server</CardTitle>
                        <CardText>
                            Interested in finding out how the tictactoe websockets work? Check out this server!
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/fadooda/game-site-ticktactoe-app"  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:  'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>NodeJS Project: Chat-Server</CardTitle>
                        <CardText>
                            Want to know how to make a facebook replica messaging service? Check out this server!
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/fadooda/game-site-chat-app"  rel="noopener noreferrer" target="_blank">
                                <Button colored >github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
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