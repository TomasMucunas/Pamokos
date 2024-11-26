import React from "react";
import { useParams, Link } from "react-router-dom";
import songs from "../data/songs.json";

function SongInfo() {
  const { id } = useParams();
  const song = songs.find((song) => song.id === parseInt(id));

  if (!song) {
    return (
      <div>
        <h2>Song Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default SongInfo;
