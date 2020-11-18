import logo from "./logo.svg";
import "./App.css";
import { changeView } from "@simplr-wc/router";

function Hello(props) {
  function handleSubmit() {
    const name = document.querySelector("input[type='text']").value;
    changeView(`/hello/${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {props.name || "World"}!</p>
        <input type="text" placeholder="Enter a name here and press submit" />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </header>
    </div>
  );
}

export default Hello;
