import "./Hero.css";
import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* Left Side */}
      <div className="hero-image">

        <img src={profile} alt="Shreyansh Yadav" />

      </div>

      {/* Right Side */}

      <div className="hero-content">

        <p className="hero-tag">
          Hi, I'm
        </p>

        <h1>
          Shreyansh Yadav
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="hero-description">
          I'm a B.Tech Computer Science (Data Science) student who enjoys
          building modern web applications using React.js, Node.js,
          Express.js and MongoDB.

          <br /><br />

          I like writing clean code, solving real-world problems and
          continuously learning new technologies while working on personal
          projects.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="btn-primary">
              View Projects
            </button>
          </a>

          <a
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-secondary">
              Download Resume
            </button>
          </a>

        </div>

        <div className="hero-links">

          <a
            href="https://github.com/its-sky-2628"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>|</span>

          <a
            href="https://www.linkedin.com/in/shreyansh-yadav-2b7856351/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;