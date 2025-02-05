import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose }) {
  const { login, signup } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const credentials = { email, password };
    if (!isLogin) credentials.username = username; 

    const response = isLogin ? await login(credentials) : await signup(credentials);
    
    if (response.message) {
      setError(response.message);
    } else {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isLogin ? "Login" : "Registration"}</h2>
        
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">{isLogin ? "Sign in" : "Sign up"}</button>
        </form>

        <p className="toggle-auth">
          {isLogin ? "No account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create an account" : "Sign in"}</button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
