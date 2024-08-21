import React, { useState } from 'react';
import Widget from './Widget';

const Category = ({ category, setData, data }) => {
  const [newWidget, setNewWidget] = useState({ title: '', content: '' });

  const addWidget = () => {
    const updatedCategories = data.categories.map(cat => {
      if (cat.name === category.name) {
        return {
          ...cat,
          widgets: [...cat.widgets, { ...newWidget, id: Date.now() }]
        };
      }
      return cat;
    });
    setData({ ...data, categories: updatedCategories });
    setNewWidget({ title: '', content: '' });
  };

  const removeWidget = (widgetId) => {
    const updatedCategories = data.categories.map(cat => {
      if (cat.name === category.name) {
        return {
          ...cat,
          widgets: cat.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return cat;
    });
    setData({ ...data, categories: updatedCategories });
  };

  return (
    <div className="my-4">
      <h5>{category.name}</h5>
      <div className="row">
        {category.widgets.map(widget => (
          <div key={widget.id} className="col-md-4 mb-4">
            <Widget widget={widget} removeWidget={removeWidget} />
          </div>
        ))}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <input
                type="text"
                placeholder="Widget Title"
                value={newWidget.title}
                onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Widget Content"
                value={newWidget.content}
                onChange={(e) => setNewWidget({ ...newWidget, content: e.target.value })}
                className="form-control mb-2"
              />
              <button className="btn btn-primary" onClick={addWidget}>+ Add Widget</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
