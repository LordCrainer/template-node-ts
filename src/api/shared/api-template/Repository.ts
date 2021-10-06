export interface IRead<T> {
  find(item: T | any): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  updateOne(id: string, item: T): Promise<boolean>;
  deleteOne(id: string): Promise<boolean>;
}

export type DefineType<Type> = {
  [key in keyof Type]: Type[key];
};

export interface BaseRepository<T> extends IWrite<T>, IRead<T> {}
