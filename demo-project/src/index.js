import "./index.css";
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
