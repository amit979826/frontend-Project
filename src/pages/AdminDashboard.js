// import React, { useState } from 'react';

// function AdminDashboard() {
//   const [users, setUsers] = useState([
//     { name: 'John Doe', email: 'john@example.com', address: '123 Main St', role: 'user' },
//     { name: 'Jane Smith', email: 'jane@example.com', address: '456 Oak St', role: 'store' }
//   ]);

//   const [stores, setStores] = useState([
//     { name: 'SuperMart', address: '123 Main St', rating: 4 },
//     { name: 'FreshFarm', address: '456 Oak St', rating: 5 }
//   ]);

//   const [newUser, setNewUser] = useState({ name:'', email:'', address:'', role:'user' });
//   const [newStore, setNewStore] = useState({ name:'', address:'' });

//   // Add User
//   const handleAddUser = (e) => {
//     e.preventDefault();
//     setUsers([...users, newUser]);
//     setNewUser({ name:'', email:'', address:'', role:'user' });
//     alert('User added successfully!');
//   };

//   // Add Store
//   const handleAddStore = (e) => {
//     e.preventDefault();
//     setStores([...stores, newStore]);
//     setNewStore({ name:'', address:'' });
//     alert('Store added successfully!');
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Admin Dashboard</h1>

//       {/* Add User */}
//       <div style={styles.section}>
//         <h2>Add User</h2>
//         <form onSubmit={handleAddUser} style={styles.form}>
//           <input
//             style={styles.input} type="text" placeholder="Name"
//             value={newUser.name} onChange={e=>setNewUser({...newUser,name:e.target.value})} required
//           />
//           <input
//             style={styles.input} type="email" placeholder="Email"
//             value={newUser.email} onChange={e=>setNewUser({...newUser,email:e.target.value})} required
//           />
//           <input
//             style={styles.input} type="text" placeholder="Address"
//             value={newUser.address} onChange={e=>setNewUser({...newUser,address:e.target.value})} required
//           />
//           <select
//             style={styles.input} value={newUser.role} onChange={e=>setNewUser({...newUser,role:e.target.value})}
//           >
//             <option value="user">Normal User</option>
//             <option value="admin">Admin</option>
//             <option value="store">Store Owner</option>
//           </select>
//           <button style={styles.button} type="submit">Add User</button>
//         </form>
//       </div>

//       {/* Add Store */}
//       <div style={styles.section}>
//         <h2>Add Store</h2>
//         <form onSubmit={handleAddStore} style={styles.form}>
//           <input
//             style={styles.input} type="text" placeholder="Store Name"
//             value={newStore.name} onChange={e=>setNewStore({...newStore,name:e.target.value})} required
//           />
//           <input
//             style={styles.input} type="text" placeholder="Address"
//             value={newStore.address} onChange={e=>setNewStore({...newStore,address:e.target.value})} required
//           />
//           <button style={styles.button} type="submit">Add Store</button>
//         </form>
//       </div>

//       {/* Users List */}
//       <div style={styles.section}>
//         <h2>All Users</h2>
//         {users.map((user, idx)=>(
//           <div key={idx} style={styles.card}>
//             {user.name} - {user.email} - {user.address} - <strong>{user.role}</strong>
//           </div>
//         ))}
//       </div>

//       {/* Stores List */}
//       <div style={styles.section}>
//         <h2>All Stores</h2>
//         {stores.map((store, idx)=>(
//           <div key={idx} style={styles.card}>
//             {store.name} - {store.address} - Rating: {store.rating || 'Not Rated'}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: '30px', fontFamily: 'Arial, sans-serif', background: '#f5f6fa', minHeight:'100vh' },
//   title: { fontSize: '32px', color: '#2c3e50', marginBottom: '20px' },
//   section: { marginBottom: '30px', padding: '15px', background:'#ffffff', borderRadius:'12px', boxShadow:'0 6px 18px rgba(0,0,0,0.1)' },
//   form: { display:'flex', flexWrap:'wrap', gap:'10px', alignItems:'center' },
//   input: { padding:'10px', borderRadius:'6px', border:'1px solid #ccc', flex:'1 1 200px' },
//   button: { padding:'10px 20px', border:'none', borderRadius:'6px', background:'#3498db', color:'white', cursor:'pointer' },
//   card: { padding:'10px', margin:'5px 0', background:'#ecf0f1', borderRadius:'8px' }
// };

