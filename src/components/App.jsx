import React from "react";
import Slider from "react-slick";
import Day from "./Date";
import { relative } from "path";
import TimePicker from "./ApointmentTime";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      month: null,
      selected: null,
      datesByMonth: [],
      appointmentsByMonth: this.props.schedule
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let days = [];
    for (var i = 0; i <= 11; i++) {
      let month = date.getMonth() + i;
      let daysInMonth = new Date(year, month, 0).getDate();
      for (var j = 0; j <= daysInMonth; j++) {
        days.push(new Date(year, month, j));
      }
    }
    let datesByMonth = [];
    for (var k = 0; k < days.length; k++) {
      if (days[k].getMonth() === month) {
        datesByMonth.push([days[k], false]);
      }
    }
    this.setState({ dates: days, month, datesByMonth });
  }

  onSelect(e) {
    let index = Number(e.target.id);
    let dates = this.state.datesByMonth.slice();
    dates.forEach(el => (el[1] = false));
    dates[index][1] = !dates[index][1];
    this.setState({ datesByMonth: dates, selected: index });
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
      <div
        style={{ textAlign: "center", marginBottom: 5 }}
        className="mainWrapper"
      >
        <h1>{months[this.state.month]}</h1>
        <br />
        <div
          style={{
            position: "absolute",
            width: 651,
            left: "50%",
            transform: "translate(-50%)",
            marginTop: -20,
            marginBottom: 25
          }}
        >
          <Slider {...settings}>
            {this.state.datesByMonth.map((el, i) => {
              return (
                <Day
                  value={el[1]}
                  key={i}
                  date={el[0]}
                  index={i}
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
                    el.date.getHours() < 17 ? (
                    <TimePicker key={i} date={el} />
                  ) : null;
                })
              : "No Appointments Found"}
          </div>
          <h3>Evening:</h3>
          <div className="timeswrapper">
            {this.state.selected
              ? this.state.appointmentsByMonth.map((el, i) => {
                  return el.date.getDate() === this.state.selected &&
                    el.date.getHours() >= 17 ? (
                    <TimePicker key={i} date={el} />
                  ) : null;
                })
              : "No Appointments Found"}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
