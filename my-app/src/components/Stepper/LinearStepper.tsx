import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dayjs, { Dayjs } from "dayjs";
import TimePicker, { Availability } from "../TimePicker/TimePicker";
import InputGroup from "../Form/InputGroup";
import DatePicker from "../DatePicker/DatePicker";
import { PassportAppContext } from "../../contexts/PassportAppContext";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function LinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [month, setMonth] = React.useState<number | undefined>();
  const [availability, setAvailability] = React.useState<Availability[]>();
  const [time, setTime] = React.useState<string>();
  const [userInfo, setUserInfo] = React.useState<any>();
  const userBookingData = React.useContext(PassportAppContext);
  console.log("user book", userBookingData);

  const handleChangeMonth = async () => {
    const url = `http://localhost:5000/available?month=${
      month ? month : dayjs().month()
    }`;
    const res = await fetch(url);
    const data = await res.json();
    setAvailability(data);
  };

  React.useEffect(() => {
    handleChangeMonth();
  }, [month]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderSteps = () => {
    if (activeStep === 0) {
      return (
        <>
          <DatePicker
            value={value}
            handleChange={setValue}
            availability={availability}
            changeMonth={setMonth}
          />
          <TimePicker
            setTime={setTime}
            value={value}
            availability={availability}
          />
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <InputGroup time={time} date={value} setUserInfo={setUserInfo} />
        </>
      );
    } else if (activeStep === 2) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 250 }}>
            {/* <h2>This is your's information</h2> */}
            <h3>Name : {userInfo.name}</h3>
            <h3>Age : {userInfo.age}</h3>
            <h3>NRC : {userInfo.nrc}</h3>
            <h3>Date : {userInfo.date}</h3>
            <h3>Time : {userInfo.time + " hrs"}</h3>
          </div>
        </div>
      );
    }
  };

  console.log("User Info :", userInfo);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 10, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </>
      ) : (
        <>
          <Box sx={{ mt: 4, minHeight: "300px" }}>{renderSteps()}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
