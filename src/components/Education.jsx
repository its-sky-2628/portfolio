const Education = () => {
  return (
    <section
      id="education"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2>Education</h2>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    marginTop: "40px",
  }}
>
  {/* B.Tech */}
  <div
    style={{
      background: "#111827",
      padding: "25px",
      width: "320px",
      borderRadius: "15px",
      border: "1px solid #1e293b",
      boxShadow: "0 0 20px rgba(255,255,255,0.05)",
    }}
  >
    <h3>B.Tech - Data Science</h3>
    <p style={{ marginTop: "10px", color: "#94a3b8" }}>
      GL Bajaj Institute of Technology & Management
    </p>
    <p style={{ color: "#94a3b8" }}>
      Dr. A.P.J Abdul Kalam Technical University
    </p>
    <p style={{ marginTop: "10px" }}>2024 - Present</p>
  </div>

  {/* Class XII */}
  <div
    style={{
      background: "#111827",
      padding: "25px",
      width: "320px",
      borderRadius: "15px",
      border: "1px solid #1e293b",
      boxShadow: "0 0 20px rgba(255,255,255,0.05)",
    }}
  >
    <h3>Intermediate (Class XII)</h3>
    <p style={{ marginTop: "10px", color: "#94a3b8" }}>
      P.N National Public School
      <h4 style={{ marginTop: "10px" }}>
       Percentage: 90%<br></br>
      
       </h4>
      

    </p>
  </div>

  {/* Class X */}
  <div
    style={{
      background: "#111827",
      padding: "25px",
      width: "320px",
      borderRadius: "15px",
      border: "2px solid #1e293b",
      boxShadow: "0 0 20px rgba(255,255,255,0.05)",
    }}
  >
    <h3>Secondary School (Class X)</h3>
    <p style={{ marginTop: "10px", color: "#94a3b8" }}>
      P.N National Public School
      <h4 style={{ marginTop: "10px" }}>Percentage:76%</h4>
    </p>
  </div>
</div>
    </section>
  );
};

export default Education;