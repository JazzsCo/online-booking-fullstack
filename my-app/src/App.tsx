import React from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" style={{ marginBottom: 10 }}>
          <a
            href="/create-booking"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Create Booking
          </a>
        </Button>
        <Button variant="outlined">
          <a
            href="/check-booking"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Check Booking
          </a>
        </Button>
      </div>
    </div>
  );
}

export default App;
