# Bank App

## About

> **Note**  
> Bank App is a simple project without any practical use. My aim was to improve my skills in TypeScript development with OOP approach.

The idea is that a user can check his balance and manage it.  
The app takes the dummy data from `src/store/DUMMY_USERS.ts` to render UI.

### Users data to login:

| login | pin  |
| ----- | ---- |
| 'ef'  | 1111 |
| 'as'  | 2222 |
| 'ai'  | 3333 |

#### 💡 Highlights

- A user can transfer his money to another one.
- In order to transfer money a user should provide a recipient login and transfer amount in the "Transfer money" form.
- Transfer amount must be greater than 0 and not less than users's total balance.
- A user can't transfer money to himself.
- In order to close the account a user should enter his login and pin in the "Close account" form.

## Website link

https://bank-app-prv.netlify.app

> **Note**  
> The app is not adapted for the mobile version

## Technology stack

- PUG
- SCSS
- TypeScript
- Webpack 5

## Installation and launch

Clone the reprepository:

```
git clone https://github.com/alexkaze/bank-app.git
```

Install the project:

```
npm install
```

Run on local server:

```
npm run dev
```

## App screenshots
<details><summary><b>Развернуть</b></summary>

![main-page](https://github.com/alexkaze/bank-app/assets/85958340/21037a20-bb94-4bf3-bd1f-a7ae5abfd5a5)
![ui-page](https://github.com/alexkaze/bank-app/assets/85958340/f909ae73-309e-48f6-8ff1-66cc7916689e)

</details>
