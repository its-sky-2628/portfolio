import { useState } from "react";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [hovered, setHovered] = useState("");

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      style={{
        height: "75px",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "0 80px",

        background: "rgba(15,23,42,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",

        borderBottom: "1px solid rgba(255,255,255,0.08)",

        transition: "0.3s ease",
      }}
    >
      {/* Logo */}

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          letterSpacing: "2px",
          cursor: "pointer",
          color: "#ffffff",
          userSelect: "none",
        }}
      >
        SY
      </h2>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered("")}
            style={{
              color: hovered === item.name ? "#8b5cf6" : "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "0.3s",
              transform:
                hovered === item.name ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Resume Button */}

      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        download
        style={{
          textDecoration: "none",
        }}
      >
        <button
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.06)";
            e.target.style.boxShadow =
              "0 0 30px rgba(124,58,237,.55)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow =
              "0 10px 25px rgba(124,58,237,.25)";
          }}
          style={{
            padding: "12px 28px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",

            background:
              "linear-gradient(135deg,#7c3aed,#3b82f6)",

            color: "#fff",

            fontSize: "15px",

            fontWeight: "600",

            transition: ".3s",

            boxShadow:
              "0 10px 25px rgba(124,58,237,.25)",
          }}
        >
          Resume
        </button>
      </a>
    </nav>
  );
};

export default Navbar;