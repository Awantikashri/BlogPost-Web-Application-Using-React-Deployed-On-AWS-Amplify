import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand"><img src="LogoNew.001.png" width="200px"></img></Link>
          <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/" className="nav-link">View Blogs</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/create" className="nav-link">Publish Blog</Link>
                        </li>
                        <Link to="/" className="nav-link">Forum</Link>
                        <li className="navbar-item">
                
                        </li>
                        <li className="navbar-item">
                        <Link to="/login" className="nav-link">About</Link>
                        </li>
                    </ul>
            </div>
      </nav>
    );
  }
}