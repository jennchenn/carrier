import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Breadcrumbs, Groups, IssueMaker, Posts, PastIssue } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route path="/" exact component={() => <Groups />} />
          <Route path="/Groups/:group/Posts" exact component={() => <Posts />} />
          <Route path="/Groups/:group/Posts/Aug29/Edit" exact component={() => <IssueMaker />} />
          <Route path="/Groups/:group/Posts/Aug28" exact component={() => <PastIssue />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
