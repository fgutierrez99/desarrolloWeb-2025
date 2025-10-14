import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { user, isAuth, logout } = useAuth()

  return (
    <header className="bg-white border-bottom">
      <nav className="navbar navbar-expand-md container container-narrow">
        <div className="d-flex align-items-center py-2 w-100">

          {/* Título dinámico */}
          <div className="d-flex align-items-center me-auto">
            <span className="navbar-brand mb-0 h5 header-brand m-0">
              {isAuth ? (
                <>Bienvenid@, <strong>{user.name}</strong></>
              ) : (
                'Registro / Login'
              )}
            </span>
          </div>

          {/* Botones condicionales */}
          <div className="d-flex align-items-center gap-2">
            {!isAuth ? (
              <>
                <NavLink to="/register" className="btn btn-sm btn-outline-brand">
                  Registro
                </NavLink>
                <NavLink to="/login" className="btn btn-sm btn-brand text-white">
                  Login
                </NavLink>
              </>
            ) : (
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={logout}
              >
                Salir
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
