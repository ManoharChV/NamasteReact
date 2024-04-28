import { Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {name, location, contact}=this.props 
        return (<div className='user-card'>
        <h1>Name :{name}</h1>
        <h3>Location :{location}</h3>
        <h3>Contact :{contact}</h3>
        </div>);
    }
}
 
export default UserClass;