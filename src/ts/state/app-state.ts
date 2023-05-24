import DUMMY_USERS from '../../store/DUMMY_USERS';

class AppState {
  readonly accounts: AccountData[];
  private _curAccount: AccountData | undefined;
  private static instance: AppState;

  constructor() {
    this.accounts = DUMMY_USERS;
  }

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new AppState();
    return this.instance;
  }

  get curAccount() {
    return this._curAccount;
  }

  set setCurAccount(inputValue: string) {
    this._curAccount = this.accounts.find(
      account => account.username === inputValue
    );
  }
}

export const appState = AppState.getInstance();
