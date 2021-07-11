import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Home extends Component {
 
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const PostList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title center ">
                <Link to={"/" + post.id} className=" pink-text title">
                  <b>{post.title}</b>
                </Link>
              </span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">' no posts yet '</div>
    );
    return (
      <div className="container home">
        <h3 className="center blue-text">
          <b>Home</b>
        </h3>
        <p>{PostList}</p>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    posts : state.posts
  }
}

export default connect(mapStateToProps)(Home);
