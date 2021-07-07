import "./styles.css";
import Chess from "./chess.js";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // color2: true,
      k: 8,
      changeColor1: "white",
      changeColor2: "black"
    };
  }

  changeColor() {
    this.setState({ k: 12 });
    this.setState({ changeColor1: "yellowButton" });
    this.setState({ changeColor2: "redButton" });
  }

  reset() {
    this.setState({ k: 8 });
    this.setState({ changeColor1: "white" });
    this.setState({ changeColor2: "black" });
  }

  boxes(i, color) {
    return <Chess shade={color} />;
  }

  render() {
    const chess = [];
    const row = [];
    let i,
      j,
      k = this.state.k;
    let changeColor1 = this.state.changeColor1;
    let changeColor2 = this.state.changeColor2;
    for (i = 0; i < k; i++) {
      for (j = 0; j < k; j++) {
        const color =
          (!Even(i) && !Even(j)) || (Even(i) && Even(j))
            ? changeColor1
            : changeColor2;
        chess.push(this.boxes([i * k] + j, color));
      }
      chess.push(<div className="row">{row}</div>);
    }
    console.log({ chess });
    return (
      <div id="main">
        {chess}
        <div id="buttonDiv">
          <button className="change_btn" onClick={this.changeColor.bind(this)}>
            12x12
          </button>
          <button className="change_btn2" onClick={this.reset.bind(this)}>
            8x8
          </button>
        </div>
      </div>
    );
  }
}

function Even(n) {
  return n % 2 === 0;
}
