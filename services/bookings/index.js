const express = require('express');
const app = express();
const port = 3002;

app.get('/healthz', (req, res) => {
  res.send({
    status: 'OK',
    message: 'Booking service is up'
  });
});

app.get('/bookings', (req, res) => {
  res.send(bookings);
});

app.get('/bookings/user/:id', (req, res) => {
  const id = req.params.id;
  const booking = bookings.filter((b) => b.userId == id);

  res.send(booking);
});

app.listen(port, () => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});

const bookings = [
  {
    id: 'b1',
    userId: 'u1',
    flightId: 'f1'
  },
  {
    id: 'b1',
    userId: 'u1',
    flightId: 'f2'
  },
  {
    id: 'b2',
    userId: 'u2',
    flightId: 'f1'
  },
  {
    id: 'b3',
    userId: 'u3',
    flightId: 'f2'
  }
];

const flights = [
  {
    id: "f1",
    airplaneCapacity: 170,
    remainingSits: 23 
  },
  {
    id: "f2",
    airplaneCapacity: 230,
    remainingSits: 15
  },
  {
    id: "f3",
    airplaneCapacity: 200,
    remainingSits: 59
  },
  {
    id: "f4",
    airplaneCapacity: 197,
    remainingSits: 5
  },
]
