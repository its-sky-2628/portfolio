import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Successful 🚀");
      window.location.href = "/admin";
    } catch {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#111827)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(139,92,246,.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Welcome 👋
        </h1>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Portfolio Admin Login
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #374151",
            background: "#1f2937",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #374151",
            background: "#1f2937",
            color: "white",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background:
              "linear-gradient(90deg,#8b5cf6,#06b6d4)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Login;