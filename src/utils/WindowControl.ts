interface IWindow {
  close: () => Promise<void>;
  minimize: () => Promise<void>;
}

export class WindowControl {
  constructor(private window: IWindow) {}

  async close(): ReturnType<IWindow["close"]> {
    return await this.window.close();
  }

  async minimize(): Promise<void> {
    return await this.window.minimize();
  }
}

export class WindowControlMock extends WindowControl {
  constructor(window: IWindow) {
    super(window);
  }

  async close(): ReturnType<IWindow["close"]> {
    console.log("Close");
    return Promise.resolve();
  }
}
