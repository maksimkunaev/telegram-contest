import Component from "../BaseComponent";
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import Input from "components/Input/Input";
import styles from './Login.styl';
import logoSrc from 'assets/images/t_logo.png';
import {Link} from "../Link/Link";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onPhoneInput = e => {
    console.log('onPhoneInput', e.target.value);
  };

  onCountryInput = e => {
    console.log('onCountryInput', e.target.value);
  };

  onKeepSignInInput = e => {
    console.log('onKeepSignInInput', e.target.checked);
  };

  render() {
    console.log('')
    const logo = this.createComponent({
      tag: 'img',
      attributes: {
        src: logoSrc,
        class: styles.logo,
      },
    });
    const Text = this.createComponent({
      tag: 'p',
      attributes: {
        innerText: 'Keep me signed in',
      },
    });
    const Title = this.createComponent({
      tag: 'p',
      attributes: {
        innerText: 'Sign in to Telegram',
        class: styles.title,
      },
    });
    const Description = this.createComponent({
      tag: 'p',
      attributes: {
        innerText: 'Please confirm your country code and enter your phone number.',
        class: styles.description,
      },
    });

    return this.createComponent({
      tag: 'div',
      attributes: {
        class: styles.login,
      },
    }, [logo, Title, Description,
      new Input({
        type: 'text',
        placeholder: 'Country',
        onInput: this.onCountryInput,
        className: styles.input
      }),
      new Input({
        type: 'number',
        placeholder: 'Phone number',
        onInput: this.onPhoneInput,
        className: styles.input,
        attributes: {
          min: "10",
        },
      }),
      new Checkbox({
        className: styles.checkbox_line,
        type: 'checkbox',
        placeholder: 'iii',
        onInput: this.onKeepSignInInput,
        text: 'Keep me signed in'
      }),
      new Link({
        to: '/',
      }),
      new Link({
        to: '/chat',
      }),
    ])
  }
}
