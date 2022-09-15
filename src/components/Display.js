import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    return (
      <div className="dislay">
        <input type="text" className="dislay-input" placeholder="0" />
      </div>
    );
  }
}

export default Display;
