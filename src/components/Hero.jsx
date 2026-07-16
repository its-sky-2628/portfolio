import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 10%",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        gap: "70px",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "#7c3aed",
          filter: "blur(180px)",
          opacity: ".15",
          top: "-120px",
          left: "-120px",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: ".15",
          bottom: "-150px",
          right: "-100px",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      />

      {/* Left Side */}

      <div
        style={{
          flex: 1,
          maxWidth: "650px",
        }}
      >
        <p
          style={{
            color: "#a78bfa",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "15px",
            letterSpacing: "1px",
          }}
        >
          HI, I'M
        </p>

        <h1
          style={{
            fontSize: "68px",
            lineHeight: "78px",
            marginBottom: "15px",
            fontWeight: "800",
          }}
        >
          Shreyansh
          <br />
          Yadav
        </h1>

        <h2
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          Software Engineer & Full Stack Developer
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: "32px",
            maxWidth: "600px",
          }}
        >
          I build responsive and scalable web applications using the MERN
          stack. Currently pursuing B.Tech in Computer Science (Data Science)
          and continuously improving my skills by building real-world projects.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects">
            <button
              style={{
                padding: "14px 30px",
                border: "none",
                borderRadius: "12px",
                background: "#8b5cf6",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                transition: ".3s",
                boxShadow: "0 10px 25px rgba(139,92,246,.35)",
              }}
            >
              View Projects
            </button>
          </a>

          <a href={resume} download target="_blank" rel="noreferrer">
            <button
              style={{
                padding: "14px 30px",
                borderRadius: "12px",
                background: "transparent",
                border: "1px solid #475569",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>

        {/* Social */}

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "35px",
          }}
        >
          <a
            href="https://github.com/its-sky-2628"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/shreyansh-yadav-2b7856351/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            LinkedIn →
          </a>
        </div>

        {/* Stats */}

        <div
          style={{
            display: "flex",
            gap: "50px",
            marginTop: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#8b5cf6",
                fontSize: "32px",
              }}
            >
              5+
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Projects
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#8b5cf6",
                fontSize: "32px",
              }}
            >
              MERN
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Tech Stack
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#8b5cf6",
                fontSize: "32px",
              }}
            >
              8.6+
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              CGPA
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={profile}
          alt="Shreyansh"
          style={{
            width: "360px",
            height: "450px",
            objectFit: "cover",
            borderRadius: "25px",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 20px 50px rgba(139,92,246,.25)",
            transition: ".3s",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;