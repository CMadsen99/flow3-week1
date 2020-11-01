import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons }) => {
  
  return (
    <div>
      <h2>All Persons</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th><th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm" >Edit</button>
                <button type="button" className="btn btn-danger btn-sm" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PersonList;

PersonList.propTypes = {
  persons: PropTypes.array
}
