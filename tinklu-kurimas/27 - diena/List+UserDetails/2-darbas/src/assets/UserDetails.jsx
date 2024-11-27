import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetails.css";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="user-details">
      <img src={user.avatar_url} alt={user.login} className="user-avatar-large" />
      <h2>{user.login}</h2>
      <p>
        <strong>Name:</strong> {user.name || "N/A"}
      </p>
      <p>
        <strong>Company:</strong> {user.company || "N/A"}
      </p>
      <p>
        <strong>Location:</strong> {user.location || "N/A"}
      </p>
      <Link to="/" className="back-button">
        Back to List
      </Link>
    </div>
  );
}

export default UserDetails;
