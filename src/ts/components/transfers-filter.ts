import { Component } from '../models/component';

export class TransfersFilter extends Component<HTMLSelectElement> {
  constructor(event: string, fn: () => void) {
    super('.transfers-filter', event, fn);
  }

  filterTransfers(transfers: { amount: number; date: string }[]) {
    if (this.rootElement.value === 'deposits')
      return transfers.filter(transfer => transfer.amount > 0);

    if (this.rootElement.value === 'withdrawals')
      return transfers.filter(transfer => transfer.amount < 0);

    return transfers;
  }
}
