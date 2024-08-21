// Dashboard.js

import React, { useState } from 'react';
import Category from './Category';
import { dashboardData } from './data';

const Dashboard = () => {
  const [data, setData] = useState(dashboardData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="container " >
      <div className="row my-4">
        <div className="col ">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      {filteredData.map((category, index) => (
        <Category key={index} category={category} setData={setData} data={data} />
      ))}
    </div>
  );
};

export default Dashboard;
