import React, { Component } from 'react';
import { Link } from 'umi';

class Layout extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="/">home</Link> </li>
          <li><Link to="/user">user</Link> </li>
          <li><Link to="/profile">profile</Link> </li>
        </ul>
        {this.props.children}
      </>
    );
  }
}

export default Layout;
