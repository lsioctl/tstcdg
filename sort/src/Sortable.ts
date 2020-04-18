export interface Sortable<T> {
  data: T[];
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
  length: number;
};
