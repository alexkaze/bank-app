import { assignEl } from '../utils/assignEl';

export abstract class TemplateContent {
  static mountEl(
    tmplElSelector: string,
    rootElSelector: string,
    elSelector: string
  ) {
    const tmplEl = assignEl<HTMLTemplateElement>(tmplElSelector);
    const rootEl = assignEl<HTMLDivElement>(rootElSelector);
    const tmel = document.importNode(
      tmplEl.content.querySelector(elSelector)!,
      true
    );
    rootEl.insertAdjacentElement('beforeend', tmel);
  }

  static unmountEl(rootElSelector: string) {
    const rootEl = assignEl<HTMLDivElement>(rootElSelector);
    rootEl.innerHTML = '';
  }

  static mountMain(tmplElSelector: string, rootElSelector: string) {
    const tmplEl = assignEl<HTMLTemplateElement>(tmplElSelector);
    const rootEl = assignEl<HTMLDivElement>(rootElSelector);
    rootEl.appendChild(tmplEl.content.cloneNode(true));
    rootEl.classList.add('fadein');
  }

  static unmountMain(rootElSelector: string) {
    const rootEl = assignEl<HTMLDivElement>(rootElSelector);
    rootEl.innerHTML = '';
    rootEl.classList.remove('fadein');
  }
}
