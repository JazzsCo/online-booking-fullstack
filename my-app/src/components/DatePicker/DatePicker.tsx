import * as React from "react";
import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Availability } from "../TimePicker/TimePicker";

interface Props {
  value: Dayjs | null;
  handleChange: (value: Dayjs | null) => void;
  availability?: Availability[];
  changeMonth: (month: number | undefined) => void;
}

const DatePicker = ({
  value,
  handleChange,
  availability,
  changeMonth,
}: Props) => {
  const disableFunc = (date: Dayjs | null) => {
    const day = date?.day();

    if (day === 0 || day === 6) {
      return true;
    }

    const dataDate = date?.format("DD/MM/YYYY");

    const availableDay = availability?.find((data) => {
      return data.date === dataDate;
    });

    return availableDay
      ? availableDay?.slots.every((elm) => elm.availableSlot === 0)
        ? true
        : false
      : true;

    // if (availableDay) {
    //   const slots = availableDay?.slots.every((elm) => {
    //     return elm.availableSlot === 0;
    //   });

    //   return slots ? true : false;
    // } else {
    //   return true;
    // }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} sx={{ mb: 3 }}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(value) => handleChange(value)}
            onMonthChange={(month) => changeMonth(month?.month())}
            disablePast
            disableHighlightToday
            shouldDisableDate={disableFunc}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
