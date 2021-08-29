import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Breadcrumbs, Groups, Group, IssueMaker, Posts } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route path="/" exact component={() => <Groups />} />
          <Route path="/Groups/Group/Posts" exact component={() => <Posts />} />
          <Route path="/Groups/Group" exact component={() => <Group />} />
          <Route path="/Groups/Group/Posts/IssueMaker" exact component={() => <IssueMaker />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
