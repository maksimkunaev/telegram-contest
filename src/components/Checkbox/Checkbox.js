import Component from "../BaseComponent";
import styles from './Checkbox.styl';

export default class Checkbox extends Component {
  constructor(props, children) {
    super(props, children);
  }

  render() {
    const { type, value, placeholder, onInput, attributes, className, text } = this.props;
    return this.createComponent({
        tag: 'label',
        onInput: onInput || (() => {}),
        attributes: {
            class: `${styles.label} ${className}`,
            type: type || 'text',
            value: value || '',
            placeholder: placeholder || 'text',
            ...attributes
        }
    }, [
        this.createComponent({
            tag: 'input',
            onInput: onInput || (() => {}),
            attributes: {
                class: `${styles.text} ${className}`,
                type: type || 'text',
                value: value || '',
                placeholder: placeholder || 'text',
                ...attributes
            }
        }),
        String(text)
    ]);
    }
}
