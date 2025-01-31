import React from "react";
import { useLocation } from "react-router-dom"; // ✅ Импортируем useLocation
import "./TicketPage.css";

const TicketPage = () => {
  const location = useLocation();
  const ticket = location.state?.ticket; // ✅ Получаем билет из navigate()

  if (!ticket || Object.keys(ticket).length === 0) {
    return <h2 className="error-message">No ticket found.</h2>;
  }

  return (
    <div className="ticket-page">
      <div className="background-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>

      <div className="content">
        <div className="header">
          <div className="logo">
            <div className="logo-square"></div>
            <span>Coding Conf</span>
          </div>

          <div className="title">
            <h1>Congrats, <span>{ticket.full_name || "Unknown"}</span>!</h1>
            <h2>Your ticket is ready.</h2>
            <p>
              We've emailed your ticket to{" "}
              <span>{ticket.email || "No email provided"}</span> and will send updates in
              the run up to the event.
            </p>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-notch"></div>
          
          <div className="ticket-header">
            <div className="ticket-logo">
              <div className="ticket-logo-square"></div>
              <span>Coding Conf</span>
            </div>
            <div className="ticket-date">Jan 31, 2025 / Austin, TX</div>
          </div>

          <div className="ticket-content">
            <div className="profile-image">
              <img 
                src={ticket.avatar_url || "https://via.placeholder.com/100"} 
                alt="Profile" 
              />
            </div>
            <div className="profile-info">
              <h3>{ticket.full_name || "Unknown"}</h3>
              <div className="username">
                <span className="at-symbol">@</span>
                <span>{ticket.github_username || "@unknown"}</span>
              </div>
            </div>
          </div>

          <div className="ticket-number">#60910H</div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
