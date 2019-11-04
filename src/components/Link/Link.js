import Component, {render} from "../BaseComponent";
import styles from './Link.styl';

const store = {};

export class Router {
    constructor(render, root, routes) {
        store.render = render;
        store.root = root;
        store.routes = routes;
    }

    // withRoute = () => {
    //     const { routes, root, render } = this;
    //     withRoute(routes, root, render);
    // }
}

export class Link extends Component {
    constructor(props, children) {
        super(props, children);
    }

    onLinkClick = e => {
        e.preventDefault();
        const { to } = this.props;

        window.history.pushState(to, to, `${to}`);
        withRoute(store.render, store.root, store.routes);
    };

    render() {
        const { className, to } = this.props;

        return this.createComponent({
            tag: 'a',
            onClick: this.onLinkClick,
            attributes: {
                class: `${styles.label} ${className}`,
                href: to,
            }
        }, [
            to
        ]);
    }
}

export function withRoute(render, root, routes) {
    let instance = routes[0].component;
    for (let route in routes) {
        if (window.location.pathname === routes[route].route) {
            instance = routes[route].component;
        }
        render(instance, root)
    }
}
