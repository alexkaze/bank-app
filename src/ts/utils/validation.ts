import { appState } from '../state/app-state';

export abstract class Validation {
  static login(
    curAcc: AccountData | undefined,
    inputPinValue: number | undefined
  ) {
    if (!curAcc || !inputPinValue || inputPinValue !== curAcc.pin) {
      console.error('Wrong login or password!'.toLocaleUpperCase());
      return false;
    }
    return true;
  }

  static transferTo(
    receiverAcc: AccountData | undefined,
    transferAmount: number | undefined
  ) {
    const totalBalance = appState.curAccount!.transfers.reduce(
      (acc, mov) => acc + mov,
      0
    );

    if (!receiverAcc) {
      console.error(
        'The recipient with the specified nickname was not found!'.toLocaleUpperCase()
      );
      return false;
    }

    if (receiverAcc.username === appState.curAccount!.username) {
      console.error(
        'Funds transfer to yourself is impossible'.toLocaleUpperCase()
      );
      return false;
    }

    if (!transferAmount || transferAmount === 0) {
      console.error(
        'The transfer amount must be greater than 0!'.toLocaleUpperCase()
      );
      return false;
    }

    if (transferAmount > totalBalance) {
      console.error('Insufficient funds for the transfer!'.toLocaleUpperCase());
      return false;
    }

    return true;
  }

  static closeCurAcc() {}
}
