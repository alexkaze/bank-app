import { appState } from './state/app-state';
import { assignEl } from './utils/assignEl';
import { clearForm } from './utils/clearForm';
import { Validation } from './utils/validation';
import { AccountUI } from './state/account-ui';
import { AccountActions } from './state/account-actions';
import { TemplateContent } from './components/template-content';

// App
export class App {
  private isLogin: Boolean;
  private containerForm: HTMLFormElement;
  private inputLoginUsername: HTMLInputElement | undefined;
  private inputLoginPin: HTMLInputElement | undefined;
  private btnLogin: HTMLButtonElement | undefined;
  private btnLogout: HTMLButtonElement | undefined;

  constructor() {
    this.isLogin = false;
    this.containerForm = assignEl<HTMLFormElement>('.login-form');
    this.configLoginUI(this.isLogin);
  }

  configLoginUI(isLogin: Boolean) {
    if (!isLogin) {
      this.containerForm.innerHTML = '';

      TemplateContent.mountEl(
        '#header-template',
        '.login-form',
        '#login-username'
      );

      TemplateContent.mountEl('#header-template', '.login-form', '#login-pin');
      TemplateContent.mountEl('#header-template', '.login-form', '#btn-login');

      this.inputLoginUsername = assignEl<HTMLInputElement>('#login-username');
      this.inputLoginPin = assignEl<HTMLInputElement>('#login-pin');

      this.btnLogin = assignEl<HTMLButtonElement>(
        '#btn-login',
        'click',
        this.login.bind(this)
      );
    }

    if (isLogin) {
      this.containerForm.innerHTML = '';

      TemplateContent.mountEl('#header-template', '.login-form', '#btn-logout');

      this.btnLogout = assignEl<HTMLButtonElement>(
        '#btn-logout',
        'click',
        this.logout.bind(this)
      );
    }
  }

  private login() {
    if (this.inputLoginUsername && this.inputLoginPin) {
      appState.setCurAccount = this.inputLoginUsername.value;
      const loginPinValue = +this.inputLoginPin.value;

      if (!Validation.login(appState.curAccount, loginPinValue)) return;
      clearForm(this.inputLoginUsername, this.inputLoginPin);
    }

    if (appState.curAccount) {
      this.isLogin = true;
      TemplateContent.mountMain('#main-template', '.main');
      this.configLoginUI(this.isLogin);
      new AccountUI();
      new AccountActions();
    }
  }

  private logout() {
    if (this.isLogin) {
      this.isLogin = false;
      TemplateContent.unmountMain('.main');
      this.configLoginUI(this.isLogin);
    }
  }
}
