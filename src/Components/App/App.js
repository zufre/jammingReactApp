import React from "react";

import "./App.css";
import SearchResults from "./../SearchResults/SearchResults";
import SearchBar from "./../SearchBar/SearchBar";
import Playlist from "./../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "song1", artist: "singer1", album: "album1" },
        { name: "song2", artist: "singer2", album: "album2" },
        { name: "song3", artist: "singer3", album: "album3" }
      ],
      playlistName: "Playlist",
      playlistTracks: [
        { name: "song4", artist: "singer4", album: "album4", id: 4 },
        { name: "song5", artist: "singer5", album: "album5", id: 45 }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let newList = tracks.filter(savedTrack => {
      return savedTrack.id !== track.id;
    });
    this.setState({ playlistTracks: newList });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onAdd={this.addTrack} />
          <div className="App-playlist" />
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
          />
        </div>
      </div>
    );
  }
}

export default App;
