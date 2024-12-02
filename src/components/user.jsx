import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Erreur lors de la suppression:', error));
  };

  return (
    <div className="container mt-5">
      <h2>Liste des utilisateurs</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom d'utilisateur</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/users/edit/${user.id}`} className="btn btn-primary btn-sm me-2">Modifier</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/users/create" className="btn btn-success">Ajouter un utilisateur</Link>
    </div>
  );
};

export default UserList;
