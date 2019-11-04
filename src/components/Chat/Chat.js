import Component from "../BaseComponent";
import { Link } from "components/Link/Link";
import styles from './Chat.styl';

export default class Chat extends Component {
    render() {
        const Description = this.createComponent({
            tag: 'p',
            attributes: {
                innerText: '',
                class: styles.description,
            },
        });

        return this.createComponent({
            tag: 'div',
            attributes: {
                class: styles.login,
                innerText: 'Chat Component',
            },
        }, [Description,
            new Link({
                to: '/',
            }),
            new Link({
                to: '/chat',
            }),
        ])
    }
}
