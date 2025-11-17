// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
// import Navbar from './components/Navbar';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/user" element={<UserDashboard />} />
//         <Route path="/store-owner" element={<StoreOwnerDashboard />} />
//         <Route path="/protected-admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
//         <Route path="/protected-user" element={<ProtectedRoute allowedRoles={['user']}><UserDashboard /></ProtectedRoute>} />
//         <Route path="/protected-store-owner" element={<ProtectedRoute allowedRoles={['store-owner']}><StoreOwnerDashboard /></ProtectedRoute>} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* User Dashboard */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Store Owner Dashboard */}
        <Route
          path="/store-owner"
          element={
            <ProtectedRoute allowedRoles={['store']}>
              <StoreOwnerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

