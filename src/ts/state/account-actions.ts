import { appState } from './app-state';
import { assignEl } from '../utils/assignEl';
import { Validation } from '../utils/validation';
import { Transfers } from '../components/transfers';
import { clearForm } from '../utils/clearForm';
import { Calculations } from './calculations';

export class AccountActions {
  private inputTransferTo: HTMLInputElement;
  private inputTransferAmount: HTMLInputElement;
  private btnTransferTo: HTMLButtonElement;

  constructor() {
    this.inputTransferTo = assignEl<HTMLInputElement>('#transfer-to');
    this.inputTransferAmount = assignEl<HTMLInputElement>('#transfer-amount');
    this.btnTransferTo = assignEl<HTMLButtonElement>(
      '#btn-transfer-to',
      'click',
      this.transferTo.bind(this)
    );
  }

  private pushTransfer(acc: AccountData, amount: number) {
    acc.transfers.push(amount);
    acc.transfersDates.push(new Date().toISOString());
  }

  transferTo() {
    const receiverAccount = appState.accounts.find(
      account => account.username === this.inputTransferTo.value
    );
    const transferAmount = +this.inputTransferAmount.value;

    if (!Validation.transferTo(receiverAccount, transferAmount)) return;

    this.pushTransfer(appState.curAccount!, -transferAmount);
    this.pushTransfer(receiverAccount!, transferAmount);

    Transfers.renderTransfer({
      amount: -transferAmount,
      date: new Date().toISOString(),
    });

    clearForm(this.inputTransferTo, this.inputTransferAmount);

    const { transfers, locale, currency } = appState.curAccount!;
    Calculations.render(transfers, locale, currency);
  }

  closeAcc() {}
}
