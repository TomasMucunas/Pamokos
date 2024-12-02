import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <h3>{user.login}</h3>
          <Link to={`/users/${user.id}`} className="view-details">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
