import React from "react";

import Theme from "./components/Theme";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import auth from "./authentication";

import {
  Dashboard
} from "./views";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
    }
  }

  componentDidMount() {
    if (auth.personalAccessToken) {
      auth.checkPersonalAccessToken(auth.personalAccessToken).then((res) => {
        this.setState({
          user: res.data,
          loading: false,
        });
      });
    } else {
      auth.createPersonalAccessToken().then((res) => {
        auth.personalAccessToken = res;
      });
    }
  }

  render() {
    return (
      <Theme loading={this.state.loading}>
        <Router>
          <div>
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </Theme>
    );
  }
}

export default App;