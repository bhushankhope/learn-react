import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy data",
        login: "dummyUser",
        avatar_url: 'dummypic'
      }
    };
    // console.log("constructor is called");
  }

  async componentDidMount() {
    // console.log('component is mounted');
  }

  componentDidUpdate() {
    // console.log('component updated');
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    // console.log('component unmounted');
  }
  render() {
    const { greet } = this.props;
    const { name, login, avatar_url } = this.state.userInfo;
    // console.log('rendered with '+this.state.userInfo.name);
    return (
      <div>
        <h1>{greet}</h1>
        <h1>{name}</h1>
        <h1>{login}</h1>
        <UserContext.Consumer>
          {
            ({loggedInUser})=><h1>{loggedInUser}</h1>
          }
        </UserContext.Consumer>
        <img src={avatar_url}></img>
      </div>
    )
  }
}

export default UserClass;
