// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav style={{ padding: '10px', background: '#007BFF', color: 'white' }}>
//       <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
//       <Link to="/signup" style={{ color: 'white', marginRight: '10px' }}>Signup</Link>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={{ color: 'white' }}>Store Rating Platform</h2>
      <div>
        {!role && <Link style={styles.link} to="/">Login</Link>}
        {!role && <Link style={styles.link} to="/signup">Signup</Link>}
        {role === 'admin' && <Link style={styles.link} to="/admin">Admin Dashboard</Link>}
        {role === 'user' && <Link style={styles.link} to="/user">User Dashboard</Link>}
        {role === 'store' && <Link style={styles.link} to="/store-owner">Store Owner Dashboard</Link>}
        {role && <button style={styles.button} onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'10px 20px',
    background:'#b6dc91',
    color:'white'
  },
  link: { marginRight:'15px', color:'white', textDecoration:'none', fontWeight:'bold' },
  button: { padding:'5px 10px', border:'none', borderRadius:'6px', background:'#004d40', color:'white', cursor:'pointer' }
};

export default Navbar;
