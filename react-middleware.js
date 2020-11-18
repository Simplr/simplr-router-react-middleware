import React from "react";
import ReactDOM from "react-dom";

class SimplrRouterReactMiddlewareInstance {
  addViewToContainerOverride(container, viewObject) {
    ReactDOM.render(viewObject, container);
  }

  async createComponentOverride(view) {
    if (view.import) {
      await view.import();
    }

    return React.createElement(view.component, view.params, null);
  }
}

export default function SimplrRouterReactMiddleware() {
  return new SimplrRouterReactMiddlewareInstance();
}
