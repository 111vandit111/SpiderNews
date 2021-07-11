import React, { Component } from "react";
import "./post.css";
import { connect } from 'react-redux';

class Post extends Component {
 
  render() {
    const Finalpost = this.props.post ? (
      <div className="post card forPost">
        <div className="center forPost">
          <h2 className="card-title forPost">{this.props.post.title}</h2>
        </div>
        <div className="card-content forPost">{this.props.post.body}</div>
      </div>
    ) : (
      <h2 className="center white-text"> ....Post Loading </h2>
    );

    return (
      <div className="container">
        <h4>{Finalpost}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps)=>{
 let id = ownProps.match.params.post_id;
 console.log(id);
  return {
    post: state.posts.find(post=> post.id===id)
   
  }
}

export default connect(mapStateToProps)(Post);
