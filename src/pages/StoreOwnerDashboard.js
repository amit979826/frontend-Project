import React, { useState, useEffect } from 'react';

function StoreOwnerDashboard() {
  const ownerEmail = localStorage.getItem("email"); // logged-in store owner
  const [stores, setStores] = useState([]);
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newStoreName, setNewStoreName] = useState('');
  const [newStoreAddress, setNewStoreAddress] = useState('');

  // Load stores and users for this owner on mount
  useEffect(() => {
    const allStores = JSON.parse(localStorage.getItem("stores")) || [];
    const myStores = allStores.filter(store => store.ownerEmail === ownerEmail);
    setStores(myStores);

    const allUsers = JSON.parse(localStorage.getItem("storeUsers")) || [];
    const myUsers = allUsers.filter(user => user.storeEmail === ownerEmail);
    setUsers(myUsers);
  }, [ownerEmail]);

  // Add a new store for this owner
  const handleAddStore = () => {
    if(!newStoreName || !newStoreAddress){
      alert('Enter store name and address');
      return;
    }

    const newStore = {
      name: newStoreName,
      address: newStoreAddress,
      ownerEmail: ownerEmail,
      ratings: [] // initialize ratings
    };

    const allStores = JSON.parse(localStorage.getItem("stores")) || [];
    allStores.push(newStore);
    localStorage.setItem("stores", JSON.stringify(allStores));

    setStores(allStores.filter(store => store.ownerEmail === ownerEmail));
    setNewStoreName('');
    setNewStoreAddress('');
  };

  // Add a new user linked to this owner
  const handleAddUser = () => {
    if(!newUserName || !newUserEmail){
      alert('Enter name and email');
      return;
    }

    const newUser = { name: newUserName, email: newUserEmail, storeEmail: ownerEmail };
    const allUsers = JSON.parse(localStorage.getItem("storeUsers")) || [];
    allUsers.push(newUser);
    localStorage.setItem("storeUsers", JSON.stringify(allUsers));

    setUsers(allUsers.filter(u => u.storeEmail === ownerEmail));
    setNewUserName('');
    setNewUserEmail('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Store Owner Dashboard</h1>

      {/* Add Store */}
      <div style={styles.card}>
        <h2>Add Store</h2>
        <input 
          type="text" 
          placeholder="Store Name" 
          value={newStoreName} 
          onChange={e => setNewStoreName(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="Address" 
          value={newStoreAddress} 
          onChange={e => setNewStoreAddress(e.target.value)} 
          style={styles.input}
        />
        <button onClick={handleAddStore} style={styles.button}>Add Store</button>
      </div>

      {/* List of Stores */}
      <div style={styles.card}>
        <h2>My Stores</h2>
        {stores.length === 0 ? <p>No stores added yet.</p> :
          <ul>
            {stores.map((store, index) => (
              <li key={index} style={styles.listItem}>{store.name} - {store.address}</li>
            ))}
          </ul>
        }
      </div>

      {/* Add Users */}
      <div style={styles.card}>
        <h2>Add User</h2>
        <input 
          type="text" 
          placeholder="User Name" 
          value={newUserName} 
          onChange={e => setNewUserName(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="email" 
          placeholder="User Email" 
          value={newUserEmail} 
          onChange={e => setNewUserEmail(e.target.value)} 
          style={styles.input}
        />
        <button onClick={handleAddUser} style={styles.button}>Add User</button>
      </div>

      {/* List of Users */}
      <div style={styles.card}>
        <h2>Users Linked to My Stores</h2>
        {users.length === 0 ? <p>No users added yet.</p> :
          <ul>
            {users.map((user, index) => (
              <li key={index} style={styles.listItem}>{user.name} - {user.email}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f7',
    minHeight: '100vh'
  },
  title: {
    fontSize: '36px',
    color: '#004d40',
    marginBottom: '30px',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00796b',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer'
  },
  listItem: {
    padding: '8px 0',
    borderBottom: '1px solid #e0e0e0'
  }
};

export default StoreOwnerDashboard;
