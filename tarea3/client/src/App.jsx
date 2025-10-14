import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

function Home() {
  const { isAuth, user } = useAuth()
  return (
    <div className="container text-center">
      <div className="p-4 bg-white border rounded-3 shadow-sm d-inline-block mt-4">
        <div className="text-center mb-3">
          <img src="/umgLogo.png" alt="Logo UMG" style=
            {{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              marginBottom: "10px"
            }}
          />
          <h2 className="h5 fw-bold">Bienvenid@</h2>
          {isAuth ? (
            <p>Sesión activa como {user.email}</p>
          ) : (
            <p>Realiza el registro o inicia sesión</p>
          )}
        </div>

      </div>
    </div>
  )
}

function OnlyLoggedOut({ children }) {
  const { isAuth } = useAuth()
  return isAuth ? <Navigate to="/" replace /> : children
}

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={<OnlyLoggedOut><Register /></OnlyLoggedOut>}
        />
        <Route
          path="/login"
          element={<OnlyLoggedOut><Login /></OnlyLoggedOut>}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* footer... */}
    </AuthProvider>
  )
}


