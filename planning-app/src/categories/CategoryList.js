import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    axios
      .get("https://mypartyplanner.herokuapp.com/api/categories")
      .then(res => this.setState({ category: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="category-list">
        {this.state.category.map(category => (
          <CategoryDetails key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

function CategoryDetails({ category }) {
  return (
    <Link to={`/category/${category.id}`}>
      <CategoryCard category={category} />
    </Link>
  );
}
