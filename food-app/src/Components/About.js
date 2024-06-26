import axios from "axios";
import UserClass from "./UserClass";
import React from "react";
import { UserContext } from "../utils/userContext";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      name: "",
      location: "",
      url: "",
      avatar_url: "",
    };
  }
  componentDidMount() {
    console.log("Parent CompoenentDidMount");
    this.fetchData();
  }
  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate");
  }

  fetchData = async () => {
    let res = await axios.get("https://api.github.com/users/ManoharCHV");
    console.log(res.data);
    this.setState({
      name: res?.data?.name,
      location: res?.data?.location,
      url: res?.data?.url,
      avatar_url: res?.data?.avatar_url,
    });
  };
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserClass
          name={this.state.name}
          location={this.state.location}
          contact={this.state.url}
          avatar={this.state.avatar_url}
        ></UserClass>
        {/*using context in class based components*/}
        <UserContext.Consumer>
          {(data) => {
            console.log(data);
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

/*
Two Phases
    render phase
    mounting phase
 Eg:Parent with no child:
    render phase:
        constructor
        render
    mounting phase:
        componentDidMount
Eg:Parent With Child:
render phase:
        constructor
        render
        child constructor
        child render
    mounting phase:
        child ComponentDidMount
        parent ComponentDidMount
*/
