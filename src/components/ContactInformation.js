import React, {Component} from 'react'
import Typist from 'react-typist'

class ContactInformation extends Component {

    render(){
        return(
            <div style={{height: 12}}><br/>

                <div><strong>Contact Information</strong></div><br/>
                    <div>Email - Alex.Szeto.a@gmail.com </div>
                    <div>LinkedIn - <a href="https://www.linkedin.com/in/alex-szeto-806505187/">linkedin.com/in/alex-szeto-806505187/</a></div><br/>
                    <Typist cursor={{hideWhenDone: true}}>HyperLinks: <a href="mailto:alex.szeto.a@gmail.com">Email</a> <a href="https://www.linkedin.com/in/alex-szeto-806505187/">LinkedIn</a></Typist>
            </div>
        )
    }
}

export default ContactInformation