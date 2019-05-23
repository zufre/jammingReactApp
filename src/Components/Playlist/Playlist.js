import React, { Component } from "react";
import TrackList from "./../TrackList/TrackList";
class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div>
        <div className="Playlist">
          <input
            defaultValue={this.props.name}
            onChange={this.handleNameChange}
          />
          <TrackList
            tracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
            isRemoval={true}
          />
          <button onClick={this.props.onSave} className="Playlist-save">
            SAVE TO SPOTIFY
          </button>
        </div>
      </div>
    );
  }
}
export default Playlist;
