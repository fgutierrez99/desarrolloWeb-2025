// tarea3/server/server.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { users, findByEmail, addUser } from './usersStore.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_, res) => res.json({ ok: true, msg: 'API running' }));

app.post('/register', (req, res) => {
  const { name, dpi, email, password } = req.body || {};
  if (!name || !dpi || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  if (findByEmail(email)) {
    return res.status(409).json({ error: 'El email ya existe.' });
  }
  addUser({ name, dpi, email, password });
  return res.status(201).json({ message: 'Registro exitoso', user: { name, email, dpi } });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son obligatorios.' });
  }
  const user = findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciales inválidas.' });
  }
  return res.json({ message: 'Login exitoso', user: { name: user.name, email: user.email, dpi: user.dpi } });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
