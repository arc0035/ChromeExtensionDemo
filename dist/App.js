import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
const logo = require("./logo.svg");
import './App.css';
function App() {
    return (_jsx("div", { className: "App", children: _jsxs("header", { className: "App-header", children: [_jsx("img", { src: logo, className: "App-logo", alt: "logo" }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to reload."] }), _jsx("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer", children: "Learn React" })] }) }));
}
export default App;
