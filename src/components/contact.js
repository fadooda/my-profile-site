import React, {Component} from 'react'
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl'
import profileImg from '../profilepic_with_scenic_background.jpg'

class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Fady Ibrahim</h2>
                        <img
                        src={profileImg}
                        alt="profileImg"
                        style={{height: '250px'}}/>
                        <p style={{width: '75%',margin: 'auto', paddingTop: '1em'}}>qoute</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent icon="person">Aaron Paul</ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact 