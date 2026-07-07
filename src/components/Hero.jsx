import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        color: "white",
        padding: "80px",
      }}
    >
      <img
        src={profile}
        alt="Shreyansh"
        style={{
          width: "280px",
          height: "350px",
          objectFit: "cover",
          borderRadius: "20px",
          border: "3px solid #000",
        }}
      />

      <div style={{ maxWidth: "650px" }}>
        <h1
  style={{
    fontSize: "60px",
    marginBottom: "15px",
  }}
>
  Shreyansh Yadav
</h1>

<h2
  style={{
    color: "yellow",
    marginBottom: "20px",
  }}
>
  Software Engineer
</h2>

<p
  style={{
    fontSize: "22px",
    fontWeight: "600",
    color: "white",
  }}
>
  Crafting fast, scalable web applications.
</p>

<p
  style={{
    color: "#94a3b8",
    marginTop: "15px",
    lineHeight: "30px",
    maxWidth: "600px",
  }}
>
  Focused on performance, clean architecture,
  and seamless user experiences.
</p>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "20px",
          }}
        >
          Full Stack Developer | Data Science Student
        </p>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "20px",
            lineHeight: "30px",
          }}
        >
          Passionate about building modern web applications
          using React.js, Node.js, Express.js, MongoDB and Python.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <a
            href="https://github.com/its-sky-2628"
            target="_blank"
          >
            <button
            style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#8b5cf6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
  }}
>
  GitHub
</button>
          </a>

          <a
            href="https://www.linkedin.com/in/shreyansh-yadav-2b7856351/"
            target="_blank"
          >
            <button
                style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#06b6d4",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
  }}
>
  LinkedIn
</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;