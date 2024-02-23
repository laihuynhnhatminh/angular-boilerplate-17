// You can add additional types for storage here
type StorageObjectMap = {
  appSession: {
    token: string;
    user: string; // Change to user Object if needed
  };
};

export type StorageObjectType = 'appSession';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
