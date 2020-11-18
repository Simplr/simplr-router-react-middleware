![Title Image](simplr-router-title-image.png)

# Simplr-Router React Middleware

## Introduction

This repository contains the React middleware needed for running [Simplr Router](https://github.com/Simplr/simplr-router) with React.

## Usage

The example is created on top of create-react-app.

```javascript
import App from "./App";
import Hello from "./Hello";
import SimplrRouter from "@simplr-wc/router";
import SimplrRouterReactMiddleware from "@simplr-wc/router-react-middleware";

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/hello",
    component: Hello,
    routes: [
      {
        path: ":name",
        component: Hello,
      },
    ],
  },
];

const router = new SimplrRouter({ routes });
router.use(SimplrRouterReactMiddleware());
router.init();
```

The properties from dynamic routes are accessible from the props of the component.

```javascript
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
```
