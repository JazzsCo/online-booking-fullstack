// import { Autocomplete, Box, TextField } from "@mui/material";
// import { useEffect, useState } from "react";

// interface Station {
//   id: number;
//   label: string;
// }

// const stationNames = [
//   {
//     id: 1,
//     label: "hle dan",
//     destionations: [
//       { id: 2, label: "myaynigone " },
//       { id: 3, label: "kyimyidine " },
//     ],
//   },
//   {
//     id: 2,
//     label: "myaynigone",
//     destionations: [{ id: 3, label: "kyimyidine " }],
//   },
//   { id: 3, label: "kyimyidine", destionations: [{ id: 4, label: "su lay " }] },
//   { id: 4, label: "su lay", destionations: [] },
// ];

// const BusAvailability = () => {
//   const [searchResult, setSearchResult] = useState<Station[]>();
//   const [selectedStation, setSelectedStation] = useState<Station>();
//   const [searchStationName, setSearchStationName] = useState<string>();
//   const [destinationStations, setDestinationStations] = useState<Station[]>();

//   useEffect(() => {
//     if (searchStationName) {
//       const filteredStations = stationNames.filter((station) =>
//         station.label.includes(searchStationName)
//       );
//       setSearchResult(filteredStations);
//     }
//     // @ts-ignore
//     selectedStation && setDestinationStations(selectedStation.destionations);
//   }, [searchStationName, selectedStation]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         mt: "50px",
//       }}
//     >
//       <Box sx={{ display: "flex" }}>
//         <Box
//           sx={{
//             width: 400,
//             display: "flex",
//             flexDirection: "column",
//             marginRight: "30px",
//           }}
//         >
//           <Autocomplete
//             options={stationNames}
//             onChange={(evt, value) => value && setSelectedStation(value)}
//             sx={{ width: 300 }}
//             renderInput={(params) => (
//               <TextField {...params} label="Station A" />
//             )}
//           />
//           <Box
//             sx={{
//               border: "2px solid lightgray",
//               width: "400px",
//               height: "200px",
//               display: searchStationName ? "block" : "none",
//             }}
//           >
//             {searchResult?.map((station) => {
//               return (
//                 <Box
//                   key={station.id}
//                   onClick={() => {
//                     setSelectedStation(station);
//                     setSearchStationName(undefined);
//                   }}
//                   sx={{
//                     cursor: "pointer",
//                     padding: 1,
//                     ":hover": { backgroundColor: "lightblue" },
//                   }}
//                 >
//                   {station.label}
//                 </Box>
//               );
//             })}
//           </Box>
//         </Box>
//         <Box sx={{ width: 400, display: "flex", flexDirection: "column" }}>
//           <Box sx={{ width: "400px" }}>
//             {destinationStations && (
//               <Autocomplete
//                 options={destinationStations}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Station B" />
//                 )}
//               />
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default BusAvailability;

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";

// const top100Films = [
//   { label: "Yangon" },
//   { label: "Bago" },
//   { label: "Thanlyin" },
//   { label: "Twante" },
//   { label: "Hlegu" },
//   { label: "Taikkyi" },
//   { label: "Thaketa" },
//   { label: "Insein" },
//   { label: "Mingaladon" },
//   { label: "Hlaing Tharyar" },
//   { label: "North Okkalapa" },
//   { label: "South Okkalapa" },
//   { label: "Dagon Myothit" },
//   { label: "Dala" },
// ];

export default function BusAvailability() {
  const [stationNames, setStationNames] = React.useState([]);
  const [fromStationName, setFromStationName] = React.useState<string | null>();
  const [toStationName, setToStationName] = React.useState<string | null>();

  const fetchData = async () => {
    const url = "http://localhost:5000/getAllStations";
    const res = await fetch(url);
    const data = await res.json();

    setStationNames(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
      onSubmit={async (e) => {
        e.preventDefault();

        const startAndEndStationNames = {
          fromStationName,
          toStationName,
        };

        try {
          const res = await fetch("http://localhost:5000/getBusses", {
            headers: { "content-type": "application/json" },
            method: "post",
            body: JSON.stringify(startAndEndStationNames),
          });

          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stationNames}
        onChange={(e, value) => setFromStationName(value)}
        sx={{ width: 300, mr: 10 }}
        renderInput={(params) => (
          <TextField {...params} label="Where are you from ?" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stationNames}
        onChange={(e, value) => setToStationName(value)}
        sx={{ width: 300, mr: 5 }}
        renderInput={(params) => (
          <TextField {...params} label="Where are you want to go ?" />
        )}
      />
      <Button type="submit" variant="outlined">
        Click
      </Button>
    </Box>
  );
}

/*
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface Station {
  id: number;
  label: string;
}

interface Bus {
  id: number;
  name: string;
  stations: Station[];
}

// hle dan --> sue lay
const busses: Bus[] = [
  {
    id: 1,
    name: "line 30",
    stations: [
      { id: 1, label: "hle dan" },
      { id: 2, label: "myaynigone" },
      { id: 3, label: "mayangone" },
      { id: 5, label: "tamwe" },
    ],
  },
  {
    id: 1,
    name: "line 40",
    stations: [
      { id: 6, label: "hlaing" },
      { id: 2, label: "myaynigone" },
      { id: 3, label: "mayangone" },
      { id: 7, label: "sue lay" },
    ],
  },
  {
    id: 1,
    name: "line 50",
    stations: [
      { id: 8, label: "Yangon" },
      { id: 9, label: "manadalay" },
    ],
  },
];

const stationNames = [
  {
    id: 1,
    label: "hle dan",
    destionations: [
      { id: 2, label: "myaynigone " },
      { id: 3, label: "kyimyidine " },
    ],
  },
  {
    id: 2,
    label: "myaynigone",
    destionations: [{ id: 3, label: "kyimyidine " }],
  },
  { id: 3, label: "kyimyidine", destionations: [{ id: 4, label: "su lay " }] },
  { id: 4, label: "su lay", destionations: [] },
];

const BussApp = () => {
  const [searchStations, setSearchStations] = useState({
    startStationName: "",
    stopStationName: "",
  });

  const searchBuss = () => {
    const hasBothStartAndEndStations =
      searchStations.startStationName.length > 0 &&
      searchStations.stopStationName.length > 0;
    if (!hasBothStartAndEndStations) return;
    const bussThatHasValidStartStation = busses.filter((bus) =>
      bus.stations.find(
        (station) => station.label === searchStations.startStationName
      )
    );
    // end station bus
    // common station
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: 400,
              display: "flex",
              flexDirection: "column",
              marginRight: "30px",
            }}
          >
            <Autocomplete
              options={stationNames}
              onChange={(evt, value) =>
                value &&
                setSearchStations({
                  ...searchStations,
                  startStationName: value.label,
                })
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Station A" />
              )}
            />
          </Box>
          <Box sx={{ width: 400, display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "400px" }}>
              <Autocomplete
                options={stationNames}
                onChange={(evt, value) =>
                  value &&
                  setSearchStations({
                    ...searchStations,
                    stopStationName: value.label,
                  })
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Station B" />
                )}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={() => searchBuss()}
        sx={{ mt: 5, ml: 10 }}
      >
        Search buss
      </Button>
    </Box>
  );
};

export default BussApp;
*/
