import React, { Component } from '../../../../../../../Users/anatolijkirzo/Library/Caches/typescript/2.9/node_modules/@types/react';
import _ from '../../../../../../../Users/anatolijkirzo/Library/Caches/typescript/2.9/node_modules/@types/lodash';
import { connect } from '../../../../../../../Users/anatolijkirzo/Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
