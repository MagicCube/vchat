import injectTapEventPlugin from "react-tap-event-plugin";
import ReactDOM from "react-dom";

import Application from "./app/Application.jsx";

injectTapEventPlugin();
ReactDOM.render(<Application/>, document.getElementById("app"));
