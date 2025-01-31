import React, { useState, useEffect } from "react";
import "./App.css";
import uploadIcon from "./assets/images/icon-upload.svg";

const style = document.createElement("style");
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');
`;
document.head.append(style);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketData, setTicketData] = useState(null); // Храним созданный билет
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!avatar) {
      setErrors((prevErrors) => ({ ...prevErrors, avatar: "Upload an image first!" }));
    }
  }, [avatar]);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Full Name is required.";
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Please enter a valid email address.";
    if (!github.trim()) newErrors.github = "GitHub Username is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ticketInfo = {
      fullName: name,
      email: email,
      githubUsername: github,
      avatarUrl: avatar,
    };

    console.log("Отправляемые данные:", ticketInfo);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketInfo),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create ticket");
      }

      const data = await response.json();
      console.log("✅ Тикет создан:", data);
      
      setTicketData(data.data); // Сохраняем билет
      setTicketGenerated(true); // Показываем билет
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, form: error.message }));
      console.error("❌ Ошибка при создании тикета:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("📂 Выбранный файл:", file);

    if (file.size > 500 * 1024) {
      setErrors((prevErrors) => ({ ...prevErrors, avatar: "File too large. Upload under 500KB." }));
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      setErrors((prevErrors) => ({ ...prevErrors, avatar: "Invalid format. Upload JPG or PNG only." }));
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      console.error("❌ Ошибка: VITE_API_URL не определён в .env");
      setErrors((prevErrors) => ({ ...prevErrors, avatar: "Internal error: API URL missing" }));
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const uploadUrl = `${apiUrl}/api/tickets/upload`;
    console.log("📤 Отправка файла на сервер:", uploadUrl);

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed (${response.status})`);
      }

      const data = await response.json();
      console.log("✅ Файл загружен, URL:", data.url);

      setAvatar(data.url);
      setErrors((prevErrors) => ({ ...prevErrors, avatar: "" }));
    } catch (error) {
      console.error("❌ Ошибка загрузки изображения:", error.message);
      setErrors((prevErrors) => ({ ...prevErrors, avatar: error.message || "Upload failed" }));
    } finally {
      setLoading(false);
    }
  };

  if (ticketGenerated && ticketData && Object.keys(ticketData).length > 0) {
    return (
      <div className="ticket-container">
        <h1>Congrats, {ticketData.full_name || "Guest"}!</h1>
        <p>Your ticket is ready.</p>
        <p>We've emailed your ticket to {ticketData.email || "your email"}.</p>
        
        <div className="ticket">
          <h2>Coding Conf</h2>
          <p>Jan 31, 2025 / Austin, TX</p>
          
          {ticketData.avatar_url ? (
            <img src={ticketData.avatar_url} alt="User Avatar" className="ticket-avatar" />
          ) : (
            <p>No Avatar Uploaded</p>
          )}
          
          <p>{ticketData.full_name || "No Name"}</p>
          <p>{ticketData.github_username || "@unknown"}</p>
        </div>
      </div>
    );
  }
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>

        <h3>Upload Avatar</h3>
        <div className={`upload-box ${errors.avatar ? "error-border" : ""}`}>
          <input type="file" accept="image/*" onChange={handleImageUpload} id="avatarInput" hidden />
          <label htmlFor="avatarInput" className="upload-label">
            {loading ? (
              <span>Loading...</span>
            ) : avatar ? (
              <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
            ) : (
              <>
                <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
                Drag and drop or click to upload
              </>
            )}
          </label>
        </div>
        {errors.avatar && <p className="error-message">{errors.avatar}</p>}

        <label>Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" className={errors.name ? "input-error" : ""} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="example@email.com" className={errors.email ? "input-error" : ""} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>GitHub Username</label>
        <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} required placeholder="@yourusername" className={errors.github ? "input-error" : ""} />
        {errors.github && <p className="error-message">{errors.github}</p>}

        <button type="submit">Generate My Ticket</button>
      </form>
    </div>
  );
}

export default App;
