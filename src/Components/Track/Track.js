import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  renderAction() {
    // isRemoval ? (
    //   <button className="Track-action">+</button>
    // ) : (
    //   <button className="Track-action">-</button>
    // );
  }
  addTrack(event) {
    this.props.onAdd(this.props.track);
  }
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
  }
}
export default Track;
