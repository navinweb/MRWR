import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  render() {

    if (this.props.post.title) {
      return (
        <li className="list-group-item" key={this.props.id}>
          <Link to={`/posts/${this.props.id}`}>
            {this.props.post.title}
          </Link>
        </li>
      );
    } else {
      return false;
    }
  }
}

export default PostItem;
