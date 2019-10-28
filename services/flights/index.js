const express = require('express');
const app = express();
const port = 3003;

app.get('/healthz', (req, res) => {
  res.send({
    status: 'OK',
    message: 'Flight service is up'
  });
});

app.get('/flights', (req, res) => {
  res.send(flights);
});

app.get('/flights/:id', (req, res) => {
  const id = req.params.id;
  const flight = flights.find((f) => f.id == id);

  res.status(flight ? 200 : 404)
  res.send(flight);
});

app.get('/flights/q', (req, res) => {
  const source = req.query.s;
  const destination = req.query.d;

  let result = flights;
  if (source && destination) {
    result = flights.filter((f) => f.source == source && f.destination == destination);
  } else if (source) {
    result = flights.filter((f) => f.source == source);
  } else if (destination) {
    result = flights.filter((f) => f.destination == destination);
  }

  res.send(result);
});

app.listen(port, () => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});

const flights = [
  {
    id: "f1",
    source: "paris",
    destination: "london",
    airplaneCapacity: 170
  },
  {
    id: "f2",
    source: "paris",
    destination: "roma",
    airplaneCapacity: 230
  },
  {
    id: "f3",
    source: "berlin",
    destination: "london",
    airplaneCapacity: 200
  },
  {
    id: "f4",
    source: "berlin",
    destination: "madrid",
    airplaneCapacity: 197
  },
]