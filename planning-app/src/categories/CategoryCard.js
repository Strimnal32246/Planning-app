import React from "react";

const CategoryCard = props => {
  const { name, info } = props.category;
  return (
    <div className="Category-card">
      <h2>{name}</h2>

      {into.map(info => (
        <div key={info} className="category-selection">
          {info}
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
