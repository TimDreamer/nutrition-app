import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import FoodList from "./FoodList";
import AddFood from "./AddFood";
import EditFood from "./EditFood";
import "./App.css";

const App = () => (
  <BrowserRouter>
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
          path="/edit"
          component={(props) => <EditFood {...props} />}
          exact={true}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
