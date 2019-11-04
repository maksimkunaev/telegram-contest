import Component from "../BaseComponent";

export default class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return this.createComponent({
      tag: 'button',
      attributes: {
        type: 'button',
        value: 'counter',
      }
    })
  }
}
