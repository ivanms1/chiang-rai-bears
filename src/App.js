import React, { Component } from 'react';
import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import PageThree from './components/page-three';
import PageFour from './components/page-four';
import PageFive from './components/page-five';
import Footer from './components/footer';
import M from 'materialize-css';
import './App.css';

class App extends Component {
	componentDidMount(){
		M.AutoInit();
	}
  render() {
    return (
      <div className="App">
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>
        <PageFive/>
        <Footer/>
      </div>
    );
  }
}

export default App;
