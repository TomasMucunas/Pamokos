import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div className="success">
      <h1>Registration Successful!</h1>
      <p>Thank you for registering!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default SuccessPage;
