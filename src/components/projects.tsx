import React, { Component } from 'react';

class Projects extends Component<any, any>{
    constructor(props:any){
        super(props);
        console.log(this.props.profile);
    }

    render (){
        return (
            <div>
                <div>
                    {this.props.profile.image}
                </div>
                <div>
                    {this.props.profile.title}
                </div>
            </div>
        );
    }
};

export default Projects;