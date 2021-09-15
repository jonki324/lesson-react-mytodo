export enum role {
  STTAF,
  ADMIN,
}

export type user = {
  id: number;
  loginId: string;
  password: string;
  name: string;
  role: role;
  token: string;
};
