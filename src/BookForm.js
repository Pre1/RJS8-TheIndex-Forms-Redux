import React, { Component } from "react";

import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";


class BookForm extends Component {
	state = {
		title: "",
		color: "",
	};

	submitAuthor = event => {
		event.preventDefault();
		this.props.postBook(
			this.state,
		 	this.props.author,
		 	this.props.closeModal
		);
	};

	textChangeHandler = event => {
		console.log(`${event.target.name} : ${event.target.value}`)
		this.setState({ [event.target.name]: event.target.value });


	};

	render() {
		const colors = [
			"blue",
			"grey",
			"white",
			"red",
			"yellow",
			"grey",
			"purple",
			"black",
			"green",
		].map((clr) => <option value={clr}> {clr} </option>)

		const errors = this.props.errors;
		return (
			<div className="mt-5 p-2">
				<form onSubmit={this.submitAuthor}>
					{!!errors.length && (
			            <div className="alert alert-danger" role="alert">
			              {errors.map(error => (
			                <p key={error}>{error}</p>
			              ))}
			            </div>
			         )}
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">Title</span>
						</div>

						{
							//INPUT 1
						}

						<input
							type="text"
							value={this.state.title}
							className="form-control"
							name="title"
							onChange={this.textChangeHandler}
						/>
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">Color</span>
						</div>

						{
							//INPUT 2
						}

						<select 
						className="form-control" 
						name="color"
						onChange={this.textChangeHandler}
						>	

							<option selected value=""> Choose Color </option>
							{colors}	

						</select>

					</div>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    errors: state.rootErrors.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, author, closeModal) =>
      dispatch(actionCreators.postBook(newBook, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);

