export type TodoModel = {
  id: number;
  body: string;
  isCompleted: boolean;
};

export type TodoFilterModel = {
  word: string;
  removeCompleted: boolean;
};
