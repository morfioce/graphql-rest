const express = require('express');
const app = express();
const port = 3001;

app.get('/healthz', (req, res) => {
  res.send({
    status: 'OK',
    message: 'Account service is up'
  });
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);

  res.status(user ? 200 : 404);
  res.send(user);
});

app.listen(port, () => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});

const users = [
  {
    id: "u1",
    name: "morfioce",
    email: "morfioce@example.com"
  },
  {
    id: "u2",
    name: "lee",
    email: "lee@example.com"
  },
  {
    id: "u3",
    name: "jeff",
    email: "jeff@example.com"
  },
]