import React, {Component} from 'react'
import InformationPage from './InformationPage'

class LanguageList extends Component {
    state = {
        showing: "AWS",
    }

    handleShowing = (e) => {
        this.setState({ showing: e.target.innerText.trim().match(/[^,]*/)[0] })
    }

    render(){
        return(
            <div style={{height: 12, paddingTop:10}} className="showing"><br/>
                    <div className="skills">
                        <div className="hoverElement"><strong className="skillsCategory">Languages: </strong> 
                            <span onClick={this.handleShowing}>{this.state.showing === "JavaScript" ? <strong className="underline"> JavaScript </strong> : "JavaScript"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Ruby" ? <strong className="underline"> Ruby </strong> : "Ruby"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Python" ? <strong className="underline"> Python </strong> : "Python"}</span>
                        </div>

                        <div className="hoverElement"><strong className="skillsCategory">Frameworks Libraries: </strong> 
                            <span onClick={this.handleShowing}> {this.state.showing === "React" ? <strong className="underline"> React </strong> : "React"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Redux" ? <strong className="underline"> Redux </strong> : "Redux"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Node" ? <strong className="underline"> Node </strong> : "Node"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Express" ? <strong className="underline"> Express </strong> : "Express"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "jQuery" ? <strong className="underline"> jQuery </strong> : "jQuery"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Mocha" ? <strong className="underline"> Mocha </strong> : "Mocha"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Chai" ? <strong className="underline"> Chai </strong> : "Chai"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Jest" ? <strong className="underline"> Jest </strong> : "Jest"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Mongoose" ? <strong className="underline"> Mongoose </strong> : "Mongoose"}</span>
                        </div>

                        <div className="hoverElement"><strong className="skillsCategory">Databases Middleware: </strong>
                            <span onClick={this.handleShowing}>{this.state.showing === "MongoDB" ? <strong className="underline"> MongoDB </strong> : "MongoDB"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "PostgreSQL" ? <strong className="underline"> PostgreSQL </strong> : "PostgreSQL"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "Rest" ? <strong className="underline"> Rest </strong> : "Rest"},</span>
                            <span onClick={this.handleShowing}> {this.state.showing === "GraphQL" ? <strong className="underline"> GraphQL </strong> : "GraphQL"}</span>
                        </div>
                        <div className="hoverElement"><strong className="skillsCategory">Software:</strong> 
                            <span onClick={this.handleShowing}> {this.state.showing === "AWS" ? <strong className="underline"> AWS </strong> : "AWS"}</span>, 
                            <span onClick={this.handleShowing}> {this.state.showing === "Git" ? <strong className="underline"> Git </strong> : "Git"}</span>, 
                            <span onClick={this.handleShowing}> {this.state.showing === "Visual Studio" ? <strong className="underline"> Visual Studio </strong> : "Visual Studio"}</span>
                        </div>
                    </div>
                    {<InformationPage showing={this.state.showing}/>}
            </div>
        )
    }
    
}

export default LanguageList