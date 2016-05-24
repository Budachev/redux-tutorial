import React, { Component } from 'react';

export default class CommentBox extends Component {
	constructor(props){
		super(props);

		this.state = { comment: '' };
	}

	onHandleChange(event){
		this.setState({ comment: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({ comment: '' });
	}

	render(){
		return (
			<form className="comment-box"
				onSubmit={this.handleSubmit.bind(this)}>
				<textarea value={this.state.comment} onChange={this.onHandleChange.bind(this)} />
				<button action="submit">Submit Comment</button>
			</form>
		)
	}
}
