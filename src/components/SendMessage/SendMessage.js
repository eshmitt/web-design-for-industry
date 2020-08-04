import React, { Component } from 'react';
import { render } from 'react-dom';


class SendMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>Message</h1>
            </div>
        )
    }
//     constructor() {
//         super();
//         this.state = {
//             message: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         });
//     } 

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.sendMessage(this.state.message);
//         this.setState;({
//             message: ''
//         })
//     }

//     render() {
//         return (
//             <form className="send-message-form" onSubmit={this.handleSubmit}>
//                 <input
//                     placeholder="Type Message and then hit Enter"
//                     type="text"
//                     onChange={this.handleChange}
//                     value={this.state.message}
//                     disabled={this.props.disabled}
//                 />
//             </form>
//         )
//     }
}

export default SendMessage;