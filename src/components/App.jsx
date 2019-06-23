import React from "react";
import Slider from "react-slick";
import Day from "./Date";
import { relative } from "path";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      month: null
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    let date = new Date();
    let now = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();
    let daysInMonth = new Date(year, month, 0).getDate();
    let days = [];
    for (var i = now; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    this.setState({ dates: days, month });
  }

  onSelect(e) {
    let index = Number(e.target.className);
    console.log(this.state.dates[index])
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      arrows: true
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
      <div style={{ textAlign: "center" }} className="mainWrapper">
        <h1>{months[this.state.month]}</h1>
        <br />
        <div
          style={{
            position: 'absolute',
            width: '34%',
            left: "50%",
            transform: "translate(-50%)"
          }}
        >
          <Slider {...settings}>
            {this.state.dates.map((el, i) => {
              return <Day key={i} date={el} index={i} click={this.onSelect}/>;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
