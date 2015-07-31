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

export function bootstrap (name: string) {
  React.render(<Component title={name}/>, document.getElementById("app"));
}
