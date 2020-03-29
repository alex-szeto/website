import React, {Component} from 'react'
import Typist from 'react-typist'

class ContactInformation extends Component {

    render(){
        return(
            <div style={{height: 12}} className="showing"><br/>

                <div><strong>Contact Information</strong></div>
                    <div className="contact">
                        <div>Email: Alex.Szeto.a@gmail.com </div>
                        <div>LinkedIn: <a href="https://www.linkedin.com/in/alex-szeto-806505187/">linkedin.com/in/alex-szeto-806505187/</a></div>
                    </div>
                    <br/>
                    <div className="icons">
                        <a href="mailto:alex.szeto.a@gmail.com">
                            <img src="https://image.flaticon.com/icons/svg/281/281769.svg" height="50" width="50"/>
                        </a>{"     "}
                        <a href="https://www.linkedin.com/in/alex-szeto-806505187/">
                            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" height="50" width="50"/>
                        </a>
                    </div>
            </div>
        )
    }
}

export default ContactInformation