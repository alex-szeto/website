import React, {Component, Fragment} from 'react'

class LanguageList extends Component {

    render(){
        return(
            <div style={{height: 12}}><br/>{this.props.show &&
                <Fragment>
                    <div className="hoverElement"><strong class="underline">Languages:</strong> Javascript, Ruby, Python</div>
                    <div className="hoverElement"><strong class="underline">Frameworks Libraries:</strong> React/Redux, Node, Express, jQuery, Mocha, Chai, Jest, Bootstrap, Mongoose</div>
                    <div className="hoverElement"><strong class="underline">Databases Middleware:</strong> MongoDB, PostgreSQL, Rest, GraphQL</div>
                    <div className="hoverElement"><strong class="underline">Software:</strong> AWS, Git, Visual Studio</div>
                </Fragment>
            }</div>
        )
    }

}

export default LanguageList