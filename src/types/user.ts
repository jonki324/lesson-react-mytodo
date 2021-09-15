export enum RoleType {
  STTAF,
  ADMIN,
}

export type UserModel = {
  id: number;
  loginId: string;
  password: string;
  name: string;
  role: RoleType;
  token: string;
};
