import React from "react";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: this.props.appointment,
    };
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
  }
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value
    this.state.appointment[name] = value;
  }
  render() {
    return (
      <div className="userForm">
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <button onClick={this.props.back}>Back</button>
          <button onClick={() => this.props.submit(this.state)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
