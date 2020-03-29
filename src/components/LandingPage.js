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
    this.initalDivRef = React.createRef()
  }
  
  state = {
    text: "Javascript",
    showing: "none"
  }

  handleShowing = (element) => {
    this.setState({showing: element})
  }

  handleTransition = (param) => {
    this.navRef.current.id = "nav"
    this.handleShowing(param)
  }

//() => {this.navRef.current.id = "nav" }
    render(){
      return(
        <div>
            <div id="nonav" ref={this.navRef}>
              <span onClick={() => { this.handleShowing("none") }} style={{color: "white"}}> Alex Szeto</span> {" | "}
              <span onClick={() => { this.handleShowing("about") }}> {this.state.showing === "about" ? <strong className="selected">About</strong> : <span>About</span>} </span>{" | "}
              <span onClick={() => { this.handleShowing("skills") }}>{this.state.showing === "skills" ? <strong className="selected">Skills</strong> : <span>Skills</span>}</span>{" | "}
              <span onClick={() => { this.handleShowing("project") }}>{this.state.showing === "project" ? <strong className="selected">Projects</strong> : <span>Projects</span>}</span>{" | "}
              <span onClick={() => { this.handleShowing("resume") }}>{this.state.showing === "resume" ? <strong className="selected">Resume</strong> : <span>Resume</span>}</span>{" | "}
              <span onClick={() => { this.handleShowing("contact") }}>{this.state.showing === "contact" ? <strong className="selected">Contact Me</strong> : <span>Contact Me</span>}</span>
            </div>
          <div>
            {this.state.showing === "none" && <div className="LandingPage-header"><Typist id="bottom" cursor={{hideWhenDone: true}} onTypingDone={() => {}}> <Typist.Delay ms={250}/>
              Hi, I'm Alex Szeto. 
              <br/>
              <Typist.Delay ms={250}/>
              A Full-Stack Web Developer.
              <Typist.Delay ms={250}/>
              <br/>
              I Develop With: JavaScript, Ruby & Python.
              </Typist>
              <br/>
              <div className="initialDiv" ref={this.initalDivRef}>
                <span>About</span>{' | '}
                <span onClick={() => { this.handleTransition("skills") }}>Skills</span>{' | '}
                <span>Project</span>{' | '}
                <span>Resume</span>{' | '}
                <span>Contact</span>
              </div>
            </div>
            }


            {this.state.showing === "about" && false && <About/>}
            {this.state.showing === "skills" && <LanguageList/>}
            {this.state.showing === "projects" && false && <ProjectList/>}
            {this.state.showing === "resume" && false && <Resume/>}
            {this.state.showing === "contact" && <ContactInformation/>}
          </div>
        </div>
      )
    }
  
}





export default LandingPage