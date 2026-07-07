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
            fontSize: "18px",
            textAlign: "left",
          }}
        >
          I am Shreyansh Yadav, a B.Tech Data Science student at
          GL Bajaj Institute of Technology & Management with a
          strong passion for Full-Stack Development and modern
          web technologies.

          <br /><br />

          I specialize in building scalable, responsive, and
          user-centric web applications using React.js, Node.js,
          Express.js, and MongoDB.

          <br /><br />

          Over time, I have developed projects such as
          ExperienceHub, Student Performance Analyser,
          Expense Tracker and Portfolio Websites that focus on
          solving real-world challenges through technology.

          <br /><br />

          My mission is to build impactful software products
          that solve real-world problems and create meaningful
          user experiences through technology.
        </p>
      </div>
    </section>
  );
};

export default About;