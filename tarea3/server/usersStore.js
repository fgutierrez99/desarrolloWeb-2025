// tarea3/server/usersStore.js
// Estructura: { name, dpi, email, password }
export const users = [];

export function findByEmail(email) {
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(u) {
  users.push(u);
  return u;
}
