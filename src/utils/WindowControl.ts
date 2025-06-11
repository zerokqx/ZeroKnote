interface IsWindow {
  close: () => Promise<void>;
  minimize: () => Promise<void>;
}

export class WindowControl {
  constructor(private window: IsWindow) {}

  async close(): ReturnType<IsWindow['close']> {
    return await this.window.close();
  }

  async minimize(): Promise<void> {
    return await this.window.minimize();
  }
}

export class WindowControlMock extends WindowControl {
  constructor(window: IsWindow) {
    super(window);
  }

  async close(): ReturnType<IsWindow['close']> {
    console.log('Close');
    return Promise.resolve();
  }
}
