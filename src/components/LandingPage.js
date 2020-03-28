import React, {Component} from 'react'
import './stylesheets/LandingPage.css'
import LanguageList from './LanguageList.js'
import Typist from 'react-typist'
import About from './About.js'
import Resume from './Resume.js'
import ProjectList from './ProjectList.js'
import ContactInformation from './ContactInformation.js'

class LandingPage extends Component {

  constructor(){
    super()
    this.navRef = React.createRef();
  }
  
  state = {
    text: "Javascript",
    showing: "none"
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
          <Typist id="bottom" cursor={{hideWhenDone: true}} onTypingDone={() => {this.navRef.current.id = "nav"}}>Hi, I'm Alex Szeto. 
            <br/>
            <Typist.Delay ms={500}/>
            A Full-Stack Developer.
            <Typist.Delay ms={500}/>
            <br/>
            I Develop With: Javascript, Ruby & Python.
          </Typist>
          <br/>

          <div id="nonav" ref={this.navRef}>
            <span onMouseEnter={() => { this.setState({showing: "about"}) }}>About</span>{" | "}
            <span onMouseEnter={() => { this.setState({showing: "skills"}) }}>Skills</span>{" | "}
            <span onMouseEnter={() => { this.setState({showing: "projects"}) }}>Projects</span>{" | "}
            <span onMouseEnter={() => { this.setState({showing: "resume"}) }}>Resume</span>{" | "}
            <span onMouseEnter={() => { this.setState({showing: "contact"}) }}>Contact Me</span>
          </div>

          {this.state.showing == "about" && false && <About/>}
          {this.state.showing == "skills" && <LanguageList/>}
          {this.state.showing == "projects" && false && <ProjectList/>}
          {this.state.showing == "resume" && false && <Resume/>}
          {this.state.showing == "contact" && false && <ContactInformation/>}
        </div>
      )
    }
  
}





export default LandingPage