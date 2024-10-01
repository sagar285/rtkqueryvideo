import React, { useState } from 'react';
import { useDeleteuserMutation, useGetalluserQuery } from '../rtk/Api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
 
    const {data} =useGetalluserQuery()
    const navigate =useNavigate()

    console.log(data,"useGetalluserQuery");
    const [deleteuser,{isSuccess}] =useDeleteuserMutation()


  const handleView = (id) => {
    // Implement view functionality (e.g., show user details)
    navigate(`/user/${id}`);
  };

  const handleDelete = async(id) => {
    // Implement delete functionality
    // const filteredUsers = users.filter((user) => user.id !== id);
    // setUsers(filteredUsers);
    const res = await deleteuser(id)
    console.log(res);

  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Users</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.password}</td>
              <td style={styles.td}>
                <button
                  style={styles.viewButton}
                  onClick={() => handleView(user._id)}
                >
                  View
                </button>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    marginRight: '8px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
