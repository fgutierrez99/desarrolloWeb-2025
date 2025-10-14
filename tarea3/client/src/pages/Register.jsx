import { useState } from 'react';
import { apiPost } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', dpi: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await apiPost('/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 480 }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Registro</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={onSubmit} className="vstack gap-3">
            <div>
              <label className="form-label">Nombre</label>
              <input className="form-control" name="name" value={form.name} onChange={onChange} required />
            </div>
            <div>
              <label className="form-label">DPI</label>
              <input className="form-control" name="dpi" value={form.dpi} onChange={onChange} required />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={onChange} required />
            </div>
            <div>
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="password" value={form.password} onChange={onChange} required />
            </div>
            <button className="btn btn-primary">Crear cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
