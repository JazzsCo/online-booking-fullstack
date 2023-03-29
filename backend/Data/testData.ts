export interface Bus {
  id: number;
  name: string;
  departureTimes: string[];
  price: number;
  hasAircon: boolean;
  totalStations: string[];
}

export const busses: Bus[] = [
  {
    id: 1,
    name: "line 30",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: true,
    totalStations: ["Hledan", "Myaynigone", "Mayangone", "Tamwe", "Yankin"],
  },
  {
    id: 2,
    name: "line 40",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: false,
    totalStations: ["Insein", "Myaynigone", "Suelay", "Aung San", "Yankin"],
  },
  {
    id: 3,
    name: "line 50",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: true,
    totalStations: ["Yangon", "Bago", "Mandalay", "Hlegu", "Dala"],
  },
  {
    id: 4,
    name: "line 60",
    departureTimes: ["10:00 ", "10:30", "11:00", "11:30"],
    price: 30,
    hasAircon: false,
    totalStations: [
      "Thaketa",
      "Hlaing Tharyar",
      "North Okkalapa",
      "South Okkalapa",
      "Yankin",
    ],
  },
];

export const getAllStations = () => {
  const allStationNames: any = [];
  busses.forEach((bus) => {
    bus.totalStations.forEach((station) => {
      const isExistStationNames = allStationNames.includes(station);
      if (!isExistStationNames) allStationNames.push(station);
    });
  });
  return allStationNames;
};

export const getBuses = (from: string, to: string) => {
  const fromStation = from.toLowerCase();
  const toStation = to.toLowerCase();
  const isExistBusses = fromStation.length > 0 && toStation.length > 0;

  let directBusses: any = [];
  busses.filter((bus) => {
    if (isExistBusses) {
      const directBuss = bus.totalStations.find((station) => {
        const allStation = station.toLowerCase();
        allStation === fromStation || allStation === toStation;
      });

      console.log("ko ko yay ", directBuss);

      if (directBuss) {
        directBusses.push(directBuss);
      }
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
