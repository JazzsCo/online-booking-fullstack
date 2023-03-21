import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Dayjs } from "dayjs";
import * as React from "react";

export interface Availability {
  date: string;
  month: string;
  slots: Slots[];
}

export interface Slots {
  time: string;
  reserved: number;
  totalAvailable: number;
  availableSlot: number;
}

interface Props {
  availability?: Availability[];
  value: Dayjs | null;
  setTime: any;
}

const TimePicker = ({ availability, value, setTime }: Props) => {
  const hasSlots = availability && availability.length > 0;

  if (!hasSlots) {
    console.log("Return the Time Picker Page....", availability);
    return null;
  }

  const date = value?.format("DD/MM/YYYY");

  const data = availability.find((data) => {
    return data.date === date;
  })?.slots;

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) =>
          setTime(value)
        }
      >
        {data?.map((data, id) => {
          if (data.availableSlot === 0) {
            return (
              <div key={id} id={id.toString()} style={{ margin: 10 }}>
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label={data.time + " hrs"}
                  sx={{ m: -1 }}
                />
                <div style={{ opacity: 0.2 }}>
                  <h3 id={id.toString()}>Reversed: {data.reserved}</h3>
                  <h3>Total available: {data.totalAvailable}</h3>
                  <h3>Available slots: {data.availableSlot}</h3>
                </div>
                <br />
              </div>
            );
          } else {
            return (
              <div key={id} id={id.toString()} style={{ margin: 10 }}>
                <FormControlLabel
                  value={data.time}
                  control={<Radio />}
                  label={data.time + " hrs"}
                  sx={{ m: -1 }}
                />
                <h3>Reversed: {data.reserved}</h3>
                <h3>Total available: {data.totalAvailable}</h3>
                <h3>Available slots: {data.availableSlot}</h3>
                <br />
              </div>
            );
          }
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default TimePicker;
