import { Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import history from "../history";
import { loadDB } from "../actions";
import { connect } from "react-redux";
import Header from "./Header";
import FoodList from "./FoodList";
import AddFood from "./AddFood";
import EditFood from "./EditFood";
import DeleteFood from "./DeleteFood";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.loadDB();
  }

  render = () => (
    <Router history={history}>
      <div className="main">
        <Header />
        <Switch>
          <Route
            path="/"
            component={(props) => <FoodList {...props} />}
            exact={true}
          />
          <Route
            path="/add"
            component={(props) => <AddFood {...props} />}
            exact={true}
          />
          <Route
            path="/edit/:id"
            component={(props) => <EditFood {...props} />}
            exact={true}
          />
          <Route
            path="/delete/:id"
            component={(props) => <DeleteFood {...props} />}
            exact={true}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, { loadDB })(App);
