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
                        style={{height: '250px',}}/>
                        <p style={{width: '75%',margin: 'auto', paddingTop: '1em'}}>qoute</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden="true"/>
                                    (226) 779-4394
                                </ListItemContent>
                                </ListItem>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden="true"/>
                                    fadyibrahim37@gmail.com
                                </ListItemContent>
                                </ListItem>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-skype' aria-hidden="true"/>
                                    live:fady31_1
                                </ListItemContent>
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