import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import {
  Media,
  //   Form,
  //   FormGroup,
  //   FormControl,
  //   Button,
  //   Link,
} from "react-bootstrap";

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getGitHubData("greg");
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }
  render() {
    // const listUsers = this.state.data.map((a) => (
    //   <Media key={a.id}>
    //     <Media.Body>
    //       <a href={a.html_url}>
    //         <img width={64} height={64} src={a.avatar_url} alt="" />
    //       </a>
    //     </Media.Body>
    //     <Media.Body>
    //       <Media.Body>{a.login}</Media.Body>
    //       <p>Score: {a.score}</p>
    //     </Media.Body>
    //   </Media>
    // ));
    return (
      <div>
        <h3>GitHub Users Results</h3>
        {this.state.isLoading && <ReactLoading type="spin" color="#444" />}
        {/* {listUsers} */}
      </div>
    );
  }
}
export default GitHub;
