import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SignupForm() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup({ username, email, password });
    if (res.message) {
      setError(res.message);
    }
  };

  return (
    <div className="signup-form">
      <h2>Регистрация</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Vartotojo vardas" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Slaptažodis" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
