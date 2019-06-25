import React from "react";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: this.props.appointment
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.state.appointment[name] = value;
  }
  render() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className="userForm">
          <p className="formLabel">Appointment Date</p>
        <div className="formData">
          {days[this.state.appointment.date.getDay()]}, {months[this.state.appointment.date.getMonth()]} {this.state.appointment.date.getDate()}
        </div>
        <p className="formLabel">Appointment Time</p>
        <div className="formData">
          {this.state.appointment.date.getHours()}:{this.state.appointment.date.getMinutes()}0
        </div>
        <form>
          <input
            className="formInput"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            className="formInput"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            className="formInput"
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <br />
          <button className="formButton" onClick={this.props.back}>
            Back
          </button>
          <br />
          <button
            className="formButton"
            onClick={() => this.props.submit(this.state)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
