const express = require('express');
const app = express();

app.use(express.json());

let users = []; 

const findByDpi = (dpi) => users.find(u => String(u.dpi) === String(dpi));

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'Users API', endpoints: ['/users'] });
});

app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const { dpi, nombre, email } = req.body || {};

  if (!dpi || !nombre) {
    return res.status(400).json({ error: 'dpi y nombre son obligatorios' });
  }

  if (findByDpi(dpi)) {
    return res.status(409).json({ error: 'El DPI ya está registrado' });
  }

  const nuevo = { dpi: String(dpi), nombre: String(nombre) };
  if (email !== undefined) nuevo.email = String(email);

  users.push(nuevo);
  return res.status(201).json(nuevo);
});

app.put('/users/:dpi', (req, res) => {
  const dpiActual = req.params.dpi;
  const user = findByDpi(dpiActual);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const { dpi, nombre, email } = req.body || {};

  if (dpi && String(dpi) !== String(dpiActual)) {
    if (findByDpi(dpi)) {
      return res.status(409).json({ error: 'El nuevo DPI ya está registrado' });
    }
    user.dpi = String(dpi);
  }

  if (nombre !== undefined) user.nombre = String(nombre);
  if (email !== undefined) user.email = String(email);

  return res.status(200).json(user);
});

app.delete('/users/:dpi', (req, res) => {
  const { dpi } = req.params;
  const idx = users.findIndex(u => String(u.dpi) === String(dpi));

  if (idx === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(idx, 1);
  return res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