// export default AdminDashboard;

import React, { useState } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', address: '123 Main St', role: 'user' }
  ]);

  const [stores, setStores] = useState([
    { name: 'SuperMart', address: '123 Main St', rating: 4 }
  ]);

  const [newUser, setNewUser] = useState({ name:'', email:'', address:'', role:'user' });
  const [newStore, setNewStore] = useState({ name:'', address:'' });

  // Add User
  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ name:'', email:'', address:'', role:'user' });
    alert('User added successfully!');
  };

  // Add Store
  const handleAddStore = (e) => {
    e.preventDefault();
    setStores([...stores, newStore]);
    setNewStore({ name:'', address:'' });
    alert('Store added successfully!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      {/* Add User */}
      <div style={styles.section}>
        <h2>Add User</h2>
        <form onSubmit={handleAddUser} style={styles.form}>
          <input style={styles.input} placeholder="Name" value={newUser.name} onChange={e=>setNewUser({...newUser,name:e.target.value})} required />
          <input style={styles.input} placeholder="Email" value={newUser.email} onChange={e=>setNewUser({...newUser,email:e.target.value})} required />
          <input style={styles.input} placeholder="Address" value={newUser.address} onChange={e=>setNewUser({...newUser,address:e.target.value})} required />
          <select style={styles.input} value={newUser.role} onChange={e=>setNewUser({...newUser,role:e.target.value})}>
            <option value="user">Normal User</option>
            <option value="admin">Admin</option>
            <option value="store">Store Owner</option>
          </select>
          <button style={styles.button} type="submit">Add User</button>
        </form>
      </div>

      {/* Add Store */}
      <div style={styles.section}>
        <h2>Add Store</h2>
        <form onSubmit={handleAddStore} style={styles.form}>
          <input style={styles.input} placeholder="Store Name" value={newStore.name} onChange={e=>setNewStore({...newStore,name:e.target.value})} required />
          <input style={styles.input} placeholder="Address" value={newStore.address} onChange={e=>setNewStore({...newStore,address:e.target.value})} required />
          <button style={styles.button} type="submit">Add Store</button>
        </form>
      </div>

      {/* Users List */}
      <div style={styles.section}>
        <h2>All Users</h2>
        {users.map((user, idx)=>(
          <div key={idx} style={styles.card}>
            {user.name} - {user.email} - {user.address} - <strong>{user.role}</strong>
          </div>
        ))}
      </div>

      {/* Stores List */}
      <div style={styles.section}>
        <h2>All Stores</h2>
        {stores.map((store, idx)=>(
          <div key={idx} style={styles.card}>
            {store.name} - {store.address} - Rating: {store.rating || 'Not Rated'}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '30px', fontFamily: 'Arial, sans-serif', background: '#f5f6fa', minHeight:'100vh' },
  title: { fontSize: '32px', color: '#2c3e50', marginBottom: '20px' },
  section: { marginBottom: '30px', padding: '15px', background:'#ffffff', borderRadius:'12px', boxShadow:'0 6px 18px rgba(0,0,0,0.1)' },
  form: { display:'flex', flexWrap:'wrap', gap:'10px', alignItems:'center' },
  input: { padding:'10px', borderRadius:'6px', border:'1px solid #ccc', flex:'1 1 200px' },
  button: { padding:'10px 20px', border:'none', borderRadius:'6px', background:'#3498db', color:'white', cursor:'pointer' },
  card: { padding:'10px', margin:'5px 0', background:'#ecf0f1', borderRadius:'8px' }
};

export default AdminDashboard;
