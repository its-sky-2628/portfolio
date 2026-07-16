const About = () => {
  return (
    <section
      id="about"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#111827",
          padding: "35px",
          borderRadius: "15px",
          border: "2px solid #334155",
          boxShadow: "0 0 25px rgba(255,255,255,0.08)",
        }}
      >
        <p
  style={{
    color: "#94a3b8",
    lineHeight: "35px",
    fontSize: "20px",
    textAlign: "left",
  }}
>
  I'm Shreyansh Yadav, currently pursuing a B.Tech in Computer Science
  (Data Science) at GL Bajaj Institute of Technology & Management,
  Greater Noida.

  <br /><br />

  I enjoy building software that is simple, practical and easy to use.
  Most of my work has been focused on web development, where I've built
  projects using React.js, Node.js, Express.js and MongoDB while learning
  how complete applications are designed and developed.

  <br /><br />

  Along the way, I've worked on projects like ExperienceHub,
  Student Performance Analyser, Expense Tracker and this portfolio website.
  Each project has helped me improve my problem-solving skills and understand
  different aspects of software development.

  <br /><br />

  At present, I'm expanding my knowledge beyond web development by learning
  Artificial Intelligence and Machine Learning. My goal is to build software
  that combines modern web technologies with intelligent systems to solve
  real-world problems.
</p>

      </div>
    </section>
  );
};

export default About;