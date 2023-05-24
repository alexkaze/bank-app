import { assignEl } from '../utils/assignEl';

export abstract class Component<T extends HTMLElement> {
  rootElement: T;

  constructor(selector: string, event?: string, fn?: () => void) {
    this.rootElement = assignEl<T>(selector, event, fn);
  }
}
