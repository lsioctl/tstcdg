export interface Sortable {
  // the name of arguments is not important
  // we just try to provide context about their purposes
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
  length: number;
};
