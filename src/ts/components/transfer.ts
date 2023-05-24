import { Calculations } from '../state/calculations';

export class Transfer {
  constructor(private locale: string, private currency: string) {}

  private formatDate(date: string) {
    return Intl.DateTimeFormat(this.locale).format(new Date(date));
  }

  createTransferEl(transferData: { amount: number; date: string }) {
    const type = transferData.amount > 0 ? 'deposit' : 'withdrawal';
    const formattedMovement = Calculations.formatCurrency(
      this.locale,
      this.currency,
      transferData.amount
    );

    const elTransfer = document.createElement('div');
    elTransfer.classList.add('transfers__row', `transfers__row--${type}`);
    elTransfer.innerHTML = `
        <div>${type}</div>
        <div class="transfers__date">${this.formatDate(transferData.date)}
        </div>
        <div class="transfers__mount">${formattedMovement}</div>
    `;

    return elTransfer;
  }
}
