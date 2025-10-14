import { useState } from 'react';
import { apiPost } from '../api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { user } = await apiPost('/login', form);
      login(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 420 }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={onSubmit} className="vstack gap-3">
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={onChange} required />
            </div>
            <div>
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="password" value={form.password} onChange={onChange} required />
            </div>
            <button className="btn btn-primary">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
