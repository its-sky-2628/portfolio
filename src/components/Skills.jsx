const Skills = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Java",
    "C++",
    "Frontend Development",
    "Problem Solving",
  ];

  return (
    <section
      id="skills"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2>Skills</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "40px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: "12px 20px",
              background: "#1e293b",
              borderRadius: "12px",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;