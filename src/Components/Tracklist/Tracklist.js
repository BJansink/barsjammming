import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

class Tracklist extends React.Component {
  render() {
    console.log(this.props.tracks);
    if (!this.props.tracks) {
      return null;
    }
    return (
      <div className="TrackList">
        {" "}
        {this.props.tracks?.map((track) => {
          if (!track.id) {
            return null;
          }

          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default Tracklist;
