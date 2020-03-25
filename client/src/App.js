import React from "react";
import { Message } from "./component/Message";
import { Form } from "./container/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/success">
          <Message msg="Success" />
        </Route>
        <Route exact path="/">
          <Form />
        </Route>
        <Route>
          <Message msg="No Match" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
