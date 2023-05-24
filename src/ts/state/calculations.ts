import { assignEl } from '../utils/assignEl';

export abstract class Calculations {
  static formatCurrency(locale: string, currency: string, balance: number) {
    return Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(balance);
  }

  static render(transfers: number[], locale: string, currency: string) {
    const labelBalance = assignEl<HTMLDivElement>('#balance');
    const labelSumIn = assignEl<HTMLDivElement>('#sum-in');
    const labelSumOut = assignEl<HTMLDivElement>('#sum-out');

    const totalBalance = transfers.reduce((acc, mov) => acc + mov, 0);

    const sumInOut = transfers.reduce(
      (allSum, mov) => {
        mov > 0 ? (allSum.sumIn += mov) : (allSum.sumOut += mov);
        return allSum;
      },
      { sumIn: 0, sumOut: 0 }
    );

    labelBalance.textContent = this.formatCurrency(
      locale,
      currency,
      totalBalance
    );

    labelSumIn.textContent = this.formatCurrency(
      locale,
      currency,
      sumInOut.sumIn
    );

    labelSumOut.textContent = this.formatCurrency(
      locale,
      currency,
      sumInOut.sumOut
    );
  }
}
