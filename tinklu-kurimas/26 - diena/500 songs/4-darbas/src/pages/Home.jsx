import React from "react";
import { Link } from "react-router-dom";
import { songs } from "../data/songs";

function Home() {
  return (
    <div>
      <h1>Rolling Stones 500 Greatest Songs of All Time</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/song/${song.id}`}>{song.title}</Link> by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
