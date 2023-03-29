interface Station {
  from: string;
  to: string;
  duration: string;
}

export interface Bus {
  id: number;
  name: string;
  departureTimes: string[];
  price: number;
  hasAircon: boolean;
  totalStations: Station[];
}

export let busses: Bus[] = [
  {
    id: 1,
    name: "line 30",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: true,
    totalStations: [
      {
        from: "Hledan",
        to: "Myaynigone",
        duration: "10min",
      },
      {
        from: "Mayangone",
        to: "Yankin",
        duration: "15min",
      },
      {
        from: "Yankin",
        to: "Tamwe",
        duration: "20min",
      },
    ],
  },
  {
    id: 2,
    name: "line 40",
    departureTimes: ["14:00 ", "16:30", "18:00", "19:30"],
    price: 30,
    hasAircon: false,
    totalStations: [
      {
        from: "Myaynigone",
        to: "Insein",
        duration: "10min",
      },
      {
        from: "Insein",
        to: "Suelay",
        duration: "5min",
      },
      {
        from: "Suelay",
        to: "Aung San",
        duration: "20min",
      },
    ],
  },
  {
    id: 3,
    name: "line 50",
    departureTimes: ["1:00 ", "5:30", "7:00", "8:30"],
    price: 30,
    hasAircon: true,
    totalStations: [
      {
        from: "Yangon",
        to: "Bago",
        duration: "60min",
      },
      {
        from: "Bago",
        to: "Thaketa",
        duration: "15min",
      },
      {
        from: "Thaketa",
        to: "Dala",
        duration: "20min",
      },
    ],
  },
  {
    id: 4,
    name: "line 60",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: true,
    totalStations: [
      {
        from: "Hlaing Tharyar",
        to: "North Okkalapa",
        duration: "10min",
      },
      {
        from: "North Okkalapa",
        to: "South Okkalapa",
        duration: "15min",
      },
      {
        from: "South Okkalapa",
        to: "Hlegu",
        duration: "20min",
      },
    ],
  },
];

export const getAllStations = () => {
  const allStations: any = [];
  busses.forEach((bus) => {
    bus.totalStations.forEach((station) => {
      const fromStation = station.from;
      const toStation = station.to;
      const isExistFromStation = allStations.includes(fromStation);
      const isExistToStation = allStations.includes(toStation);
      if (!isExistFromStation) allStations.push(fromStation);
      if (!isExistToStation) allStations.push(toStation);
    });
  });
  return allStations;
};

export const getBuses = (start: string, stop: string) => {
  const startStation = start.toLowerCase();
  const stopStation = stop.toLowerCase();

  let directBusses: any = [];
  busses.forEach((bus) => {
    const directBuss = bus.totalStations.find(
      (station) =>
        station.from.toLowerCase() === startStation &&
        station.to.toLowerCase() === stopStation
    );
    if (directBuss) {
      directBusses.push(directBuss);
    }
  });

  let indirectBusses: any = [];
  busses.forEach((bus) => {
    let busAvailability: any = [];
    bus.totalStations.forEach((station) => {
      const fromStation = station.from;
      const toStation = station.to;
      const isExistFromStation = busAvailability.includes(fromStation);
      const isExistToStation = busAvailability.includes(toStation);
      if (!isExistFromStation) busAvailability.push(fromStation.toLowerCase());
      if (!isExistToStation) busAvailability.push(toStation.toLowerCase());
    });
    if (
      busAvailability.includes(startStation) ||
      busAvailability.includes(stopStation)
    ) {
      indirectBusses.push(bus);
    }
  });

  // const startOrStopStationsBusses = busses.filter((bus) =>
  //   bus.totalStations.find(
  //     (station) =>
  //       station.from.toLowerCase() === startStation ||
  //       station.to.toLowerCase() === stopStation
  //   )
  // );
  // console.log(startOrStopStationsBusses);
  return directBusses;
};
