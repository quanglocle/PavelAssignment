import React, { Component } from 'react';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import FaPencil from 'react-icons/lib/fa/pencil';
//import FaTrash from 'react-icons/lib/fa/trash';
//import FaFloppyO from 'react-icons/lib/fa/floppy-o';



class Node extends Component { 
	constructor(props) {
		super(props)
		this.state = {
			users: [{
				firstName: "", lastName: "", email:"", phone: "", 
				street_address: "", post_code: "", country:""
			}]
		};
		this.submit = this.submit.bind(this)
//		this.renderForm = this.renderForm.bind(this, i)
	//	this.renderDisplay = this.renderDisplay.bind(this)
	}
	
	addClick(){
		this.setState(prevState => ({ 
			users: [...prevState.users, { 
				firstName: "", lastName: "", email: "", phone: "", 
				street_address: "", post_code: "", country:"" }]
		}));
	  }

	handleChange(i, e) {
		const { name, value } = e.target;
		let users = [...this.state.users];
		users[i] = {...users[i], [name]: value};
		this.setState({ users});
	}	

	remove(i){
		let users = [...this.state.users];
		users.splice(i, 1);
		this.setState({ users });
	}

	submit(event) {
		alert('The detail of this person was saved as below:' + JSON.stringify(this.state.users, undefined, ' '));
		event.preventDefault();
		console.log('```json');
		console.log(JSON.stringify(this.state.users, undefined, '\t'));
		console.log('```');
	}

	renderDisplay() {
		return this.state.users.map((el, i) => (
			<div key={i}>
			<p>Tell us about yourself</p>
				<input placeholder="First Name" name="firstName" type="text"  value={el.firstName ||''} 
					onChange={this.handleChange.bind(this, i)} />

				<input placeholder="Last Name" name="lastName" type="text" value={el.lastName ||''} 
					onChange={this.handleChange.bind(this, i)} />

				<input placeholder="Email" name="email" type="text" value={el.email ||''} 
					onChange={this.handleChange.bind(this, i)} />
				<input placeholder="Phone Number" name="phone" type="text" value={el.phone ||''} 
					onChange={this.handleChange.bind(this, i)} />
			<p>Where do you live?</p>
				<input placeholder="Street Address" name="street_address" type="text" value={el.street_address ||''} 
					onChange={this.handleChange.bind(this, i)} />

				<input placeholder="Post Code" name="post_code" type="text" value={el.post_code} 
					onChange={this.handleChange.bind(this, i)} />

				<select placeholder="Country" name="country" type="dropdown"  value={el.country} 
					onChange={this.handleChange.bind(this, i)} >
						<option value="NaN" >-- Select your country --</option>
					  	<option value="Canada">Canada</option>
  						<option value="USA">USA</option>	
				</select>   

				<input type='button' value='Remove' onClick={this.remove.bind(this, i)}/>
			</div>
		))
	}

//	const options = [
//		{ value: 'Canada', label: 'Canada' },
//		{ value: 'USA', label: 'USA' }
//	];

	render() {
		
		return(
		<div className="node">
		<form onSubmit= {this.submit}>
			{this.renderDisplay()}        
			<input type='button' value='Add More' onClick={this.addClick.bind(this)}/>
			<input type='submit' value='Submit'/>
		</form>
		</div>
	);
	}

}
//	<button onClick={this.save}>Save</button>
export default Node