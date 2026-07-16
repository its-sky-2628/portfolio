import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-tag">HELLO THERE 👋</p>

        <h1>
          I'm <span>Shreyansh Yadav</span>
        </h1>

        <h2>Software Engineer & Full Stack Developer</h2>

        <p className="hero-description">
          I'm currently pursuing B.Tech in Computer Science (Data Science) and
          enjoy building modern web applications using the MERN stack. I like
          creating clean, responsive interfaces and writing backend code that is
          simple, scalable and easy to maintain.
        </p>

        <div className="hero-current">
          <h4>Currently Building</h4>

          <p>
            <strong>ExperienceHub</strong> — A platform where students can share
            interview experiences, placement journeys and help others prepare
            better.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">
              View My Work
            </button>
          </a>

          <a
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn">
              Download Resume
            </button>
          </a>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/its-sky-2628"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="https://www.linkedin.com/in/shreyansh-yadav-2b7856351/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-card">
          <img src={profile} alt="Shreyansh Yadav" />

          <div className="profile-info">
            <h3>Shreyansh Yadav</h3>

            <p>Full Stack Developer</p>

            <div className="status">
              <span className="dot"></span>

              Open to Internship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;