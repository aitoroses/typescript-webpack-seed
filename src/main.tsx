import * as React from "react/addons";

export interface Props {
  title: string
}

export interface State {}

export class Component extends React.Component<Props, State> {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}

React.render(
  <Component title='aasdf'/>,
   document.getElementById("app")
);
