export interface storageInterface {
  set(key: string, value: string): Promise<void>;

  get(key: string): Promise<string|undefined>;

  remove(key: string): Promise<void>;

  addStyle(css: string): Promise<void>;

  injectCssResource(res: string, head): void;
}
