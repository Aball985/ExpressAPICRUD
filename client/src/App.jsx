import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddTutorial from "./components/AddTutorial.component";
import Navbar from "./components/Navbar/Navbar.component";
import Tutorial from "./components/Tutorial.component";
import TutorialList from "./components/TutorialList.component";
import Homepage from "./pages/Homepage/Home.page";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={"/"} component={Homepage} />
            <Route exact path={"/add"} component={AddTutorial} />
            <Route exact path={"/tutorials"} component={TutorialList} />
            <Route exact path={"/tutorials/:id"} component={Tutorial} />
          </Switch>
        </div>
      </Router>
    );
  }
}
