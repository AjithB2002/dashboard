// Widget.js

import React from 'react';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="card-title">{widget.title}</h6>
          <button className="btn btn-sm btn-danger" onClick={() => removeWidget(widget.id)}>&times;</button>
        </div>
        <p>{widget.content}</p>
      </div>
    </div>
  );
};

export default Widget;
