import React, { Component } from 'react';
import Navbar from './Components/NavBar/Navbar'
import Tourlist from './Components/Tourlist/Tourlist'

class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Navbar/>
        <Tourlist />
    </React.Fragment>       
    );
  }
}

export default App;

