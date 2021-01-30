import React, { Component } from 'react';

class form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : '',

        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handlerCommentChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }
    handlerTopicChange =(event) => {
        this.setState({
            topic : event.target.value
        })
    }
    handlerSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label style={{padding:"10px",justifyContent:"left"}}>Username</label>
                    <input style={{padding:"10px",justifyContent:"left"}}type="text" 
                        value={this.state.username} 
                        onChange = {this.handleUsernameChange}
                        placeholder="UserName"/>
                </div>

                <div>
                    <label htmlFor="" style={{padding:"10 2em",justifyContent:"right"}}>Comments</label>
                    <textarea value={this.state.comments}
                        onChange={this.handlerCommentChange}/>
                </div>

                <div>
                    <label>Topic</label>
                    <select value= {this.state.topic} onChange={this.handlerTopicChange}>
                        <option value="react">react</option>
                        <option value="vue">vue</option>
                        <option value="angular">angular</option>
                    </select>
                </div>

                {/* Submit button */}

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default form;
