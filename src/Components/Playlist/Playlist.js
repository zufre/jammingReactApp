import React, { Component } from "react";
// import TrackList from "./../TrackList/TrackList";
class Playlist extends Component {
  render() {
    return (
      <div>
        <div className="Playlist">
          <input defaultValue={"New Playlist"} />
          {/* <TrackList /> */}
          <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      </div>
    );
  }
}
export default Playlist;
