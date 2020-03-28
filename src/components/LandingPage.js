import React, {Component} from 'react'
import './stylesheets/LandingPage.css'
import LanguageList from './LanguageList.js'
import Typist from 'react-typist'

class LandingPage extends Component {

  constructor(){
    super()
    this.navRef = React.createRef();
  }
  
  state = {
    text: "Javascript",
    showLanguages: false
  }

  grabLanguage = () => {
    const languages = ["HTML","CSS","React","AWS","JQuery","MongoDB","Express.js","React.js","Node.js","Ruby","Python","Rails"]
    const chosen = languages[Math.floor(Math.random() * languages.length)]

    this.setState({text: chosen})
   }

    render(){
      return(
        <div className="LandingPage-header">
          <img src=""/>
          <Typist cursor={{hideWhenDone: true}} onTypingDone={() => {this.navRef.current.id = "nav"}}>Hi, I'm Alex Szeto. 
            <br/>
            <Typist.Delay ms={500}/>
            A Full-Stack Developer.
            <Typist.Delay ms={500}/>
            <br/>
            I Develop With: Javascript, Ruby & Python.
          </Typist>
          <br/>
          <div id="nonav" ref={this.navRef}>
            <span>About</span>{" | "}
            <span onMouseEnter={() => { this.setState({showLanguages: true}) }}>Skills</span>{" | "}
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