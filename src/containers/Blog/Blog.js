import React, { Component } from "react";
import Posts from "./Posts/Posts";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className="List">
              <li>
                <NavLink
                  exact
                  activeClassName="activeClass"
                  activeStyle={{ textTransform: "uppercase" }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeClass" to="/new-post">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <Posts />} /> */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
