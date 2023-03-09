import React, { Component } from "react";

class Contact extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.name}. Thanks for contacting me. I will be in touch with you soon.`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      
      <div className="container">
        <h1 className="display-1 text-center">Contact</h1>
        <div className="row">
          <div className="col-sm">
            <p>Github: <a href="https://github.com/nrprabhav">nrprabhav</a>     </p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/prabhav-n-r-7748b19/">Prabhav Reddy</a></p>
            <p>Email: prabhav@gmail.com</p>
            <p>Phone: +44-9994514817</p>
          </div>
          <div className="col-sm">
            <p>
              Please fill this form and I will be in contact as soon as possible.
            </p>
            <form className="form">
              <div className="form-group">
                <label>Name:</label>
                <input className="form-control"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input className="form-control"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="email@xyz.abc"
                />
              </div>
              <div className="form=group">
                <label>Message:</label>
                <textarea className="form-control"
                  value={this.state.message}
                  name="message"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Please type your message here."
                  rows={3}
                />
              </div>
              <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
