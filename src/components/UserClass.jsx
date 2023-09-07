import React from "react";

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
    console.log("constructor is called");
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/bhushankhope");
    // const json = await data.json();

    // this.setState({
    //   userInfo: json
    // });
    this.timer = setInterval(() => {
      console.log('Bhushan K');
    }, 1000);
    console.log('component is mounted');
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('component unmounted');
  }
  render() {
    const { greet } = this.props;
    const { name, login, avatar_url } = this.state.userInfo;
    console.log('rendered with '+this.state.userInfo.name);
    return (
      <div>
        <h1>{greet}</h1>
        <h1>{name}</h1>
        <h1>{login}</h1>
        <img src={avatar_url}></img>
      </div>
    )
  }
}

export default UserClass;
