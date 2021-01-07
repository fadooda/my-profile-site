import React, {Component} from 'react'


class PageFooter extends Component{
    getCurrDate()
    {
        let currdate = new Date();
        return currdate.getFullYear()
    }

    render(){
        return( //set and style footer
            <div>
            {(this.props.isGrid)?
                <div className='gridfooter'>
                    <p className='gridfooter'>
                        <strong>
                            Copyright © {this.getCurrDate()} by Fady Ibrahim. All Rights Reserved.
                        </strong>
                    </p>
                </div>
                :
                <div className='footer'>
                    <p>
                        <strong>
                            Copyright © {this.getCurrDate()} by Fady Ibrahim. All Rights Reserved.
                        </strong>
                    </p>
                </div>
            }
            </div>


        )
    }
}

export default PageFooter 