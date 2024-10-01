import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // If you're using React Router for dynamic routing
import { useSingleuserQuery } from '../rtk/Api';

const SingleUser = () => {
  const { id } = useParams();
  console.log(id,"id")
   // Get user ID from URL if using React Router
  const {data} =useSingleuserQuery(id)
  console.log(data,"useSingleuserQuery")


 

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Details</h2>
        <p><strong>Name:</strong> {data?.data.name}</p>
        <p><strong>Email:</strong> {data?.data.email}</p>
        <p><strong>Password:</strong> {data?.data.password}</p>
      </div>
    </div>
  );
};

// Basic styles for the component
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default SingleUser;
