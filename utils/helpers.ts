export const isRunningOnClientSide: Boolean = typeof window !== 'undefined';
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
