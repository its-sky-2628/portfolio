const projects = [
  {
    title: "ExperienceHub",
    description:
      "A full-stack platform where users can share interview experiences, placement journeys and career insights.",
    tech: "React • Node.js • Express • MongoDB",
    live: "https://experiencehub-ptcf.onrender.com",
    github: "https://github.com/its-sky-2628/-ExperienceHub",
  },

  {
    title: "Student Performance Analyser",
    description:
      "A Python and Streamlit application that helps students analyse mistakes, identify weak topics and monitor academic performance.",
    tech: "Python • Streamlit • Pandas • Matplotlib",
    live: "LIVE_URL",
    github: "https://github.com/its-sky-2628/Shreyansh/blob/main/Student_Performance_Analyser.py",
  },

  {
    title: "Expense Tracker",
     description:
      "A personal finance application for tracking income, expenses and spending behaviour using Python.",
    tech: "Python • NumPy",
    live: "LIVE_URL",
    github: "https://github.com/its-sky-2628/Expense-Tracker",
  },

  {
    title: "Log File Analysis Tool",
    description:
      "A Python-based tool for analysing large log files, extracting useful insights and monitoring system activity.",
    tech: "Python • File Handling",
    live: "LIVE_URL",
    github: "https://github.com/its-sky-2628/-ExperienceHub",
  },

  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, technical skills, education and achievements.",
    tech: "React • CSS",
    live: "https://shreyansh-nmoy.onrender.com/",
    github: "https://github.com/its-sky-2628/portfolio",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 10%",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Featured Projects
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "60px",
          maxWidth: "700px",
          marginInline: "auto",
          lineHeight: "28px",
        }}
      >
        A collection of projects that reflect my learning journey and interest
        in building practical software solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              borderRadius: "18px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,.08)",
              transition: ".3s",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontSize: "24px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "28px",
                minHeight: "100px",
              }}
            >
              {project.description}
            </p>

            <p
              style={{
                color: "#8b5cf6",
                marginTop: "20px",
                fontWeight: "600",
              }}
            >
              {project.tech}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "30px",
              }}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    padding: "10px 18px",
                    background: "#8b5cf6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Live Demo
                </button>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    padding: "10px 18px",
                    background: "transparent",
                    color: "white",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;