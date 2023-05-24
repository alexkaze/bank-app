import { Component } from '../models/component';
import { appState } from '../state/app-state';
import { TransfersFilter } from './transfers-filter';
import { Transfer } from './transfer';

export class Transfers extends Component<HTMLDivElement> {
  private transfersFilter: TransfersFilter;
  private static transfer: Transfer;
  private transfersData: { amount: number; date: string }[];
  private static transfersContainer: HTMLDivElement;

  constructor() {
    super('.transfers');
    Transfers.transfersContainer = this.rootElement;

    const { locale, currency, transfers, transfersDates } =
      appState.curAccount!;

    this.transfersFilter = new TransfersFilter(
      'change',
      this.renderTransfers.bind(this)
    );

    Transfers.transfer = new Transfer(locale, currency);

    this.transfersData = transfers.map((transfer, i) => ({
      amount: transfer,
      date: transfersDates[i],
    }));

    this.renderTransfers();
  }

  static renderTransfer(transferData: { amount: number; date: string }) {
    const elTransfer = this.transfer.createTransferEl(transferData);
    this.transfersContainer.insertAdjacentElement('afterbegin', elTransfer);
  }

  private renderTransfers() {
    Transfers.transfersContainer.innerHTML = '';

    const filteredTransfers = this.transfersFilter.filterTransfers(
      this.transfersData
    );

    filteredTransfers.forEach(transferData =>
      Transfers.renderTransfer(transferData)
    );
  }
}
