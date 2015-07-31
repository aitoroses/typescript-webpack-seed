var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react/addons");
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        _super.apply(this, arguments);
    }
    Component.prototype.render = function () {
        return (React.createElement("div", null, this.props.title));
    };
    return Component;
})(React.Component);
exports.Component = Component;
function bootstrap(props) {
    var div = document.createElement("DIV");
    div.id = "app";
    document.body.appendChild(div);
    React.render(React.createElement(Component, React.__spread({}, props)), div);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=main.js.map