import React, { Component, Suspense } from "react";
import Posts from "./Posts/Posts";
import FullPost from "../../components/FullPost/FullPost";
import AsyncComponent from "../../hoc/asyncComponent";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

// old approach for lazy loading
// const AsyncNewPost = AsyncComponent(() =>
//   import("../../components/NewPost/NewPost")
// );

// new approach for lazy loading
const NewPost = React.lazy(() => import("../../components/NewPost/NewPost"));

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
          {/* <Route path="/new-post" component={AsyncNewPost} />*/}
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<p>...Loading...</p>}>
                <NewPost />
              </Suspense>
            )}
          />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
