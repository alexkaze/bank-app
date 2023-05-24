// import { assignEl } from '../utils/assignEl';

// export abstract class Timer {
//   labelTimer: HTMLDivElement;
//   leftTime: number;

//   constructor() {
//     this.labelTimer = assignEl<HTMLDivElement>('.main-footer__timer');
//     this.leftTime = 300;
//   }

//   static timerTick() {
//     const minutes = `${Math.trunc(this.leftTime / 60)}`.padStart(2, 0);
//     const seconds = `${this.leftTime % 60}`.padStart(2, 0);

//     this.labelTimer.textContent = `${minutes}:${seconds}`;

//     if (this.leftTime === 0) {
//       clearInterval(this.timerId);
//       accountVisible(0);
//       welcome('Log in to get started');
//       return;
//     }

//     this.leftTime--;
// }
