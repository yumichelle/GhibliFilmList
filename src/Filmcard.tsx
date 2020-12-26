import React, {Component} from 'react';
import './Filmcard.css';

class Filmcard extends Component<any, any> {
    constructor (props:any){
        super(props);
        console.log(this.props);
        // console.log: to see if there's data in console
    }

    render(){
        return (
                <div className="container">
                        <h1>{this.props.information.title}</h1>
                    <div className="cardinfo">
                        <div className="responsedata_information">description:</div> 
                        <div>{this.props.information.description}</div>
                    
                        <div className="responsedata_information">director:</div>
                        <div>{this.props.information.director}</div>
                    
                        <div className="responsedata_information">producer:</div>
                        <div>{this.props.information.producer}</div>
                        
                        <div className="responsedata_information">release date:</div>
                        <div>{this.props.information.release_date}</div>
                    
                        <div className="responsedata_information">film ratings:</div>
                        <div>{this.props.information.rt_score}</div>
                    </div>
                </div>
           
        );
    }
}

export default Filmcard;