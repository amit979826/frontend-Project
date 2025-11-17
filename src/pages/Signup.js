// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(name.length < 3 || !email.includes('@') || password.length < 6 || !role){
//       alert('Please fill all fields correctly and select a role');
//       return;
//     }

//     // Save user info in localStorage for demo
//     const userData = { name, email, password, address, role };
//     localStorage.setItem('user_' + email, JSON.stringify(userData));
//     localStorage.setItem('role', role);
//     localStorage.setItem('email', email);

//     alert('Signup successful!');

//     // Redirect to correct dashboard
//     if(role === 'store') navigate('/store-owner');
//     else navigate('/user');
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Signup</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required style={styles.input} />
//         <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={styles.input} />
//         <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required style={styles.input} />
//         <input type="text" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} style={styles.input} />
//         <select value={role} onChange={e=>setRole(e.target.value)} required style={styles.input}>
//           <option value="">Select Role</option>
//           <option value="store">Store Owner</option>
//           <option value="user">Normal User</option>
//         </select>
//         <button type="submit" style={styles.button}>Signup</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: { padding:'50px', textAlign:'center', background:'#f0f8ff', minHeight:'100vh', fontFamily:'Arial, sans-serif' },
//   title: { fontSize:'32px', color:'#00796b', marginBottom:'30px' },
//   form: { display:'flex', flexDirection:'column', gap:'15px', maxWidth:'350px', margin:'auto', background:'#ffffff', padding:'25px', borderRadius:'12px', boxShadow:'0 8px 20px rgba(0,0,0,0.1)' },
//   input: { padding:'12px', borderRadius:'8px', border:'1px solid #ccc', fontSize:'16px' },
//   button: { padding:'12px', borderRadius:'8px', border:'none', background:'#00796b', color:'white', fontSize:'16px', cursor:'pointer' }
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3 || !email.includes('@') || password.length < 6 || !role) {
      alert('Please fill all fields correctly and select a role');
      return;
    }

    const userData = { name, email, password, address, role };
    localStorage.setItem('user_' + email, JSON.stringify(userData));
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);

    alert('Signup successful!');

    if (role === 'store') navigate('/store-owner');
    else navigate('/user');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.sub}>Join our platform and start exploring</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Address (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="store">Store Owner</option>
            <option value="user">Normal User</option>
          </select>

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '18px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#203a43',
  },
  sub: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  input: {
    padding: '14px',
    borderRadius: '10px',
    border: '1px solid #b5b5b5',
    fontSize: '15px',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    padding: '14px',
    background: '#203a43',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '17px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};

export default Signup;
