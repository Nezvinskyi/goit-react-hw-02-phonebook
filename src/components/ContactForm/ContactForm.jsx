import React, { Component } from 'react';
import './ContactForm.scss'

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handleChange = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
	};
	
	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.reset();
	};
	
	reset = () => {
		this.setState({ name: '', number: '' });
	};

	render() {

		return (
			<form onSubmit={this.handleSubmit }>
				<label>
					Name
					<br/>
					<input
						type="text"
						value={this.state.name}
						name='name'
						required
						onChange={this.handleChange}
					/>
				</label>
				<br/>
				<label>
					Number
					<br/>
					<input
						type="text"
						value={this.state.number}
						name='number'
						required
						onChange={this.handleChange}
					/>
				</label>
				<br/>

				<button type="submit">Add contact</button>
			</form>
		 );
	};
};
 
export default ContactForm;