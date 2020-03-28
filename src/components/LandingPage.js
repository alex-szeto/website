import React, {Component} from 'react'
import './stylesheets/LandingPage.css'
import LanguageList from './LanguageList.js'

class LandingPage extends Component {
  
  state = {
    text: "Javascript",
    showLanguages: false
  }

  grabLanguage = () => {
    const languages = ["HTML","CSS","React","AWS","JQuery","MongoDB","Express.js","React.js","Node.js","Ruby","Python","Rails"]
    const chosen = languages[Math.floor(Math.random() * languages.length)]

    while(this.state.text.length != 0){
        this.setState(prevState =>{ 
          console.log(this.state)
          return{text: prevState.text.slice(0, prevState.text.length - 1)}
         })
      
    }
   }

    render(){
      return(
        <div className="LandingPage-header">
          <img src=""/>
          <div>Hi, I'm Alex Szeto. A Full-Stack Developer.</div>
          <br/>
          <div>I Develop With: <strong><span id="output">{this.state.text}</span></strong></div>
          <br/>
          <div id="nav">
            <span>About</span>{" | "}
            <span onMouseEnter={() => { this.setState({showLanguages: true}) }}>Languages</span>{" | "}
            <span>Projects</span>{" | "}
            <span>Resume</span>{" | "}
            <span>Contact Me</span>
          </div>
          <LanguageList show={this.state.showLanguages}/>
        </div>
      )
    }
  
}





export default LandingPage