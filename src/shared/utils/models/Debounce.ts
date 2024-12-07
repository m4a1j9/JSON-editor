export type Debounce = <T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
) => (...args: Parameters<T>) => void;
