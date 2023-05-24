# Bank App

This is a training project to improve my skills in app development with OOP approach.

The idea is that the user can watch his balance and manage it. There are users data given `src/store/DUMMY_USERS.ts` the app takes to render UI.

#### The following stack is used:

- PUG
- SCSS
- TypeScript
- Webpack 5

You can try https://bank-app-prv.netlify.app

Users data to login:

| login | pin  |
| ----- | ---- |
| 'ef'  | 1111 |
| 'as'  | 2222 |
| 'ai'  | 3333 |

#### 💡 Highlights

- A user can transfer his money to another one.
- Transfer amount must be greater than 0 and not less than users's total balance.
- Also a user can't transfer money to himself.
- In order to close the account a user should enter his login and pin in the close form.

> **Warning**  
> Unfortunately the error popup messages has not been added yet. The Highlights block introduced above should help.
