class Storage {
  private _provider: globalThis.Storage;

  constructor(provider: globalThis.Storage) {
    this._provider = provider
  }
  get(...args: string[]) {
    const obj: { [key: string]: string | null } = {}
    return args.length > 1
      ? this._arrayFrom(args).map((key) => (obj[key] = this._provider.getItem(key))) && obj
      : this._provider.getItem(args[0])
  }
  set(key: string | { [key: string]: string }, value?: string): void {
    if (typeof key === 'object') {
      Object.keys(key).forEach((name) => this._provider.setItem(name, key[name]));
    } else {
      this._provider.setItem(key, value as string);
    }
  }
  remove(...args: string[]) {
    args.length > 1
      ? this._arrayFrom(args).forEach((key) => this._provider.removeItem(key))
      : this._provider.removeItem(args[0])
  }
  has(key: string): boolean {
    return this._provider.getItem(key) !== null
  }
  private _arrayFrom(args: string[]): string[] {
    return Array.from(args)
  }
}

const storage = new Storage(localStorage)

export default storage
