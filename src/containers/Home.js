import React, { Component } from "react";
import "./Home.css";
import { Route, NavLink } from "react-router-dom";
import Users from "./Users/Users";
import Courses from "./Courses/Courses";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink 
                    to = '/users'
                >Users</NavLink>
              </li>
              <li>
                <NavLink
                    to = '/courses'
                >Courses</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/users" component={Users} />
        <Route path="/courses" component={Courses} />
      </div>
    );
  }
}

export default Home;
