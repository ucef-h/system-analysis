export default class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private tokenExpirationDate: Date,
  ) {}

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    /* eslint no-underscore-dangle: ["error", { "allow": ["_token"] }] */
    return this._token;
  }
}
