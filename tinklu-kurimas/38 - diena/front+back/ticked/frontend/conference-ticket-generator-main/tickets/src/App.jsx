import React, { useState, useEffect } from "react";
import "./App.css";
import uploadIcon from "./assets/images/icon-upload.svg";
import infoIcon from "./assets/images/icon-info.svg";

const style = document.createElement("style");
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');
`;
document.head.append(style);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Исправляем бесконечный рендер
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

    const ticketData = {
      fullName: name,
      email: email,
      githubUsername: github,
      avatarUrl: avatar,
    };

    console.log("Отправляемые данные:", ticketData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tickets/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create ticket");
      }

      const data = await response.json();
      console.log("Тикет создан:", data);
      setTicketGenerated(true);
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, form: error.message }));
      console.error("Ошибка при создании тикета:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Выбранный файл:", file);

    // Проверка размера файла
    if (file.size > 500 * 1024) {
        setErrors((prevErrors) => ({ ...prevErrors, avatar: "File too large. Upload under 500KB." }));
        return;
    }

    // Проверка формата файла
    if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrors((prevErrors) => ({ ...prevErrors, avatar: "Invalid format. Upload JPG or PNG only." }));
        return;
    }

    // Проверка наличия API URL
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
        console.error("Ошибка: VITE_API_URL не определён в .env");
        setErrors((prevErrors) => ({ ...prevErrors, avatar: "Internal error: API URL missing" }));
        return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    console.log("Отправка файла на сервер:", `${apiUrl}/upload`);

    try {
        const response = await fetch(`${apiUrl}/upload`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Файл загружен, URL:", data.url);

        // Проверка валидности URL и его корректировка
        let imageUrl = data.url;
        if (!imageUrl.startsWith("http")) {
            imageUrl = `${apiUrl.replace("/api", "")}${data.url}`;
        }

        setAvatar(imageUrl);
    } catch (error) {
        console.error("Ошибка загрузки изображения:", error);
        setErrors((prevErrors) => ({ ...prevErrors, avatar: error.message || "Upload failed" }));
    } finally {
        setLoading(false);
    }
};


  const handleRemoveImage = () => {
    setAvatar(null);
  };

  return (
    <div className="container">
      {!ticketGenerated ? (
        <form onSubmit={handleSubmit}>
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p>Secure your spot at next year's biggest coding conference.</p>

          <h3>Upload Avatar</h3>
          <div className={`upload-box ${errors.avatar ? "error-border" : ""}`}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="avatarInput"
              hidden
            />
            <label htmlFor="avatarInput" className="upload-label">
              {loading ? (
                <span>Loading...</span>
              ) : avatar ? (
                <div className="avatar-container">
                  <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
                  <div className="avatar-buttons">
                    <button type="button" className="remove-btn" onClick={handleRemoveImage}>
                      Remove image
                    </button>
                    <label htmlFor="avatarInput" className="change-btn">
                      Change image
                    </label>
                  </div>
                </div>
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label>GitHub Username</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
            placeholder="@yourusername"
            className={errors.github ? "input-error" : ""}
          />
          {errors.github && <p className="error-message">{errors.github}</p>}

          <button type="submit">Generate My Ticket</button>
        </form>
      ) : (
        <div className="ticket">
          <h2>Congrats, {name}!</h2>
          <p>Your ticket is ready.</p>
          <p>We've emailed your ticket to {email}.</p>
          {avatar && <img src={avatar} alt="Uploaded Avatar" className="ticket-avatar" />}
        </div>
      )}
    </div>
  );
}

export default App;
