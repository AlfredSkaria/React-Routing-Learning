import React, { Component } from "react";
import "./Home.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
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
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses"/>
          <Route render={ () => <h1>Not Found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default Home;
