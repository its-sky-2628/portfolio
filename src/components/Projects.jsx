const Projects = () => {
  const cardStyle = {
    width: "350px",
    background: "#111827",
    padding: "25px",
    borderRadius: "15px",
    border: "2px solid #334155",
    boxShadow: "0 0 25px rgba(255,255,255,0.08)",
  };

  return (
    <section
      id="projects"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2>Projects</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        <div style={cardStyle}>
          <h3>⭐ ExperienceHub</h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              lineHeight: "28px",
            }}
          >
            Full Stack Social Media Platform built using
            React.js, Node.js, Express.js and MongoDB.
            Includes authentication, profiles, posts,
            likes and modern UI.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📊 Student Performance Analyser</h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              lineHeight: "28px",
            }}
          >
            Python + Streamlit application that helps
            students analyze mistakes, track weak areas
            and improve academic performance.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>💰 Expense Tracker</h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              lineHeight: "28px",
            }}
          >
            Personal finance management application
            developed using Python, NumPy and data
            visualization techniques.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📁 Log File Analysis Tool</h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              lineHeight: "28px",
            }}
          >
            Python-based log monitoring system that
            processes, visualizes and analyzes large
            log datasets efficiently.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🌐 Portfolio Website</h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              lineHeight: "28px",
            }}
          >
            Responsive personal portfolio developed
            using React.js showcasing projects,
            skills, education and achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;