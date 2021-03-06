import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label, Toss, ImageUploader } from '../../common/Common';

import * as actions from './Actions';

class UpdateProfile extends Component {

	state = {
		email: "",
		display_name: ""
	}

	componentWillMount(){
		let profile = JSON.parse(sessionStorage.getItem('profile'));

		this.setState({
			...profile
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.display_name === "")
			return Toss({
				message: "Display name is required...",
				type: "warning"
			});
		
		this.props.saveProfile(this.state.id, {
			display_name: this.state.display_name
		})
	}

	handleChangePassword = () => {

	}

	handleChangeEmail = () => {

	}

	render(){
		return(
			<div className="login-wrapper text-center">
				<div className="login-container">
					<h2>Update Profile</h2>

					<div style={{display: "inline-block"}}>
						<ImageUploader />
					</div>

					<form onSubmit={this.handleSubmit}>
						<div className="form-group">

							<Label
								disabled
								label="Email"
								value={this.state.email} />

							<Label
								name="display_name"
								label="Display Name"
								onChange={this.handleChange}
								value={this.state.display_name} />

							<hr />
							<button className="btn btn-default btn-lg">Update</button>				
						</div>
					</form>
					{/*<div>
						<button className="btn btn-default" onClick={this.handleChangeEmail}>Change Email</button>	
					</div>
					<div>
						<button className="btn btn-default" onClick={this.handleChangePassword}>Change Password</button>	
					</div>*/}
				</div>
			</div>
		)
	}
}

export default connect(
	state => {
		return{

		}
	},
	actions
)(UpdateProfile);