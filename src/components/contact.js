import React, {Component} from 'react'
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl'
import profileImg from '../profilepic_with_scenic_background.jpg'
import PageFooter from './pageFooter'


class Contact extends Component{
    render(){
        return( 
            <div className='contact-body'>
                <Grid className='contact-grid'>      
                    {/* set up left side of the contact page, where the image and the quote are */}
                    <Cell col={6}>
                        <h2>Fady Ibrahim</h2>
                        <img
                        src={profileImg}
                        alt="profileImg"
                        style={{height: '250px',borderRadius: '20%'}}/>
                        <p style={{width: '75%',margin: 'auto', paddingTop: '1em'}}>
                            The important thing is to not stop questioning. 
                            Curiosity has its own reason for existing. -Albert Einstein</p>
                    </Cell>

                    {/* set up the right side with contact information */}
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-phone-square' aria-hidden="true" style={{ paddingRight: '5rem'}} />
                                    (226) 343-0749
                                </ListItemContent>
                                </ListItem>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden="true" style={{ paddingRight: '4rem'}}/>
                                    fadyibrahim37@gmail.com
                                </ListItemContent>
                                </ListItem>
                                <ListItem >
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-skype' aria-hidden="true" style={{ paddingRight: '5rem'}}/>
                                    live:fady31_1
                                </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                </Cell>
                </Grid>

                <PageFooter isGrid={false}/>
            </div>
        )
    }
}

export default Contact 