import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log(this.props.match.params);
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  loadData = () => {
    if (this.props.match.params.postID) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.postID)
      ) {
        axios.get("/posts/" + this.props.match.params.postID).then(response => {
          // console.log(response);
          this.setState({ loadedPost: response.data });
        });
      }
    }
  };

  deleteHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.postID}`)
      .then(res => console.log(res));
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.postID) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
