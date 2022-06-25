// const MODE_KEY_NAME = 'mode';

import { isRunningOnClientSide } from './helpers';

export const updateLocalStorageValue = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorageValue = (key: string): string | null => {
  return isRunningOnClientSide ? localStorage.getItem(key) : null;
};
