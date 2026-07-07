import { useState } from "react";

function App() {
  const [dark, setDark] =
    useState(false);

  return (
    <div
      className={
        dark
          ? "dark bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <button
        onClick={() =>
          setDark(!dark)
        }
        className="m-5 border px-4 py-2"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;