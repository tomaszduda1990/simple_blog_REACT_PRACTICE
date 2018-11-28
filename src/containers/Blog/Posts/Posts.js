import React from "react";
import axios from "../../../axios.js";
import Post from "../../../components/Post/Post";
import FullPost from "../../../components/FullPost/FullPost";
import NewPost from "../../../components/NewPost/NewPost";
import { Route, Link } from "react-router-dom";
class Posts extends React.Component {
  state = {
    posts: []
  };
  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
    this.props.history.push("/posts/" + id);
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(err => {
        console.log(err);
        this.setState(() => ({ error: true }));
      });
  }

  render() {
    const errorMessage = <p>Error has occured... Please try again later</p>;
    const posts = this.state.posts.map(post => {
      return (
        // <Link className="Post" key={post.id} to={"/" + post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        // </Link>
      );
    });
    return (
      <div>
        <section className="Posts">
          {this.state.error ? errorMessage : posts}
        </section>
        <Route path="/posts/:postID" component={FullPost} />
      </div>
    );
  }
}

export default Posts;
