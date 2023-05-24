# Bank App

> **Note**  
> This is a training project to improve my skills in app development with OOP approach.

---

The idea is that the user can watch his balance and manage it.  
The app takes the dummy data from `src/store/DUMMY_USERS.ts` to render UI.

You can try https://bank-app-prv.netlify.app

> **Note**  
> The app is not adapted for the mobile version

### The following stack is used:

- PUG
- SCSS
- TypeScript
- Webpack 5

## Users data to login:

| login | pin  |
| ----- | ---- |
| 'ef'  | 1111 |
| 'as'  | 2222 |
| 'ai'  | 3333 |

---

#### 💡 Highlights

- A user can transfer his money to another one.
- Transfer amount must be greater than 0 and not less than users's total balance.
- Also a user can't transfer money to himself.
- In order to close the account a user should enter his login and pin in the close form.

> **Warning**  
> The error popup messages has not been added yet. The Highlights block introduced above should help.
