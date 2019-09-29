import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Categories:</h3>
        {this.props.list.map(category => {
          return (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              activeClassName="saved-active"
            >
              <span className="saved-category">{category.name}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
