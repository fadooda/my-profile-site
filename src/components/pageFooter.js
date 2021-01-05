import React, {Component} from 'react'


class PageFooter extends Component{
    render(){
        return( //set and style footer
            <div>
            {(this.props.isGrid)?
                <div className='gridfooter'>
                    <p className='gridfooter'>
                        <strong>
                            Copyright © 2020 by Fady Ibrahim. All Rights Reserved.
                        </strong>
                    </p>
                </div>
                :
                <div className='footer'>
                    <p>
                        <strong>
                            Copyright © 2020 by Fady Ibrahim. All Rights Reserved.
                        </strong>
                    </p>
                </div>
            }
            </div>


        )
    }
}

export default PageFooter 