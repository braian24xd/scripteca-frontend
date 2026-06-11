import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import PreRegisterPage from './pages/LandingPages/PreRegisterPage'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import ManageUsers from './pages/ManageUsers'
import ManageRecordings from './pages/ManageRecordings'
import Account from './pages/Account'
import UserLayout from './layouts/UserLayout'
import './css/main.scss'
import StudentDashboardPage from './pages/StudentDashboardPage'
import CoursePage from './pages/CoursePage'
import ModuleTimeline from './components/ModuleTimeline'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/BuenFin2025" element={<PreRegisterPage />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas para estudiantes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/course" element={<ModuleTimeline />} />
        </Route>
      </Route>
      <Route
        path="/account"
        element={
          // <ProtectedRoute requiredRole={['student', 'admin']}>
          <Account />
          // </ProtectedRoute>
        }
      />

      {/* Rutas para administradores */}
      <Route
        path="/admin"
        element={
          // <ProtectedRoute requiredRole={['admin']}>
          <AdminDashboard />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          // <ProtectedRoute requiredRole={['admin']}>
          <ManageUsers />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/admin/recordings"
        element={
          // <ProtectedRoute requiredRole={['admin']}>
          <ManageRecordings />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;