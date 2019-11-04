import Component from "../BaseComponent";
import styles from './Input.styl';

export default class Input extends Component {
  constructor(props, children) {
    super(props, children);
  }

  render() {
    const { type, value, placeholder, onInput, attributes, className } = this.props;

    return this.createComponent({
      tag: 'input',
      onInput: onInput || (() => {}),
      attributes: {
        class: `${styles.text} ${className}`,
        type: type || 'text',
        value: value || '',
        placeholder: placeholder || 'text',
        ...attributes
      }
    })
  }
}
