import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import Projects from './projects';

class App extends Component <any, any> {
  constructor (props:any){
    super(props);
    this.state={
      projects: [
        {
          image: 'img',
          title: 'title'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <Projects profile={this.state.projects[0]}/>

         
          
        </header>
      </div>
    );
  }
}

export default App;
