import React, { Component } from "react";
import Posts from "./Posts/Posts";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Blog.css";

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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:postID" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
