import resume from "../assets/resume.pdf";
const Navbar = () => {
  return (
    <nav
      style={{
        height: "80px",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2>SY</h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a
  href={resume}
  target="_blank"
  rel="noreferrer"
  download
>
  <button
    style={{
      padding: "10px 20px",
      border: "none",
      borderRadius: "10px",
      background: "#8b5cf6",
      color: "white",
      cursor: "pointer",
    }}
  >
    Resume
  </button>
</a>
    </nav>
  );
};

export default Navbar;