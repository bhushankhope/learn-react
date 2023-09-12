import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        About
        {/* <User></User> */}
        <UserClass greet={"Hello"}></UserClass>
      </div>
    );
  }
}

export default About;
