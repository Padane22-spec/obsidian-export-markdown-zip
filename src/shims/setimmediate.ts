type ImmediateCallback = (...args: unknown[]) => void;
type ImmediateHandle = number;

type ImmediateGlobal = {
  setImmediate?: (callback: ImmediateCallback, ...args: unknown[]) => ImmediateHandle;
  clearImmediate?: (handle: ImmediateHandle) => void;
};

const immediateGlobal = globalThis as unknown as ImmediateGlobal;

if (!immediateGlobal.setImmediate) {
  let nextHandle = 1;
  const timeouts = new Map<ImmediateHandle, ReturnType<typeof setTimeout>>();

  immediateGlobal.setImmediate = (callback, ...args) => {
    if (typeof callback !== "function") {
      throw new TypeError("setImmediate callback must be a function");
    }

    const handle = nextHandle;
    nextHandle += 1;

    const timeout = setTimeout(() => {
      timeouts.delete(handle);
      callback(...args);
    }, 0);

    timeouts.set(handle, timeout);
    return handle;
  };

  immediateGlobal.clearImmediate = (handle) => {
    const timeout = timeouts.get(handle);
    if (!timeout) {
      return;
    }

    clearTimeout(timeout);
    timeouts.delete(handle);
  };
}
