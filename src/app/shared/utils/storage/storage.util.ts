import { StorageObjectData, StorageObjectType } from './storage.type';

type StorageOptions = {
  api: 'LocalStorage' | 'SessionStorage';
};

const getStorageApi = (api: StorageOptions['api']): Storage => {
  return api === 'SessionStorage' ? sessionStorage : localStorage;
};

const getItem = <T extends StorageObjectType>(
  item: T,
  options?: StorageOptions
): StorageObjectData<T>['data'] | null => {
  const api = getStorageApi(options?.api || 'LocalStorage');
  const data = api.getItem(item.toString());
  return data ? (JSON.parse(data) as StorageObjectData<T>['data']) : null;
};

const setItem = <T extends StorageObjectType>(
  itemName: T,
  data: StorageObjectData<T>['data'],
  options?: StorageOptions
): void => {
  if (!data) {
    return;
  }

  const api = getStorageApi(options?.api || 'LocalStorage');
  api.setItem(itemName, JSON.stringify(data));
};

const removeItem = <T extends StorageObjectType>(
  itemName: T,
  options?: StorageOptions
): void => {
  const api = getStorageApi(options?.api || 'LocalStorage');
  api.removeItem(itemName);
};

const clearStorage = (options?: StorageOptions): void => {
  const api = getStorageApi(options?.api || 'LocalStorage');
  api.clear();
};

export const storage = {
  getItem,
  setItem,
  removeItem,
  clearStorage,
};
