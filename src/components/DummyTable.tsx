import React from 'react';

const DummyTable: React.FC = () => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Michael Johnson</td>
        <td>35</td>
      </tr>
    </tbody>
  </table>
);

export default DummyTable;
