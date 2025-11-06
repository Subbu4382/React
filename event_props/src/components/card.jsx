import { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div
        key={this.props.i}
        style={{
          width: "15rem",
          borderRadius: "5px",
          border: "2px solid skyblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img src={this.props.productData.image} width={150} height={150} />
        <p style={{ margin: 0, padding: "20px", color: "gray" }}>
          {this.props.productData.title}
        </p>
        <p style={{ margin: 0, color: "blue", fontSize: "20px" }}>
          {this.props.productData.price}
        </p>
        <button
          style={{
            margin: "10px",
            padding: "5px",
            color: "blue",
            backgroundColor: "lightblue",
            border: "None",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}
