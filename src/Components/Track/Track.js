import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction() {
    return this.props.isRemoval ? (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    ) : (
      <button className="Track-action" onClick={this.removeTrack}>
        -
      </button>
    );
  }
  addTrack(event) {
    this.props.onAdd(this.props.track);
  }
  removeTrack(event) {
    this.props.onRemove(this.props.track);
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
