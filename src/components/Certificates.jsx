const Certificates = () => {
  const cardStyle = {
    width: "320px",
    background: "#111827",
    padding: "25px",
    borderRadius: "15px",
    border: "2px solid #334155",
    boxShadow: "0 0 25px rgba(255,255,255,0.08)",
  };

  return (
    <section
      id="certificates"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2>Certifications</h2>

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
          <h3> Oracle Foundations Associate</h3>
          <p style={{ color: "#94a3b8", marginTop: "15px" }}>
            Oracle certified foundation program covering cloud and technology fundamentals.
          </p>
        </div>

        <div style={cardStyle}>
          <h3> AI Engineer Certification</h3>
          <p style={{ color: "#94a3b8", marginTop: "15px" }}>
            Artificial Intelligence, Machine Learning and AI workflow concepts.
          </p>
        </div>

        <div style={cardStyle}>
          <h3> Data Science Certification</h3>
          <p style={{ color: "#94a3b8", marginTop: "15px" }}>
            Data Analysis, Statistics, Pandas, NumPy and Data Visualization.
          </p>
        </div>

        <div style={cardStyle}>
          <h3> Python Bootcamp</h3>
          <p style={{ color: "#94a3b8", marginTop: "15px" }}>
            Python programming, OOP, NumPy, Pandas and real-world projects.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Frontend Web Development</h3>
          <p style={{ color: "#94a3b8", marginTop: "15px" }}>
            HTML, CSS, JavaScript and modern frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;