import { appState } from './app-state';
import { Transfers } from '../components/transfers';
import { assignEl } from '../utils/assignEl';
import { Calculations } from './calculations';

export class AccountUI {
  constructor() {
    const { owner, transfers, currency, locale } = appState.curAccount!;

    this.welcome(owner);
    this.loginDate(locale);
    new Transfers();
    this.calcSum(transfers, locale, currency);
  }

  private welcome(owner: string) {
    const labelWelcomeText = assignEl<HTMLHeadingElement>('.header__title');
    labelWelcomeText.textContent = `Welcome back, ${owner.split(' ')[0]}`;
  }

  private loginDate(locale: string) {
    const labelDate = assignEl<HTMLTimeElement>('.main-header__date');

    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    const dateStr = new Intl.DateTimeFormat(
      locale,
      options as Intl.DateTimeFormatOptions
    ).format(Date.now());

    labelDate.textContent = `${dateStr}`;
  }

  calcSum(transfers: number[], locale: string, currency: string) {
    Calculations.render(transfers, locale, currency);
  }
}
