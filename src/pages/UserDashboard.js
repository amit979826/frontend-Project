// import React, { useState } from 'react';
// import StoreList from '../components/StoreList';

// function UserDashboard() {
//   const [stores, setStores] = useState([
//     { name: 'SuperMart', address: '123 Main St', rating: 4 },
//     { name: 'FreshFarm', address: '456 Oak St', rating: 5 },
//     { name: 'TechStore', address: '789 Pine St', rating: 3 },
//     { name: 'GroceryHub', address: '321 Elm St', rating: 4 },
//     { name: 'ElectroWorld', address: '654 Maple Ave', rating: 5 },
//     { name: 'BookBarn', address: '987 Cedar Rd', rating: 4 },
//     { name: 'FashionPoint', address: '159 Walnut St', rating: 5 },
//     { name: 'ToyLand', address: '753 Birch Blvd', rating: 3 },
//     { name: 'HealthyMart', address: '852 Spruce Ln', rating: 4 },
//     { name: 'HomeEssentials', address: '951 Chestnut Dr', rating: 5 }
//   ]);

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to Store Ratings Platform</h1>
//       <p style={styles.subtitle}>
//         Explore all registered stores, submit your ratings, and help others choose the best!
//       </p>
//       <p style={styles.info}>
//         ⭐ Ratings range from 1 (Poor) to 5 (Excellent). <br />
//         Your feedback is valuable and helps store owners improve their services.
//       </p>
//       <div style={styles.storeList}>
//         <StoreList stores={stores} />
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: '100vh',
//     padding: '30px',
//     background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: 'white',
//     fontFamily: 'Arial, sans-serif'
//   },
//   title: {
//     fontSize: '36px',
//     marginBottom: '15px',
//     fontWeight: 'bold',
//     textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
//   },
//   subtitle: {
//     fontSize: '18px',
//     marginBottom: '10px',
//     textAlign: 'center'
//   },
//   info: {
//     fontSize: '14px',
//     marginBottom: '25px',
//     textAlign: 'center',
//     lineHeight: '1.5'
//   },
//   storeList: {
//     width: '100%',
//     maxWidth: '900px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px'
//   }
// };

// export default UserDashboard;


import React, { useState } from 'react';

function UserDashboard() {
  // Dummy store data
  const [stores, setStores] = useState([
    { name: 'SuperMart', address: '123 Main St', overallRating: 4 },
    { name: 'FreshFarm', address: '456 Oak St', overallRating: 5 },
    { name: 'TechStore', address: '789 Tech Rd', overallRating: 3 }
  ]);

  // User's own ratings
  const [userRatings, setUserRatings] = useState({});

  // Submit / Modify rating
  const handleRating = (storeName) => {
    const rating = prompt(`Enter your rating (1-5) for ${storeName}:`);
    const ratingNum = Number(rating);
    if (ratingNum >=1 && ratingNum <=5) {
      setUserRatings({...userRatings, [storeName]: ratingNum});
      alert('Rating submitted/updated!');
    } else {
      alert('Invalid rating! Enter a number between 1 and 5.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Dashboard</h1>
      <p>Welcome! You can submit or modify your ratings for the stores below.</p>

      {stores.map((store, idx) => (
        <div key={idx} style={styles.card}>
          <h3>{store.name}</h3>
          <p><strong>Address:</strong> {store.address}</p>
          <p><strong>Overall Rating:</strong> {store.overallRating}</p>
          <p><strong>Your Rating:</strong> {userRatings[store.name] || 'Not Rated'}</p>
          <button style={styles.button} onClick={() => handleRating(store.name)}>
            Submit / Modify Rating
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: '30px', fontFamily: 'Arial, sans-serif', background:'#f0f8ff', minHeight:'100vh' },
  title: { fontSize:'28px', color:'#2c3e50', marginBottom:'15px' },
  card: { padding:'15px', margin:'10px 0', background:'#ffffff', borderRadius:'10px', boxShadow:'0 4px 12px rgba(0,0,0,0.1)' },
  button: { padding:'8px 16px', border:'none', borderRadius:'6px', background:'#3498db', color:'white', cursor:'pointer' }
};

export default UserDashboard;
