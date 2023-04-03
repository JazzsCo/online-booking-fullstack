import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface Station {
  id: number;
  label: string;
}

interface Bus {
  id: number;
  name: string;
  stations: Station[];
}

interface Route {
  startBus: Bus;
  endBus: Bus;
  startStation: Station | null;
  endStation: Station | null;
  switchStations: Station[];
}

const stations = [
  { id: 1, label: "hle dan" },
  { id: 2, label: "myaynigone" },
  { id: 3, label: "kyimyidine" },
  { id: 4, label: "tamwe" },
  { id: 5, label: "hlaing" },
  { id: 6, label: "sue lay" },
  { id: 7, label: "mandalay" },
  { id: 8, label: "yangon" },
];

// hle dan --> sue lay
const busses: Bus[] = [
  {
    id: 1,
    name: "line 30",
    stations: [
      { id: 1, label: "hle dan" },
      { id: 2, label: "myaynigone" },
      { id: 3, label: "mayangone" },
      { id: 4, label: "tamwe" },
    ],
  },
  {
    id: 2,
    name: "line 40",
    stations: [
      { id: 5, label: "hlaing" },
      { id: 2, label: "myaynigone" },
      { id: 3, label: "mayangone" },
      { id: 6, label: "sue lay" },
    ],
  },
  {
    id: 3,
    name: "line 50",
    stations: [
      { id: 7, label: "manadalay" },
      { id: 8, label: "yangon" },
      { id: 6, label: "sue lay" },
    ],
  },
];

interface StartAndEndStation {
  startStation: Station | null;
  endStation: Station | null;
}

const BussApp = () => {
  const [searchStations, setSearchStations] = useState<StartAndEndStation>({
    startStation: null,
    endStation: null,
  });

  const searchBuss = () => {
    let routes: Route[] = [];
    const hasBothStartAndEndStations =
      searchStations.startStation && searchStations.endStation;
    if (!hasBothStartAndEndStations) return; // early return
    // find direct buss
    busses.forEach((buss) => {
      const currentBusStations = buss.stations;
      const hasStartStation = currentBusStations.find(
        (station) => station.id === searchStations.startStation?.id
      );
      const hasEndStation = currentBusStations.find(
        (station) => station.id === searchStations.endStation?.id
      );
      if (hasStartStation && hasEndStation) {
        // routes.push();
      }
    });
    return routes;
  };

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Autocomplete
          options={stations}
          onChange={(evt, value) =>
            value &&
            setSearchStations({
              ...searchStations,
              startStation: value,
            })
          }
          sx={{ width: 300, mb: 2 }}
          renderInput={(params) => <TextField {...params} label="Station A" />}
        />
        <Autocomplete
          options={stations}
          onChange={(evt, value) =>
            value &&
            setSearchStations({
              ...searchStations,
              endStation: value,
            })
          }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Station B" />}
        />
      </Box>
      <Button variant="contained" onClick={searchBuss} sx={{ mt: 5 }}>
        Search buss
      </Button>
    </Box>
  );
};

export default BussApp;
