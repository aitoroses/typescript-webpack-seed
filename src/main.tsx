import * as React from "react";
import * as Router from 'react-router';

var {Route} = Router;

declare var Tessel;

export interface Props {}
export interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

var routes = (
  <Route handler={App} path="/"></Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
