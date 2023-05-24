export const assignEl = <T extends HTMLElement>(
  selector: string,
  event?: string,
  cbfn?: () => void
) => {
  const el = document.querySelector(selector) as T;

  if (cbfn) {
    el.addEventListener(event!, e => {
      e.preventDefault();
      cbfn();
    });
  }

  return el;
};
