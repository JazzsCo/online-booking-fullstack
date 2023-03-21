const availability = [
  {
    date: "03/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 12 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 13 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 131 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "07/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "08/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "09/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "10/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "13/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "14/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "15/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "16/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 1 },
    ],
  },
  {
    date: "17/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 1 },
    ],
  },
  {
    date: "18/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 23 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 56 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 1 },
    ],
  },
  {
    date: "20/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "21/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "22/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "23/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "24/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "27/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "28/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "29/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "30/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "31/03/2023",
    month: "2",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "01/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 24 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "02/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "03/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "04/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "05/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "06/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "07/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "08/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "09/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "10/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "11/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "12/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "13/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "14/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "15/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "16/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "17/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "18/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "19/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "20/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "21/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "22/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "23/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "24/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "25/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "26/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "27/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 11 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 11 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 11 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 11 },
    ],
  },
  {
    date: "28/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
  {
    date: "29/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 20, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 50, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "30/04/2023",
    month: "3",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "12", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 200, availableSlot: 0 },
    ],
  },
];

module.exports = availability;
