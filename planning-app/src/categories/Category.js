import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Catgory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
}