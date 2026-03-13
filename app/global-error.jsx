"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred.</p>

        <button
          onClick={() => reset()}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}