import { Button } from "@mui/material";
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";

const PassportApp = () => {
  const { handleUpdate, ...data } = useContext(PassportAppContext);
  console.log("context data: ", data);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "15rem" }}>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("updating...");
          handleUpdate({ ...data, time: 20 });
        }}
      >
        Update
      </Button>
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
            href="/passport_app/create-booking"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Create Booking
          </a>
        </Button>
        <Button variant="outlined">
          <a
            href="/passport_app/check-booking"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Check Booking
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PassportApp;
