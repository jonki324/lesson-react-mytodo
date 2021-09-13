export type todo = {
  id: number;
  body: string;
  isCompleted: boolean;
};

export type todoFilter = {
  word: string;
  removeCompleted: boolean;
};
