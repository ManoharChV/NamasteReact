import { Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log("Child Constructor")
    }
    componentDidMount(){
        console.log("Child ComponentDidMount")
    }
    componentDidUpdate(){
        console.log("Child ComponentDidUpdate")
    }
    componentWillUnmount(){
        console.log("Child componentWillUnmount")
    }
    render() {
        console.log("Child Render")
        const {name, location, contact, avatar}=this.props 
        return (<div className='user-card'>
        <img className="user-avatar" alt="userimage" src={avatar}></img>
        <h1>Name :{name}</h1>
        <h3>Location :{location}</h3>
        <h3>Contact :{contact}</h3>
        </div>);
    }
}
 
export default UserClass;