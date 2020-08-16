/** ****************************
 * Dependencies
 ***************************** */
import React, { Component } from 'react';

/** ****************************
 * Components
 ***************************** */
import NavigationBar from '../navigationBar/NavigationBar';

class Budget extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <NavigationBar />
        <h2>Budget</h2>
      </>
    );
  }
}

export default Budget;
