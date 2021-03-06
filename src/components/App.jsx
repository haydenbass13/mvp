import "@babel/polyfill";
import React from "react";
import Slider from "react-slick";
import Day from "./Date";
import { relative } from "path";
import TimePicker from "./ApointmentTime";
import axios from "axios";
import PersonalInfo from "./Info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      month: null,
      selected: null,
      datesByMonth: [],
      appointmentsByMonth: this.props.schedule,
      selectedTime: null
    };
    this.onSelect = this.onSelect.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.back = this.back.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let days = [];
    for (var i = 0; i <= 11; i++) {
      let month = date.getMonth() + i;
      let daysInMonth = new Date(year, month + 1, 0).getDate();
      for (var j = 0; j < daysInMonth; j++) {
        days.push(new Date(year, month, j));
      }
    }
    let datesByMonth = [];
    for (var k = 0; k < days.length; k++) {
      if (days[k].getMonth() === month) {
        datesByMonth.push([days[k], false]);
      }
    }
    datesByMonth[new Date().getDate() - 1][1] = true;
    this.setState({
      dates: days,
      month,
      datesByMonth,
      selected: new Date().getDate() - 1
    });
  }

  onSelect(e) {
    let index = Number(e.target.id) - 1;
    let dates = this.state.datesByMonth.slice();
    dates.forEach(el => (el[1] = false));
    dates[index][1] = !dates[index][1];
    this.setState({ datesByMonth: dates, selected: index + 1 });
  }

  selectTime(time) {
    console.log(time);
    this.setState({ selectedTime: time });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState && this.state.month !== prevState.month || !this.state.appointmentsByMonth.length) {
      let datesByMonth = [];
      let days = this.state.dates;
      let month = this.state.month;
      for (var k = 0; k < days.length; k++) {
        if (days[k].getMonth() === month) {
          datesByMonth.push([days[k], false]);
        }
      }
      let selected = new Date().getDate();
      let self = this;
      axios({
        method: "GET",
        url: `/${month}`,
        responseType: "json"
      }).then(function(res) {
        res.data.forEach(el => {
          return (el.date = new Date(el.date));
        });
        datesByMonth[new Date().getDate() - 1][1] = true;
        self.setState({
          datesByMonth,
          selected,
          appointmentsByMonth: res.data
        });
      });
    }
  }
  back() {
    event.preventDefault();
    this.setState({selectedTime: null})
  }
  submit(state) {
    event.preventDefault();
    axios({
      method: 'PUT',
      url: '/',
      data: state
    })
    this.setState({selectedTime: null, appointmentsByMonth: [] })

  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      arrows: true,
      initialSlide: new Date().getDate() - 1
    };
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

    return (
      <div className="mainWrapper">
        {this.state.selectedTime ? <PersonalInfo back={this.back} submit={this.submit} appointment={this.state.selectedTime}/> : 
        (<div>
        <div id="monthSelector">
          {this.state.month !== new Date().getMonth() ? (
            <button
              style={{ display: "inline" }}
              id="monthPrev"
              className="month"
              onClick={() => this.setState({ month: this.state.month - 1 })}
            />
          ) : null}
          <h1 style={{ display: "inline" }}> {months[this.state.month]} </h1>
          <button
            style={{ display: "inline" }}
            id="monthNext"
            className="month"
            onClick={() => this.setState({ month: this.state.month + 1 })}
          />
        </div>
        <br />
        <div
          style={{
            position: "absolute",
            width: 651,
            left: "50%",
            transform: "translate(-50%)",
            marginTop: -20,
            marginBottom: 25,
            textAlign: "center",
            marginBottom: 5
          }}
        >
          <Slider {...settings}>
            {this.state.datesByMonth.map((el, i) => {
              return (
                <Day
                  value={el[1]}
                  key={i}
                  date={el[0]}
                  index={i + 1}
                  click={this.onSelect}
                />
              );
            })}
          </Slider>
          <h3 style={{ alignSelf: "left" }}>Afternoon:</h3>
          <div className="timeswrapper">
            {this.state.selected
              ? this.state.appointmentsByMonth.map((el, i) => {
                  return el.date.getDate() === this.state.selected &&
                    el.date.getHours() < 17 &&
                    !el.booked ? (
                    <TimePicker key={i} date={el} select={this.selectTime} />
                  ) : null;
                })
              : "No Appointments Found"}
          </div>
          <h3>Evening:</h3>
          <div className="timeswrapper">
            {this.state.selected
              ? this.state.appointmentsByMonth.map((el, i) => {
                  return el.date.getDate() === this.state.selected &&
                    el.date.getHours() >= 17 &&
                    !el.booked ? (
                    <TimePicker key={i} date={el} select={this.selectTime} />
                  ) : null;
                })
              : "No Appointments Found"}
          </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default App;
