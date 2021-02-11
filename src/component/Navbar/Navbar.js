import React, { Component } from "react";
import "./Navbar.css";
import PropsTypes from "prop-types";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
  };
  static defaultPropTypes = {
    title: PropsTypes.string.isRequired,
    icon: PropsTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar">
        <h1>
          <FontAwesomeIcon icon={faGithub} /> {this.props.title}
        </h1>
        <ul>
          <li> 
              <Link to ="/">Home</Link></li>
           
           <li> <Link to ="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
