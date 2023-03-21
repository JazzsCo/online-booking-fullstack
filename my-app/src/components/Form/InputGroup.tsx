import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import { Dayjs } from "dayjs";

interface Props {
  time: any;
  date: Dayjs | null;
  setUserInfo: any;
}

const InputGroup = ({ date: anyDate, time, setUserInfo }: Props) => {
  const date = anyDate?.format("DD/MM/YYYY");

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "25ch", mb: 4 },
      }}
      noValidate
      autoComplete="on"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const customer = {
          name: formData.get("name"),
          age: formData.get("age"),
          nrc: formData.get("nrc"),
          date,
          time,
        };

        fetch(`http://localhost:5000/register`, {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify(customer),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setUserInfo(data);
          })
          .catch((err) => {
            return err;
          });
      }}
    >
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        name="name"
      />
      <TextField
        id="standard-basic"
        label="Age"
        variant="standard"
        name="age"
      />
      <TextField
        id="standard-basic"
        label="NRC"
        variant="standard"
        name="nrc"
      />
      <Stack
        spacing={2}
        direction="row"
        sx={{ position: "absolute", bottom: 400, right: 320 }}
      >
        <Button type="submit" variant="outlined">
          RegisterButton
        </Button>
      </Stack>
    </Box>
  );
};

export default InputGroup;
