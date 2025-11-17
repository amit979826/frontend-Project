import React, { useState } from 'react';

function StoreList({ stores }) {
  const [ratings, setRatings] = useState(
    stores.reduce((acc, store) => {
      acc[store.name] = store.rating || 0; // initialize ratings
      return acc;
    }, {})
  );

  const handleRating = (storeName) => {
    const newRating = prompt(`Enter rating for ${storeName} (1 to 5):`, ratings[storeName]);
    const parsedRating = parseInt(newRating);
    if(parsedRating >= 1 && parsedRating <= 5){
      setRatings(prev => ({ ...prev, [storeName]: parsedRating }));
      alert(`Rating for ${storeName} updated to ${parsedRating} ⭐`);
    } else {
      alert('Please enter a valid rating between 1 and 5');
    }
  };

  return (
    <div>
      {stores && stores.length > 0 ? (
        stores.map((store, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{store.name}</h3>
            <p style={styles.address}><strong>Address:</strong> {store.address}</p>
            <p style={styles.rating}><strong>Overall Rating:</strong> {ratings[store.name]}</p>
            <button style={styles.button} onClick={() => handleRating(store.name)}>
              Submit / Modify Rating
            </button>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center', color: '#2c3e50' }}>No stores available at the moment.</p>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    color: '#2c3e50',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  name: { color: '#2980b9', marginBottom: '8px', fontSize: '22px' },
  address: { marginBottom: '5px' },
  rating: { marginBottom: '12px', color: '#f39c12' },
  button: {
    alignSelf: 'flex-start',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '15px'
  }
};

export default StoreList;
