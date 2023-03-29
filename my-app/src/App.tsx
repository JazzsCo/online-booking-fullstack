import React from "react";
import { Button } from "@mui/material";
import DriveEtaSharpIcon from "@mui/icons-material/DriveEtaSharp";
import StyleIcon from "@mui/icons-material/Style";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "15rem" }}>
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
            href="/passport_app"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Passport App
          </a>
          <StyleIcon />
        </Button>
        <Button variant="outlined">
          <a
            href="/bus_app"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Bus App
          </a>
          <DriveEtaSharpIcon />
        </Button>
      </div>
    </div>
  );
}

export default App;
