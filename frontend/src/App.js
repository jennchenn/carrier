import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Breadcrumbs, Groups, IssueMaker, Posts, PastIssue } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Groups" />
          </Route>
          <Route path="/Groups" exact component={() => <Groups />} />
          <Route exact path="/Groups/TheBreadGang">
            <Redirect to="/Groups/TheBreadGang/Posts" />
          </Route>
          <Route path="/Groups/TheBreadGang/Posts" exact component={() => <Posts />} />
          <Route exact path="/Groups/TheBreadGang/Posts/Aug29">
            <Redirect to="/Groups/TheBreadGang/Posts/Aug29/Edit" />
          </Route>
          <Route path="/Groups/TheBreadGang/Posts/Aug29/Edit" exact component={() => <IssueMaker />} />
          <Route path="/Groups/TheBreadGang/Posts/Aug28" exact component={() => <PastIssue />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
