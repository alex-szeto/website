import React, {Component} from "react"


class InformationPage extends Component{
    handleShowing = (param) => {
        switch(param){
            case "JavaScript":
                return <div className="project">Javascript</div>
            case "Ruby":
                return <div className="project">Ruby</div>
            case "Python":
                return <div className="project">Python</div>
            case "React":
                return <div className="project">React</div>
            case "Redux":
                return <div className="project">Redux</div>
            case "Node":
                return <div className="project">Node</div>
            case "Express":
                return <div className="project">Express</div>
            case "jQuery":
                return <div className="project">jQuery</div>
            case "Mocha":
                return <div className="project">Mocha</div>
            case "Chai":
                return <div className="project">Chai</div>
            case "Jest":
                return <div className="project">Jest</div>
            case "Mongoose":
                return <div className="project">Mongoose</div>
            case "MongoDB":
                return <div className="project">MongoDB</div>
            case "PostgreSQL":
                return <div className="project">PostgreSQL</div>
            case "Rest":
                return <div className="project">Rest</div>
            case "GraphQL":
                return <div className="project">GraphQL</div>
            case "AWS":
                return <div className="project">
                        <div><strong>Amazon Web Services</strong></div>
                        <div> Used To Host Web Content</div><br/>
                        <div>Project: This Website</div>
                    </div>
            case "Git":
                return <div className="project">Git</div>
            case "Visual Studio":
                return <div className="project">Visual Studio</div>    
        }

        return <div>{param}</div>
    }

    render(){
        return(
            <div>{this.handleShowing(this.props.showing)}</div>
        )
    }

}


export default InformationPage