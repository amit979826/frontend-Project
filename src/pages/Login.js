// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Dummy role-based routing
//     if(email === 'admin@example.com'){
//       navigate('/admin');
//     } else if(email === 'store@example.com'){
//       navigate('/store-owner');
//     } else {
//       navigate('/user');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formBox}>
//         <h2 style={styles.title}>Login</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input 
//             style={styles.input} 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={e=>setEmail(e.target.value)} 
//             required 
//           />
//           <input 
//             style={styles.input} 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={e=>setPassword(e.target.value)} 
//             required 
//           />
//           <button style={styles.button} type="submit">Login</button>
//         </form>
//         <p style={styles.text}>
//           Don't have an account? <Link to="/signup" style={{color:'#007BFF'}}>Signup</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex', justifyContent: 'center', alignItems: 'center',
//     height: '100vh',
//     background: 'linear-gradient(135deg, #667eea, #764ba2)' // gradient background
//   },
//   formBox: {
//     backgroundColor: 'white',
//     padding: '40px',
//     borderRadius: '12px',
//     boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//     width: '100%',
//     maxWidth: '400px',
//     textAlign: 'center'
//   },
//   title: { marginBottom: '20px', color: '#764ba2', fontSize: '28px' },
//   form: { display: 'flex', flexDirection: 'column' },
//   input: { padding: '12px', margin: '8px 0', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' },
//   button: { padding: '12px', marginTop: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#764ba2', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
//   text: { marginTop: '15px', fontSize: '14px' }
// };

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy role-based login logic
//     if(email === 'admin@example.com'){
//   localStorage.setItem('role','admin');
//   navigate('/admin');
// }else if(email === 'store@example.com'){
//   localStorage.setItem('role','store');   // <- ye value 'store' honi chahiye
//   navigate('/store-owner');              // <- ye route sahi hona chahiye
// }else{
//   localStorage.setItem('role','user');
//   navigate('/user');
// }

//   };

//   return (
//     <div style={{ padding: '40px', textAlign: 'center' }}>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'10px', maxWidth:'300px', margin:'auto' }}>
//         <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple email/password validation
//     if (!email.includes('@') || password.length < 6) {
//       alert('Enter a valid email and password (min 6 characters)');
//       return;
//     }

//     // Dummy role-based login logic
//     let role = '';
//     if(email === 'admin@example.com' && password === 'admin123') {
//       role = 'admin';
//       navigate('/admin');
//     } else if(email === 'store@example.com' && password === 'store123') {
//       role = 'store';
//       navigate('/store-owner');
//     } else {
//       role = 'user';
//       navigate('/user');
//     }

//     // Save role in localStorage
//     localStorage.setItem('role', role);
//     localStorage.setItem('email', email); // optional: store email for dashboard display
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to Store Rating Platform</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '50px',
//     textAlign: 'center',
//     background: '#e0f7fa',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif'
//   },
//   title: {
//     fontSize: '32px',
//     color: '#00796b',
//     marginBottom: '30px'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//     maxWidth: '350px',
//     margin: 'auto',
//     background: '#ffffff',
//     padding: '25px',
//     borderRadius: '12px',
//     boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
//   },
//   input: {
//     padding: '12px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '16px'
//   },
//   button: {
//     padding: '12px',
//     borderRadius: '8px',
//     border: 'none',
//     background: '#00796b',
//     color: 'white',
//     fontSize: '16px',
//     cursor: 'pointer'
//   }
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(!email.includes('@') || password.length < 6){
//       alert('Enter valid email and password (min 6 chars)');
//       return;
//     }

//     // Admin login (fixed)
//     if(email === 'admin@example.com' && password === 'admin123'){
//       localStorage.setItem('role','admin');
//       localStorage.setItem('email', email);
//       navigate('/admin');
//       return;
//     }

//     // For demo: check if user exists in localStorage
//     const userData = JSON.parse(localStorage.getItem('user_' + email));
//     if(userData && userData.password === password){
//       localStorage.setItem('role', userData.role);
//       localStorage.setItem('email', email);

//       if(userData.role === 'store') navigate('/store-owner');
//       else navigate('/user');
//     } else {
//       alert('Invalid credentials or user not registered');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to Store Rating Platform</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={styles.input} />
//         <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required style={styles.input} />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: { padding:'50px', textAlign:'center', background:'#e0f7fa', minHeight:'100vh', fontFamily:'Arial, sans-serif' },
//   title: { fontSize:'32px', color:'#00796b', marginBottom:'30px' },
//   form: { display:'flex', flexDirection:'column', gap:'15px', maxWidth:'350px', margin:'auto', background:'#ffffff', padding:'25px', borderRadius:'12px', boxShadow:'0 8px 20px rgba(0,0,0,0.1)' },
//   input: { padding:'12px', borderRadius:'8px', border:'1px solid #ccc', fontSize:'16px' },
//   button: { padding:'12px', borderRadius:'8px', border:'none', background:'#00796b', color:'white', fontSize:'16px', cursor:'pointer' }
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@') || password.length < 6) {
      alert('Enter valid email and password (min 6 chars)');
      return;
    }

    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('email', email);
      navigate('/admin');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('user_' + email));
    if (userData && userData.password === password) {
      localStorage.setItem('role', userData.role);
      localStorage.setItem('email', email);

      if (userData.role === 'store') navigate('/store-owner');
      else navigate('/user');
    } else {
      alert('Invalid credentials or user not registered');
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.leftSection}>
        <h1 style={styles.brand}>Store Rating Platform</h1>
        <p style={styles.subtitle}>Rate stores. Share experiences. Make better choices.</p>
      </div>

      <div style={styles.rightSection}>
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
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
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  leftSection: {
    flex: 1,
    background: 'linear-gradient(135deg, #0d47a1, #1976d2)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',    
    padding: '40px',
  },
  brand: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '18px',
    opacity: 0.9,
    textAlign: 'center',
    maxWidth: '350px',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f6f8',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '380px',
    background: 'white',
    padding: '35px',
    borderRadius: '18px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '25px',
    textAlign: 'center',
    color: '#0d47a1',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  input: {
    padding: '14px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '14px',
    background: '#0d47a1',
    border: 'none',
    color: 'white',
    borderRadius: '10px',
    fontSize: '17px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Login;
