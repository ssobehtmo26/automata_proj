class AppConfig {
  private _port: string | undefined;

  public setPort(p: string | undefined) {
    this._port = p;
  }
  get port(): string | undefined {
    return this._port;
  }
}

export { AppConfig };
