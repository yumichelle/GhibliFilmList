import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Filmcard from './Filmcard';

class App extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
      profiles:[
        {
          id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
          name: 'Castle in the Sky',
          description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa.',
          director: 'Hayao Miyazaki',
          producer: 'Isao Takahata',
          release_date: '1986',
          rt_score: '95',
        }
      ],
    }
    this.movieinfo = this.movieinfo.bind(this);
  }

  movieinfo(ghibli: any){
    //can rename the ghibli part
    return(
      <Filmcard key={ghibli.id} information = {ghibli} />
      // key is for react to differentiate using the id in the API.
    );    
  }
  componentDidMount (){
     //will happen right after render
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then( (response) => {
      // do something with response
      console.log(response);
      this.setState({profiles: response.data})
    }).catch( (error) => {
      console.log(error);
    }
    );

  }


  render() {
    return (
      <div className="Filmcard">
          {this.state.profiles.map(this.movieinfo)}

          {/* <Filmcard profile={this.state.profiles[0]}/> */}
      </div>
    );
  }
}

export default App;