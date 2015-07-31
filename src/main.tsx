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

export function bootstrap (props: Props) {
  var div = document.createElement("DIV");
  div.id = "app";
  document.body.appendChild(div);
  React.render(<Component {...props}/>, div);
}
