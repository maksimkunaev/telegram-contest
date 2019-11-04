import { render } from "./BaseComponent";
import Chat from "components/Chat/Chat";
import Login from "components/Login/Login";
import Button from "./Button/Button";
import { withRoute, Router } from "./Link/Link";

const root = document.getElementById('root');

const myButton = new Button();
const myApp = new Login();
const myChat = new Chat();

const routes = [
    {
        route: '/',
        component: myApp,
    },
    {
        route: '/chat',
        component: myChat,
    },
];

// function withRoute(render, root, routes) {
//     let instance = routes[0].component;
//
//     for (let route in routes) {
//         if (window.location.pathname === routes[route].to) {
//             instance = route.component;
//         }
//         render(instance, root)
//     }
// }

new Router(render, root, routes)
withRoute(render, root, routes);
