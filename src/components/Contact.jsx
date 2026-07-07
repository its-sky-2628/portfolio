const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        color: "white",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h2>Contact Me</h2>

      <div
        style={{
          width: "500px",
          maxWidth: "90%",
          margin: "40px auto",
          background: "#111827",
          padding: "35px",
          borderRadius: "15px",
          border: "2px solid #334155",
          boxShadow: "0 0 25px rgba(255,255,255,0.08)",
        }}
      >
        <h3>Contact Details</h3>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
          }}
        >
           shreyanshyadav9672@gmail.com
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
          }}
        >
           Mob:9672925810
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
          }}
        >
           Greater Noida, Uttar Pradesh
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://github.com/its-sky-2628"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>

          </a>

          <a
            href="https://www.linkedin.com/in/shreyansh-yadav-2b7856351/"
            target="_blank"
            rel="noreferrer"
          >

            <button>LinkedIn</button>

          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;