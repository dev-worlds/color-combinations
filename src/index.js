import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ColorCombination from "./components/colorCombination";

const App = () => {
    return <ColorCombination/>;
}

reactDom.render(<App/>, document.getElementById('root'))
