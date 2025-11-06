import { Component } from "react";

export class Studentid extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "18rem",
          height: "22rem",
          borderRadius: "5%",
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0,padding:10 }} >Student ID</h2>
        <h4 style={{ margin: 0,padding:10 }}>2021-2025</h4>
        <img
          src={this.props.imgUrl}
          style={{ borderRadius: 10, width: 150, height: 150 }}
        />
        <h4 style={{ margin: 0,padding:10 }}>{this.props.name}</h4>
        <h4 style={{ margin: 0,padding:10 }}>{this.props.class}</h4>
        <h4 style={{ margin: 0 }}>{this.props.rollNo}</h4>
      </div>
    );
  }
}
